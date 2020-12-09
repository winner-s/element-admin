<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>薪资代发导入</span>
      </div>
      <div>
        <div class="text">
          <a>下载模板</a>
          <p>提示：选择文件前，请先下载模板;点击导入才能导入成功</p>
        </div>
        <div class="bto">
          <upload-excel
            import-text="选择文件"
            :on-success="generateData"
          />

          <el-button size="mini" type="success" @click="add">导入</el-button>
        </div>

        <el-table :data="dataList" border style="width: 100%" size="mini">
          <el-table-column
            align="center"
            width="50"
            type="index"
          />
          <el-table-column
            v-for="item in tabHeader"
            :key="item"
            :prop="item"
            align="center"
            :label="item"
          />
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import UploadExcel from '@/components/UploadExcel'

export default {
  // import引入的组件需要注入到对象中才能使用
  components: { UploadExcel },
  data() {
    // 这里存放数据
    return {
      dataList: [],
      tabHeader: [
        '工号',
        '收款方账号',
        '收款方账户名称',
        '开户行名称',
        '开户行类型',
        '开户行(省)',
        '开户行(市)',
        '币种',
        '支付类型'
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
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    generateData({ header, results }) {
      this.tabHeader = header
      this.dataList = results
    },
    add() {
      if (this.dataList.length === 0) {
        this.$confirm('请选择导入文件', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          showCancelButton: false
        })
      } else {
        this.$confirm('您确认导入嘛？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '导入成功!'
            })
            this.dataList = []
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消导入'
            })
          })
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.bto {
  padding-bottom: 20px;
}
.text {
  padding-left: 10px;
  p {
    color: red;
    font-size: 12px;
  }
  a {
    display: inline-block;
    color: #1890ff;
    text-decoration: underline;
    font-size: 12px;
  }
}
</style>
