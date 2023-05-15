  class Person {

  }

  class Student {
    
  }

  const p: Person = new Person()
  // typeof Person: 获取构造函数具体的类型
  // InstanceType 构造函数创建出来的实例对象的类型
  type instanceType = InstanceType<typeof Person>
  const p2: instanceType = new Person
 
  // // 类型体操: 这里的infer是获取构造函数的返回值类也就是构造函数创建出来的实例对象的类型
  type PZinstanceType<T extends new (...args: any) => any> = T extends new (...args: any[]) => infer R? R: never


  // 应用场景
  // 创建实例的工具函数
  function foo<T extends new (...args: any) => any>(para: T): PZinstanceType<typeof para> {
    return new para()
  }
  const res = foo(Person)
  const stu = foo(Student)
  
  export {}