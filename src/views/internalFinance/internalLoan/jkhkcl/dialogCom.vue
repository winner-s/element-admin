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
          <el-form-item label="放款单编号：" prop="fkdbh" class="formItem">
            <el-select
              v-model="form.fkdbh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="fkdbhChange"
            >
              <el-option
                v-for="item in fkdbhList"
                :key="item.id"
                :label="item.fkdbh"
                :value="item.fkdbh"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="借款合同编号：" prop="jkhtbh" class="formItem">
            <el-input
              v-model="form.jkhtbh"
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
          <el-form-item label="债务人名称：" prop="zwrmc">
            <el-input
              v-model="form.zwrmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还款单编号：" prop="hkdbh">
            <el-input
              v-model="form.hkdbh"
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
          <el-form-item label="放款日：" prop="fkr">
            <el-input
              v-model="form.fkr"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="到期日：" prop="dqr">
            <el-input
              v-model="form.dqr"
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
          <el-form-item label="利率类型：" prop="lllx">
            <el-select
              v-model="form.lllx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              :disabled="true"
            >
              <el-option
                v-for="item in ratetypeList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="合同执行利率(%)：" prop="htzxll">
            <el-input
              v-model="form.htzxll"
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
          <el-form-item label="还本方式：" prop="hbfs">
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
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="付息方式：" prop="fxfs">
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
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="放款单余额：" prop="fkdye">
            <el-input
              v-model="form.fkdye"
              style="width: 200px"
              size="mini"
              :disabled="true"
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
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="title"><i class="el-icon-user" />还款信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="还款日期：" prop="hkrq">
            <el-input
              v-model="form.hkrq"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还款类型：" prop="hklx">
            <el-select
              v-model="form.hklx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in hklxList"
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
          <el-form-item v-show="form.hklx==2" label="应还本金：" prop="yhbj">
            <el-select
              v-model="form.yhbj"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="yhlxChange"
            >
              <el-option
                v-for="item in yhlxList"
                :key="item.id"
                :label="item.yhlx"
                :value="item.yhlx"
              />
            </el-select>
          </el-form-item>
          <el-form-item v-show="form.hklx==1" label="应还利息：" prop="yhlx">
            <el-select
              v-model="form.yhlx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="yhlxChange"
            >
              <el-option
                v-for="item in yhlxList"
                :key="item.id"
                :label="item.yhlx"
                :value="item.yhlx"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">

          <el-form-item v-show="form.hklx==2" label="还本金额：" prop="hbje">
            <el-input
              v-model="form.hbje"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
          <el-form-item v-show="form.hklx==1" label="付息金额：" prop="fxje">
            <el-input
              v-model="form.fxje"
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
          <el-form-item label="还款内部账号：" prop="hknbzh">
            <el-input
              v-model="form.hknbzh"
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
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
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
import { FXFSLIST, HBFSLIST, RATETYPELIST, HKLXLIST } from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      fxfsList: FXFSLIST,
      hbfsList: HBFSLIST,
      ratetypeList: RATETYPELIST,
      hklxList: HKLXLIST,
      yhlxList: [
        {
          yhlx: '0.31',
          hkrq: '2020-01-01',

          fxje: '0.31'
        },
        {
          yhlx: '0.29',
          hkrq: '2020-01-01',

          fxje: '0.29'
        }
      ],
      fkdbhList: [
        {
          fkdbh: 'FK2000000000',
          jkhtbh: 'DK2000000000',
          zwrmc: '二级单位1',

          fkr: '2020-06-01',
          dqr: '2020-06-30',
          lllx: 1,
          htzxll: '5.000',
          hbfs: 1,
          fxfs: 1,
          fkdye: '200.00',
          dxje: '200.00',

          hknbzh: '0021001',
          zhmc: '二级单位1内部账号'
        }
      ],
      placeholderTips: placeholderTips,
      form: {
        hbje: '',
        yhbj: '',
        fkdbh: '',
        jkhtbh: '',
        zwrmc: '',
        hkdbh: '',
        fkr: '',
        dqr: '',
        lllx: '',
        htzxll: '',
        hbfs: '',
        fxfs: '',
        fkdye: '',
        dxje: '',
        hkrq: '',
        hklx: '',
        yhlx: '',
        fxje: '',
        hknbzh: '',
        zhmc: ''
      },
      rules: {
        fkdbh: [
          { required: true, message: '请填写放款单编号', trigger: 'blur' }
        ],
        jkhtbh: [
          { required: true, message: '请填写借款合同编号', trigger: 'blur' }
        ],
        zwrmc: [
          { required: true, message: '请填写债务人名称', trigger: 'blur' }
        ],
        hkdbh: [
          { required: true, message: '请填写还款单编号', trigger: 'blur' }
        ],
        fkr: [{ required: true, message: '请填写放款日', trigger: 'blur' }],
        dqr: [{ required: true, message: '请填写到期日', trigger: 'blur' }],
        lllx: [{ required: true, message: '请填写lllx', trigger: 'blur' }],
        hbfs: [{ required: true, message: '请填写还本方式', trigger: 'blur' }],
        fxfs: [{ required: true, message: '请填写付息方式', trigger: 'blur' }],
        fkdye: [
          { required: true, message: '请填写放款单余额', trigger: 'blur' }
        ],
        hkrq: [{ required: true, message: '请填写还款日期', trigger: 'blur' }],
        hklx: [{ required: true, message: '请填写还款类型', trigger: 'blur' }],
        yhlx: [{ required: true, message: '请填写应还利息', trigger: 'blur' }],
        fxje: [{ required: true, message: '请填写付息金额', trigger: 'blur' }],
        hknbzh: [
          { required: true, message: '请填写还款内部账号', trigger: 'blur' }
        ]
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
    yhlxChange(val) {
      this.yhlxList.forEach((item, index) => {
        if (item.yhlx == val) {
          Object.keys(item).forEach((res) => {
            this.form[res] = item[res]
          })
        }
      })
    },
    fkdbhChange(val) {
      this.fkdbhList.forEach((item, index) => {
        if (item.fkdbh == val) {
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
        this.form.hklx = 1
        this.form.hkdbh = 'HK2020118097777'
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.form.clzt = 1
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
