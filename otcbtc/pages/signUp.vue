<template>
  <div class="signUp-wrapper">
    <b-container class="sign-box">
      <b-row>
        <b-col md="5" class="left-desc" v-show="isShowDevise">
          <h4>
            <img src="../static/images/devise-icon-01.png"> 自由交易虚拟货币
          </h4>
          <p>强大的广告系统，让交易数字币安全又快速</p>
          <h4>
            <img src="../static/images/devise-icon-02.png"> 场外交易可以很简单
          </h4>
          <p>不论是购买、出售数字币，都可立即上手</p>
          <h4>
            <img src="../static/images/devise-icon-03.png"> 最全面的交易种类
          </h4>
          <p>支持 BTC / ETH 等主流货币，及多种交易方式</p>
        </b-col>
        <b-col md="7" class="sign-input">
          <h3>注册</h3>
          <div class="input-area">
            <b-form @submit="onSignUp">
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="电子邮箱" v-model="user.email">
                </b-form-input>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="密码，至少8位英文数字组合" v-model="user.password">
                </b-form-input>
              </div>
              <div class="form-group">
                <b-form-input class="input-item" required placeholder="确认密码" v-model="user.passwordConfirm">
                </b-form-input>
              </div>
              <input type="submit" name="commit" value="注 册" class="signBtn" data-disable-with="注 册">
            </b-form>
          </div>
          <div class="links-area">
            <span class="help-term-content"> 注册即表示同意 OTCBTC <a target="_blank" href="/terms_of_service">使用条款</a> </span>
            <hr>
            <span class="new-registration-link">已经有帐号？</span><router-link to="/sign_in">登录</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import '~/assets/stylus/loginRes.styl'
//import api from '../../api/index'
import {ShowDeviseFn} from '~/assets/util/util'  

export default {
  data () {
    return {
      screenWidth: '',
      isShowDevise:false,
      user: {
        email: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },
  mounted () {
    this.screenWidth=document.documentElement.clientWidth
    //获取浏览器窗口大小
    window.onresize = () => {
        return (() => {
            window.screenWidth = document.documentElement.clientWidth
            this.screenWidth = window.screenWidth
        })()
    }
    //控制isShowDevise显示隐藏
    this.isShowDevise=ShowDeviseFn(this.screenWidth,this.isShowDevise)
  },
  watch: {
    //监听浏览器窗口大小
    screenWidth (val) {
        this.screenWidth = val
        this.isShowDevise=ShowDeviseFn(this.screenWidth,this.isShowDevise)
    }
  },
  methods: {
    onSignUp (evt) {
      evt.preventDefault()
      api.signUp(this.user).then((res) => {
        if (res.data.code === 200) {
          window.location = '/'
        } else {
          alert('请输入正确的邮箱和密码')
        }
      })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>
