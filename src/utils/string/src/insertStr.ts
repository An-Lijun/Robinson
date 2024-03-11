
/**
 * 函数“insertStr”接受一个字符串、一个起始索引和一个字符，并返回一个新字符串，其中在指定索引处插入了该字符。
 * @param {string} str - `str` 参数是一个字符串，表示将在其中插入字符的原始字符串。
 * @param {number} start - start 参数是应在字符串中插入字符的索引。
 * @param {string} char - “char”参数是一个字符串，表示要插入到原始字符串中的字符或子字符串。
 * @returns 在指定索引处插入指定字符的新字符串。
 */
export default function insertStr (str:string, start:number, char:string):string {
  return str.slice(0, start) + char + str.slice(start);
}