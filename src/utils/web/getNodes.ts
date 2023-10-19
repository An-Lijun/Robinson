/**
 * 函数“getNodes”返回与给定选择器匹配的 DOM 节点的 NodeList，如果未找到节点，则返回 null。
 * @param {string} domName - `domName` 参数是一个字符串，表示您要选择的 DOM 元素的名称。
 * @returns NodeList 或 null。
 * @example
 * ```JavaScript
 *    let lis =getNodes('li') === document.querySelectorAll('li')
 * ```
 */
export default function getNodes (domName:string):NodeList|null {
  return document.querySelectorAll(domName);
}