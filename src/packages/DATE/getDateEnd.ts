/** 获取时间当天23点59分59秒
 * @param time 时间
 * @returns {Date}
 */
export const getDateEnd = (t: AllowDateType = Date.now()): Date => {
  t = new Date(t)
  
  if (String(t) === 'Invalid Date') {
    console.log(`%c[@mt:Error]::time format error`, 'color:#f00c', t);
    throw Error(`[@mt:Error]::time format error`)
  }

  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 23, 59, 59)
}
