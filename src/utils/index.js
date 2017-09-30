export const resetRootFontSize = () => {
  let deviceWidth = window.innerWidth
  let devicePixelRatio = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio
  let calc = 7.5
  if (deviceWidth > 414) deviceWidth = 414
  if (deviceWidth < 320) deviceWidth = 320
  if (deviceWidth < 320 && devicePixelRatio >= 2) calc = calc - (devicePixelRatio - 1)
  // 计算设计稿和实际像素的缩放比。向上取整1px = 0.01rem
  document.documentElement.style.fontSize = Math.ceil(deviceWidth / calc) + 'px'
}

export const pure = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

export const bubbleSort = (arr) => {
  var len = arr.length
  for (var i = 0; i < len - 1; i++) {
    for (var j = len - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        var tmp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}