/**
 * @description 链式调用,出错保护
 * @author anthhub
 * @date 2019-05-25
 * @export
 * @template T
 * @param {T} target
 * @param {(target: T) => any} fn
 * @param {*} [defaultValue=null]
 * @returns {*}
 */
export function get<T>(target: T, fn: (target: T) => any, defaultValue: any = null): any {
  const caller = target
  if (typeof fn !== 'function') {
    throw TypeError('The second property must be a function！')
  }
  try {
    return fn(caller)
  } catch (error) {
    console.warn('=============tank-utils=============')
    console.warn(`In the function from properties :`, fn.toString())
    console.warn(error.message)
    console.warn('====================================')
    return defaultValue
  }
}

/** 延时函数, 返回一个promise, 配合async/await使用更佳
 * @description
 * @author anthhub
 * @date 2019-05-26
 * @param {number} [time=0]
 * @returns
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
 * @description 函数节流
 * @author anthhub
 * @date 2019-05-26
 * @template T
 * @param {T} fn
 * @param {number} delay
 * @returns {T}
 */
export function throttle<T extends () => any>(fn: T, delay: number): T {
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
 * @description 函数防抖
 * @author anthhub
 * @date 2019-05-26
 * @template T
 * @param {T} fn
 * @param {number} delay
 * @returns {T}
 */
export function debounce<T extends () => any>(fn: T, delay: number): T {
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
