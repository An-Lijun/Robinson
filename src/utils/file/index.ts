interface unitMap{
  [index:string]:number
}
interface IChunk{index: Number, file:Blob}
// -----------------------  转换方法  -----------------------

/**
 *
 * @param blob 流
 * @param mime mime类型
 * @returns
 */
export function blobToBase64 (blob:BlobPart, mime = 'png') {
  return new Promise((resolve, reject)=>{
    try {
      const newBlob = new Blob([blob], { type: mime });
      const reader = new FileReader();
      reader.onload = function () {
        const dataURL = reader.result as string;
        const base64 = dataURL.split(',')[1];
        resolve(base64);
      };
      reader.readAsDataURL(newBlob);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * base64 转blob
 * @param {*} base64
 * @returns {Blob}
 */
export function base64ToBlob (base64:string):Blob {
  const [typeItem, base] = base64.split(',');
  const mime = typeItem.match(/:(.*?);/)![1];
  const bstr = window.atob(base);
  let len = bstr.length;
  const u8arr = new Uint8Array(len);
  while (len--) {
    u8arr[len] = bstr.charCodeAt(len);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * img url 转为base64
 * @param {*} url
 * @param {*} mime
 * @returns
 */
export function urlToBase64 (url:string, mime = 'image/png'):Promise<string> {
  return new Promise((resolve, reject)=>{
    let canvas:HTMLCanvasElement|null = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = '';
    img.onload = ()=> {
      canvas!.height = img.height;
      canvas!.width = img.width;
      ctx?.drawImage(img, 0, 0);
      const dataURL = canvas!.toDataURL(mime);
      canvas = null;
      resolve(dataURL);
    };
    img.onerror = (err)=>{
      reject(err);
    };
  });
}

// -----------------------  下载方法  -----------------------

/**
 * 下载图片到本地
 * @param url  图片路径
 * @param filename 下载后的文件名
 * @param type 下载后的文件类型
 * @returns
 */
export function downloadByUrl (url:string, filename?:string, type?:string) {
  const linkEl = document.createElement('a');
  const event = new MouseEvent('click');
  linkEl.href = url;
  linkEl.target = '_blank';
  linkEl.download = filename || (new Date().getTime() as number).toString(16);

  if (type === 'csv') {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.style.height = '0';
    iframe.src = url;
    document.body.appendChild(iframe);
    const timer = setTimeout(()=>{
      iframe.remove();
      clearTimeout(timer);
    }, 1000);
    return;
  }
  linkEl.dispatchEvent(event);
}

/**
 * blob流下载文件
 * @param blob blob文件流
 * @param fileNm 下载后的文件名
 * @param mime 下载后的文件类型
 */
export function downloadByBlob (blob:BlobPart, fileNm:string, mime = 'application/octet-stream') {

  const newBlob = new Blob([blob], { type: mime });

  const blobURL = window.URL.createObjectURL(newBlob);
  const linkEl = document.createElement('a');
  linkEl.href = blobURL;
  linkEl.setAttribute('download', `${fileNm}.${mime}`);

  if (typeof linkEl.download === 'undefined') {
    linkEl.setAttribute('target', '_blank');
  }
  linkEl.click();
}

/**
 * base64 下载文件
 * @param buf  base64
 * @param fileNm  下载后的文件名
 * @param mime 下载后的文件类型
 */
export function downloadByBase64 (buf:string, fileNm:string, mime:string) {
  const blobBuf = base64ToBlob(buf);
  downloadByBlob(blobBuf, fileNm, mime);
}

// -----------------------  打印方法  -----------------------
/**
 * @author Yutian改(加了移除iframe)
 * @param {*} el
 * @param {*} custStyle
 */
export function printByDom (el:HTMLElement, custStyle = '') {

  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.zIndex = '-99';
  document.body.appendChild(iframe);
  const iframeDoc = iframe.contentWindow!.document;
  const node = el.cloneNode(true);

  iframeDoc.body.appendChild(node);
  const style = document.createElement('style');
  style.media = 'print';
  style.innerText = `
    @page{
      size:auto;
      margin:0mm;
    }
    table{
      width:100%;
      border:1px solid;
      border-collpase:collapse;
    }
    table td,table th{
      border:1px solid;
      padding:4px;
    }
    ${custStyle}
  `;
  iframeDoc.head.appendChild(style);

  (iframeDoc.body as HTMLBodyElement).onafterprint = ()=>{
    (iframeDoc.body as HTMLBodyElement).onafterprint = null;
    document.body.removeChild(iframe);
  };
  setTimeout(() => {
    iframe.contentWindow!.print();
  });
}

/**
 * @author Yutian
 * @param {*} blob
 * @param {*} type
 */
export function printByBlob (blob:Blob, type = 'appliaction/pdf') {

  let newBlob = new Blob([blob], { type });

  const url = URL.createObjectURL(newBlob);
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.width = '100%';
  iframe.style.display = 'none';

  const iframeDoc = iframe.contentWindow!.document;
  document.body.appendChild(iframe);

  (iframeDoc.body as HTMLBodyElement).onafterprint = ()=>{
    (iframeDoc.body as HTMLBodyElement).onafterprint = null;
    document.body.removeChild(iframe);
  };
  setTimeout(()=>{
    iframe.contentWindow!.print();
  });
}

// -----------------------  其他方法  -----------------------

// 压缩图片
export function imgCompression (file:File, size:number) {
  const reader = new FileReader();
  reader.readAsDataUrl(file);

  return new Promise((resolve)=>{
    reader.onload = (e) =>{
      const image = new Image();
      image.src = e.target.result;
      image.onload = ()=>{
        let quality = 1;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let width = image.width;
        let height = image.height;
        const scale = width / height;
        width = 500;
        height = width / scale;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(image, 0, 0, width, height);
        let dataURL = canvas.toDataURL(file.type, quality);
        while (dataURL.length / 1024 / 1024 > size) {
          quality -= 0.1;
          dataURL = canvas.toDataURL(file.type, quality);
        }
        resolve(dataURL);
      };
    };
  });
}

/**
 * 获取文件大小
 * @param {File} file 源文件
 * @param {unit} 单位
 * @returns {number} 文件大小
 */
export function getFileSize (file:File, unit:string = 'b') {
  const unitMap:unitMap = { 'b': 0,
    'kb': 1,
    'm': 2,
    'g': 3 };
  let square = unitMap[unit.toLowerCase()];

  let data = 1024 ** square;

  return file.size / data;
}

/**
 *
 * @param {File} file 源文件
 * @returns 文件后缀
 */
export function getFileType (file:File) {
  return file.name.split('.').pop();
}

/**
 * 生成切片数组
 * @param {*} file
 * @param {*} chunkSize
 * @returns { Array<IChunk>}
 */
export function getFileChunk (file:File, chunkSize = 1024 * 1024):Array<IChunk> {
  const chunks = [];
  let cur = 0;
  const fileSize = file.size;
  while (cur < fileSize) {
    chunks.push({ index: cur,
      file: file.slice(cur, cur + chunkSize) });
    cur += chunkSize;
  }
  return chunks;
}
/**
 * 生成hash值
 * @param chunks 切片数据
 */

export function createHashByWorker (chunks:Array<IChunk>):Promise<string> {
  return new Promise((reslove)=>{
    const worker = new Worker(new URL('./worker/hash.worker.js', import.meta.url));

    worker.postMessage({ chunks });

    worker.onmessage = (e) => {
      const { hash } = e.data;
      hash && reslove(hash);
    };

  });
}

/**
 * 上传文件
 * 1. 根据文件进行切片
 * const fileArr = await getFileChunk(file)
 *
 * 2. 根据切片数组生成md5标识
 * const fileMd5 = await createHashByWorker(fileArr)
 *
 * 3.上传文件
 *
 * try{
 *   await Promise.all(
 *    fileArr.map((reqFile)=>{
 *      return 接口({
 *        uploadFile:reqFile.file,
 *        fileMD5: fileMd5,
 *        chunk: reqFile.index
 *      })
 *    })
 *   )
 *
 *    const uploadeRes = await fileUpLoadMerge({
 *        fileNm:XXX
 *        fileMD5:fileMd5
 *    })
 *
 * }
 *
 * 注意这里文件上传分成了两个接口,一个是上传切片一个是合并切片
 * 我觉得也可以弄成一个,在最后一片打上一个type标识 标志是否是最后一片
 *
 *
 */