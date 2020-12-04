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
      <div class="title"><i class="el-icon-user" />放款信息</div>
      <div class="mb-10" />
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
          <el-form-item label="借款合同：" prop="jkht" class="formItem">
            <el-select
              v-model="form.jkht"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="jkhtChange"
            >
              <el-option
                v-for="item in jkhtList"
                :key="item.id"
                :label="item.jkht"
                :value="item.jkht"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="放款金额：" prop="fkje">
            <el-input
              v-model="form.fkje"
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
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="放款日：" prop="fkr">
            <el-date-picker
              v-model="form.fkr"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
              style="width: 200px"
              size="mini"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="到期日：" prop="dqr">
            <el-date-picker
              v-model="form.dqr"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
              style="width: 200px"
              size="mini"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="首次付息日：" prop="scfxr">
            <el-date-picker
              v-model="form.scfxr"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              style="width: 200px"
              size="mini"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="首次还本日期：" prop="schbrq">
            <el-date-picker
              v-model="form.schbrq"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期"
              style="width: 200px"
              size="mini"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="计息方式：" prop="jxfs">
            <el-input
              v-model="form.jxfs"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="借款内部账户：" prop="jknbzh">
            <el-input
              v-model="form.jknbzh"
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
          <el-form-item label="合同开始日：" prop="htksr">
            <el-date-picker
              v-model="form.htksr"
              type="date"
              placeholder="选择日期"
              style="width: 200px"
              size="mini"
              value-format="yyyy-MM-dd"
              :disabled="true"
            />

          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="合同到期日：" prop="htdqr">
            <el-date-picker
              v-model="form.htdqr"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              style="width: 200px"
              size="mini"
              :disabled="true"
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

export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      jkhtList: [
        {
          jkht: 'JK8875206965',
          jxfs: 1,
          jknbzh: '123',
          htksr: '2020-11-11',
          htdqr: '2020-11-29'
        }
      ],
      placeholderTips: placeholderTips,
      form: {
        fkdbh: '',
        dkht: '',
        fkje: '',
        dxje: '',
        fkr: '',
        dqr: '',
        scfxr: '',
        schbrq: '',
        jxfs: '',
        htksr: '',
        htdqr: '',
        cxdjfs: '',
        lltzzq: ''
      },
      rules: {
        dkht: [{ required: true, message: '请填写贷款合同', trigger: 'blur' }],
        fkje: [{ required: true, message: '请填写放款金额', trigger: 'blur' }],
        fkr: [{ required: true, message: '请填写放款日', trigger: 'blur' }],
        dqr: [{ required: true, message: '请填写到期日', trigger: 'blur' }],
        scfxr: [
          { required: true, message: '请填写首次付息日', trigger: 'blur' }
        ],
        schbrq: [
          { required: true, message: '请填写首次还本日期', trigger: 'blur' }
        ],
        jxfs: [{ required: true, message: '请填写计息方式', trigger: 'blur' }],
        htdqr: [
          { required: true, message: '请填写合同到期日', trigger: 'blur' }
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
    jkhtChange(val) {
      this.jkhtList.forEach((item, index) => {
        if (item.jkht == val) {
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

        this.form.fkdbh = 'FK916452301090'
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.form.fkdzt = 1
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
