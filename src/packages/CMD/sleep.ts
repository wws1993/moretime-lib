/** 睡眠delay毫秒
 * @param delay
 */
export const sleep = (delay: number = 500): Promise<void> => new Promise(resolve => setTimeout(resolve, delay))
