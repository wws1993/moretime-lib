import * as ARRAY from "./packages/ARRAY";
import * as CMD from "./packages/CMD";
import * as DOM from "./packages/DOM";
import * as FILE from "./packages/FILE";
import * as RANDOM from "./packages/RANDOM";
import * as STRING from "./packages/STRING";

export default {
  ENV: {
    /** 是否移动端 */
    isMobile: () => /Mobi|Android|iPhone/i.test(window.navigator.userAgent),
    /** 是否metamask移动浏览器 */
    isMetaMask: () => window.navigator.userAgent.includes('WebView MetaMaskMobile'),
  },
  ARRAY,
  CMD,
  DOM,
  FILE,
  RANDOM,
  STRING,
}
