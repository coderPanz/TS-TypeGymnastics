  type personType = number | string | (() => void)
  // 内置工具: 在联合类型中提取指定类型
  // type pType = Extract<personType, number | string>

  // // 类型体操: 手动实现
  type PZType<T, K> = T extends K? K: never
  type pType = PZType<personType, number | string>
  export {}