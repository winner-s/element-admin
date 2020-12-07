<template>
  <div class="login-container">
    <header>
      <div>
        <div class="left" />
        <div class="right">脱机版用户注册</div>
      </div>
    </header>
    <div class="content">
      <div class="left-box">
        <img src="@/assets/images/right_text.png">
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
        <div class="title-container">
          <h3 class="title">用户登录</h3>
        </div>

        <el-form-item prop="username">
          <span class="svg-container user" />
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="用户名"
            name="username"
            type="text"
            tabindex="1"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>

        <!-- <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual> -->
        <el-form-item prop="password">
          <span class="svg-container pws" />
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="1"
            @keyup.enter.native="handleLogin"
          />
          <!-- <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span> -->
        </el-form-item>
        <!-- </el-tooltip> -->
        <el-form-item prop="code">
          <span class="svg-container code" />
          <el-input
            ref="code"
            v-model="loginForm.code"
            placeholder="验证码"
            name="username"
            type="text"
            tabindex="1"
            @keyup.enter.native="handleLogin"
          />
          <div class="ValidCode disabled-select" @click="refreshCode">
            <span v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{ item.code }}</span>
          </div>
        </el-form-item>

        <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">登录</el-button>

      </el-form>
    </div>
    <footer>
      <div>
        <div class="logo" />
        <div class="text">
          <p><span>c</span>版权所有中国建设银行京ICP备13030780号</p>
          <p>总行地址: 中国北京西城区金融大街25号</p>
        </div>
        <div class="text">
          <p>京公网安备: 110102000450</p>
          <p>邮编：100033</p>
        </div>
        <div class="text">
          <p>服务热线: 0731-96511</p>
          <p>客服与投诉热线：95533</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      // if (!validUsername(value)) {
      if (!value) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    const validateCode = (rule, value, callback) => {
      console.log(this.codeList)
      var str = []
      this.codeList.map(item => {
        str.push(item.code)
      })
      str = str.join('')
      if (!value) {
        callback(new Error('请输入验证码'))
      } else if (value.toLowerCase() !== str.toLowerCase()) {
        callback(new Error('验证码错误'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        code: [{ required: true, trigger: 'blur', validator: validateCode }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      codeList: [],
      length: 4
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
    this.createdCode()
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    refreshCode() {
      this.createdCode()
    },
    createdCode() {
      const len = this.length
      const codeList = []
      const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
      const charsLen = chars.length
      // 生成
      for (let i = 0; i < len; i++) {
        const rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `2${[(Math.floor(Math.random() * 10))]}px`,
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
      }
      // 指向
      this.codeList = codeList
      // 将当前数据派发出去
      this.$emit('update:value', codeList.map(item => item.code).join(''))
    },
    getStyle(data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    },
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },

    handleLogin() {
      console.log('点击了登录')
      console.log(this.codeList)
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background: url('../../assets/images/bg.png') no-repeat center center;
  background-size: cover;
  // width: 1920px;
  // height: 1080px;
  button{
    width: 384px;
    margin-top: 4px;
    margin-bottom: 30px;
  }
  .el-input {
    display: inline-block;
    background: #FFFFFF;
    width: 64%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 0 15px;
      color: #333;
      height: 40px;
      line-height: 40px;
      // &:-webkit-autofill {
      //   box-shadow: 0 0 0px 1000px $bg inset !important;
      //   -webkit-text-fill-color: $cursor !important;
      // }
    }
  }
  .el-form{
    text-align: center;
  }
  .el-form-item__content{
    width: 384px;
    height: 42px;
    border: 1px solid #E3E3E3;
    border-radius: 4px;
    margin: auto;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .el-form-item {
    margin-bottom: 0;
    background: #fff;
    border-radius: 5px;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.ValidCode{
  background: #d9ccb1;
  width: 105px;
  height: 40px;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     span{
       display: inline-block;
     }
   }
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
   >header{
    background: #fff;
    >div{
      height: 72px;
      line-height: 72px;
      max-width: 1200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: auto;
    }
    .left{
      width: 484px;
      height: 35px;
      background: url('../../assets/images/LOGO.png') no-repeat center center;
      background-size: cover;
      margin-left: 30px;
    }
    .right{
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 20px;
      margin-right: 30px;
    }
  }
  >footer{
    background: rgba(0, 102, 178, 1);
    >div{
      height: 120px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 17px;
        margin: 0;
        &:first-child{
          margin-bottom: 20px;
        }
        span{
          transform: scale(.7);
          display: inline-block;
          width: 15px;
          height: 15px;
          text-align: center;
          line-height: 12px;
          border-radius: 50%;
          margin-right: 4px;
          border: 1px solid #fff;
        }
      }
      .text{
        margin-left: 110px;
      }
      .logo{
        width: 275px;
        height: 51px;
        background: url('../../assets/images/bottom_logo.png') no-repeat center center;
        background-size: cover;
      }
    }
  }
  >.content{
    height: calc(100vh - 72px - 120px);
    display: flex;
    justify-content: center;
    align-items: center;
    .left-box{
      width: 614px;
      // height: 310px;
      // background: url('../../assets/images/right_text.png') no-repeat center center;
      background-size: 100% 100%;
      margin-right: 60px;
      img {
        width: 100%;
      }
    }
  }
  .login-form {
    position: relative;
    width: 484px;
    // height: 480px;
    // margin: 0 auto;
    overflow: hidden;
    background: #FFFFFF;
    border-radius: 10px;
    flex-shrink: 0;

  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    // padding: 6px 5px 6px 15px;
    margin-left: 14px;
    color: #999;
    vertical-align: middle;
    width: 22px;
    height: 22px;
    display: inline-block;
    &.user{
      background: url('../../assets/images/Username.png') no-repeat center center;
      background-size: cover;
    }
    &.pws{
      background: url('../../assets/images/pws.png') no-repeat center center;
      background-size: cover;
    }
    &.code{
      background: url('../../assets/images/code.png') no-repeat center center;
      background-size: cover;
    }
  }

  .title-container {
    position: relative;
    .title {
      text-align: center;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      margin: 30px 0;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
