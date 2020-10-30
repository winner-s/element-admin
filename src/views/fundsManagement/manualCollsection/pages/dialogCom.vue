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
            prop="sysStudentNumber"
            class="formItem"
          >
            <el-input
              v-model="form.sysStudentNumber"
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
            prop="sysStudentName"
            class="formItem"
          >
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="策略模式：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="上级单位编号：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上级单位名称：" prop="sysStudentName">
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="上级银行账号：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上级账号名称：" prop="sysStudentName">
            <el-input
              v-model="form.sysStudentName"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

     

      <Table
            :table-data="tableDetailData"
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
  components: {Table},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      tableListData:[],
      placeholderTips: placeholderTips,
      form: {},
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0,
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      
      {
        prop: 'documentNumber',
        width: '150',
        label: '单位名称',
        fixed: 'left'
      },
      {
        prop: 'accountPhone',
        width: '150',
        label: '银行账号',
        fixed: 'left'
      },
      {
        prop: 'accountName',
        width: '',
        label: '账户名称'
      },
      {
        prop: 'bankName',
        width: '',
        label: '银行类型'
      },
      {
        prop: 'bankOpenName',
        width: '',
        label: '账户余额(元)'
      },
      {
         type: 'input',
        prop: 'status',
        width: '',
        label: '归集金额(元)'
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {}
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
