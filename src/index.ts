import * as date from './date/index'

import * as func from './func/index'

const tank = { ...date, ...func }

export const get = func.get
export const wait = func.wait
export const debounce = func.debounce
export const throttle = func.throttle
export const timeToLocalStr = date.timeToLocalStr

export default tank
