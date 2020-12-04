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
      <div class="title"><i class="el-icon-user" />业务信息</div>
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
        <el-col :span="12" />
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
            label="数据来源："
            prop="sjly"
            class="formItem"
          >
            <el-input
              v-model="form.sjly"
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
          <el-form-item
            label="付款方账号："
            prop="fkfyhzh"
            class="formItem"
          >
            <el-input
              v-model="form.fkfyhzh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="收款方账号："
            prop="skfyhzh"
            class="formItem"
          >
            <el-input
              v-model="form.skfyhzh"
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
          <el-form-item
            label="付款方账户名称："
            prop="fkfzhmc"
            class="formItem"
          >
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
          <el-form-item
            label="收款方账户名称："
            prop="skfzhmc"
            class="formItem"
          >
            <el-input
              v-model="form.skfzhmc"
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
          <el-form-item label="付款方开户行：" prop="fkfkhh">
            <el-input
              v-model="form.fkfkhh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收款方开户行：" prop="skfkhh">
            <el-input
              v-model="form.skfkhh"
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
          <el-form-item label="金额(元)：" prop="je">
            <el-input
              v-model="form.je"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收款方行省：" prop="skfszs">
            <el-input
              v-model="form.skfszs"
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
          <el-form-item label="大写：" prop="dx">
            <el-input
              v-model="form.dx"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-form-item label="联行号：" prop="lhh">
          <el-input
            v-model="form.lhh"
            style="width: 200px"
            size="mini"
            :disabled="true"
            :placeholder="placeholderTips.content"
          />
        </el-form-item>
        <el-col :span="12" />
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="业务类型：" prop="ywlx">
            <el-input
              v-model="form.ywlx"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="备注：" prop="bz">
            <el-input
              v-model="form.bz"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <div class="title"><i class="el-icon-user" /> 支付信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="支付处理状态：" prop="zfclzt">
            <el-input
              v-model="form.zfclzt"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="付款银行：" prop="fkyh">
            <el-input
              v-model="form.fkyh"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="汇款速度：" prop="hksd">
            <el-input
              v-model="form.hksd"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否同行：" prop="sfth">
            <el-input
              v-model="form.sfth"
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
          <el-form-item label="创建时间：" prop="cjsj">
            <el-input
              v-model="form.cjsj"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发送时间：" prop="fssj">
            <el-input
              v-model="form.fssj"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="撤销时间：" prop="cxsj">
            <el-input
              v-model="form.cssj"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="撤销操作用户：" prop="cxczyh">
            <el-input
              v-model="form.cxczyh"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="摘要：" prop="zy">
            <el-input
              v-model="form.zy"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="撤销原因：" prop="cxyy">
            <el-input
              v-model="form.cxyy"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" /> 银行反馈信息</div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="银行标识1：" prop="yhbs1">
            <el-input
              v-model="form.yhbs1"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行标识：" prop="yhbs2">
            <el-input
              v-model="form.yhbs2"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="银行标识3：" prop="yhbs3">
            <el-input
              v-model="form.yhbs3"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行标识4：" prop="yhbs4">
            <el-input
              v-model="form.yhbs4"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="交易时间：" prop="jysj">
            <el-input
              v-model="form.jysj"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="状态标识：" prop="ztbs">
            <el-input
              v-model="form.ztbs"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="状态描述：" prop="ztms">
            <el-input
              v-model="form.ztms"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="反馈信息：" prop="fkxx">
            <el-input
              v-model="form.fkxx"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button
        type="primary"
        @click="sub"
      >历史意见</el-button>
    </span>
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
  props: ['dialogObj'],
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
          skfzhmc: '小三',
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
        djbh: '',
        djrq: '2020/11/4',
        ywdw: '',
        sjly: '',
        fkfyhzh: '',
        skfyhzh: '',
        fkfzhmc: '',
        skfzhmc: '',
        fkfkhh: '',
        skfkhh: '',
        je: '',
        skfszs: '',
        dx: '',
        lhh: '',
        ywlx: '',
        bz: '',
        zfclzt: '',
        fkyh: '',
        hksd: '',
        sfth: '',
        cjsj: '',
        fssj: '',
        cssj: '',
        csczyh: '',
        zy: '',
        csyy: '',
        yhbs1: '',
        yhbs2: '',
        yhbs3: '',
        yhbs4: '',
        jysj: '',
        ztbs: '',
        ztms: '',
        fkxx: ''
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

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    initDialog() {
      let djbh = ''
      for (let i = 0; i < 16; i++) {
        djbh += Math.round(Math.random() * 10)
      }

      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
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
        if (item.skfyhzh == res) {
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
        if (item.fkfyhzh == res) {
          const zhi = this.fkfyhzhList[index]
          Object.keys(item).forEach(val => {
            this.form[val] = zhi[val]
          })
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
