import isArray from './isArray';

/**
 * `chunkArray` 函数接受一个数组和一个大小参数，并返回一个新数组，其中原始数组被分割成指定大小的较小数组。
 * @param array - `array` 参数是任何类型的数组。它是需要被分成更小的数组的数组。
 * @param {number} [size=1] - “size”参数指定数组每个块中应包含的元素数量。默认情况下，它设置为 1，这意味着每个元素将位于其自己的单独块中。
 * @returns 数组的数组。每个内部数组都包含原始数组中的一块元素。每个块的大小由“size”参数确定。
 * @example
 * ```JavaScript
 * let a=[1,2,3,4,5,6]   getChunkArray(a,2) => [[1,2],[3,4],[5,6]]
 * let a=[1,2,3,4,5,6]   getChunkArray(a,3) => [[1,2,3],[4,5,6]]
 * let a={}   getChunkArray(a,3) => params is not a array
 * ```
 */
export default function getChunkArray (array:Array<any>, size:number = 1):Array<Array<any>> {
  if (!isArray(array)) {throw new TypeError('params is not a array');}
  let newArr:Array<any> = [];
  array.forEach((element, index) => {
    if (index % size === 0) {
      return newArr.push([element]);
    }
    return newArr.at(-1).push(element);
  });
  return newArr;
}