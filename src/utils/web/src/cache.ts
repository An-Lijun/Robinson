import { isUndefined } from '../../../index';

interface ParamsInter{
  encode:Function,
  decode:Function,
}

/**
 * createCache 函数创建一个缓存对象，该对象可以使用指定的存储机制和编码/解码函数来存储和检索数据。
 * @param {any} storage - `storage` 参数是一个可选参数，它指定用于缓存的存储机制。它可以是实现与 localStorage 对象相同接口的任何对象，例如
 * sessionStorage 或自定义存储实现。如果没有提供存储对象，则`localStorage`
 * @param {ParamsInter} parmas -
 * “parmas”参数是一个包含两个属性的对象：“encode”和“decode”。这些属性是用于在将值存储到缓存之前对值进行编码和解码的函数。
 * 这些函数的默认值是恒等函数，这意味着它们不执行任何编码或解码。
 * @returns 函数“createCache”返回“Cache”类的实例。
 *  setCache(key:String,value:Any,expire:超时时间) 设置单个缓存 return undefined
 *  getCache(key:String) 根据传入key获取单个缓存 return undefined
 *  removeCache(key:String)根据传入KEY删除单个缓存 return undefined
 *  has(key:String) 根据传入key 判断是否已经有这个数据了 return Boolean
 *  length(), return 缓存总条数
 *  clear() 清空缓存
 */
const createCache = (storage:any,
  parmas:ParamsInter = { encode: (value:any) => value,
    decode: (value:any) => value }) => {
  const { encode, decode } = parmas;
  class Cache {
    // private #storage
    #storage;

    #encode;

    #decode;

    constructor () {
      this.#storage = storage || localStorage;
      this.#encode = encode;
      this.#decode = decode;
    }

    /**
     * @param {String} 存储key
     * @param {Any} 存储值
     * @param {Number} 过期时间(ms)
     */
    setCache (key:string, value:any, expire:number) {
      if (isUndefined(value)) {
        throw new Error('The value cannot be undefined !');
      }
      //将值和超时合并成一个对象
      let data = JSON.stringify({ value,
        expire });
      //加密并存储
      this.#storage.setItem(this.#encode(key), this.#encode(data));
    }

    /**
     * @param {String} 获取值key
     * @returns {Any|undefined}
     */
    getCache (encodeKey:string) {
      //加密key
      const key = this.#encode(encodeKey);
      //获取加密数据
      let encodeData = this.#storage.getItem(key);
      //如果没有return undefined
      if (!encodeData) {
        return void 0;
      }
      //将数据解密
      let data = JSON.parse(this.#decode(encodeData));
      //判断是否失效,失效就删除并且返回undefined
      if (data.expire && new Date().getTime() > data.expire) {
        this.removeCache(encodeKey);
        return void 0;
      }
      //返回真实数据
      return data.value;
    }

    /**
     * @param {String} 删除key
     */
    removeCache (key:string) {
      this.#storage.removeItem(this.#encode(key));
    }

    /**
     * @param {String} 是否含有key
     * @returns
     */
    has (key:string) {
      return Object.keys(this.#storage).some(item => item === this.#encode(key));
    }

    /**
 * 该函数返回存储数组的长度。
 * @returns 返回“this.#storage”数组的长度。
 */
    length () {
      return this.#storage.length;
    }

    /**
   * “清除”功能清除存储。
   */
    clear () {
      this.#storage.clear();
    }
  }
  return new Cache();
};

export default createCache;
