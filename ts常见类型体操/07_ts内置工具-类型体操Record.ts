
  interface IPerson {
    name: string
    age: number
    id?: string
  }
  type recoreType = "JD" | "Baidu"
  // 内置工具: 传入两个类型参数, 参数一中的类型作为对象中key的类型, 参数二作为对象中value的类型 
  // type personType = Record<recoreType, IPerson>

  // 类型体操: 手动实现
  // 获取KEYS对应的联合类型
  type resType = keyof any
  type PZPartial<KEYS extends resType  , V> = {
    // 这里的KEYS是string | number | symbol的联合类型, 遍历联合类型作为key
    [K in KEYS]: V 
  }
  
  type personType = PZPartial<recoreType, IPerson>

  export {}