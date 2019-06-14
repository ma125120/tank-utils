
/**
 * 
 *
 * **示例代码：**
 *
 *     timeToLocalStr(1560480964000)
 *
 * @see https://www.npmjs.com/package/tank-utils
 */
export function timeToLocalStr(time: number): string {
  if (typeof time !== 'number') {
    throw TypeError('The first property must be a number')
  }
  let localTime = ''
  time = new Date(time).getTime()
  const offset = new Date().getTimezoneOffset()
  localTime = new Date(time - offset * 60000).toISOString()
  localTime = localTime.substr(0, localTime.lastIndexOf('.'))
  localTime = localTime.replace('T', ' ')
  return localTime
}
