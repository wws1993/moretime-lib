/** 字符串脱敏 */
const desensitize = (
  /** 元字符串 */
  str: string,
  /** 脱敏字符串 */
  replaceStr: string = '****',
  /** 头部不脱敏字数 */
  lenHead: number = 3,
  /** 尾部不脱敏字数 */
  lenTail: number = 4,
): string => {  
  const t = lenHead + lenTail
  const l = str.length
  return t > l
    ? `${str.slice(0, Math.ceil((l - 4) / 2))}${replaceStr}${str.slice(l - Math.floor((l - 4) / 2))}`
    : `${str.slice(0, lenHead)}${replaceStr}${str.slice(0, lenTail)}`
}

/** 手机号脱敏 */
export const desensitizeMobile = (str: string) => desensitize(str, '****', 3, 4);
/** 链端地址脱敏 */
export const desensitizeWeb3Adds = (str: string) => desensitize(str, '....', 6, 4);
