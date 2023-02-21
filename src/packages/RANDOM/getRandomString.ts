import { getRandomByList } from "./getRandomByList"

const LibBynumber = '0123456789'
const LibBylowerCase = 'abcdefghijklmnopqrstuvwxyz'
const LibByupperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
const LibByspecialChar = '!@#$%^&,.'

export type RandomLibType = 'number' | 'lower-case' | 'upper-case' | 'special-char'
export interface RandomStringOptions {
  /** hash包含内容：number：数字，lower-case：小写字母，upper-case：大写字母，special-char：特殊字符 */
  includes?: RandomLibType[];
  /** 模板中的随机字符串 */
  randomKeyword?: string;
}

/** 创建hash
 * @param {string} template hash模板
 * @returns {string}
 */
export const getRandomString = (
  template: string = '****-*****-***********-******-**',
  options: RandomStringOptions = {}
) => {
  const {
    includes = ['number', 'lower-case'],
    randomKeyword = '*'
  } = options

  let __: any = ''

  includes.includes('number') && (__ += LibBynumber);
  includes.includes('lower-case') && (__ += LibBylowerCase);
  includes.includes('upper-case') && (__ += LibByupperCase);
  includes.includes('special-char') && (__ += LibByspecialChar);

  const libs = __.split('')

  return template.split('').map(word => {
    if (word !== randomKeyword) return word
    else return getRandomByList<string>(libs)
  }).join('')
}
