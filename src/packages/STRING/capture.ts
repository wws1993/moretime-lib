export const capture = (str: string, option: [string, string] = ['{{', '}}']): (null | string[]) => {
  const pattern = new RegExp(`[^${option[0]}\}]+(?=${option[1]})`, 'g')

  return str.match(pattern)
}
