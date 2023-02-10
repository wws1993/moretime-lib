/** 获取月初时间
 * @param t 时间
 * @returns {Date}
 */
export const getMonthStart = (t: AllowDateType = Date.now()): Date => {
  t = new Date(t)

  if (String(t) === 'Invalid Date') {
    console.log(`%c[@mt:Error]::time format error`, 'color:#f00c', t);
    throw Error(`[@mt:Error]::time format error`)
  }

  return new Date(t.getFullYear(), t.getMonth(), 1)
}
