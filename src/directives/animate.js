export default {
  inserted: function (el, binding, vnode) {
    if (binding.value) {
      var animate = binding.value
      var delay = animate.delay || 0
      var repeat = animate.repeat || false

      el.classList.add('animated')
      el.setAttribute('animate-name', animate.name)
      el.style.opacity = '0'
      if (delay) {
        el.style.animationDelay = delay + 'ms'
        el.style.webkitAnimationDelay = delay + 'ms'
      }
      if (repeat) {
        el.style.opacity = '1'
        el.classList.add('repeat')
      }
    }
  }
}
