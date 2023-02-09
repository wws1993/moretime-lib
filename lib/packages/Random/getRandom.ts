/** 生成一个随机数
 * @param max 最大值
 * @param min 最小值
 * @returns 随机数
 */
export const getRandom = (max: number, min: number = 0): number => Math.random() * (max + 1) + min;

export interface TProp {
  max?: number
  min?: number
}
