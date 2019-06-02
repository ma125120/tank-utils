
/**
 * @description 毫秒数转字符串
 * @author anthhub
 * @date 2019-06-02
 * @export
 * @param {number} time
 * @returns {string}
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
