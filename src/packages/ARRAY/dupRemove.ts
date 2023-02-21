/**
 * 数组去重
 * @param d 集合
 * @returns 去重结果
 */
export const dupRemove = <T>(d: T[]) : T[] => Array.from(new Set(d))
