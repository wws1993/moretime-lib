/** 数据分页
 * @param arr 待分页数组
 * @param len 分页长度
 */
export const paging = <T>(arr: T[], len: number): T[][] => {
   let idx = 0

   const res: T[][] = []

   while (idx < arr.length) {
      res.push(arr.slice(idx, idx += len))
   }

   return res
}
