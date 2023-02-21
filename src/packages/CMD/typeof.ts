export type CmdType = 'number'
  | 'string'
  | 'boolean'
  | 'array'
  | 'object'
  | 'function'
  | 'undefined'
  | 'null'
  | 'date'
  | 'blob'
  | 'set'
  | 'map'
;

/**
 * 类型判断
 * @param payload 判断的值
 * @param type 判断的类型 支持function\date\blob等判断
 */
export default (payload: any, type: CmdType): boolean => {
  return Object.prototype.toString.call(payload).toLocaleLowerCase().includes(`object ${type.toLocaleLowerCase()}`)
}
