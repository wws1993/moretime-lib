/** 日期格式化
 * @param date 日期
 * @param fmt 日期字符串模板
 * @returns 时间字符串
 */
export const format = (date: AllowDateType = Date.now(), fmt: string = 'yyyy/MM/dd hh:mm:ss') => {
  date = new Date(date)
  if (String(date) === 'Invalid Date') return 'Invalid Date'

  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds(), // 毫秒
  };

  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length)); }
  for (const k in o) {
    const _ = k as 'S'
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        String(RegExp.$1.length === 1 ? o[_] : ('00' + o[_]).substr(String(o[_]).length))
      ); }
  }

  return fmt;
}
