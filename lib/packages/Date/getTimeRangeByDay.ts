import { format } from "./format"
import { getDateEnd } from "./getDateEnd"
import { getDateStart } from "./getDateStart"

/** 以当前时间为参考点，获取时间跨度
 * @param range 跨度值
 * @param fmt 时间模板，参考date.format；支持timestamp
 */
export const getTimeRangeByDay = (range: number = -31, fmt: string = 'timestamp') => {
  const current = new Date()
  const calcDate = new Date(current.getTime() + 86400000 * range)

  const min = range < 0 ? calcDate : current
  const max = range < 0 ? current : calcDate

  const formatTime = (date: Date) => fmt === 'timestamp' ? date.getTime() : format(date, fmt)
  return [formatTime(getDateStart(min)), formatTime(getDateEnd(max))]
}
