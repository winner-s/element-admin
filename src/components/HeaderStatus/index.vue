<!--  -->
<template>
  <div class="">
    <el-dropdown>
      <span class="text">
        前置机状态监控:<span>正常</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <div class="zhi">
          <pia-charts class="pieCharts" :table-data="status" />
        </div>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import piaCharts from './piaCharts'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    piaCharts
  },
  data() {
    // 这里存放数据
    return {
      // 前置机状态图表  值
      status: [
        {
          value: 10,
          name: '故障'
        },
        {
          value: 20,
          name: '繁忙'
        },
        {
          value: 30,
          name: '闲置'
        }
      ]
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {}
}
</script>
<style  scoped lang='scss'>
.zhi{
  width: 224px;
  height: 154px;
}

.text{
  cursor: pointer;
  margin-right: 10px;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    width: 1px;
    height: 25px;
    top: -5px;
    right: -15px;

    background-color: #E3E3E3;
  }
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;

  span{

    margin-left: 2px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #1FACA2;
  }
}
</style>
