<script>
import Countup from 'countup.js'

export default {
  name: 'count-up',
  mounted () {
    this.$nextTick(() => {
      this.countup = new Countup(this.$el, this.startVal, this.endVal, this.decimals, this.duration)
      if (this.start) {
        setTimeout(() => {
          this.countup.start()
        }, this.delay)
      }
    })
  },
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    start: {
      type: Boolean,
      default: true
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    // number of decimal places in number
    decimals: {
      type: Number,
      default: 0
    },
    // duration in s
    duration: {
      type: Number,
      default: 2
    },
    // daley in ms
    dalay: {
      type: Number,
      default: 0
    }
  },
  render (h) {
    return h(this.tag, {}, [this.startVal])
  },
  watch: {
    start (val) {
      if (val) {
        setTimeout(() => {
          this.countup.start()
        }, this.delay)
      }
    },
    endVal (val) {
      this.countup.update(val)
    }
  }
}
</script>
