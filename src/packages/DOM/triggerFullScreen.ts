export const triggerFullScreen = (elm: Element = document.body) => {
  if (document.fullscreenEnabled) {
    if (document.fullscreenElement && document.fullscreenElement.nodeName) {
      document.exitFullscreen();
    } else elm.requestFullscreen();
  } else {
    console.log('你的浏览器不支持全屏模式！');
  }
}
