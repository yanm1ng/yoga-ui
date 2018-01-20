import { promiseProgress } from 'utils'

const plugin = {
  install: function (Vue) {
    Vue.prototype.$preload = {
      loadImage (imageSource, onProgress) {
        if (!Array.isArray(imageSource)) {
          imageSource = [imageSource]
        }
        var imagePromises = imageSource.map(source => {
          return new Promise((resolve, reject) => {
            var image = new Image()
            image.onload = resolve.bind(null, image)
            image.onerror = image.onabort = reject.bind(null, image)
            image.src = source
          })
        })
        promiseProgress(imagePromises, onProgress)
      }
    }
  }
}

export default plugin