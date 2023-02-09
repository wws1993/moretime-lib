import _typeof from "../Cmd/typeof"

/** 生成重复数据
 * @param len 重复数据长度
 * @param callback 数据生成回调
 */
export const createRepeatItem = <T>(len: number, creator: T | ((idx: number) => T)): T[] => {
  return new Array(len).fill(null).map((_, idx) => {
    return _typeof(creator, 'function')
      ? (creator as Function)(idx)
      : creator
  })
}
