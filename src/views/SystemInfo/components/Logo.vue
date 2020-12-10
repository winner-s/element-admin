<template>
  <div class="system_logo">
    <div class="system_title">建行企业财资管理</div>
    <div class="system_label">构建卓越安全的企业财资管理体系、为企业数字化转型赋能</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.system_logo {
  background: url('~@a/system/icon_light.png') no-repeat left bottom;
  background-size: 456px 256px;
  padding-bottom: 135px;
  overflow: hidden;
  .system_title {
    font-size: 70px;
    line-height: 90px;
    color: #fff;
    font-weight: 600;
    // padding-top: 114px;
  }
  .system_label {
    display: inline-block;
    font-size: 20px;
    padding: 0 100px 0 20px;
    color: #fff;
    line-height: 54px;
    font-weight: 600;
    float: left;
    background: linear-gradient(270deg, rgba(22, 224, 241, 0) 0%, rgba(11, 161, 238, 0.75) 50%, #0062EB 100%);
  }
}
</style>
