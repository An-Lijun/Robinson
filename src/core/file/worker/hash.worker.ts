const _self:any = self;
_self.importScripts('../../script/spark-md5.min.js');
// 这里加密的md5.min.js我就不加进来了 百度搜一个就是
type Recordable<T=any> = Record<string, T>
_self.onmessage = (evt:Recordable)=>{
  const { chunks } = evt.data;
  const spark = new _self.SparkMD5.ArrayBuffer();
  let count = 0;
  const loadNext = (index:number)=>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(chunks[index].file);
    reader.onload = (e)=>{
      count++;
      spark.append(e.target?.result);
      if (count === chunks.length) {
        _self.postMessage({ hash: spark.end() || '' });
      } else {
        loadNext(count);
      }
    };
  };
  loadNext(0);
};