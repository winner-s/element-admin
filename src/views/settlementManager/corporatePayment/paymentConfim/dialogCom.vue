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
      :inline-message="true"
      :disabled="dialogObj.read"
      status-icon
      class="form"
    >
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
          <el-form-item
            label="单据日期："
            prop="djrq"
            class="formItem"
          >
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
          <el-form-item
            label="业务单位："
            prop="ywdw"
            class="formItem"
          >
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
          <el-form-item
            label="付款用途："
            prop="fkyt"
            class="formItem"
          >
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
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="外部单号："
            prop="wbdh"
            class="formItem"
          >
            <el-input
              v-model="form.wbdh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="期望支付日期："
            prop="qwzfrq"
            class="formItem"
          >
            <el-date-picker
              v-model="form.qwzfrq"
              style="width: 200px"
              type="date"
              placeholder="请选择期望支付日期"
              size="mini"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" /> 付款方信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="付款方银行账号："
            prop="fkfyhzh"
            class="formItem"
          >
            <el-select
              v-model="form.fkfyhzh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="fkfChange"
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
          <el-form-item
            label="付款单位："
            prop="fkdw"
            class="formItem"
          >
            <el-input
              v-model="form.fkdw"
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
      </el-row>

      <el-row>
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
          <el-form-item label="付款方开户行名称：" prop="fkfkhhmc">
            <el-input
              v-model="form.fkfkhhmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <div class="title"><i class="el-icon-user" /> 收款方信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="收款方银行账号：" prop="skfyhzh">
            <el-select
              v-model="form.skfyhzh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="skfChange"
            >
              <el-option
                v-for="item in skfyhzhList"
                :key="item.skfyhzh"
                :label="item.skfyhzh"
                :value="item.skfyhzh"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收款方账户名称：" prop="skfzhmc">
            <el-input
              v-model="form.skfzhmc"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="收款方银行名称：" prop="skfyhmc">
            <el-select
              v-model="form.skfyhmc"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
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
          <el-form-item label="收款方银行省市：" prop="skfyhss">
            <el-select
              v-model="form.skfyhss"
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
          <el-form-item label="联行号：" prop="lhh">
            <el-input
              v-model="form.lhh"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收款方开户行名称：" prop="skfkhhmc">
            <el-input
              v-model="form.skfkhhmc"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" />
        <el-col :span="12" />
      </el-row>

      <div class="title"><i class="el-icon-user" /> 支付信息</div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="币种：" prop="bz">
            <el-select
              v-model="form.bz"
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
        <el-col :span="12">
          <el-form-item label="支付方式：" prop="zffs">
            <el-select
              v-model="form.zffs"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in paymentList"
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
          <el-form-item label="金额(元)：" prop="je">
            <el-input
              v-model="form.je"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="大写金额：" prop="dxje">
            <el-input
              v-model="form.dxje"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="对私参数：" prop="dscs">
            <el-select
              v-model="form.dscs"
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
          <el-form-item label="摘要：" prop="zy">
            <el-input
              v-model="form.zy"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="备注：" prop="beizhu">
            <el-input
              v-model="form.beizhu"
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
        <el-col />
      </el-row>

    </el-form>

    <span slot="footer" class="dialog-footer">

      <el-button
        v-if="form.zfyy===''"
        type="primary"
        @click="sub"
      >确认成功</el-button>
      <el-button
        v-if="form.zfyy===''"
        type="primary"
        @click="zf"
      >确认作废</el-button>
      <el-button @click="dialogObj.show = false">取 消</el-button>
    </span>

    <el-dialog
      width="30%"
      title="作废原因"
      :visible.sync="showZF"
      append-to-body
    >
      <el-form

        ref="formTwo"
        :model="form"
        label-width="140px"
        label-position="left"
        :rules="rulesZF"
        :inline-message="true"

        status-icon
        class="form"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="作废原因："
              prop="zfyy"
              class="formItem"
            >
              <el-input
                v-model="form.zfyy"
                style="width: 200px"
                size="mini"

                :placeholder="placeholderTips.content"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12" />
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">

        <el-button type="primary" @click="baocun">保存</el-button>
      </span>
    </el-dialog>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import {
  UNITNOLIST,
  BACKLIST,
  CURRENCYLIST,
  ACCOUNTUSAGELIST,
  DIRECTLIST,
  PAYMENTLIST,
  PURPOSELIST
} from '@u/wordbook'
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
      purposeList: PURPOSELIST,
      paymentList: PAYMENTLIST,
      placeholderTips: placeholderTips,
      unitNoList: UNITNOLIST,
      backList: BACKLIST,
      currencyList: CURRENCYLIST,
      accountUsageList: ACCOUNTUSAGELIST,
      directList: DIRECTLIST,
      skfyhzhList: [
        {
          skfyhzh: '4654654',
          skfzhmc: '张三',
          skfyhmc: 1,
          skfyhss: '不知道',
          lhh: '548982894',
          skfkhhmc: '株洲分行'
        }
      ],
      fkfyhzhList: [
        {
          fkfyhzh: '20111006',
          fkdw: '二级单位1',
          fkfzhmc: '测试非直联支付确认',
          fkfyhmc: '中国工商银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfkhhmc: '北京分行'
        }
      ],
      rulesZF: {
        zfyy: [
          { required: true, message: '请填写作废原因', trigger: 'blur' }
        ]
      },
      rules: {
        fkyt: [
          { required: true, message: '请选择付款用途', trigger: 'blur' }
        ],
        qwzfrq: [
          { required: true, message: '请填写期望支付日期', trigger: 'blur' }
        ],
        fkfyhzh: [
          { required: true, message: '请选择付款方银行账号', trigger: 'blur' }
        ],
        skfyhzh: [
          { required: true, message: '请选择收款方银行账号', trigger: 'blur' }
        ],
        skfzhmc: [
          { required: true, message: '请填写收款方账户名称', trigger: 'blur' }
        ],
        skfyhmc: [
          { required: true, message: '请选择收款方银行名称', trigger: 'blur' }
        ],
        skfyhss: [
          { required: true, message: '请选择收款方银行省市', trigger: 'blur' }
        ],
        lhh: [
          { required: true, message: '请填写联行号', trigger: 'blur' }
        ],
        zffs: [
          { required: true, message: '请选择支付方式', trigger: 'blur' }
        ],
        je: [
          { required: true, message: '请填写金额', trigger: 'blur' }
        ],
        dscz: [
          { required: true, message: '请选择对私参照', trigger: 'blur' }
        ],
        zy: [
          { required: true, message: '请填写摘要', trigger: 'blur' }
        ]
      },
      form: {
        zfyy: '',
        djbh: '8545942579878',
        djrq: new Date().toLocaleDateString(),
        ywdw: '业务单位',
        fkyt: '',
        wbdh: '',
        qwzfrq: '',
        fkfyhzh: '',
        fkdw: '',
        fkfzhmc: '',
        fkfyhmc: '',
        fkfyhs: '',
        fkfyhshi: '',
        fkfkhhmc: '',
        skfyhzh: '',
        skfzhmc: '',
        skfyhmc: '',
        skfyhss: '',
        lhh: '',
        skfkhhmc: '',
        bz: '',
        zffs: '',
        je: '',
        dxje: '',
        dscs: '',
        zy: ''
      },
      showZF: false
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

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    // 作废
    zf() {
      this.showZF = true
    },
    initDialog() {
      let djbh = ''
      for (let i = 0; i < 16; i++) {
        djbh += Math.round(Math.random() * 10)
      }

      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
        this.form.zfyy = ''
        // this.form = this.dialogObj.form
      } else {
        Object.keys(this.form).forEach(key => (this.form[key] = ''))
        this.form.djbh = djbh
        this.form.djrq = new Date().toLocaleDateString()
        this.form.ywdw = '业务单位'
      }
    },
    // 收款方银行账号下拉框改变事件
    skfChange(res) {
      console.log(res)
      this.skfyhzhList.forEach((item, index) => {
        if (item.skfyhzh === res) {
          const zhi = this.skfyhzhList[index]
          Object.keys(item).forEach(val => {
            this.form[val] = zhi[val]
          })
        }
      })
    },
    // 付款方银行账号下拉框改变事件
    fkfChange(res) {
      console.log(res)
      this.fkfyhzhList.forEach((item, index) => {
        if (item.fkfyhzh === res) {
          const zhi = this.fkfyhzhList[index]
          Object.keys(item).forEach(val => {
            this.form[val] = zhi[val]
          })
        }
      })
    },
    baocun() {
      this.$refs['formTwo'].validate((valid) => {
        if (valid) {
          this.showZF = false
        }
      })
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
      this.$emit('addSub', JSON.parse(JSON.stringify(this.form)))
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
