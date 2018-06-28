<template>
    <div>
      <div class="header">
        <div class="menuImgBox" @click="isShowMenuBoxFn"><img class="menuImg" src="../static/images/menu.png"></div>
        <div class="header_title">法姆基地</div>
        <div class="languageBox">
          <img class="languageImg" src="../static/images/language.png">
          <p>简体中文</p>
        </div>
      </div>
      <div class="navBox" v-if="isShowMenuBox">
        <ul id="nav">
            <li v-for="firstNav in navObj" class="menuListBox" @click="isShowNav(firstNav)">
                <a v-if="firstNav.linkUrl" :href="firstNav.linkUrl" class="menuListCss" :class="{menuListCssDF:firstNav.isshowPersonalImg}"><img v-if="firstNav.isshowPersonalImg" :class="{messageCss:firstNav.isshowPersonalImg}" src="../static/images/message.png">{{firstNav.name}}</a>
                <a v-if="firstNav.nav" class="menuListCss" :class="{menuListCssDF:firstNav.isshowPersonalImg}"><img v-if="firstNav.isshowPersonalImg" :class="{myCss:firstNav.isshowPersonalImg}" src="../static/images/my.png">{{firstNav.name}}</a>
                <div v-if="firstNav.nav" class="menuBtnImgBox"><img src="../static/images/menuBtn.png" class="menuBtnImg"></div>
                <ul v-if="firstNav.nav" v-show="firstNav.isShow" class="secondMenuBox">
                    <li v-for="secondNav in firstNav.nav" class="secondMenu">
                        <a v-if="secondNav.linkUrl" :href="secondNav.linkUrl" class="secondMenuBtn">{{secondNav.name}}</a>
                        <a v-if="secondNav.nav" class="secondMenuBtn" @click.stop="isShowNav(secondNav)">{{secondNav.name}} <img src="../static/images/secondMenuBtn.png" class="secondMenuBtnImg"></a>
                        <ul v-if="secondNav.nav" v-show="secondNav.isShow" class="thirdMenuBox">  
                          <li v-if="secondNav.isShowCss" v-for="thirdNav in secondNav.nav" class="thirdMenuCSS">
                                <a v-if="thirdNav.linkUrl" :href="thirdNav.linkUrl" class="thirdMenuBtnCss">{{thirdNav.name}}</a>
                          </li>
                          <li v-if="!secondNav.isShowCss" v-for="thirdNav in secondNav.nav" class="thirdMenu">
                              <a v-if="thirdNav.linkUrl" :href="thirdNav.linkUrl" class="thirdMenuBtn">{{thirdNav.name}}</a>
                              <a v-if="thirdNav.nav" @click.stop="isShowNav(thirdNav)" class="thirdMenuBtn">{{thirdNav.name}}</a>
                              <ul v-if="thirdNav.nav"  v-show="thirdNav.isShow">
                                  <li v-for="fourthNav in thirdNav.nav">
                                      <a v-if="fourthNav.linkUrl" :href="fourthNav.linkUrl">{{fourthNav.name}}</a>
                                      <a v-if="fourthNav.nav" @click="isShowNav(fourthNav)">{{fourthNav.name}}</a>
                                  </li>
                              </ul>
                          </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isShowMenuBox:false,
      navLay: [],
      //初始化菜单目录结构对象
      navObj: [
          {
              name: 'FMC交易场',
              isShow: false,
              nav: [
                  {
                      name: '场外交易',
                      isShowCss:true,
                      isShow: false,
                      nav: [
                          {
                              name: '购买FMC',
                              linkUrl: 'index2.html'
                          },
                          {
                              name: '出售FMC',
                              linkUrl: 'index3.html'
                          },
                          {
                              name: '挂单',
                              linkUrl: 'index4.html'
                          }
                      ]
                  },
                  {
                      name: '币币交易',
                      isShowCss:true,
                      isShow: false,
                      nav: [
                          {
                              name: '购买FMC',
                              linkUrl: 'index2.html'
                          },
                          {
                              name: '出售FMC',
                              linkUrl: 'index3.html'
                          },
                          {
                              name: '挂单',
                              linkUrl: 'index4.html'
                          }
                      ]

                  },
                  {
                      name: '交易管理',
                      isShow: false,
                      isShowCss:false,
                      nav: [
                          {
                              name: '场外交易管理',
                              linkUrl: 'index2.html'
                          },
                          {
                              name: '币币交易管理',
                              linkUrl: 'index3.html'
                          }
                      ]
                  }
              ]
          },
          {
              name: 'FMC前景规划',
              isShowCss:false,
              isShow: false,
              nav: [
                  {
                      name: '管理菜单1',
                      linkUrl: 'index11.html'
                  },
                  {
                      name: '管理菜单2',
                      linkUrl: 'index12.html'
                  },
                  {
                      name: '管理菜单3',
                      linkUrl: 'index13.html'
                  }
              ]
          },
          {
              name: 'FMC使用场景',
              isShowCss:false,
              isShow: false,
               nav: [
                  {
                      name: '管理菜单1',
                      linkUrl: 'index11.html'
                  },
                  {
                      name: '管理菜单2',
                      linkUrl: 'index12.html'
                  },
                  {
                      name: '管理菜单3',
                      linkUrl: 'index13.html'
                  }
              ]
          },
          {
              name: '白皮书',
              isShow: false,
              linkUrl: 'index.html'
          },
          {
              name: '帮助中心',
              isShow: false,
              linkUrl: 'index.html'
          },
           {
              name: '我的',
              isshowPersonalImg:true,
              isShow: false,
              isShowCss:false,
               nav: [
                  {
                      name: '我的账户',
                      linkUrl: 'index11.html'
                  },
                  {
                      name: '我的钱包',
                      linkUrl: 'index12.html'
                  }
              ]
          },
           {
              name: '消息',
              isshowPersonalImg:true,
              isShow: false,
              linkUrl: 'index.html'
          },
      ]
    }
  },
  mounted: function () {
        this.navLayInit(); //初始化菜单展开样式
  },
  methods: {
    //显示隐藏菜单
    isShowMenuBoxFn(){
      this.isShowMenuBox=!this.isShowMenuBox
    },
    //初始化菜单展开样式
    navLayInit: function () {console.log(this.navLay.length)
        var navObj = this.navObj;
        var navLay = this.navLay;
        if(navLay.length > 0){ //展开第一级菜单
            navObj[navLay[0]].isShow = true;
        }
        if(navLay.length > 1){ //展开第二级菜单
            navObj[navLay[0]].nav[navLay[1]].isShow = true;
        }
        if(navLay.length > 2){ //展开第三级菜单
            navObj[navLay[0]].nav[navLay[1]].nav[navLay[2]].isShow = true;
        }
    },

    //显示隐藏下级菜单
    isShowNav: function(item){
        item.isShow = !item.isShow;
    }
  }
}
</script>

<style scoped>
/*导航样式*/
  .header{
    position: fixed;
    left:0;
    top:0;
    width: 100%;
    height:1rem;
    z-index: 999;
    background-color: #fff;
  }
  .menuImgBox{
    position: absolute;
    height:.4rem;
    width: .34rem;
    top:0;
    bottom:0;
    left:.4rem;
    margin:auto 0;
  }
  .menuImg{
    width: .4rem;
    height:.34rem;
    position: absolute;
    left:0;
    top:0;
  }
  .header_title{
    text-align: center;
    font-size: .4rem;
    color: #df8e0f;
    line-height: 1rem;
    font-weight: bold;
  }
  .languageBox{
    position: absolute;
    top:0;
    bottom:0;
    right:.2rem;
    margin:auto 0;
  }
  .languageImg{
    position: absolute;
    width: .4rem;
    height:.4rem;
    top:0;
    bottom:0;
    left:0;
    margin:auto 0;
  }
  .languageBox p{
    font-size: .26rem;
    color: #666;
    line-height: 1rem;
    margin-left: .5rem;
  }
  /*菜单样式*/
  .navBox{
    position: relative;
    margin-top: 1rem;
  }
  #nav{
    position:absolute;
    width: 100%;
    left:0;
    top:0;
    z-index: 100;
    background-color: #fff;
  }
  .menuListBox{
    font-size: .36rem;
    min-height:1rem;
    line-height: 1rem;
    border-top: 1px solid #f5f5f5;
    position: relative;
  }
  .menuListCss{
    margin-left: .4rem;
    position: relative;
  }
  .menuListBox a{
    color: #1b1b1b ;
  }
  .menuBtnImgBox{
    position: absolute;
    width: .3rem;
    height:1rem;
    right:0;
    top:0;
  }
  .menuBtnImg{
    position: absolute;
    top:0;
    bottom:0;
    right:.2rem;
    width: .3rem;
    height:.17rem;
    margin:auto;
  }
  .secondMenu{
    min-height: 1rem;
    font-size: .32rem;
  }
  .secondMenuBtn{
    position: relative;
    padding-left: .8rem;
  }
  .secondMenuBtnImg{
    width: .26rem;
    height:.14rem;
    position: absolute;
    top:.05rem;
    bottom:0;
    margin:auto;
    right:-.4rem;
  }
  .thirdMenuBox{
    position: relative;
    overflow:hidden
  }
  .thirdMenu{
    min-height: .8rem;
    line-height: .8rem;
  }
  .thirdMenuCSS{
    width: 2.23rem;
    height:.9rem;
    background-color:#df8e0f;
    color: #fff;
    float: left;
    border-radius: .08rem;
    margin-left:.2rem;
    text-align: center;
    line-height: .9rem;
    font-size: .28rem;
  }
  .thirdMenuBtnCss{
    color: #fff !important;
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
  .thirdMenuBtn{
    padding-left: 1.2rem;
  }

  .myCss{
    width: .57rem;
    height: .56rem;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    margin:auto;
  }
  .menuListCssDF{
    padding-left: .7rem;
  }
  .messageCss{
    width: .46rem;
    height: .56rem;
    position: absolute;
    top:0;
    bottom:0;
    left:.05rem;
    margin:auto;
  }
</style>
