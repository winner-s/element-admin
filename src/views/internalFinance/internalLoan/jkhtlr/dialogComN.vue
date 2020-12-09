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
      <el-row>
        <el-col :span="12">
          <el-form-item label="担保合同编号：" prop="dbhtbh" class="formItem">
            <el-input
              v-model="form.dbhtbh"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="担保合同名称：" prop="dbhtmc" class="formItem">
            <el-input
              v-model="form.dbhtmc"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="担保主体：" prop="dbzt">
            <el-input
              v-model="form.dbzt"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="担保方式：" prop="dbfs">
            <el-input
              v-model="form.dbfs"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="担保类型：" prop="dblx">
            <el-input
              v-model="form.dblx"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="抵/质押物：" prop="dyw">
            <el-checkbox-group v-model="form.dyw">
              <el-checkbox label="复选框 A" />
              <el-checkbox label="复选框 B" />
              <el-checkbox label="复选框 C" />
              其他：
              <el-input
                v-model="form.qt"
                style="width: 200px"
                size="mini"
                :disabled="dialogObj.id !== ''"
                :placeholder="placeholderTips.content"
              />
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="担保额度(元)：" prop="dbed">
            <el-input
              v-model="form.dbed"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
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
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
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
      rules: {
        dbhtbh: [
          { required: true, message: '请填写担保合同编号', trigger: 'blur' }
        ],
        dbhtmc: [
          { required: true, message: '请填写担保合同名称', trigger: 'blur' }
        ],
        dbzt: [
          { required: true, message: '请填写担保主体', trigger: 'blur' }
        ],
        dbfs: [
          { required: true, message: '请填写担保方式', trigger: 'blur' }
        ],
        dblx: [
          { required: true, message: '请填写担保类型', trigger: 'blur' }
        ],
        dyw: [
          { required: true, message: '请填写抵/质押物', trigger: 'blur' }
        ],
        dbed: [
          { required: true, message: '请填写担保额度', trigger: 'blur' }
        ]
      },
      placeholderTips: placeholderTips,
      form: {
        dbhtbh: '',
        dbhtmc: '',
        dbzt: '',
        dbfs: '',
        dblx: '',
        dyw: [],
        qt: '',
        dbed: '',
        jedx: '',
        bz: ''
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
