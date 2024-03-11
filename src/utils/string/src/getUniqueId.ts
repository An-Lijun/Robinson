
/**
 * 该函数使用随机字符串模式生成唯一 ID。
 * @returns 函数“getUniqueId”返回格式为“xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx”的唯一标识符字符串。
 * @example
 * ```JavaScript
 * getUniqueId()=> '627ad809-60fc-47b1-be5d-e0ae1ef903ca'
 * ```
*/
export default function getUniqueId ():String {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(32);
  });
}