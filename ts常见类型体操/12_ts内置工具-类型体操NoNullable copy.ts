  type personType = number | string | (() => void) | null | undefined
  // 内置工具: 在联合类型中过滤掉null和undefined
  // type pType = NonNullable<personType>

  // 类型体操: 手动实现
  type PZType<T> = T extends null | undefined ? never: T
  type pType = PZType<personType>
  export {}