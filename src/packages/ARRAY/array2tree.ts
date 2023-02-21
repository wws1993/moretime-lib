/** 扁平化数组转树
 * @param items 元数据组
 * @param idKey id字段
 * @param parentIdKey pid字段
 * @param childrenKey children字段
 */
export const array2tree = <T extends Record<string, any>, KEY extends keyof T>(
  items: T[],
  idKey: KEY = ('id' as KEY),
  parentIdKey: KEY = ('pid' as KEY),
  childrenKey: string = 'children',
) => {
  type RESULT = (T & {[k: typeof childrenKey]: T[]})

  /** 导出结果 */
  const res: RESULT[] = []
  /** map暂存数据 */
  const map: Record<number, RESULT> = {}
  // 判断对象是否有某个属性
  let getHasOwnProperty = (obj: any, property: any) => Object.prototype.hasOwnProperty.call(obj, property)

  // 边做map存储，边找对应关系
  for (const i of items) {
    map[i[idKey]] = {
      ...i,
      [childrenKey]: getHasOwnProperty(map, i[idKey]) ? map[i[idKey]][childrenKey] : []
    }

    const newItem = map[i[idKey]]

    if (i[parentIdKey] === 0) {
      res.push(newItem)
    } else {
      if (!getHasOwnProperty(map, i[parentIdKey])) {
        map[i[parentIdKey]] = { [childrenKey]: [] } as unknown as RESULT
      }

      map[i[parentIdKey]][childrenKey]?.push(newItem)
    }
  }
  return res
}