export type StringEncryMode = 'mobile'|'BC-address'
export type StringEncryOption = {
  mode?: StringEncryMode;
  /** 头部字符长度 */
  lenHead?: number;
  /** 尾部字符长度 */
  lenTail?: number;
  /**  */
  encryStr?: string;
}

const configs: Record<StringEncryMode, {
  encryStr: string;
  lenHead: number;
  lenTail: number;
}> = {
  // 手机脱敏
  mobile: {encryStr: '****', lenHead: 3, lenTail: 4},
  // 链端地址脱敏
  "BC-address": {encryStr: '...', lenHead: 6, lenTail: 4},
}

export const encry = (msg: string, option: StringEncryOption = {}): string => {
  if (option.mode) {
    option = configs[option.mode]
  }

  const { encryStr = '****', lenHead = 4, lenTail = 4 } = option
  
  const t = lenHead + lenTail
  const l = msg.length
  return t > l
    ? `${msg.slice(0, Math.ceil((l - 4) / 2))}${encryStr}${msg.slice(l - Math.floor((l - 4) / 2))}`
    : `${msg.slice(0, lenHead)}${encryStr}${msg.slice(0, lenTail)}`
}
