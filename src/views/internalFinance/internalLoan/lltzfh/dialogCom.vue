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
      <div class="title"><i class="el-icon-user" />借款合同信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item label="合同流水号：" prop="htlsh" class="formItem">
            <el-select
              v-model="form.htlsh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="htlshChange"
            >
              <el-option
                v-for="item in htlshList"
                :key="item.id"
                :label="item.htlsh"
                :value="item.htlsh"
              >
              </el-option>
            </el-select>
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
          <el-form-item label="借款币种：" prop="jkbz" class="formItem">
            <el-select
              v-model="form.jkbz"
              placeholder="请选择"
              size="mini"
              :disabled="true"
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
        <el-col :span="12" />
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
          <el-form-item label="开始日期：" prop="ksrq" class="formItem">
            <el-date-picker
              v-model="form.ksrq"
              type="date"
              style="width: 200px"
              size="mini"
              :disabled="true"
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
              style="width: 200px"
              size="mini"
              :disabled="true"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="借款金额(元)：" prop="jkje" class="formItem">
            <el-input
              v-model="form.jkje"
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
          <el-form-item label="借款期限：" prop="jkqx" class="formItem">
            <el-input
              v-model="form.jkqx"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="利率转换天数：" prop="llzhts" class="formItem">
            <el-select
              v-model="form.llzhts"
              placeholder="请选择"
              size="mini"
              :disabled="true"
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
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="计息方式：" prop="jxfs" class="formItem">
            <el-select
              v-model="form.jxfs"
              placeholder="请选择"
              size="mini"
              :disabled="true"
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
          <el-form-item
            label="合同签订利率(%)："
            prop="htqdll"
            class="formItem"
          >
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
          <el-form-item label="付息方式：" prop="fxfs" class="formItem">
            <el-select
              v-model="form.fxfs"
              placeholder="请选择"
              size="mini"
              :disabled="true"
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
          <el-form-item label="还本方式：" prop="hbfs" class="formItem">
            <el-select
              v-model="form.hbfs"
              placeholder="请选择"
              size="mini"
              :disabled="true"
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
          <el-form-item label="备注：" prop="bz" class="formItem">
            <el-input
              v-model="form.bz"
              style="width: 83%"
              type="textarea"
              :rows="3"
              size="mini"
              maxlength="50"
              show-word-limit
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" />调整信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="合同签订利率：" prop="htqdlltz" class="formItem">
            <el-input
              v-model="form.htqdlltz"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="利率调整生效日："
            prop="lltzsxr"
            class="formItem"
          >
            <el-date-picker
              v-model="form.lltzsxr"
              type="date"
              placeholder="选择日期"
              style="width: 200px"
              size="mini"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="调整说明：" prop="tzsm" class="formItem">
            <el-input
              v-model="form.tzsm"
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
import {
  LLZHTSLIST,
  JXFSLIST,
  FXFSLIST,
  HBFSLIST,
  CURRENCYLIST,
} from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      llzhtsList: LLZHTSLIST,
      jxfsList: JXFSLIST,
      fxfsList: FXFSLIST,
      hbfsList: HBFSLIST,
      currencyList: CURRENCYLIST,
      placeholderTips: placeholderTips,
      form: {
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
        htqdlltz: '',
        lltzsxr: '',
        tzsm: '',
      },
      rules: {
        htlsh: [
          { required: true, message: '请填写合同流水号', trigger: 'blur' },
        ],
        htmc: [{ required: true, message: '请填写合同名称', trigger: 'blur' }],
        jkbz: [{ required: true, message: '请填写借款币种', trigger: 'blur' }],
        zqr: [{ required: true, message: '请填写债权人', trigger: 'blur' }],
        zwr: [{ required: true, message: '请填写债务人', trigger: 'blur' }],
        ksrq: [{ required: true, message: '请填写开始日期', trigger: 'blur' }],
        jsrq: [{ required: true, message: '请填写结束日期', trigger: 'blur' }],
        jkje: [{ required: true, message: '请填写借款金额', trigger: 'blur' }],
        jkqx: [{ required: true, message: '请填写借款期限', trigger: 'blur' }],
        llzhts: [
          { required: true, message: '请填写利率转换天数', trigger: 'blur' },
        ],
        jxfs: [{ required: true, message: '请填写计息方式', trigger: 'blur' }],
        fxfs: [{ required: true, message: '请填写付息方式', trigger: 'blur' }],
        hbfs: [{ required: true, message: '请填写还本方式', trigger: 'blur' }],
        htqdlltz: [
          { required: true, message: '请填写合同签订利率', trigger: 'blur' },
        ],
        lltzsxr: [
          { required: true, message: '请填写利率调整生效日', trigger: 'blur' },
        ],
      },
      htlshList: [
        {
          htlsh: 'DK202006281705404',
          htmc: '抵押担保',
          jkbz: 1,
          zqr: '顶级单位',
          zwr: '二级单位1',
          ksrq: '2020-06-01',
          jsrq: '2020-06-27',
          jkje: '5000000',
          jedx: '5000000',
          jkqx: '一年',
          llzhts: 1,
          jxfs: 1,
          htqdll: '5.0',
          fxfs: 1,
          hbfs: 1,
          bz: '',
        },
      ],
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
    htlshChange(val) {
      this.htlshList.forEach((item, index) => {
        if (item.htlsh == val) {
          Object.keys(item).forEach((res) => {
            this.form[res] = item[res]
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
