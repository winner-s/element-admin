<!--  -->
<template>
  <el-dialog
    :title="dialogObj.title"
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
      :inline-message="true"
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
              :disabled="true"
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

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="策略模式：" prop="clms">
            <el-select
              v-model="form.clms"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in strategyModelList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
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
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="上级银行账号：" prop="sjyhzh">
            <el-select
              v-model="form.sjyhzh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="sjyhzhChange"
            >
              <el-option
                v-for="item in sjyhzhList"
                :key="item.id"
                :label="item.sjyhzh"
                :value="item.sjyhzh"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上级账号名称：" prop="sjzhmc">
            <el-input
              v-model="form.sjzhmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="dialog-footer">

      <el-button
        v-if="xyb == false"
        type="primary"
        @click="xybClick"
      >下一步</el-button>
      <el-button
        v-if="xyb == true"
        type="primary"
        @click="insert"
      >新增账户</el-button>
      <el-button type="primary" @click="sub">保存</el-button>
      <el-button @click="dialogObj.show = false">取消</el-button>
    </div>

    <Table
      v-show="xyb"
      :table-data="form.childerList"
      :table-list-data="tableListData"
      :table-btn="tableBtn"
      :current-data="currentData"
      @onPageChange="onPageChange"
      @onSizeChange="onSizeChange"
      @handleDelete="handleDelete"
    />

    <dialog-com :dialog-obj-nei="dialogObjNei" @handleCommit="handleCommit" />
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import Table from '@c/common/table'
import dialogCom from './dialogComNei'
import { STRATEGYMODEL, STRATEGYMODELLIST } from '@u/wordbook'
export default {
  components: { Table, dialogCom },
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      dialogObjNei: {
        id: '',
        title: 'aaa',
        read: false,
        show: false,
        form: {}
      },
      sjyhzhList: [
        {
          sjyhzh: '202010101148',
          sjyhmc: '测试单位'
        }
      ],
      strategyModelList: STRATEGYMODELLIST,
      placeholderTips: placeholderTips,
      form: {
        clbh: 'ZJGJ20111715482531',
        clmc: '',
        clms: '',
        sjdwbh: '',
        sjdwmc: '',
        sjyhzh: '',
        sjzhmc: '',
        childerList: []
      },
      rules: {
        clbh: [{ required: true, message: '请填写单据编号', trigger: 'blur' }],
        clmc: [{ required: true, message: '请填写策略名称', trigger: 'blur' }],
        clms: [{ required: true, message: '请填写策略模式', trigger: 'blur' }],
        sjyhzh: [
          { required: true, message: '请填写上级银行账号', trigger: 'blur' }
        ]
      },
      xyb: false,
      tableData: [],
      tableListData: [],
      tableBtn: [],
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
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
        prop: 'khhmc',
        width: '150',
        label: '开户行名称'
      },
      {
        prop: 'zhzt',
        width: '150',
        label: '账户状态'
      },
      {
        prop: 'zhyt',
        width: '150',
        label: '账户用途'
      },
      { label: '操作', type: 'btn', width: '200', fixed: 'right' }
    ]
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
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.addSub()
          }
        }
      })
    },
    updateSub() {
      this.$emit('updateSub', this.form)
      this.dialogObj.show = false
    },
    addSub() {
      this.$emit('addSub', JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show = false
    },
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach(item => {
          this.form[item] = ''
        })
        this.xyb = false
        this.form.clbh = 'ZJGJ20111715482531'
      }
    },
    handleCommit(res) {
      this.form.childerList = res
    },
    insert() {
      console.log('----------------------')
      this.dialogObjNei.id = ''
      this.dialogObjNei.read = false
      this.dialogObjNei.show = true
      this.dialogObjNei.title = '选择银行账号列表'
    },
    // 过滤
    strategyModel(val) {
      return STRATEGYMODEL[val]
    },
    sjyhzhChange(val) {
      const this_ = this
      this.sjyhzhList.forEach((item, index) => {
        if (item.sjyhzh == val) {
          this_.form.sjzhmc = item.sjyhmc
        }
      })
    },
    // 单击下一步
    xybClick() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.xyb = true
        }
      })
    },
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
    }
  }
}
</script>
<style scoped lang="scss">
.dialog-footer {
  margin: 10px 0px;
}
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
