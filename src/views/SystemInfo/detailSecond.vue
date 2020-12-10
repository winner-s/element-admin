<template>
  <div class="detail_container">
    <div class="back" @click="goback">返回</div>
    <div class="mian_box">
      <logo class="logo" />
      <div class="detail_main">
        <div class="mian_img">
          <img v-show="config.showMain" class=" animate__animated" :class="{animate__lightSpeedInRight: config.showMain}" src="~@a/system/main_img.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo'
export default {
  components: {
    Logo
  },
  data() {
    return {
      config: {
        showMain: false
      }
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    goback() {
      this.$router.replace('/login?redirect=dashboard')
    },
    animate() {
      this.config.showMain = true
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  display: inline-block;
  position: fixed;
  left: 20px;
  top: 30px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
  padding: 0 25px;
  border-radius: 30px;
  cursor: pointer;
}
.detail_container {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  background: url('~@a/system/bg_02.png') no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  .mian_box {
    width: 1200px;
    margin: 0 auto;
    transform:scale3d(.75,.75,1);
    margin-top: -90px;
    .logo {
    }
    .detail_main {
      margin-top: -70px;
      .mian_img {
        width: 1192px;
        height: 619px;
        text-align: center;
        img {
          width: 100%;
        }
      }
    }

  }
}
</style>
