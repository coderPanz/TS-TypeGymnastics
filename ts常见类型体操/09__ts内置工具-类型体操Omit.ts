
  interface IPerson {
    name: string
    age: number
    id?: string
  }
  // 内置工具: 从对象类型中过滤掉指定的key
  // type personType = Omit<IPerson, "name" | "age">

  // // 类型体操: 手动实现
  type PZPartial<T, K extends keyof T> = {
    // 在对象类型中全部遍历一遍key后, 直接断言。断言为若P为传入K的时候直接过滤, 取到过滤后的key
    [P in keyof T as P extends K? never: P]: T[P]
  }
  
  type personType = PZPartial<IPerson, "name" | "age">

  export {}