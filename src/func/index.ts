/**
 * 空函数
 *
 * **示例代码：**
 *
 *     non.call()
 *
 * @see https://www.npmjs.com/package/tank-utils
 */
export function non(...args: any[]) {
  return args
}

/**
 * 函数组合
 *
 * **示例代码：**
 *
 *     compose(fn1, fn2, fn3, fn4) // 从右向左
 *
 * @see https://www.npmjs.com/package/tank-utils
 */
export function compose<T extends Array<(args: any) => any>>(...funcs: T): (args: any) => any {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

/**
 * 链式调用,出错保护,支持lodash字符串模式和回调函数,推荐函数式
 *
 * **示例代码：**
 *
 *     pick(obj, obj => obj.a.b.c.d, null)
 *
 * @see https://www.npmjs.com/package/tank-utils
 */
export function get<T extends { [propName: string]: any }>(target: T, fn: string | { (target: T): any }, defaultValue: any = null): any {
  try {
    if (typeof fn === 'string') {
      return target[fn]
    }
    if (typeof fn === 'function') {
      return fn(target)
    }
    throw TypeError('The second property must be a function or string！')
  } catch (error) {
    console.warn(error.message)
    return defaultValue
  }
}

/**
 * 延时函数, 返回一个promise, 配合async/await使用更佳
 *
 * **示例代码：**
 *
 *     wait(1000)
 *
 * @see https://www.npmjs.com/package/tank-utils
 */
export function wait(time: number = 0) {
  if (typeof time !== 'number') {
    throw TypeError('The first property must be a number!')
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}

/**
 * 函数节流
 *
 * **示例代码：**
 *
 *     throttle(fn)
 *
 * @see https://www.npmjs.com/package/tank-utils
 */
export function throttle<T extends () => any>(fn: T, delay: number = 0): T {
  if (typeof fn !== 'function') {
    throw TypeError('The first property must be a function！')
  }

  if (typeof delay !== 'number') {
    throw TypeError('The second property must be a number')
  }

  let lastTime = 0
  const newFn = () => {
    const nowTime = Date.now()
    if (nowTime - lastTime > delay) {
      fn.call(this)
      lastTime = nowTime
    }
  }
  return newFn as T
}

/**
 * 函数防抖
 *
 * **示例代码：**
 *
 *     debounce(fn)
 *
 * @see https://www.npmjs.com/package/tank-utils
 */
export function debounce<T extends () => any>(fn: T, delay: number = 0): T {
  if (typeof fn !== 'function') {
    throw TypeError('The first property must be a function！')
  }

  if (typeof delay !== 'number') {
    throw TypeError('The second property must be a number')
  }

  let timer: any = null
  const newFn = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this)
    }, delay)
  }

  return newFn as T
}
