
  interface IPerson {
    name: string
    age: number
    id?: string
  }
  // 内置工具: 从对象类型中取出key类型作为新对象的key类型
  // type personType = Pick<IPerson, "name" | "age">

  // 类型体操: 手动实现
  type PZPartial<T, K extends keyof T> = {
    [P in K]: T[P]
  }
  
  type personType = PZPartial<IPerson, "name" | "age">

  export {}