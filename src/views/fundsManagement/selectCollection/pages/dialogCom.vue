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

      :disabled="dialogObj.read"
      status-icon
      class="form"
      :inline-message="true"
    >
      <div class="title"><i class="el-icon-user" /> 付款主单</div>
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
          <el-form-item label="单据日期：" prop="djrq" class="formItem">
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
          <el-form-item label="付款公司编号：" prop="fkgsbh">
            <el-select
              v-model="form.fkgsbh"
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
          <el-form-item label="付款公司名称：" prop="fkgsmc">
            <el-input
              v-model="form.fkgsmc"
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
          <el-form-item label="业务类型：" prop="ywlx">
            <el-input
              v-model="form.ywlx"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="汇总金额(元)：" prop="hzje">
            <el-input
              v-model="form.hzje"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" /> 收款方信息</div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="公司编号：" prop="gsbh">
            <el-select
              v-model="form.gsbh"
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
          <el-form-item label="公司名称：" prop="gsmc">
            <el-input
              v-model="form.gsmc"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="银行编号：" prop="yhbh">
            <el-input
              v-model="form.yhbh"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行名称：" prop="yhmc">
            <el-select
              v-model="form.yhmc"
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
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="账户编号：" prop="zhbh">
            <el-input
              v-model="form.zhbh"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账户名称：" prop="zhmc">
            <el-select
              v-model="form.zhmc"
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
      <el-row>
        <el-col :span="12">
          <el-form-item label="支付类型：" prop="zflx">
            <el-select
              v-model="form.zflx"
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
        <el-col :span="12">
          <el-form-item label="期望日期：" prop="qwrq">
            <el-input
              v-model="form.qwrq"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" /> 收款方信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="公司编号：" prop="skgsbh">
            <el-input
              v-model="form.skgsbh"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="公司名称：" prop="skgsmc">
            <el-input
              v-model="form.skgsmc"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="银行编号：" prop="skyhbh">
            <el-input
              v-model="form.skyhbh"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行名称：" prop="skyhmc">
            <el-input
              v-model="form.skyhmc"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="账户编号：" prop="skzhbh">
            <el-input
              v-model="form.skzhbh"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账户名称：" prop="skzhmc">
            <el-input
              v-model="form.skzhmc"
              style="width: 200px"
              size="mini"
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
              :placeholder="placeholderTips.content"
            />
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

      <div class="title"><i class="el-icon-user" />指令详情</div>
      <el-row>
        <el-col :span="12">
          <el-form-item label="策略编号：" prop="clbh">
            <el-input
              v-model="form.clbh"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="策略名称：" prop="clmc">
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
          <el-form-item label="指令状态：" prop="zlzt">
            <el-input
              v-model="form.zlzt"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="指令发送时间：" prop="zlfssj">
            <el-input
              v-model="form.zlfssj"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="指令撤销时间：" prop="zlcxsj">
            <el-input
              v-model="form.zlcxsj"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="银行返回信息：" prop="yhfhxx">
            <el-input
              v-model="form.yhfhxx"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

    </el-form>

    <div class="dialog-footer">
      <el-button @click="dialogObj.show = false">返 回</el-button>

    </div>
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
  DIRECTLIST
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

      placeholderTips: placeholderTips,
      form: {
        djbh: '',
        djrq: '',
        fkgsbh: '',
        fkgsmc: '',
        ywlx: '',
        hzje: '',
        gsbh: '',
        gsmc: '',
        yhzh: '',
        yhmc: '',
        zhbh: '',
        zhmc: '',
        zflx: '',
        qwrq: '',
        skgsbh: '',
        skgsmc: '',
        skyhbh: '',
        skyhmc: '',
        skzhbh: '',
        skzhmc: '',
        je: '',
        zy: '',
        clbh: '',
        clmc: '',
        zlzt: '',
        zlfssj: '',
        zlcxsj: '',
        yhfhxx: ''
      },
      unitNoList: UNITNOLIST,
      backList: BACKLIST,
      currencyList: CURRENCYLIST,
      accountUsageList: ACCOUNTUSAGELIST,
      directList: DIRECTLIST
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
    margin-bottom: 0px !important;
  }

}

.title {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
}
</style>
