export default function formatTime (timestamp:string|Date, fmtString:string) {
  // yyyy-MM-dd hh:mm:ss
  let result = fmtString;
  const date = new Date(timestamp);
  const dateObj:any = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (const key in dateObj) {
    const keyRe = new RegExp(key);
    //如果有这个校验规则,
    if (keyRe.test(result)) {
      const value = `${dateObj[key]}`.padStart(2, '0');
      result = result.replace(keyRe, value);
    }
  }
  return result;
}