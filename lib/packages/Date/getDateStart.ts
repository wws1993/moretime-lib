import { format } from "./format";

/** 获取时间当天0点0分0秒
 * @param t 时间
 * @returns {Date}
 */
export const getDateStart = (t: AllowDateType = Date.now()): Date => {
  t = new Date(t)

  if (String(t) === 'Invalid Date') {
    console.log(`%c[@mt:Error]::time format error`, 'color:#f00c', t);
    throw Error(`[@mt:Error]::time format error`)
  }

  return new Date(t.getFullYear(), t.getMonth(), t.getDate())
}
