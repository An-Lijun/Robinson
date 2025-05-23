---
url: /etc\doc/robinson.createcache.md
---
[Home](./index.md) > [robinson](./robinson.md) > [createCache](./robinson.createcache.md)

## createCache() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

createCache 函数创建一个缓存对象，该对象可以使用指定的存储机制和编码/解码函数来存储和检索数据。

**Signature:**

```typescript
createCache: (storage: any, parmas?: ParamsInter) => {
    "__#9309@#storage": any;
    "__#9309@#encode": Function;
    "__#9309@#decode": Function;
    setCache(key: string, value: any, expire: number): void;
    getCache(encodeKey: string): any;
    removeCache(key: string): void;
    has(key: string): boolean;
    length(): any;
    clear(): void;
}
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  storage | any | storage 参数是一个可选参数，它指定用于缓存的存储机制。它可以是实现与 localStorage 对象相同接口的任何对象，例如 sessionStorage 或自定义存储实现。如果没有提供存储对象，则localStorage |
|  parmas | ParamsInter | *(Optional)* “parmas”参数是一个包含两个属性的对象：“encode”和“decode”。这些属性是用于在将值存储到缓存之前对值进行编码和解码的函数。 这些函数的默认值是恒等函数，这意味着它们不执行任何编码或解码。 |

**Returns:**

{ "\_\_#9309@#storage": any; "\_\_#9309@#encode": Function; "\_\_#9309@#decode": Function; setCache(key: string, value: any, expire: number): void; getCache(encodeKey: string): any; removeCache(key: string): void; has(key: string): boolean; length(): any; clear(): void; }

函数“createCache”返回“Cache”类的实例。 setCache(key:String,value:Any,expire:超时时间) 设置单个缓存 return undefined getCache(key:String) 根据传入key获取单个缓存 return undefined removeCache(key:String)根据传入KEY删除单个缓存 return undefined has(key:String) 根据传入key 判断是否已经有这个数据了 return Boolean length(), return 缓存总条数 clear() 清空缓存
