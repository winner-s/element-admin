<template>
  <div class="detail_container">
    <div class="back" @click="goback">返回</div>
    <div class="mian_box">
      <logo class="logo" />
      <div class="detail_main" @click="goSecond">
        <div class="label_box">
          <img v-show="config.showLabel01" class="animate__animated" :class="{animate__bounceInRight: config.showLabel01}" src="~@a/system/label_img_01.png">
          <img v-show="config.showLabel02" class="animate__animated" :class="{animate__bounceInRight: config.showLabel02}" src="~@a/system/label_img_02.png">
          <img v-show="config.showLabel03" class="animate__animated" :class="{animate__bounceInRight: config.showLabel03}" src="~@a/system/label_img_03.png">
        </div>
        <!-- <div class="mian_img">
          <img v-show="config.showMain" class=" animate__animated" :class="{animate__lightSpeedInRight: config.showMain}" src="~@a/system/main_img.png">
        </div> -->
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
        showLabel01: false,
        showLabel02: false,
        showLabel03: false
      }
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    goSecond() {
      this.$router.push('/systemDetailSecond')
    },
    goback() {
      this.$router.replace('/login?redirect=dashboard')
    },
    animate() {
      this.config.showLabel01 = true
      setTimeout(() => {
        this.config.showLabel02 = true
        setTimeout(() => {
          this.config.showLabel03 = true
        }, 1000)
      }, 1000)
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
  min-height: 100%;
  background: url('~@a/system/bg_02.png') no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  .mian_box {
    width: 1200px;
    margin: 0 auto;
    transform:scale3d(.75,.75,1);
    margin-top: 0px;
    .logo {
    }
    .detail_main {
      margin-top: -60px;
      .label_box {
        width: 1200px;
        height: 444px;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 377px;
          height: 444px;
          float: left;
          margin-right: 34px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .mian_img {
        width: 1201px;
        height: 691px;
        margin-top: 70px;
        img {
          width: 100%;
        }
      }
    }

  }
}
</style>
