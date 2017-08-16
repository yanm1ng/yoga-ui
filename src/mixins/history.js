const historyMixin = {
  props: {
    history: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getPushURL() {
      let array = [window.location.href.split('#')[0], window.location.hash]
      array.push(window.location.hash ? (window.location.href.indexOf('?') === -1 ? '?' : '&') : '#')
      array.push('popup=' + Math.random().toString(36).substr(2))
      return array.join('')
    },
    pushState() {
      if (this.history && window.location.href.indexOf('popup=') === -1) {
        window.history.pushState({}, '', this.getPushURL())
        let popstateHandler = this.popstateHandler = () => {
          this.$emit('on-close')
          this.popStateBack && this.popStateBack()
          window.removeEventListener('popstate', popstateHandler)
        }
        window.addEventListener('popstate', popstateHandler)
      }
    },
    popState() {
      window.removeEventListener('popstate', this.popstateHandler)
      this.history && window.location.href.indexOf('popup=') > -1 && history.back()
    }
  }
}

export {
  historyMixin
}