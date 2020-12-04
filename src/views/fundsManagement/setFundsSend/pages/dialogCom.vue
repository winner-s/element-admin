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
      <div class="title"><i class="el-icon-user" /> 策略主单</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item label="策略编号：" prop="clbh" class="formItem">
            <el-input
              v-model="form.clbh"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="策略名称：" prop="clmc" class="formItem">
            <el-input
              v-model="form.clmc"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="策略模式：" prop="clms">
            <el-input
              v-model="form.clms"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <div class="title"><i class="el-icon-user" /> 上级单位信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="上级单位编号：" prop="sjdwbh">
            <el-input
              v-model="form.sjdwbh"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上级单位名称：" prop="sjdwmc">
            <el-input
              v-model="form.sjdwmc"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="上级银行账号：" prop="sjyhzh">
            <el-input
              v-model="form.sjyhzh"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上级账号名称：" prop="sjzhmc">
            <el-input
              v-model="form.sjzhmc"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <Table
      :table-data="form.childerList"
      :table-list-data="tableListData"
      :table-btn="tableBtn"
      :current-data="currentData"
      @onPageChange="onPageChange"
      @onSizeChange="onSizeChange"
      @handleDelete="handleDelete"
    />

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button
        type="primary"
        @click="dialogObj.show = false"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import Table from '@c/common/table'
export default {
  components: { Table },
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {

      tableListData: [],
      tableBtn: [],
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },

      placeholderTips: placeholderTips,
      form: {
        clbh: '',
        clmc: '',
        clms: '',
        sjdwbh: '',
        sjdwmc: '',
        sjyhzh: '',
        sjzhmc: '',
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
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },

      {
        prop: 'dwmc',
        width: '150',
        label: '单据名称',
        fixed: 'left'
      },
      {
        prop: 'yhzh',
        width: '150',
        label: '银行账号',
        fixed: 'left'
      },
      {
        prop: 'zhmc',
        width: '',
        label: '账户名称'
      },
      {
        prop: 'khhmc',
        width: '',
        label: '开户行名称'
      },
      {
        prop: 'zhzt',
        width: '',
        label: '账户状态'
      },
      {
        prop: 'zhyt',
        width: '',
        label: '账户用途'
      },
      { label: '操作', type: 'btn', width: '200', fixed: 'right' }
    ]

    // 按钮
    this.tableBtn = [

      {
        name: '删 除',
        btnType: 'danger',
        handleFn: 'handleDelete'
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    // 删除产品
    handleDelete(v) {
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.form.childerList.splice(this.form.childerList.indexOf(v), 1)

        this.currentData.total = this.form.childerList.length
      })
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
