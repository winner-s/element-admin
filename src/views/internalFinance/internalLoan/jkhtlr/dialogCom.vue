<!--  -->
<template>
  <el-dialog
    :title="dialogObj.title"
    append-to-body
    center
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
      <div class="title"><i class="el-icon-user" /> 借款合同信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item label="合同编号：" prop="htbh" class="formItem">
            <el-input
              v-model="form.htbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="合同名称：" prop="htmc" class="formItem">
            <el-input
              v-model="form.htmc"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款类型：" prop="dklx">
            <el-select
              v-model="form.dklx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in dklxList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="债权人：" prop="zqr">
            <el-select
              v-model="form.zqr"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in zqrList"
                :key="item.id"
                :label="item.zqr"
                :value="item.zqr"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="债务人：" prop="zwr">
            <el-select
              v-model="form.zwr"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in zwrList"
                :key="item.id"
                :label="item.zwr"
                :value="item.zwr"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款币种：" prop="dkbz">
            <el-select
              v-model="form.dkbz"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in currencyList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="贷款期限：" prop="dkqx">
            <el-select
              v-model="form.dkqx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in dkqxList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="开始日期：" prop="ksrq">
            <el-date-picker
              v-model="form.ksrq"
              type="date"
              placeholder="选择日期"
              style="width: 200px"
              size="mini"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="结束日期：" prop="jsrq">
            <el-date-picker
              v-model="form.jsrq"
              type="date"
              placeholder="选择日期"
              style="width: 200px"
              size="mini"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="借款金额(元)：" prop="jkje">
            <el-input
              v-model="form.jkje"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="金额大写：" prop="jedx">
            <el-input
              v-model="form.jedx"
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
          <el-form-item label="利率转换天数：" prop="llzhts">
            <el-select
              v-model="form.llzhts"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in llzhtsList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="计息方式：" prop="jxfs">
            <el-select
              v-model="form.jxfs"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in jxfsList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="合同签订利率：" prop="htqdll">
            <el-input
              v-model="form.htqdll"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="付息方式：" prop="fxfs">
            <el-select
              v-model="form.fxfs"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in fxfsList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还本方式" prop="hbfs">
            <el-select
              v-model="form.hbfs"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in hbfsList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="备注：" prop="bz">
            <el-input
              v-model="form.bz"
              style="width: 83%"
              type="textarea"
              :rows="3"
              size="mini"
              maxlength="50"
              show-word-limit
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title">
        <i class="el-icon-user" />
        附近(请上传借款合同、保证合同、借款人/担保人董事会决议、抵/质押合同)
      </div>

      <el-row>
        <el-col>
          <el-form-item label="附件：" prop="sysFamilyAddress">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
            >
              <el-button size="small" type="primary">上传附件(0)条</el-button>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" /> 担保合同列表</div>
      
    </el-form>

    <div class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button type="primary" @click="sub"
        >确 定</el-button
      >
      <el-button type="primary" @click="add">新增担保合同</el-button>
    </div>

    <Table
        :table-data="form.childerList"
        :table-list-data="tableListData"
        :table-btn="tableBtn"
        :current-data="currentData"
        @onPageChange="onPageChange"
        @onSizeChange="onSizeChange"
        @handleEdit="handleEdit"
        @handleStatus="handleStatus"
        @handleViewOther="handleViewOther"
        @handleDelete="handleDelete"
      />

    <dialog-com :dialog-obj="dialogObjN" />
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import {LLZHTSLIST,CURRENCYLIST,HBFSLIST,FXFSLIST,JXFSLIST,DKQXLIST} from '@u/wordbook'
import { placeholderTips } from '@u/validate'
import Table from '@c/common/table'
import dialogCom from './dialogComN'
export default {
  components: { Table, dialogCom },
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      rules:{
        htmc:[
          { required: true, message: '请填写合同名称', trigger: 'blur' },
        ],
        dklx:[
          { required: true, message: '请填写贷款类型', trigger: 'blur' },
        ],
        zqr:[
          { required: true, message: '请填写债权人', trigger: 'blur' },
        ],
        zwr:[
          { required: true, message: '请填写债务人', trigger: 'blur' },
        ],
        dkbz:[
          { required: true, message: '请填写贷款币种', trigger: 'blur' },
        ],
        dkqx:[
          { required: true, message: '请填写贷款期限', trigger: 'blur' },
        ],
        ksrq:[
          { required: true, message: '请填写开始日期', trigger: 'blur' },
        ],
        jsrq:[
          { required: true, message: '请填写结束日期', trigger: 'blur' },
        ],
        jkje:[
          { required: true, message: '请填写贷款金额', trigger: 'blur' },
        ],
        llzhts:[
          { required: true, message: '请填写利率转换天数', trigger: 'blur' },
        ],
        jxfs:[
          { required: true, message: '请填写计息方式', trigger: 'blur' },
        ],
        fxfs:[
          { required: true, message: '请填写付息方式', trigger: 'blur' },
        ],
        hbfs:[
          { required: true, message: '请填写还本方式', trigger: 'blur' },
        ],
        htqdll:[
          { required: true, message: '请填写合同签订利率', trigger: 'blur' },
        ]
      },
      dklxList:[
        {
          id:1,
          value:'内部借款'
        }
      ],
      llzhtsList:LLZHTSLIST,
      currencyList:CURRENCYLIST,
      hbfsList:HBFSLIST,
      fxfsList:FXFSLIST,
      jxfsList:JXFSLIST,
      dkqxList:DKQXLIST,
      zqrList:[
        {
          zqr:'顶级单位',
          dwbh:'001'
        }
      ],
      zwrList:[
        {
          zwr:'顶级单位',
          dwbh:'002'
        }
      ],
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10,
      },
      placeholderTips: placeholderTips,
      form: {
        childerList: [],
        htbh: '',
        htmc: '',
        dklx: '',
        zqr: '',
        zwr: '',
        dkbz: '',
        dkqx: '',
        ksrq: '',
        jsrq: '',
        jkje: '',
        jedx: '',
        llzhts: '',
        jxfs: '',
        fxfs: '',
        htqdll: '',
        hbfs: '',
        bz: '',
      },
      dialogObjN: {
        id: '',
        title: 'aaa',
        read: false,
        show: false,
        form: {},
      },
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
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { label: '操作', type: 'btn', width: '' },
      {
        prop: 'dbhtbh',
        width: '150',
        label: '担保合同编号',
      },
      {
        prop: 'dbhtmc',
        width: '150',
        label: '担保合同名称',
      },

      {
        prop: 'dbzt',
        width: '',
        label: '担保主体',
      },

      {
        prop: 'dbfs',
        width: '',
        label: '担保方式',
      },
      {
        prop: 'je',
        width: '',
        label: '金额',
      },
      {
        prop: 'bz',
        width: '',
        label: '备注 ',
      },
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = ''
        })
        this.form.htbh = 'JK72902454694'
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.form.htzt = 1
            this.form.djzt=1
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
      this.$emit('addSub', JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show = false
    },
    add() {
      this.dialogObjN.id = ''
      this.dialogObjN.read = false
      this.dialogObjN.show = true
      this.dialogObjN.title = '担保信息'
    },
  },
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
