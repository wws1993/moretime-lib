/** 读取文件转base64
 * @param file 文件对象
 */
export const readFile2Base64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
  const fd = new FileReader()
  fd.readAsDataURL(file)

  fd.onload = () => resolve(String(fd.result))
})
