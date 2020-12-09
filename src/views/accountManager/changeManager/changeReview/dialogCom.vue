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
      <div class="title"><i class="el-icon-user" />变更前账户信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="单据编号："
            prop="documentNumber"
            class="formItem"
          >
            <el-input
              v-model="form.documentNumber"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单位名称：" prop="unitName" class="formItem">
            <el-select
              v-model="form.unitName"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in unitNoList"
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
          <el-form-item label="银行账号：" prop="accountPhone">
            <el-select
              v-model="form.accountPhone"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="selectChange"
            >
              <el-option
                v-for="(item,index) in bankPhoneList"
                :key="index"
                :label="item.accountPhone"
                :value="item.accountPhone"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账户名称：" prop="accountName">
            <el-input
              v-model="form.accountName"
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
          <el-form-item label="银行名称：" prop="bankName">
            <el-input
              v-model="form.bankName"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="币种：" prop="currency">
            <el-input
              v-model="form.currency"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" /> 变更后账户信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="单位名称：" prop="bghUnitName">
            <el-select
              v-model="form.bghUnitName"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              :disabled="true"
            >
              <el-option
                v-for="item in unitNoList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="变更日期：" prop="bgrq">
            <el-date-picker
              v-model="form.bgrq"
              style="width: 200px"
              type="date"
              placeholder="请选择变更日期"
              size="mini"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="银行账号：" prop="yhzh">
            <el-input
              v-model="form.yhzh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账户名称：" prop="zhmc">
            <el-input
              v-model="form.zhmc"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="银行名称：" prop="yhmc">
            <el-select
              v-model="form.yhmc"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in unitNoList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="科目号：" prop="kmh">
            <el-input
              v-model="form.kmh"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="开户行所在省市：" prop="khhszss">
            <el-cascader
              v-model="form.khhszss"
              :options="options"
              :separator="' '"
              size="mini"
              style="width: 200px"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="变更申请人：" prop="bgsqr">
            <el-input
              v-model="form.bgsqr"
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
          <el-form-item label="开户行名称：" prop="khhmc">
            <el-input
              v-model="form.khhmc"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联行号：" prop="lhh">
            <el-input
              v-model="form.lhh"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="账户用途：" prop="zhyt">
            <el-select
              v-model="form.zhyt"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
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
        <el-col :span="12">
          <el-form-item label="是否直联：" prop="sfzl">
            <el-select
              v-model="form.sfzl"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in directList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" /> 附加信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="客户经理：" prop="khjl">
            <el-input
              v-model="form.sysParentName"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户经理电话：" prop="khjldh">
            <el-input
              v-model="form.sysParentTelphone"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="备注：" prop="bz">
            <el-input
              v-model="form.sysFamilyAddress"
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
      <el-button
        type="primary"
        @click="sub"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import options from '@u/country-data'
import {
  UNITNOLIST,
  BACKLIST,
  CURRENCYLIST,
  ACCOUNTUSAGELIST,
  DIRECTLIST
} from '@u/wordbook'
import { placeholderTips } from '@u/validate'
export default {
  components: {},
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
      options: options,
      bankPhoneList: [
        {

          accountPhone: 1111111111,
          accountName: '测试1',
          bankName: '中国银行',
          currency: 1,
          yhzh: 1111111111,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: 'aaa',
          bgsqr: 'admin',
          khhmc: '北京分行',
          lhh: '5200103901',
          zhyt: 1,
          sfzl: 1
        }, {

          accountPhone: 2222222222,
          accountName: '测试1',
          bankName: '中国银行',
          currency: 1,
          yhzh: 2222222222,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: 'aaa',
          bgsqr: 'admin',
          khhmc: '北京分行',
          llh: '5200103901',
          zhyt: 1,
          sfzl: 1
        }, {

          accountPhone: 3333333333,
          accountName: '测试1',
          bankName: '中国银行',
          currency: 1,
          yhzh: 3333333333,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: 'aaa',
          bgsqr: 'admin',
          khhmc: '北京分行',
          llh: '5200103901',
          zhyt: 1,
          sfzl: 1
        }, {
          accountPhone: 444444444,
          accountName: '测试1',
          bankName: '中国银行',
          currency: 1,
          yhzh: 444444444,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: 'aaa',
          bgsqr: 'admin',
          khhmc: '北京分行',
          llh: '5200103901',
          zhyt: 1,
          sfzl: 1
        }, {
          accountPhone: 5555555555,
          accountName: '测试1',
          bankName: '中国银行',
          currency: 1,
          yhzh: 5555555555,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: 'aaa',
          bgsqr: 'admin',
          khhmc: '北京分行',
          llh: '5200103901',
          zhyt: 1,
          sfzl: 1
        }
      ],
      rules: {
        documentNumber: [
          { required: true, message: '请填写单据编号', trigger: 'blur' }
        ],
        accountPhone: [
          { required: true, message: '请选择银行账号', trigger: 'blur' }
        ],
        accountName: [
          { required: true, message: '请填写账户名称', trigger: 'blur' }
        ],
        bankName: [
          { required: true, message: '请填写银行名称', trigger: 'blur' }
        ],
        currency: [
          { required: true, message: '请填写币种', trigger: 'blur' }
        ],
        bghUnitName: [
          { required: true, message: '请填写单位名称', trigger: 'blur' }
        ],
        bgrq: [
          { required: true, message: '请选择变更日期', trigger: 'blur' }
        ],
        yhzh: [
          { required: true, message: '请填写银行账号', trigger: 'blur' }
        ],
        zhmc: [
          { required: true, message: '请填写账户名称', trigger: 'blur' }
        ],
        yhmc: [
          { required: true, message: '请选择银行名称', trigger: 'blur' }
        ],
        khhszss: [
          { required: true, message: '请选择开户行所在省市', trigger: 'blur' }
        ],
        bgsqr: [
          { required: true, message: '请填写变更申请人', trigger: 'blur' }
        ],
        khhmc: [
          { required: true, message: '请填写开户行名称', trigger: 'blur' }
        ],
        lhh: [
          { required: true, message: '请填写联行号', trigger: 'blur' }
        ],
        zhyt: [
          { required: true, message: '请选择账户用途', trigger: 'blur' }
        ],
        sfzl: [
          { required: true, message: '请选择是否直联', trigger: 'blur' }
        ]
      },
      unitNoList: UNITNOLIST,
      backList: BACKLIST,
      currencyList: CURRENCYLIST,
      accountUsageList: ACCOUNTUSAGELIST,
      directList: DIRECTLIST,
      placeholderTips: placeholderTips,
      form: {
        documentNumber: 'BG20110216484292',
        bghUnitName: 1324,
        unitName: 1324,
        bgrq: new Date(),
        accountPhone: '',
        accountName: '',
        bankName: '',
        currency: '',
        yhzh: '',
        zhmc: '',
        yhmc: '',
        khhszss: '',
        bgsqr: 'admin',
        khhmc: '',
        lhh: '',
        zhyt: 1,
        sfzl: 1
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
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    selectChange(res) {
      let ind = 0
      this.bankPhoneList.forEach((item, index) => {
        if (item.documentNumber === res) {
          ind = index
        }
      })
      const fore = this.bankPhoneList[ind]

      Object.keys(this.form).forEach(item => {
        if (fore[item]) {
          this.form[item] = fore[item]
        }
      })
    },
    initDialog() {
      this.form = {
        documentNumber: 'BG20110216484292',
        bghUnitName: 1324,
        unitName: 1324,
        bgrq: new Date(),
        accountPhone: '',
        accountName: '',
        bankName: '',
        currency: '',
        yhzh: '',
        zhmc: '',
        yhmc: '',
        khhszss: '',
        bgsqr: 'admin',
        khhmc: '',
        lhh: '',
        zhyt: 1,
        sfzl: 1
      }
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
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
      this.$emit('updateSub', this.form)
      this.dialogObj.show = false
    },
    addSub() {
      this.$emit('addSub', this.form)
      this.dialogObj.show = false
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
