import { getRandom } from "./getRandom";

/** 从集合中任取一子元素
 * @param lib 集合
 * @returns 集合中任一子元素
 */
export const getRandomByList = <T extends any>(lib: T[]): T => lib[Math.floor(getRandom(lib.length))];
