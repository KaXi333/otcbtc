
<template>
  <div class="homePageBox">
    <ic-slider :autoplay="3000">
      <ic-slider-item v-for="(items,index) in images" :key="items.id">
        <img :src="items.picUrl"/>
      </ic-slider-item>
    </ic-slider>
    <div class="tradBox">
      <div class="tradeOTC" @click="tradeFMCbtn">
        <h3 class="tradeOTCTite">场外交易</h3>
        <p class="tradeOTCcont">使用法币购买或出售FMC</p>
        <div class="tradeOTCImg">
          <img class="wxImg" src="../static/images/wx.png">
          <img class="zfbImg" src="../static/images/zfb.png">
          <img class="cardImg" src="../static/images/card.png">
          <img class="visaImg" src="../static/images/visa.png">
        </div>
      </div>
      <div class="tradeOTC tradeOTCRight" @click="tradeETHBTCbtn">
        <h3 class="tradeOTCTite">币币交易</h3>
        <p class="tradeOTCcont">用数字货币购买或出售FMC</p>
        <div class="tradeOTCImgRight">
          <img class="ethImg" src="../static/images/eth@2x.png">
          <img class="btcImg" src="../static/images/btc@2x.png">
        </div>
      </div>
    </div>
    <div class="notice-text">
      <div class="noticeTite">
        <img src="../static/images/notice.png" alt="公告" />
        <h3>最新公告</h3>
      </div>
      <div class="notice-list-box">
          <ul class="notice-list" id="notice_list">
              <li>大量收售金币，大量买卖金币100w金币=95元QQ990413374</li>
          </ul>
      </div>
    </div>
    <div class="OTCBox">
      <h3 class="OTCTit">FMC场外交易</h3>
      <p class="OTCDec">支持多国法币购买BTC、ETH、LTC、EOS、BCH、NEO、QTUN、ZEC、USDT等多种主流数字币</p>
      <p class="OTCDec2">下单=>微信/支付宝转账=>成交</p>
      <div>
        <ul class="thirdMenuBox">
          <li class="thirdMenuCSS">
            <a class="thirdMenuBtnCss">购买FMC</a>
          </li>
          <li class="thirdMenuCSS">
            <a class="thirdMenuBtnCss">贩卖FMC</a>
          </li>
          <li class="thirdMenuCSS">
            <a class="thirdMenuBtnCss">挂单</a>
          </li>
        </ul>
      </div>
      <div class="tradRecordBox">
        <div class="tradRecord">
          <span>CNY</span>
          <span>=></span>
          <span>1.0221</span>
          <span>FMC</span>
          <span>(4秒移交)</span>
          <p>3分钟前</p>
        </div>
        <div class="tradRecord">
          <span>CNY</span>
          <span>=></span>
          <span>1.0221</span>
          <span>FMC</span>
          <span>(4秒移交)</span>
          <p>3分钟前</p>
        </div>
        <div class="tradRecord">
          <span>CNY</span>
          <span>=></span>
          <span>1.0221</span>
          <span>FMC</span>
          <span>(4秒移交)</span>
          <p>3分钟前</p>
        </div>
        <div class="tradRecord">
          <span>CNY</span>
          <span>=></span>
          <span>1.0221</span>
          <span>FMC</span>
          <span>(4秒移交)</span>
          <p>3分钟前</p>
        </div>
        <div class="tradRecord">
          <span>CNY</span>
          <span>=></span>
          <span>1.0221</span>
          <span>FMC</span>
          <span>(4秒移交)</span>
          <p>3分钟前</p>
        </div>
        <div class="tradTime">
          <span>平均交易时间 : </span>
          <span>0.26分钟</span>
        </div>
      </div>
    </div>
    <div class="OTCBox">
      <h3 class="OTCTit">币币交易</h3>
      <p class="OTCDec2">已开放API自动交易接口</p>
      <div class="tradFMCBox">
        <div class="tradFMC">
          <p class="tradETH"><span>ETH</span><span>/FMC</span></p>
          <p class="tradETHNum"><span>0.15222</span><span>FMC</span></p>
          <p class="tradRate"><img src="../static/images/hong-jiantou@2x.png"><span>20.3</span></p>
        </div>
        <div class="tradFMC">
          <p class="tradETH"><span>BTC</span><span>/FMC</span></p>
          <p class="tradETHNum"><span>0.15222</span><span>FMC</span></p>
          <p class="tradRate tradRate2"><img src="../static/images/lu-jiantou@2x.png"><span>20.3</span></p>
        </div>
      </div>
    </div>
    <div class="problemBox">
      <h3 class="problemTit"><img src="../static/images/huang@2x.png">新手入门</h3>
      <p><span class="problemList"></span>币币交易新手指南</p>
      <p><span class="problemList"></span>如何购买数字币?(OTC)</p>
      <p><span class="problemList"></span>如何出售数字币?(OTC)</p>
      <p><span class="problemList"></span>流畅打开国外网站</p>
    </div>
    <div class="problemBox" style="margin-top:.2rem;">
      <h3 class="problemTit"><img src="../static/images/huang@2x.png">交易问题</h3>
      <p><span class="problemList"></span>如何提高账户安全性?</p>
      <p><span class="problemList"></span>已付款但订单超时取消了怎么办?</p>
      <p><span class="problemList"></span>如何防止在交易中被骗?</p>
      <p><span class="problemList"></span>收不到FMC发来的邮件怎么办?</p>
    </div>
    <div class="problemBox" style="margin-top:.2rem;">
      <h3 class="problemTit"><img src="../static/images/huang@2x.png">验证问题</h3>
      <p><span class="problemList"></span>我需要完成哪些验证?</p>
      <p><span class="problemList"></span>如何进行实名验证?</p>
      <p><span class="problemList"></span>如何进行Google两步验证?</p>
      <p><span class="problemList"></span>两步验证丢失怎么办?</p>
    </div>
    <div class="footer-container exchange-container">
      <div class="main-info">
        <div class="base-intro">
          <h5>FMC</h5>
          <p>FMC 是一个提供区块链场外交易和币币交易的平台，我们致力于让区块链资产更有效的流动，让更多人可以参与到区块链行业中来。</p>
        </div>
        <!-- <div class="quick-link">
          <div class="link-section">
            <h5 class="section-header">客户服务</h5>
            <span class="collapse-indicator">+</span>
            <ul class="section-content">
              <li><a href="https://otcbtc.com/how_it_works#faqs">常见问题</a></li>
              <li><a href="https://otcbtc.zendesk.com/hc/zh-cn/categories/115000223312" target="_blank">帮助中心</a></li>
              <li> <a href="https://otcbtc.com/fee">费率说明</a></li>
            </ul>
          </div>

          <div class="link-section">
            <h5 class="section-header">关于我们</h5>
            <span class="collapse-indicator">+</span>
            <ul class="section-content">
              <li> <a href="https://otcbtc.com/company">公司介绍</a></li>
              <li> <a href="https://otcbtc.com/team">团队专访</a></li>
              <li> <a href="https://otcbtc.com/contact_us">联系方式</a></li>
              <li> <a href="https://otcbtc.com/careers"><span class="translation_missing" title="translation missing: zh-CN.common.footer.careers">Careers</span></a></li>
            </ul>
          </div>

          <div class="link-section">
            <h5 class="section-header">官方社群</h5>
            <span class="collapse-indicator">+</span>
            <ul class="section-content">
              <li><a href="https://t.me/otcbtc_cn" target="_blank"><i class="fa fa-paper-plane" aria-hidden="true"></i> Telegram </a></li>
              <li><a href="https://twitter.com/otcbtc" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>  </li>
              <li><a href="https://www.jianshu.com/u/e30b80ec5661" target="_blank"><i class="fa fa-rss" aria-hidden="true"></i> Blog</a></li>
            </ul>
          </div>

          <div class="link-section">
            <h5 class="section-header">相关下载</h5>
            <span class="collapse-indicator">+</span>
            <ul class="section-content">
              <li><a download="OTCBTC_media_kit" href="/OTCBTC_media_kit.zip">Media Kit</a></li>
              <li><a href="https://otcbtc.com/ios_beta_client">iOS App</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="copyright-info">
        <a class="link-left" href="https://otcbtc.com/terms_of_service">使用条款</a>
        <a class="link-ritght" href="https://otcbtc.com/privacy">隐私政策</a>
        <p class="company"><span class="short-split-line">|</span>OTCBTC<span class="symbol">©</span>2017</p>

        <div class="legal-info">
          <span class="translation_missing" title="translation missing: zh-CN.service_time">Service Time</span>：09:00 ~ 21:00 (UTC+08:00)
        </div>

        <div class="dropup legal-info dropup__language">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            简体中文<b class="caret"></b>
          </a>

          <ul class="dropdown-menu">
            <li><a rel="nofollow" data-method="patch" href="/locales?locale=zh-CN">简体中文</a></li>
            <li><a rel="nofollow" data-method="patch" href="/locales?locale=zh-TW">繁體中文</a></li>
            <li><a rel="nofollow" data-method="patch" href="/locales?locale=en">English</a></li>
          </ul>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import IcSlider from '~/components/base/slider'
import IcSliderItem from '~/components/base/slider-item'

export default {
  components: {
     IcSlider,
     IcSliderItem
  },
  data () {
    return {
      images: [
        {
          linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
          id: 11351
        },
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
          id: 11372
        },
        {
          linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
          id: 11378
        },
        {
          linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
          id: 11375
        },
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
          id: 11287
        }
      ]
    }
  },
  methods: {
    tradeFMCbtn(){
      this.$router.push('/tradeFMC');
    },
    tradeETHBTCbtn(){
      this.$router.push('/tradeETHBTC');
    }
  }
}
</script>
<style scoped>
.homePageBox{
  background-color: #f5f5f5;
  margin-top: 1rem;
  padding-top: .3rem;
  padding-bottom: .5rem;
}
.tradBox{
  margin:0 .2rem;
  padding-bottom: .28rem;
  position: relative;
  overflow:hidden;
}
.tradeOTC{
  width: 3.5rem;
  height:2rem;
  background-color: #fff;
  border-radius: .08rem;
  position: relative;
  float: left;
}
.tradeOTCTite{
  font-size: .36rem;
  color:#000;
  width: 2rem;
  margin-left: .2rem;
  padding-top: .3rem;
  padding-bottom: .15rem;
}
.tradeOTCcont{
  font-size: .26rem;
  color: #999;
  width: 2rem;
  margin-left: .2rem;
}
.tradeOTCImg{
  position: absolute;
  top:0;
  right:0;
  width: .74rem;
  height:100%;
}
.wxImg{
  width: .31rem;
  height:.26rem;
  position: absolute;left:-.15rem;
  top:.2rem;
}
.zfbImg{
  width: .26rem;
  height:.27rem;
  position: absolute;
  top:.64rem;
  left:-.13rem;
}
.cardImg{
  width: .36rem;
  height:.25rem;
  position: absolute;
  left:-.18rem;
  top:1.09rem;
}
.visaImg{
  width: .27rem;
  height:.27rem;
  position: absolute;
  left:-.14rem;
  top:1.52rem;
}

.tradeOTCRight{
  margin-left: .1rem;
}
.tradeOTCImgRight{
  position: absolute;
  top:0;
  right:0;
  width: 1.16rem;
  height:100%;
}
.ethImg{
  width: .82rem;
  height:.27rem;
  position: absolute;
  left:0;
  top:.55rem;
}
.btcImg{
  width: .82rem;
  height:.27rem;
  position: absolute;
  left:0;
  top:1.22rem;
}

/*公告栏样式*/
.notice-text{
  height:1rem;
  margin:0 .2rem;
  background-color: #fff;
  border-radius: .08rem;
  position: relative;
}
.noticeTite{
  position: absolute;
  left:.2rem;
  top:0;
  height:1rem;
}
.noticeTite img{
  position: absolute;
  width: .41rem;
  height: .4rem;
  top:0;
  bottom:0;
  margin:auto;
}
.noticeTite h3{
  font-size: .36rem;
  color: #1a1a1a;
  line-height: 1rem;
  margin-left: .6rem;
}
.notice-list-box{
  position: absolute;
  left:2.4rem;
  top:0;
  height:1rem;
  overflow: hidden;
}
.notice-list li{
  font-size:.28rem;
  color: #df8e0f;
  line-height: 1rem;
  height:1rem;
}
/*场外交易样式*/
.OTCBox{
  background-color: #fff;
  margin:.28rem .2rem 0 .2rem;
  border-radius: .1rem;
}
.OTCTit{
  height:1rem;
  background-color: #f6cd74;
  font-size: .36rem;
  color: #fff;
  line-height: 1rem;
  padding-left: .2rem;
  border-radius: .08rem;
}
.OTCDec{
  font-size: .26rem;
  color: #989898;
  margin-top:.26rem;
  padding-left: .2rem;
}
.OTCDec2{
  font-size: .26rem;
  color: #989898;
  margin-bottom: .48rem;
  margin-top: .18rem;
  padding-left: .2rem;
}
/*购买按钮样式*/
.thirdMenuBox{
  position: relative;
  overflow:hidden
}
.thirdMenuCSS{
  width: 2.23rem;
  height:.9rem;
  background-color:#df8e0f;
  color: #fff;
  float: left;
  border-radius: .08rem;
  margin-left:.18rem;
  text-align: center;
  line-height: .9rem;
  font-size: .28rem;
}
.thirdMenuBtnCss{
  color: #fff !important;
}
.thirdMenuCSS:nth-child(1){
  margin-left:0;
}
.thirdMenuCSS:nth-child(2){
  background-color: #fff;
  border:1px solid #df8e0f;
}
.thirdMenuCSS:nth-child(3){
  background-color: #f6cd74;
}
.thirdMenuCSS:nth-child(2) a{
  color: #df8e0f !important;
}
/*交易记录*/
.tradRecordBox{
  margin:0 .2rem;
  padding-top: .55rem;
  color:#999;
  font-size: .26rem;
}
.tradRecord{
  height:.8rem;
  background-color: #f5f5f5;
  position: relative;
}
.tradRecord:nth-child(2n){
  background-color: #fff;
}
.tradRecord span{
  line-height: .8rem;
  margin-left: .2rem;
}
.tradRecord p{
  width: 1.2rem;
  height:.41rem;
  background-color: #999;
  color: #fff;
  line-height: .41rem;
  text-align: center;
  position: absolute;
  top:0;
  bottom:0;
  margin:auto;
  right:.2rem;
}
.tradTime{
  height:.8rem;
  text-align: right
}
.tradTime span{
  line-height: .8rem;
}

/*币币交易*/
.tradFMCBox{
  padding-bottom: .4rem;
  overflow: hidden;
}
.tradFMC{
  width: 3.25rem;
  height:2.26rem;
  background-color: #f5f5f5;
  font-size: .28rem;
  border-radius: .08rem;
  margin-left: .2rem;
  color: #191919;
  float: left;
}
.tradFMC p{
  margin-left: .2rem;
  padding-top: .29rem;
}
.tradETH span:nth-child(1){
  font-weight: bold;
}
.tradETH span:nth-child(2){
  font-size: .24rem;
  color: #989898;
}
.tradETHNum span:nth-child(2){
  margin-left: .2rem;
}
.tradRate{
  position: relative;
  color: #df0f0f;
  padding-top: 0 !important;
  margin-top: .29rem;
}
.tradRate img{
  position: absolute;
  width: .2rem;
  height:.23rem;
  left:0;
  top:0;
  bottom: 0;
  margin:auto;
}
.tradRate span{
  margin-left: .3rem;
}
.tradRate2 span{
  color: #0fdf1e;
}

/*底部样式*/
.footer-container{
  font-size: .26rem;
  color:#676767;
  margin:0 .2rem;
}
.base-intro{
  line-height: .5rem;
  border-bottom: 1px solid #a5a5a5;
  padding-bottom: .2rem;
}
.base-intro h5{
  margin-top: .35rem;
}
</style>
