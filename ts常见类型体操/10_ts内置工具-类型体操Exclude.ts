  type personType = number | string | (() => void)
  // 内置工具: 在联合类型中过滤掉指定类型
  // type pType = Exclude<personType, number | string>

  // // 类型体操: 手动实现
  type PZType<T, K> = T extends K? never: T
  type pType = PZType<personType, number | string>
  export {}