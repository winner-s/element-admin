<!--  -->
<template>
  <div class="">
    <el-card class="nullDiv">
      <div class="nullDiv">
        <img src="../../assets/img/js.png" alt="" />
        <div class="title">
          <div>项目正在建设中</div>
          <div>敬请关注</div>
          <div>
            <el-button type="primary" @click="toIndex">返回首页</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      toIndex(){
          this.$router.push({path:'/'})
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},

}
</script>
<style  scoped lang='scss'>
.nullDiv {
  position: relative;
  height: 648px;
  .title {
    position: absolute;
    top: 231px;
    left: 696px;
    & >:nth-child(1) {
      font-size: 36px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
    }
    & :nth-child(2) {
        margin-top: 21px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.45);
    }
    & :nth-child(3) {
        margin-top: 16px;
      
    }
  }
  img {
    position: absolute;
    left: 241px;
    top: 181px;
    width: 383px;
    height: 224px;
  }
}
</style>