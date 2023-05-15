
  interface IPerson {
    name: string
    age: number
    id?: string
  }

  // 内置工具: 把对象类型中的所有属性变为可选类型
  // type personType = Partial<IPerson>

  // 类型体操: 手动实现
  type PZPartial<T> = {
    [K in keyof T]?: T[K]
  }
  
  type personType = PZPartial<IPerson>

  export {}