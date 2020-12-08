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
          <el-form-item
            label="策略编号："
            prop="clbh"
            class="formItem"
          >
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
          <el-form-item
            label="策略名称："
            prop="clmc"
            class="formItem"
          >
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

      <Table
        :table-data="form.childerList"
        :table-list-data="tableListData"
        :current-data="currentData"
        @onPageChange="onPageChange"
        @onSizeChange="onSizeChange"
      />
    </el-form>

    <div class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button
        type="primary"
        @click="dialogObj.show = false"
      >确 定</el-button>
    </div>
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
      placeholderTips: placeholderTips,
      form: {
        clmh: '',
        clmc: '',
        clms: '',
        sjdwbh: '',
        sjdwmc: '',
        sjyhzh: '',
        sjzhmc: '',
        childerList: []
      },
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0
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
        label: '单位名称',
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
        width: '150',
        label: '账户名称'
      },
      {
        prop: 'yhlx',
        width: '150',
        label: '银行类型'
      },
      {
        prop: 'zhye',
        width: '150',
        label: '账户余额(元)'
      },
      {
        type: 'input',
        prop: 'gjje',
        width: '150',
        label: '归集金额(元)'
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach(item => {
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
