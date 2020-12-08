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
      :inline-message="true"
    >
      <div class="title"><i class="el-icon-user" /> 基本信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="单据编号："
            prop="djbh"
            class="formItem"
          >
            <el-input
              v-model="form.djbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单据日期" prop="djrq" class="formItem">
            <el-date-picker
              v-model="form.djrq"
              style="width: 200px"
              type="date"
              placeholder="请选择单据日期"
              size="mini"
              :disabled="true"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="业务单位：" prop="ywdw">
            <el-input
              v-model="form.ywdw"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="付款用途：" prop="fkyt">
            <el-select
              v-model="form.fkyt"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in purposeList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>

          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" />付款方信息</div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="付款方银行账号：" prop="fkfyhzh">

            <el-select
              v-model="form.fkfyhzh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="fkfchange"
            >
              <el-option
                v-for="item in fkfyhzhList"
                :key="item.fkfyhzh"
                :label="item.fkfyhzh"
                :value="item.fkfyhzh"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="付款方银行省：" prop="fkfyhs">
            <el-input
              v-model="form.fkfyhs"
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
          <el-form-item label="付款单位：" prop="fkdw">
            <el-select
              v-model="form.fkdw"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              :disabled="true"
            >
              <el-option
                v-for="item in backList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="付款方银行市：" prop="fkfyhshi">
            <el-input
              v-model="form.fkfyhshi"
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
          <el-form-item label="付款方账户名称：" prop="fkfzhmc">
            <el-input
              v-model="form.fkfzhmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="付款方开户行名称：" prop="fkfkhhmc">
            <el-select
              v-model="form.fkfkhhmc"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              :disabled="true"
            >
              <el-option
                v-for="item in accountUsageList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="付款方银行名称：" prop="fkfyhmc">
            <el-input
              v-model="form.fkfyhmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="对私参数：" prop="dscs">
            <el-select
              v-model="form.dscs"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in currencyList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>

    <div class="dialog-footer">

      <el-button type="primary" @click="sub">保存</el-button>
      <el-button type="primary">保存并提交</el-button>
      <el-button @click="dialogObj.show = false">取 消</el-button>
    </div>
    <div class="title"><i class="el-icon-user" />薪资代发数据</div>
    <Table
      :table-data="tableData"
      :table-list-data="tableListData"
      :table-btn="tableBtn"
      :current-data="currentData"
      @onPageChange="onPageChange"
      @onSizeChange="onSizeChange"
      @handleEdit="handleEdit"
      @handleViewOther="handleViewOther"
      @handleDelete="handleDelete"
    />

  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import Table from '@c/common/table'
import {
  UNITNOLIST,
  BACKLIST,
  CURRENCYLIST,
  ACCOUNTUSAGELIST,
  DIRECTLIST,
  PURPOSELIST
} from '@u/wordbook'
export default {
  components: { Table },
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      fkfyhzhList: [
        {
          fkfyhzh: '187595045122',
          fkfyhs: '湖南省',
          fkdw: '测试单位',
          fkfyhshi: '株洲市',
          fkfzhmc: '张三',
          fkfkhhmc: '株洲分行',
          fkfyhmc: '工商银行',
          dscs: 'EC'
        }
      ],
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },
      // 表格
      tableData: [],
      tableBtn: [],
      rules: {
        fkyt: [
          { required: true, message: '请选择付款用途', trigger: 'blur' }
        ],
        fkfyhzh: [
          { required: true, message: '请选择付款方银行账号', trigger: 'blur' }
        ],
        dscs: [
          { required: true, message: '请选择对私参数', trigger: 'blur' }
        ]
      },

      placeholderTips: placeholderTips,
      form: {
        djbh: '',
        djrq: '',
        ywdw: '',
        fkfyhzh: '',
        fkfyhs: '',
        fkfyhshi: '',
        fkdw: '',
        fkfzhmc: '',
        fkfkhhmc: '',
        fkfyhmc: '',
        dscs: ''
      },
      unitNoList: UNITNOLIST,
      backList: BACKLIST,
      currencyList: CURRENCYLIST,
      accountUsageList: ACCOUNTUSAGELIST,
      directList: DIRECTLIST,
      purposeList: PURPOSELIST
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
        prop: 'documentNumber',
        width: '150',
        type: 'a',
        label: '工号',
        fixed: 'left'
      },
      {
        prop: 'accountPhone',
        width: '150',
        label: '收款方账号',
        fixed: 'left'
      },
      {
        prop: 'accountName',
        width: '150',
        label: '收款方账户名称'
      },
      {
        prop: 'bankName',
        width: '150',
        label: '开户行名称'
      },
      {
        prop: 'bankOpenName',
        width: '150',
        label: '开户行类型'
      },
      {
        prop: 'status',
        width: '150',
        label: '开户行(省)'
      },
      {
        prop: 'connection',
        width: '150',
        label: '开户行(市)'
      },
      {
        prop: 'currency',
        width: '150',
        label: '币种'
      },
      {
        prop: 'unitName',
        width: '150',
        label: '支付类型'
      },
      {
        prop: 'connection',
        width: '150',
        label: '金额(元)'
      },
      {
        prop: 'connection',
        width: '150',
        label: '摘要'
      },
      {
        prop: 'connection',
        width: '150',
        label: '联行号'
      },
      {
        prop: 'connection',
        width: '150',
        label: '备注'
      }
    ]
    // 按钮
    this.tableBtn = []
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    fkfchange(res) {
      console.log(res)
      this.fkfyhzhList.forEach((item, index) => {
        if (item.fkfyhzh == res) {
          const zhi = this.fkfyhzhList[index]
          Object.keys(item).forEach(val => {
            this.form[val] = zhi[val]
          })
        }
      })
    },
    initDialog() {
      console.log(this.dialogObj.form)
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })

        // this.form = this.dialogObj.form
      }
    },
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
      this.$emit('updateSub', JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show = false
    },
    addSub() {
      this.$emit('addSub', this.form)
      this.dialogObj.show = false
    },

    handleRemove(file, fileList) {
      console.log(file, fileList)
      this.fileList = fileList
    },
    handleSuccess(res, file) {
      console.log(file)
      this.fileList.push(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>
<style scoped lang="scss">
.form {
  .el-form-item {
    margin-bottom: 0px !important;
  }

}
.dialog-footer{
  margin-bottom: 20px;
}
.title {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
}
</style>
