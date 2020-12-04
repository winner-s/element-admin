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
          <el-form-item
            label="认领系统编号："
            prop="jyrlxtbh"
            class="formItem"
          >
            <el-input
              v-model="form.jyrlxtbh"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="认领系统名称："
            prop="jyrlxtmc"
            class="formItem"
          >
            <el-input
              v-model="form.jyrlxtmc"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item
            label="备注："
            prop="bz"
            class="formItem"
          >
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
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      placeholderTips: placeholderTips,
      form: {
        jyrlxtbh: '',
        jyrlxtmc: '',
        bz: ''
      },
      rules: {
        jyrlxtbh: [
          { required: true, message: '请填写交易认领系统编号', trigger: 'blur' }
        ],
        jyrlxtmc: [
          { required: true, message: '请填写交易认领系统名称', trigger: 'blur' }
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
        this.form.khrq = '2020-10-10'
        this.form.documentNumber = 'KH20091410151601'
        this.form.openTime = new Date()
        this.form.sqr = 'admin'
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
