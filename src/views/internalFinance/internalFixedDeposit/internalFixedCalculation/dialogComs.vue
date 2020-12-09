<!--  -->
<template>
  <el-dialog
    :title="dialogObj.title"
    append-to-body
    :visible.sync="dialogObj.show"
    :close-on-click-modal="false"
    width="1000px"
    class="abow_dialog"
  >
    <el-form
      v-if="dialogObj.show"
      ref="form"
      :model="form"
      label-width="140px"
      label-position="left"
      :rules="rules"
      :disabled="dialogObj.read"
      status-icon
      class="form"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="存款到期日：" prop="ckdqr" class="formItem">
            <el-date-picker
              v-model="form.ckdqr"
              style="width: 200px"
              type="date"
              placeholder="请选择存款到期日"
              size="mini"
              :disabled="true"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="匡算日期：" prop="ksrq" class="formItem">
            <el-date-picker
              v-model="form.ksrq"
              style="width: 200px"
              type="date"
              placeholder="请选择匡算日期"
              size="mini"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="title"><i class="el-icon-user" /> 存款利息明细</div>
    <Table
      :table-data="form.childerList"
      :table-list-data="tableListData"
      :table-btn="tableBtn"
      :current-data="currentData"
      @onPageChange="onPageChange"
      @onSizeChange="onSizeChange"
    />
    <div class="dialog-footer">
      <el-button @click="dialogObj.show = false">返 回</el-button>
    </div>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import Table from '@c/common/table'
import { DEPOSITTERMLIST, LLZHTSLIST, DQXCFSLIST } from '@u/wordbook'
export default {
  components: { Table },
  // import引入的组件需要注入到对象中才能使用
  props: {
    dialogObj: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    // 这里存放数据
    return {
      depositTermList: DEPOSITTERMLIST,
      llzhtsList: LLZHTSLIST,
      dqxcfsList: DQXCFSLIST,
      placeholderTips: placeholderTips,
      tableListData: [],
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },
      form: {
        ckdqr: '',
        ksrq: '',
        childerList: []
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    'dialogObj.show'(val) {
      if (val) {
        this.initDialog()
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      {
        prop: 'lxly',
        width: '150',
        label: '利息来源'
      },
      {
        prop: 'rq',
        width: '150',
        label: '日期'
      },
      {
        prop: 'lx',
        width: '150',
        label: '利息'
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    // 分页
    onPageChange(val) {
      console.log(val)
      var end = val * this.currentData.size
      var start = (val - 1) * this.currentData.size

      this.tableData = this.list.slice(start, end)

      this.currentData.currentPage = val
    },
    onSizeChange(val) {
      this.currentData.size = val
      this.currentData.currentPage = 1
      this.getList()
    },
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = ''
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
.form {
  .el-form-item {
    margin: 0px !important;
  }
}

.title {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
}
</style>
