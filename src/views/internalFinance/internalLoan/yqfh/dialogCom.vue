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
      <div class="title"><i class="el-icon-user" />基本信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item label="借款合同编号：" prop="jkhtbh" class="formItem">
            <el-select
              v-model="form.jkhtbh"
              placeholder="请选择"
              size="mini"
              :disabled="dialogObj.id != ''"
              style="width: 200px"
              @change="jkhtbhChange"
            >
              <el-option
                v-for="item in jkhtbhList"
                :key="item.id"
                :label="item.jkhtbh"
                :value="item.jkhtbh"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="放款单编号：" prop="fkdbh" class="formItem">
            <el-select
              v-model="form.fkdbh"
              placeholder="请选择"
              size="mini"
              :disabled="dialogObj.id != ''"
              style="width: 200px"
              @change="fkdbhChange"
            >
              <el-option
                v-for="item in fkdbhList"
                :key="item.id"
                :label="item.fkdbh"
                :value="item.fkdbh"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="合同流水号：" prop="htlsh" class="formItem">
            <el-input
              v-model="form.htlsh"
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
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款币种：" prop="dkbz" class="formItem">
            <el-input
              v-model="form.dkbz"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12"> </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="债权人：" prop="zqr" class="formItem">
            <el-input
              v-model="form.zqr"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="债务人：" prop="zwr" class="formItem">
            <el-input
              v-model="form.zwr"
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
          <el-form-item label="贷款金额：" prop="dkje" class="formItem">
            <el-input
              v-model="form.dkje"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="金额大写：" prop="jedx" class="formItem">
            <el-input
              v-model="form.jedx"
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
          <el-form-item label="开始日期：" prop="ksrq" class="formItem">
            <el-date-picker
              v-model="form.ksrq"
              type="date"
              size="mini"
              :disabled='true'
              style="width: 200px"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="结束日期：" prop="jsrq" class="formItem">
            <el-date-picker
              v-model="form.jsrq"
              type="date"
              placeholder="选择日期"
              size="mini"
              :disabled='true'
              style="width: 200px"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款期限：" prop="dkqx" class="formItem">
            <el-input
              v-model="form.dkqx"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="计息方式：" prop="jxfs" class="formItem">
            <el-input
              v-model="form.jxfs"
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
          <el-form-item label="利率转换天数：" prop="llzhts" class="formItem">
            <el-input
              v-model="form.llzhts"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="合同签订利率：" prop="htqdll" class="formItem">
            <el-input
              v-model="form.htqdll"
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
          <el-form-item label="付息方式:" prop="fxfs" class="formItem">
            <el-input
              v-model="form.jxff"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还本方式：" prop="hbfs" class="formItem">
            <el-input
              v-model="form.hbfs"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="备注：" prop="bz" class="formItem">
            <el-input
              v-model="form.bz"
              style="width: 83%"
              type="textarea"
              :rows="3"
              size="mini"
              maxlength="50"
              :disabled="true"
              show-word-limit
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" />放款单信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="放款单编号：" prop="fkdbh" class="formItem">
            <el-input
              v-model="form.fkdbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="放款金额(元)：" prop="fkje" class="formItem">
            <el-input
              v-model="form.fkje"
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
          <el-form-item label="放款日：" prop="fkr" class="formItem">
            <el-date-picker
              v-model="form.fkr"
              type="date"
              placeholder="选择日期"
              size="mini"
              :disabled='true'
              style="width: 200px"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="到期日：" prop="dqr" class="formItem">
            <el-date-picker
              v-model="form.dqr"
              :disabled='true'
              type="date"
              placeholder="选择日期"
              size="mini"
              style="width: 200px"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" />逾期信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="逾期单据编号：" prop="yqdjbh" class="formItem">
            <el-input
              v-model="form.yqdjbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="逾期利率：" prop="yqll" class="formItem">
            <el-input
              v-model="form.yqll"
              style="width: 200px"
              size="mini"
              
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="逾期金额：" prop="yqje" class="formItem">
            <el-input
              v-model="form.yqje"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="金额大写：" prop="yqjedx" class="formItem">
            <el-input
              v-model="form.yqjedx"
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
          <el-form-item label="逾期开始日期：" prop="yqksrq" class="formItem">
            <el-date-picker
              v-model="form.yqksrq"
              type="date"
              size="mini"
              style="width: 200px"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="逾期结束日期：" prop="yqjsrq" class="formItem">
            <el-date-picker
              v-model="form.yqjsrq"
              type="date"
              size="mini"
              style="width: 200px"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="逾期说明：" prop="yqsm" class="formItem">
            <el-input
              v-model="form.yqsm"
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

      <div class="title"><i class="el-icon-user" />附件</div>
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
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button type="primary" @click="sub">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'

export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      placeholderTips: placeholderTips,
      jkhtbhList: [
        {
          jkhtbh: '12312331',
          htlsh: 'Dk202006281720504',
          htmc: '抵押担保',
          jkbz: '人民币',
          zqr: '顶级单位',
          zwr: '二级单位1',
          ksrq: '2020-06-01',
          jsrq: '2020-06-27',
          jkje: '一年',
          llzhts: '360天',
          jxfs: '固定利率',
          htqdll: '5.0',
          fxfs: '按季付息',
          hbfs: '按计划还',
          bz: '',
        },
      ],
      fkdbhList: [
        {
          fkdbh: 'FK2020111609464617',
          fkje: '10000',
          fkr: '2020-06-01',
          dqr: '2020-11-01',
        },
      ],
      form: {
        jkhtbh: '',
        fkdbh: '',
        htlsh: '',
        htmc: '',
        jkbz: '',
        zqr: '',
        zwr: '',
        ksrq: '',
        jsrq: '',
        jkje: '',
        jedx: '',
        jkqx: '',
        llzhts: '',
        jxfs: '',
        htqdll: '',
        fxfs: '',
        hbfs: '',
        bz: '',
        fkdbh: '',
        fkje: '',
        fkr: '',
        dqr: '',
        yqdjbh: '',
        yqll: '',
        yqje: '',
        yqjedx: '',
        yqksrq: '',
        yqjsrq: '',
        yqsm: '',
      },
      rules: {
        jkhtbh: [
          { required: true, message: '请填写借款合同编号', trigger: 'blur' },
        ],
        fkdbh: [
          { required: true, message: '请填写放款单编号', trigger: 'blur' },
        ],
        yqdjbh: [
          { required: true, message: '请填写逾期单据编号', trigger: 'blur' },
        ],
        yqll: [{ required: true, message: '请填写逾期利率', trigger: 'blur' }],
        yqje: [{ required: true, message: '请填写逾期金额', trigger: 'blur' }],
        yqksrq: [
          { required: true, message: '请填写逾期开始日期', trigger: 'blur' },
        ],
        yqjsrq: [
          { required: true, message: '请填写逾期结束日期', trigger: 'blur' },
        ],
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
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    jkhtbhChange(res) {
      this.jkhtbhList.forEach((item, index) => {
        if (item.jkhtbh == res) {
          Object.keys(item).forEach((val) => {
            this.form[val] = item[val]
          })
        }
      })
    },
    fkdbhChange(res) {
      this.fkdbhList.forEach((item, index) => {
        if (item.fkdbh == res) {
          Object.keys(item).forEach((val) => {
            this.form[val] = item[val]
          })
        }
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
        this.form.yqdjbh = 'DK2020112410324372'
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.form.djzt = 1
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
