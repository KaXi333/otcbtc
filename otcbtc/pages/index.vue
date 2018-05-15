
<template>
  <div>
    <div class="slide-box">
      <b-carousel id="carousel1"
                  style="text-shadow: 1px 1px 2px #333;"
                  controls
                  indicators
                  :interval="2000"
                  img-width="1024"
                  img-height="480"
                  v-model="slide"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-src="/images/slideShow/landing-otb-lock-event.png">
        </b-carousel-slide>
        <b-carousel-slide img-src="/images/slideShow/cps-landing-cn.png">
        </b-carousel-slide>
        <b-carousel-slide img-src="/images/slideShow/landing-otf-cn.png">
        </b-carousel-slide> 
        <b-carousel-slide img-src="/images/slideShow/landing-spring-special-cn.png">
        </b-carousel-slide>  
      </b-carousel>
    </div>
  </div>
</template>

<script>
// import AppLogo from '~/components/AppLogo'
//import slide from '~/components/base/slide'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  head () {
    return {
      title: 'OTCBTC - 你最能信赖的场外交易平台 - Bitcoin, Ethereum 交易 | OTCBTC',
      meta: [
        { hid: 'home custom title', name: 'home', content: 'home custom title description' }
      ]
    }
  },
  computed: {
    ...mapState({
      counter: state => state.counter
    })
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.slide-box
  padding:2% 6%
  background:#F8F9FA
</style>
