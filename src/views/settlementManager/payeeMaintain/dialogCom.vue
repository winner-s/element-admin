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
          <el-form-item label="编号：" prop="bh" class="formItem">
            <el-input
              v-model="form.bh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="收款方名称："
            prop="skfmc"
            class="formItem"
          >
            <el-input
              v-model="form.skfmc"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="收款方银行账号："
            prop="skfyhzh"
            class="formItem"
          >
            <el-input
              v-model="form.skfyhzh"
              style="width: 200px"
              size="mini"

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

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="银行名称："
            prop="yhmc"
            class="formItem"
          >
            <el-select
              v-model="form.yhmc"
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
          <el-form-item
            label="账户类型："
            prop="zhlx"
            class="formItem"
          >
            <el-select
              v-model="form.zhlx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in zhlxList"
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
            label="开户行所在省市："
            prop="khhszss"
            class="formItem"
          >
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
          <el-form-item
            label="开户行联行号："
            prop="khhlhh"
            class="formItem"
          >
            <el-input
              v-model="form.khhlhh"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="开户行名称："
            prop="khhmc"
            class="formItem"
          >
            <el-input
              v-model="form.khhmc"
              style="width: 200px"
              size="mini"

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
import { placeholderTips } from '@u/validate'
import { BACKLIST, ZHLXLIST } from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      options: options,
      backList: BACKLIST,
      zhlxList: ZHLXLIST,
      placeholderTips: placeholderTips,
      form: {
        bh: '',
        skfmc: '',
        skfyhzh: '',
        skfzhmc: '',
        yhmc: '',
        zhlx: '',
        khhszss: '',
        khhmc: '',
        khhlhh: '',
        bz: ''
      },
      rules: {
        bh: [
          { required: true, message: '请填写编号', trigger: 'blur' }
        ],
        skfmc: [
          { required: true, message: '请填写收款方名称', trigger: 'blur' }
        ],
        skfyhzh: [
          { required: true, message: '请填写收款方银行账号', trigger: 'blur' }
        ],
        skfzhmc: [
          { required: true, message: '请填写收款方账户名称', trigger: 'blur' }
        ],
        yhmc: [
          { required: true, message: '请填写银行名称', trigger: 'blur' }
        ],
        zhlx: [
          { required: true, message: '请填写账户类型', trigger: 'blur' }
        ],
        khhszss: [
          { required: true, message: '请填写开户行所在省', trigger: 'blur' }
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
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach(item => {
          this.form[item] = ''
        })

        this.form.bh = 'KH20091410151601'
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.form.status = 1
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
