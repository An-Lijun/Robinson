interface unitMap {
  [index: string]: number
}

/**
 * @beta
 * @description 获取文件的MIME类型
 * @param suffix 文件扩展名
 * @returns 对应的MIME类型字符串
 * @example
 * getMimeType('jpg'); // 返回 'image/jpeg'
 * getMimeType('docx');
 * //返回'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
 */
/* eslint-disable */
// mozilla MimeType https://developer.mozilla.org/zh-CN/docs/Web/HTTP/MIME_types/Common_types

export function getMimeType(suffix: String) {
  switch (suffix.toLowerCase()) {
    case 'aac':
      return 'audio/aac';
    case 'abw':
      return 'application/x-abiword';
    case 'apng':
      return 'image/apng';
    case 'arc':
      return 'application/x-freearc';
    case 'avif':
      return 'image/avif';
    case 'avi':
      return 'video/x-msvideo';
    case 'azw':
      return 'application/vnd.amazon.ebook';
    case 'bin':
      return 'application/octet-stream';
    case 'bmp':
      return 'image/bmp';
    case 'bz':
      return 'application/x-bzip';
    case 'bz2':
      return 'application/x-bzip2';
    case 'cda':
      return 'application/x-cdf';
    case 'csh':
      return 'application/x-csh';
    case 'css':
      return 'text/css';
    case 'csv':
      return 'text/csv';
    case 'doc':
      return 'application/msword';
    case 'docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    case 'eot':
      return 'application/vnd.ms-fontobject';
    case 'epub':
      return 'application/epub+zip';
    case 'gz':
      return 'application/gzip';
    case 'gif':
      return 'image/gif';
    case 'htm':
    case 'html':
      return 'text/html';
    case 'ico':
      return 'image/x-icon';
    case 'ics':
      return 'text/calendar';
    case 'jar':
      return 'application/java-archive';
    case 'jpeg':
    case 'jpg':
      return 'image/jpeg';
    case 'js':
      return 'text/javascript';
    case 'json':
      return 'application/json';
    case 'jsonld':
      return 'application/ld+json';
    case 'mid':
    case 'midi':
      return 'audio/midi';
    case 'mjs':
      return 'text/javascript';
    case 'mp3':
      return 'audio/mpeg';
    case 'mp4':
      return 'video/mp4';
    case 'mpeg':
      return 'video/mpeg';
    case 'mpkg':
      return 'application/vnd.apple.installer+xml';
    case 'odp':
      return 'application/vnd.oasis.opendocument.presentation';
    case 'ods':
      return 'application/vnd.oasis.opendocument.spreadsheet';
    case 'odt':
      return 'application/vnd.oasis.opendocument.text';
    case 'oga':
      return 'audio/ogg';
    case 'ogv':
      return 'video/ogg';
    case 'ogx':
      return 'application/ogg';
    case 'opus':
      return 'audio/opus';
    case 'otf':
      return 'font/otf';
    case 'png':
      return 'image/png';
    case 'php':
      return 'application/x-httpd-php';
    case 'pdf':
      return 'application/pdf';
    case 'ppt':
      return 'application/vnd.ms-powerpoint';
    case 'pptx':
      return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
    case 'rar':
      return 'application/vnd.rar';
    case 'rtf':
      return 'application/rtf';
    case 'sh':
      return 'application/x-sh';
    case 'svg':
      return 'image/svg+xml';
    case 'swf':
      return 'application/x-shockwave-flash';
    case 'tar':
      return 'application/x-tar';
    case 'tif':
    case 'tiff':
      return 'image/tiff';
    case 'ts':
      return 'video/mp2t';
    case 'ttf':
      return 'application/x-font-ttf';
    case 'txt':
      return 'text/plain';
    case 'vsd':
      return 'application/vnd.visio';
    case 'wav':
      return 'audio/wav';
    case 'weba':
      return 'audio/webm';
    case 'webm':
      return 'video/webm';
    case 'webp':
      return 'image/webp';
    case 'woff':
      return 'font/woff';
    case 'woff2':
      return 'font/woff2';
    case 'xhtml':
      return 'application/xhtml+xml';
    case 'xls':
      return 'application/vnd.ms-excel';
    case 'xlsx':
      return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    case 'xml':
      return 'application/xml';
    case 'xul':
      return 'application/vnd.mozilla.xul+xml';
    case 'zip':
      return 'application/zip';
    case '3gp':
      return 'video/3gpp';
    case '3g2':
      return 'video/32';
    case '7z':
      return 'application/x-7z-compressed';
    default: return '';
  }
}
/* eslint-enable */

// -----------------------  转换方法  -----------------------

/**
 * @beta
 * @description 将Blob对象转换为Base64编码的字符串
 * @param blob Blob对象
 * @param suffix 文件后缀，默认为'png'
 * @returns Promise对象，解析为Base64编码的字符串
 * @example
 * blobToBase64(new Blob(['Hello, world!'], { type: 'text/plain' }))
 * .then(base64 => console.log(base64));
 */
export function blobToBase64 (blob: BlobPart, suffix = 'png') {
  return new Promise((resolve, reject) => {
    try {
      const newBlob = new Blob([blob], { type: getMimeType(suffix) });
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
 * @beta
 * @description 将Base64编码的字符串转换为Blob对象
 * @param base64 Base64编码的字符串
 * @returns Blob对象
 * @example
 * const blob = base64ToBlob('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...');
 */
export function base64ToBlob (base64: string): Blob {
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
 * @beta
 * @description 将图片URL转换为Base64编码的字符串
 * @param url 图片URL
 * @param suffix 文件后缀，默认为'image/png'
 * @returns Promise对象，解析为Base64编码的字符串
 * @example
 * urlToBase64('https://example.com/image.png').then(base64 => console.log(base64));
 */
export function urlToBase64 (url: string, suffix = 'png'): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas: HTMLCanvasElement | null = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = '';
    img.onload = () => {
      canvas!.height = img.height;
      canvas!.width = img.width;
      ctx?.drawImage(img, 0, 0);
      const dataURL = canvas!.toDataURL(getMimeType(suffix));
      canvas = null;
      resolve(dataURL);
    };
    img.onerror = (err) => {
      reject(err);
    };
    img.src = url;
  });
}

// -----------------------  下载方法  -----------------------

/**
 * @beta
 * @description 通过URL下载图片到本地
 * @param url 图片路径
 * @param filename 下载后的文件名
 * @param type 下载后的文件类型
 * @example
 * downloadByUrl('https://example.com/image.png', 'example.png');
 */
export function downloadByUrl (url: string, filename?: string, type?: string) {
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
    const timer = setTimeout(() => {
      iframe.remove();
      clearTimeout(timer);
    }, 1000);
    return;
  }
  linkEl.dispatchEvent(event);
}

/**
 * @beta
 * @description 通过Blob对象下载文件
 * @param blob Blob文件流
 * @param fileNm 下载后的文件名
 * @param suffix 下载后的文件类型，默认为'txt'
 * @example
 * downloadByBlob(new Blob(['Hello, world!'], { type: 'text/plain' }), 'example.txt');
 */
export function downloadByBlob (blob: BlobPart, fileNm: string, suffix = 'txt') {
  const newBlob = new Blob([blob], { type: getMimeType(suffix) });

  const blobURL = window.URL.createObjectURL(newBlob);
  const linkEl = document.createElement('a');
  linkEl.href = blobURL;
  linkEl.setAttribute('download', `${fileNm}`);

  if (typeof linkEl.download === 'undefined') {
    linkEl.setAttribute('target', '_blank');
  }
  linkEl.click();
}

/**
 * @beta
 * @description 通过Base64编码的字符串下载文件
 * @param buf Base64编码的字符串
 * @param fileNm 下载后的文件名
 * @param suffix 下载后的文件后缀
 * @example
 * downloadByBase64('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...', 'example.png', 'png');
 */
export function downloadByBase64 (buf: string, fileNm: string, suffix: string) {
  const blobBuf = base64ToBlob(buf);
  downloadByBlob(blobBuf, fileNm, suffix);
}

// -----------------------  打印方法  -----------------------

/**
 * @beta
 * @description 通过DOM元素打印内容
 * @param el 要打印的DOM元素
 * @param custStyle 自定义CSS样式
 * @example
 * printByDom(document.getElementById('print-content'), 'body { font-size: 12px; }');
 */
export function printByDom (el: HTMLElement, custStyle = '') {
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
      border-collapse:collapse;
    }
    table td,table th{
      border:1px solid;
      padding:4px;
    }
    ${custStyle}
  `;
  iframeDoc.head.appendChild(style);

  (iframeDoc.body as HTMLBodyElement).onafterprint = () => {
    (iframeDoc.body as HTMLBodyElement).onafterprint = null;
    document.body.removeChild(iframe);
  };
  setTimeout(() => {
    iframe.contentWindow!.print();
  });
}

/**
 * @beta
 * @description 通过Blob对象打印内容
 * @param blob Blob对象
 * @param type MIME类型，默认为'application/pdf'
 * @example
 * printByBlob(new Blob(['Hello, world!'], { type: 'text/plain' }));
 */
export function printByBlob (blob: Blob, type = 'application/pdf') {
  let newBlob = new Blob([blob], { type });

  const url = URL.createObjectURL(newBlob);
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.width = '100%';
  iframe.style.display = 'none';

  const iframeDoc = iframe.contentWindow!.document;
  document.body.appendChild(iframe);

  (iframeDoc.body as HTMLBodyElement).onafterprint = () => {
    (iframeDoc.body as HTMLBodyElement).onafterprint = null;
    document.body.removeChild(iframe);
  };
  setTimeout(() => {
    iframe.contentWindow!.print();
  });
}

// -----------------------  其他方法  -----------------------

/**
 * @beta
 * @description 压缩图片文件
 * @param file 源文件
 * @param size 指定压缩大小（单位：MB）
 * @returns Promise对象，解析为压缩后的Base64编码字符串
 * @example
 * imgCompression(fileInput.files[0], 0.5).then(compressedBase64 => console.log(compressedBase64));
 */
export function imgCompression (file: File, size: number) {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  return new Promise((resolve) => {
    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target?.result as string;
      image.onload = () => {
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
        ctx?.drawImage(image, 0, 0, width, height);
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
 * @beta
 * @description 获取文件大小
 * @param file 源文件
 * @param unit 单位（'b', 'kb', 'm', 'g'），默认为'b'
 * @returns 文件大小（指定单位）
 * @example
 * getFileSize(fileInput.files[0], 'kb'); // 返回文件大小（KB）
 */
export function getFileSize (file: File, unit: string = 'b') {
  const unitMap: unitMap = { 'b': 0,
    'kb': 1,
    'm': 2,
    'g': 3 };
  let square = unitMap[unit.toLowerCase()];

  let data = 1024 ** square;

  return file.size / data;
}

/**
 * @beta
 * @description 获取文件后缀名
 * @param file 源文件
 * @returns 文件后缀名
 * @example
 * getFileType(fileInput.files[0]); // 返回文件后缀名（如 'jpg'）
 */
export function getFileType (file: File) {
  return file.name.split('.').pop();
}

/**
 * @beta
 * @description 生成文件切片数组
 * @param file 文件对象
 * @param chunkSize 每个切片的大小（字节），默认为1MB
 * @returns 切片数组，每个元素包含索引和Blob对象
 * @example
 * getFileChunk(fileInput.files[0], 1024 * 1024).forEach(chunk => console.log(chunk));
 */
// eslint-disable-next-line
export function getFileChunk (file: File, chunkSize = 1024 * 1024): Array<{ index: number, file: Blob }> {
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
// eslint-disable-next-line
// export function createHashByWorker (chunks:Array<{ index: Number, file: Blob }>):Promise<string> {
//   return new Promise((reslove)=>{
//     const worker = new Worker(new URL('./worker/hash.worker.js', import.meta.url));

//     worker.postMessage({ chunks });

//     worker.onmessage = (e) => {
//       const { hash } = e.data;
//       hash && reslove(hash);
//     };

//   });
// }

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