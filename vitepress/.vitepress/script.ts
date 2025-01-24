import { basename } from 'path'
import info from '../temp/info.json'
import fg from 'fast-glob'

type TbaseDocs = {
  [key: string]: {
    text: string;
    items: any[];
    collapsed: boolean;
  };
}
type Titem = {
  functionNm: string,
  folderNm: string
}

/**
 * 获取文档树结构
 * 
 * @param docsPath - 文档路径
 * @param filePath - 文件路径
 * @returns 返回文档树结构数组
 * 
 * 该函数首先根据 info 对象创建基础文档结构，然后遍历 md 文档列表，
 * 将其转换为树结构。最后返回按文件夹分组的文档树数组。
 */
export default function getDocs(docsPath: string, filePath: string) {
  /**
   * 根据info对象生成一个经过处理的基础文档对象
   * 此函数通过遍历info对象的值，构建一个新的对象baseDocs
   * 在新对象中，每个键是info中item的folderNm（转为小写），值是包含text、collapsed和items属性的对象
   * 此函数的主要作用是组织info中的数据，以便于后续处理或展示
   * 
   * @param info 一个对象，其属性是需要处理的信息项
   * @returns 返回一个TbaseDocs类型的基础文档对象，其中每个键是folderNm（小写），值是相关信息的结构化表示
   */
  const baseDocs = Object.values(info).reduce((obj: TbaseDocs, item: Titem): TbaseDocs => {
    obj[item.folderNm.toLowerCase()] = {
      text: item.functionNm,
      collapsed: true,
      items: []
    }
    return obj
  }, {})

  /**
   * 递归生成文档树结构
   * @param file 文件名，用于提取当前处理的文档路径
   * @param prefix 前缀，用于拼接文档路径
   */
  function getTree(file: string, prefix: string) {
    // 分割文件名，获取当前处理的路径和剩余路径
    const [cur, ...rest] = file.replace('.md', '').split('.')
    // 拼接当前路径与前缀，形成完整的路径
    const curPath = prefix + cur
    // 获取当前路径对应的文档信息
    const infoCur = info[cur]
    // 如果文档信息存在，将其添加到对应的文档夹中
    if (infoCur) {
      baseDocs[infoCur.folderNm].items.push({
        text: infoCur.functionNm,
        link: filePath + curPath + '.md',
      })
    }
    // 如果还有剩余路径，递归调用自身处理剩余路径
    if (rest.length > 0) {
      getTree(rest.join('.'), curPath + '.')
    }
  }

  // 同步获取文档路径下的所有文件，并处理这些文件生成一个树形结构
  fg.sync([docsPath])
    // 将每个文件路径转换为文件名
    .map((path) => basename(path))
    // 使用reduce函数遍历每个文件名，构建树形结构
    .reduce((tree, file) => {
      // 调用getTree函数，根据文件名和空字符串参数获取树形结构并更新累积的树形结构对象
      getTree(file, '')
      // 返回累积的树形结构对象，作为下一次迭代的基础
      return tree
    }, {})

  return Object.keys(baseDocs).map(item => baseDocs[item])
}
