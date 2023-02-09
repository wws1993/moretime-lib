
/** 组合算法，从m中选取n个数进行组合
 * @param data
 * @param size
 */
export const choose = <T>(data: T[], size: number) => {
  var allResult: T[][] = [];

  const runner = (arr: T[], size: number, result: T[]) => {
    var arrLen = arr.length;
    if (size > arrLen) {
      return;
    }
    if (size == arrLen) {
      allResult.push(([] as T[]).concat(result, arr))
    } else {
      for (let i = 0; i < arrLen; i++) {
        var newResult = ([] as any[]).concat(result);
        newResult.push(arr[i]);

        if (size == 1) {
          allResult.push(newResult);
        } else {
          var newArr = ([] as any[]).concat(arr);
          newArr.splice(0, i + 1);
          runner(newArr, size - 1, newResult);
        }
      }
    }
  }

  runner(data, size, []);

  return allResult;
}
