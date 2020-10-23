<!--  -->
<template>
<div class=''>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card class="box-card">
        <div class="top_div">
            <p>贷款发生额</p>
            <p>￥126,560</p>
            <p>同期对比 <span class="green">12%</span></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card">
        <div class="top_div">
            <p>结算笔数</p>
            <p>8,846</p>
            <p>同期对比 <span class="red">11%</span></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card">
        <div class="top_div">
            <p>结算金额</p>
            <p>￥126,560</p>
            <p>同期对比 <span class="red">20%</span></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card">
        <div class="top_div">
            <p>存贷款比例</p>
            <p>78%</p>
            <p>同期对比 <span class="green">12%</span></p>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="20" style="margin-top:23px">
    <el-col :span="12">
        <el-card class="left">
            <div slot="header" class="clearfix">
              <span>常用功能</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
          <div class="common">
            <div v-for="item in 12" :key='item'>
              <img src="../../assets/img/1.png" >
              <p>1</p>
            </div>
          </div>
        </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="right">
        
          <!-- v-model="activeName" @tab-click="handleClick" -->
          <el-tabs >  
            <el-tab-pane label="用户管理" name="first">
              <div v-for="item in 6" :key="item" class="right_div">
                <div>
                  【账户开户申请】KH20072414393322
                </div>
                <div>
                  2020-11-20
                </div>
              </div>

            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
          </el-tabs>
          <p style="margin-bottom:22px"> <span style="float: right; padding: 3px 0">查看更多></span></p>
      </el-card>
    </el-col>
  </el-row>


  <el-row :gutter="20" style="margin-top:23px">
    <el-col :span="12">
        <el-card class="left" style="height:361px">
            <div slot="header" class="clearfix">
              <span>余额统计表</span>
              <el-select v-model="value" placeholder="请选择" style="float: right; " size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          <div >
            <bar-charts class="pieCharts" :tableData="tableData"></bar-charts>
          </div>
        </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="right" style="height:361px">
            <div slot="header" class="clearfix">
              <span>资产统计表</span>
              <el-select v-model="value" placeholder="请选择" style="float: right; " size="mini">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          <div >
              <pie-charts class="pieCharts" :tableData="tableData"></pie-charts>
          </div>
        </el-card>
    </el-col>
  </el-row>
  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import PieCharts from "./components/PieCharts";
import BarCharts from "./components/BarCharts";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {PieCharts,BarCharts},
  data() {
    //这里存放数据
    return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        tableData:[
          {
            value: 10,
            name:'北京银行'
          },
          {
            value: 20,
            name:'中国银行'
          },
          {
            value: 30,
            name:'建设银行'
          },
          {
            value: 40,
            name:'工商银行'
          },
        ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  }
}
</script>
<style  scoped lang="scss">

p{
  margin: 0;
}
.right_div{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  & :nth-child(1){
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
  }
  & :nth-child(2){
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
}

.common{
  width: 100%;
  padding-left:20px ;
  div{
    display: inline-block;
    width: 38px;
    height: 38px;
    margin-right: 80px;
    margin-bottom: 40px;
    img{
      width: 38px;
      height: 38px;
    }
    p{
      margin: 0 !important;
      text-align: center;
    }
  }
}

.box-card{
  width: 100% ;
  height: 158px;
  background-image: url('../../assets/img/topDiv.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
 
}
.top_div{
  width: 100%;
  & :nth-child(1){
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
  }
  & :nth-child(2){
    margin-top: 14px;
    font-size: 30px;
    font-family: HelveticaNeue;
    color: #333333;
  }
  & :nth-child(3){
    margin-top: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    span{
      margin-left: 8px;
    }
    .green{
      font-size: 14px;
      font-family: HelveticaNeue;
      color: #52C41A;
    }
    .red{
      font-size: 14px;
      font-family: HelveticaNeue;
      color: #F5222D;
    }
  }
  p{
    margin: 0;
  }
}
</style>