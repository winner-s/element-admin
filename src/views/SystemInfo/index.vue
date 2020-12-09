<template>
  <div class="system_container">
    <div class="back" @click="goback">返回</div>
    <div class="main">
      <logo />
      <div class="iteration">
        <div v-show="stepFirst.showTip" class="tip_label_box tip_first animate__animated" :class="{animate__zoomInLeft: stepFirst.showTip}" @click="secondAnimate">
          <div class="tip_inner">
            <img src="~@a/system/tip_img_01.png">
          </div>
        </div>
        <div v-show="stepSecond.showTip" class="tip_label_box tip_second animate__animated" :class="{animate__zoomInLeft: stepSecond.showTip}" @click="thirdAnimate">
          <div class="tip_inner">
            <img src="~@a/system/tip_img_02.png">
          </div>
        </div>
        <div class="step_01">
          <div class="step_inner">
            <div v-show="stepFirst.showLight" class="icon_light">
              <img src="~@a/system/icon_light.png">
            </div>
            <div v-show="stepFirst.showTop" class="top_icon animate__animated" :class="{animate__zoomInUp: stepFirst.showTop}" />
            <div v-show="stepFirst.showBottom" class="step_bottom animate__animated" :class="{animate__bounceInLeft: stepFirst.showBottom}">
              <div class="tip_box">
                <div class="tip">支撑服务</div>
                <div class="tip_small">传统结算</div>
                <div class="tip_small"> 本行账户</div>
              </div>
            </div>
            <div v-show="stepFirst.showBottom" class="step_label animate__animated" :class="{animate__fadeIn: stepFirst.showBottom}">网页版(线上实时)</div>
          </div>
        </div>
        <div class="step_02">
          <div class="step_inner">
            <div v-show="stepSecond.showLight" class="icon_light">
              <img src="~@a/system/icon_light.png">
            </div>
            <div v-show="stepSecond.showTop" class="top_icon animate__animated" :class="{animate__zoomInUp: stepSecond.showTop}" />
            <div v-show="stepSecond.showBottom" class="step_bottom animate__animated" :class="{animate__bounceInLeft: stepSecond.showBottom}">
              <div class="tip_box">
                <div class="tip">管理与控制</div>
                <div class="tip_small">流动性管理</div>
                <div class="tip_small">跨行账户</div>
              </div>
            </div>
            <div v-show="stepSecond.showBottom" class="step_label animate__animated" :class="{animate__fadeIn: stepSecond.showBottom}">客户端(银企直联)</div>
            <div v-show="stepSecond.showBottom" class="step_tip_outer animate__animated" :class="{animate__fadeIn: stepSecond.showBottom}">
              <div class="step_tip">企业端部署</div>
            </div>
          </div>
        </div>
        <div class="step_03" @click="goSecond">
          <div class="step_inner">
            <div class="tip_container">
              <div class="tip_inner">
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_01" :class="{animate__zoomInUp: stepThird.showTip}">中国银行</div>
                <div v-show="stepThird.showTip" class="line_box line_01" :class="{animate__fadeIn: stepThird.showTip}" />
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_02" :class="{animate__zoomInUp: stepThird.showTip}">招商银行</div>
                <div v-show="stepThird.showTip" class="line_box line_02" :class="{animate__fadeIn: stepThird.showTip}" />
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_03" :class="{animate__zoomInUp: stepThird.showTip}">中国农业银行</div>
                <div v-show="stepThird.showTip" class="line_box line_03" :class="{animate__fadeIn: stepThird.showTip}" />
                <div v-show="stepThird.showTip" class="line_box line_04" :class="{animate__fadeIn: stepThird.showTip}" />
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_04" :class="{animate__zoomInUp: stepThird.showTip}">工商银行</div>
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_05" :class="{animate__zoomInUp: stepThird.showTip}">浦发银行</div>
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_06" :class="{animate__zoomInUp: stepThird.showTip}">交通银行</div>
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_07" :class="{animate__zoomInUp: stepThird.showTip}">上海银行</div>
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_08" :class="{animate__zoomInUp: stepThird.showTip}">江苏银行</div>
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_09" :class="{animate__zoomInUp: stepThird.showTip}">民丰银行</div>
                <div v-show="stepThird.showTip" class="tip_box animate__animated tip_10" :class="{animate__zoomInUp: stepThird.showTip}">中国邮政银行</div>
              </div>
            </div>
            <div v-show="stepThird.showLight" class="icon_light">
              <img src="~@a/system/icon_light.png">
            </div>
            <div v-show="stepThird.showTop" class="top_icon animate__animated" :class="{animate__zoomInUp: stepThird.showTop}" />
            <div v-show="stepThird.showBottom" class="step_bottom animate__animated" :class="{animate__bounceInLeft: stepThird.showBottom}">
              <div class="tip_box">
                <div class="tip">价值创造</div>
                <div class="tip_small">财资管理</div>
                <div class="tip_small">多银行多币种</div>
                <div class="tip_small">一站式快速接入</div>
              </div>
            </div>
            <div v-show="stepThird.showBottom" class="step_label animate__animated" :class="{animate__fadeIn: stepThird.showBottom}">财资云</div>
            <div v-show="stepThird.showBottom" class="step_tip_outer animate__animated" :class="{animate__fadeIn: stepThird.showBottom}">
              <div class="step_tip">银行公有云</div>
            </div>
          </div>
        </div>
        <div class="arrow_box" :style="{width: arrowWidth, height: arrowHeight}" />
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
      arrowWidth: '0px',
      arrowHeight: '0px',
      stepFirst: {
        showBottom: false,
        showTop: false,
        showLight: false,
        showTip: false
      },
      stepSecond: {
        showBottom: false,
        showTop: false,
        showLight: false,
        showTip: false
      },
      stepThird: {
        showBottom: false,
        showTop: false,
        showLight: false,
        showTip: false
      }
    }
  },
  mounted() {
    this.firstAnimate()
    // document.getElementsByTagName('html')[0].setAttribute('style', 'transform:scale3d(.75,.75,1)')
  },
  methods: {

    goback() {
      this.$router.back(-1)
    },
    goSecond() {
      this.$router.push('/systemDetail')
    },
    firstAnimate() {
      this.stepFirst.showBottom = true
      setTimeout(() => {
        this.stepFirst.showTop = true
        setTimeout(() => {
          this.stepFirst.showLight = true
          setTimeout(() => {
            this.stepFirst.showTip = true
          }, 1000)
        }, 1000)
      }, 1000)
    },
    secondAnimate() {
      this.stepFirst.showTip = false
      this.arrowWidth = '750px'
      this.arrowHeight = '300px'
      setTimeout(() => {
        this.stepSecond.showBottom = true
        setTimeout(() => {
          this.stepSecond.showTop = true
          setTimeout(() => {
            this.stepSecond.showLight = true
            setTimeout(() => {
              this.stepSecond.showTip = true
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    },
    thirdAnimate() {
      this.stepSecond.showTip = false
      this.arrowWidth = '1160px'
      this.arrowHeight = '432px'
      setTimeout(() => {
        this.stepThird.showBottom = true
        setTimeout(() => {
          this.stepThird.showTop = true
          setTimeout(() => {
            this.stepThird.showLight = true
            setTimeout(() => {
              this.stepThird.showTip = true
            }, 1000)
          }, 1000)
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
.system_container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: url('~@a/system/bg_01.png') no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  .main {
    width: 1200px;
    height: 100%;
    transform:scale3d(.75,.75,1);
    margin-top: -85px;
    .iteration {
      position: relative;
      height: 904px;
      margin-top: -304px;
      // 第一步弹窗
      .tip_label_box {
        width: 512px;
        height: 383px;
        padding: 10px;
        background-image: url('~@a/system/icon_lefttop.png'), url('~@a/system/icon_righttop.png'),url('~@a/system/icon_rightbottom.png'),url('~@a/system/icon_leftbottom.png');
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
        background-size: 36px 36px, 36px 36px, 36px 36px, 36px 36px;
        background-position: left top, right top, right bottom, left bottom;
        &.tip_first {
          position: absolute;
          left: 335px;
          top: 317px;
          z-index: 5;
          img {
            width: 416px;
            height: 284px;
          }
        }
        &.tip_second {
          position: absolute;
          left: 743px;
          top: 164px;
          z-index: 5;
          img {
            width: 401px;
            height: 409px;
            margin-top: 43px;
          }
        }
        .tip_inner {
          width: 100%;
          height: 100%;
          position: relative;
          background: url('~@a/system/toast_bg.png') no-repeat;
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          &::before {
            content: '';
            display: block;
            width: 40px;
            height: 47px;
            background: url('~@a/system/toast_arrow.png') no-repeat;
            background-size: 100% 100%;
            position: absolute;
            left: -39px;
            top: 50%;
            margin-top: -23px;
          }
        }
      }
      // 第一步
      .step_01 {
        position: absolute;
        left: 0;
        bottom: 0;
        .step_inner {
          width: 100%;
          height: 100%;
          position: relative;
          .icon_light {
            width: 456px;
            height: 256px;
            position: absolute;
            left: -51px;
            top: -24px;
            z-index: 4;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
              animation: twinkle 2s infinite;
            }
          }
          .top_icon {
            width: 325px;
            height: 310px;
            background: url('~@a/system/step_01.png') no-repeat;
            background-size: 100% 100%;
            position: relative;
            z-index: 3;
          }
          .step_bottom {
            width: 325px;
            height: 249px;
            background: url('~@a/system/step_01_bottom.png') no-repeat center center;
            background-size: 209px 100%;
            margin-top: -85px;
            margin-left: 11px;
            position: relative;
            z-index: 2;
            .tip_box {
              width: 100%;
              text-align: center;
              color: #16DEEF;
              position: absolute;
              left: 0;
              top: 123px;
              .tip {
                font-size: 20px;
                line-height: 30px;
              }
              .tip_samll {
                font-size: 16px;
                line-height: 26px;
              }
            }
          }
          .step_label {
            width: 226px;
            line-height: 76px;
            font-size: 22px;
            margin-left: 65px;
            margin-top: 10px;
            text-align: center;
            color: #fff;
            background: linear-gradient(270deg, rgba(22, 224, 241, 0.5) 0%, rgba(11, 161, 238, 0.75) 50%, #0062EB 100%);
          }
        }
      }
      // 第二步
      .step_02 {
        position: absolute;
        left: 420px;
        bottom: 42px;
        .step_inner {
          width: 100%;
          height: 100%;
          position: relative;
          .icon_light {
            width: 456px;
            height: 256px;
            position: absolute;
            left: -51px;
            top: -24px;
            z-index: 4;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
              animation: twinkle 2s infinite;
            }
          }
          .top_icon {
            width: 325px;
            height: 310px;
            background: url('~@a/system/step_02.png') no-repeat;
            background-size: 100% 100%;
            position: relative;
            z-index: 3;
          }
          .step_bottom {
            width: 325px;
            height: 250px;
            background: url('~@a/system/step_02_bottom.png') no-repeat center center;
            background-size: 209px 100%;
            margin-top: -57px;
            margin-left: 11px;
            position: relative;
            z-index: 2;
            .tip_box {
              width: 100%;
              text-align: center;
              color: #16DEEF;
              position: absolute;
              left: 0;
              top: 100px;
              .tip {
                font-size: 20px;
                line-height: 30px;
              }
              .tip_samll {
                font-size: 16px;
                line-height: 26px;
              }
            }
          }
          .step_label {
            width: 226px;
            line-height: 76px;
            padding: 0 30px;
            font-size: 22px;
            margin-left: 55px;
            margin-top: 10px;
            color: #fff;
            text-align: center;
            background: linear-gradient(270deg, rgba(22, 224, 241, 0.5) 0%, rgba(11, 161, 238, 0.75) 50%, #0062EB 100%);
          }
        }
      }
      // 第三步
      .step_03 {
        position: absolute;
        left: 825px;
        bottom: 116px;
        .step_inner {
          width: 100%;
          height: 100%;
          position: relative;
          .tip_container {
            width: 700px;
            height: 256px;
            position: absolute;
            left: -175px;
            top: -75px;
            z-index: 2;
            .tip_inner {
              width: 100%;
              height: 100%;
              position: relative;
              .tip_box {
                width: 169px;
                height: 52px;
                line-height: 52px;
                text-align: center;
                color: #fff;
                background: url('~@a/system/tip_bg.png') no-repeat;
                background-size: 100% 100%;
                position: absolute;
                &.tip_01 {
                  left: 95px;
                  top: 5px;
                  z-index: 3;
                }
                &.tip_02 {
                  left: 75px;
                  top: 117px;
                  z-index: 3;
                }
                &.tip_03 {
                  right: 148px;
                  top: 5px;
                  z-index: 3;
                }
                &.tip_04 {
                  right: 119px;
                  bottom: 100px;
                  z-index: 3;
                }
                &.tip_05 {
                  width:140px;
                  height: 40px;
                  line-height: 40px;
                  left: 295px;
                  top: 3px;
                  z-index: 1;
                  opacity: 0.4;
                }
                &.tip_06 {
                  width:140px;
                  height: 40px;
                  line-height: 40px;
                  left: 195px;
                  top: 100px;
                  z-index: 1;
                  opacity: 0.4;
                }
                &.tip_07 {
                  width:140px;
                  height: 40px;
                  line-height: 40px;
                  left: 150px;
                  top: 162px;
                  z-index: 1;
                  opacity: 0.4;
                }
                &.tip_08 {
                  width:140px;
                  height: 40px;
                  line-height: 40px;
                  right: 100px;
                  top: 0px;
                  z-index: 1;
                  opacity: 0.4;
                }
                &.tip_09 {
                  width:140px;
                  height: 40px;
                  line-height: 40px;
                  right: 100px;
                  bottom: 50px;
                  z-index: 1;
                  opacity: 0.4;
                }
                &.tip_10 {
                  width:140px;
                  height: 40px;
                  line-height: 40px;
                  left: 10px;
                  bottom: 30px;
                  z-index: 1;
                  opacity: 0.4;
                }

              }
              .line_box {
                position: absolute;
                z-index: 2;
                &.line_01 {
                  width: 67px;
                  height: 195px;
                  left: 257px;
                  top: 29px;
                  background: url('~@a/system/line_06.png') no-repeat;
                  background-size: 100% 100%;
                }
                &.line_02 {
                  width: 98px;
                  height: 71px;
                  left: 181px;
                  bottom: 20px;
                  background: url('~@a/system/line_03.png') no-repeat;
                  background-size: 100% 100%;
                }
                &.line_03 {
                  width: 52px;
                  height: 195px;
                  right: 281px;
                  bottom: 32px;
                  background: url('~@a/system/line_05.png') no-repeat;
                  background-size: 100% 100%;
                }
                &.line_04 {
                  width: 51px;
                  height: 123px;
                  right: 250px;
                  bottom: 45px;
                  background: url('~@a/system/line_01.png') no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
          }
          .icon_light {
            width: 456px;
            height: 256px;
            position: absolute;
            left: -24px;
            top: -22px;
            z-index: 4;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
              animation: twinkle 2s infinite;
            }
          }
          .top_icon {
            width: 325px;
            height: 310px;
            background: url('~@a/system/step_03.png') no-repeat;
            background-size: 100% 100%;
            position: relative;
            z-index: 3;
          }
          .step_bottom {
            width: 325px;
            height: 300px;
            background: url('~@a/system/step_03_bottom.png') no-repeat center center;
            background-size: 209px 100%;
            margin-top: -61px;
            margin-left: 11px;
            position: relative;
            z-index: 2;
            .tip_box {
              width: 100%;
              text-align: center;
              color: #16DEEF;
              position: absolute;
              left: 0;
              top: 124px;
              .tip {
                font-size: 20px;
                line-height: 30px;
              }
              .tip_samll {
                font-size: 16px;
                line-height: 26px;
              }
            }
          }
          .step_label {
            width: 226px;
            line-height: 76px;
            padding: 0 30px;
            font-size: 22px;
            margin-left: 55px;
            margin-top: 10px;
            color: #fff;
            text-align: center;
            background: linear-gradient(270deg, rgba(22, 224, 241, 0.5) 0%, rgba(11, 161, 238, 0.75) 50%, #0062EB 100%);
          }
        }

      }
      // 箭头控制
      .arrow_box {
        width: 0px;
        height: 0px;
        position: absolute;
        left: 20px;
        bottom: 200px;
        transition: width, height 2s, .74s linear;
        background: url('~@a/system/arrow.png') no-repeat right top;
        background-size: 100% auto;
      }
    }
  }
}
.step_tip_outer {
  width: 218px;
  height: 48px;
  background-image: url('~@a/system/icon_lefttop.png'), url('~@a/system/icon_righttop.png'),url('~@a/system/icon_rightbottom.png'),url('~@a/system/icon_leftbottom.png');
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 8px 8px, 8px 8px, 8px 8px, 8px 8px;
  background-position: left top, right top, right bottom, left bottom;
  margin: 0 auto;
  margin-top: 21px;
  padding-top: 1px;
  .step_tip {
    width: 214px;
    height: 46px;
    line-height: 46px;
    font-size: 16px;
    color: #fff;
    background: #005BEA;
    text-align: center;
    margin: 0 auto;
  }
}
// 光点闪烁动画
@keyframes twinkle {
  0% {
    width:100%;
    height: 100%;
  }
  50% {
    width:50%;
    height: 50%;
  }
  100% {
    width:100%;
    height: 100%;
  }
}
</style>
