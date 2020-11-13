<!--  -->
<template>
  <div class="headerMessage">
    <el-dropdown>
      <div class="message">
        <el-badge is-dot @click.native="toggleMsgShow">
          <i class="el-icon-message-solid iconFont"></i>
        </el-badge>
      </div>
      <el-dropdown-menu slot="dropdown">
        <div class="dorpdown">
            <div class="top">
                <div>通知(4)</div>
                <div></div>
            </div>
            <div class="zhon">
                <div v-for="item in 4" :key="item">
                    <div class="title">
                        <div>账户通知</div>
                        <div>2020-11-10 17:12</div>
                    </div>
                    <div class="content">尊敬的张强账户：23233130001账号的本月合计发生额已触发监控：大额资金监控，请登陆系…</div>
                </div>
            </div>
            <div class="foot">
                <div><button class="right_line">清空通知</button></div>
                <div><button>查看更多</button></div>
            </div>
        </div>
      </el-dropdown-menu>
    </el-dropdown>
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
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
}
</script>
<style   lang='scss'>
.el-dropdown-menu{
    padding: 0 !important;
}
.dorpdown{
     width: 346px;
     height: 490px;
     .foot{
         .right_line{
             border-right:1px solid #E3E3E3 ;
         }
         & >div{
             display: inline;
             border-bottom: 1px solid #E3E3E3;
         }
         & button{
             width: 50%;
             height: 45px;
             background-color: #FFFFFF;
             border: 0px;
         }
     }
     .zhon{
         overflow: auto;
         height: 400px;
         & >div:hover{
             background-color: #EFF7FF;
         }
         & >div{
             height: 25%;
             padding: 16px 20px;
             border-bottom: 1px solid #E3E3E3;
             overflow: hidden;

             .title{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #666666;
                & :nth-child(1){
                    margin-bottom: 8px;
                }
               
             }
             .content{     
                width: 100%;
                height: 44px;     
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: bold;
                color: #333333;
                overflow: hidden;
                text-overflow: ellipsis;
             }
         }
     }
    .top{
        border-bottom: 1px solid #E8E8E8;
        height: 48px;
        width: 100%;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        
    }
}
.iconFont {
  font-size: 20px;
  height: 50px;
  vertical-align: initial;
  line-height: 50px;
}
.el-badge__content.is-fixed.is-dot {
  right: 9px;
  top: 16px;
}
</style>