/**
 * 集合排序
 * @param arr 集合
 * @param key 排序字段
 * @returns 排序后集合
 */
export const sortByProp = <T extends any[], K extends keyof T>(arr: T, key: K): T => arr.sort((a, b) => a[key] - b[key]);
