  /**
   * 设置rem根尺寸
   */
 export default function setRootFontSize(window, document){
    function resize () {
      let ww = window.innerWidth
      if (ww > window.screen.width) {
        window.requestAnimationFrame(resize)
      } else {
        if (ww > 750) {
          ww = 750
        }
        document.documentElement.style.fontSize = (ww * 100) / 750 + 'px'
      }
    }

    resize()

    window.addEventListener('resize', resize)
  }
