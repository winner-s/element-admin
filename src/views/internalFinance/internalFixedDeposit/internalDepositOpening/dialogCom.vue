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
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="存款开立流水号："
            prop="ckkllsh"
            class="formItem"
          >
            <el-input
              v-model="form.ckkllsh"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="存款期限：" prop="ckqx" class="formItem">
            <el-select
              v-model="form.ckqx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in depositTiermList"
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
          <el-form-item label="存款利率：" prop="ckll" class="formItem">
            <el-input
              v-model="form.ckll"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            >
              <template slot="append">%</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="存款金额：" prop="ckje" class="formItem">
            <el-input
              v-model="form.ckje"
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
          <el-form-item label="开立日期：" prop="ckklrq" class="formItem">
            <el-date-picker
              v-model="form.ckklrq"
              type="date"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            >
            </el-date-picker>
            
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="存款单位编号：" prop="ckdwbh" class="formItem">
            <el-input
              v-model="form.ckdwbh"
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
          <el-form-item label="存款单位名称：" prop="ckdwmc" class="formItem">
            <el-input
              v-model="form.ckdwmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="内部账号：" prop="nbzh" class="formItem">
            <el-input
              v-model="form.nbzh"
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
          <el-form-item label="内部账户余额：" prop="nbzhye" class="formItem">
            <el-input
              v-model="form.nbzhye"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="内部账号名称：" prop="nbzhmc" class="formItem">
            <el-input
              v-model="form.nbzhmc"
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
          <el-form-item label="到期续存方式：" prop="dqxcfs" class="formItem">
            <el-select
              v-model="form.dqxcfs"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in dqxcfsList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="利率转换天数：" prop="llzhts" class="formItem">
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
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="预计利息：" prop="yjlx" class="formItem">
            <el-input
              v-model="form.yjlx"
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
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button type="primary" @click="sub"
        >确 定</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import { DQXCFSLIST, LLZHTSLIST, DEPOSITTERMLIST } from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      dqxcfsList: DQXCFSLIST,
      llzhtsList: LLZHTSLIST,
      depositTiermList: DEPOSITTERMLIST,
      placeholderTips: placeholderTips,
      rules: {
        ckkllsh: [
          { required: true, message: '请填写存款开立流水号', trigger: 'blur' },
        ],
        ckqx: [{ required: true, message: '请填写存款期限', trigger: 'blur' }],
        ckll: [{ required: true, message: '请填写存款利率', trigger: 'blur' }],
        ckje: [{ required: true, message: '请填写存款金额', trigger: 'blur' }],
        ckklrq: [{ required: true, message: '请填写开立日期', trigger: 'blur' }],
        ckdwbh: [
          { required: true, message: '请填写存款单位编号', trigger: 'blur' },
        ],
        ckdwmc: [
          { required: true, message: '请填写存款单位名称', trigger: 'blur' },
        ],
        nbzh: [{ required: true, message: '请填写内部账号', trigger: 'blur' }],
        nbzhye: [
          { required: true, message: '请填写内部账号余额', trigger: 'blur' },
        ],
        dqxcfs: [
          { required: true, message: '请填写到期续存方式', trigger: 'blur' },
        ],
        llzhts: [
          { required: true, message: '请填写利率转换天数', trigger: 'blur' },
        ],
        nbzhmc: [
          { required: true, message: '请填写内部账号名称', trigger: 'blur' },
        ],
      },
      form: {
        ckkllsh: '',
        ckqx: '',
        ckll: '',
        ckje: '',
        ckklrq: '',
        ckdwbh: '',
        ckdwmc: '',
        nbzh: '',
        nbzhye: '',
        nbzhmc: '',
        dqxcfs: '',
        llzhts: '',
        yjlx: '',
        bz: '',
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
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = ''
        })
        this.form.ckklrq = new Date()
        this.form.ckdwb = '002'
        this.form.ckdwmc = '二级单位1'
        this.form.nbzh = '0021001'
        this.form.ckkllsh = 'FO20201120163123375'
        this.form.yjlx = '0.00'
        this.form.ckdwbh = '002'
        this.form.nbzhye="48,518,175.47"
        this.form.nbzhmc ='二级单位1内部账户'
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.form.ckzt='未结清'
            this.form.zt='保存'
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
