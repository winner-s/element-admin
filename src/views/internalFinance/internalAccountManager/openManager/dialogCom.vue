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
      <div class="title"><i class="el-icon-user" /> 基本信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="单位编号："
            prop="dwbh"
            class="formItem"
          >
            <el-select
              v-model="form.dwbh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="dwbhChange"
            >
              <el-option
                v-for="item in dwbhList"
                :key="item.id"
                :label="item.dwbh"
                :value="item.dwbh"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="单位名称："
            prop="dwmc"
            class="formItem"
          >
            <el-input
              v-model="form.dwmc"
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
          <el-form-item label="账户编号：" prop="zhbh">
            <el-input
              v-model="form.zhbh"
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
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="账户类型：" prop="zhlx">
            <el-input
              v-model="form.zhlx"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开户日期：" prop="khrq">
            <el-input
              v-model="form.khrq"
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
          <el-form-item label="币种：" prop="bz">
            <el-select
              v-model="form.bz"
              placeholder="请选择币种"
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
          <el-form-item label="计息：" prop="jx">
            <el-select
              v-model="form.jx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in scorllList"
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
          <el-form-item label="初始金额：" prop="csje">
            <el-input
              v-model="form.csje"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <div class="title"><i class="el-icon-user" /> 附加信息</div>

      <el-row>
        <el-col>
          <el-form-item label="备注：" prop="bzhu">
            <el-input
              v-model="form.bzhu"
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
import { CURRENCYLIST, SCORLLLIST } from '@u/wordbook'
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
      currencyList: CURRENCYLIST,
      scorllList: SCORLLLIST,
      dwbhList: [
        {
          dwbh: '0813',
          dwmc: '0813001',
          zhbh: '08131003'
        },
        {
          dwbh: '123',
          dwmc: '123',
          zhbh: '123'
        }
      ],
      rules: {
        dwbh: [
          { required: true, message: '请填写单据编号', trigger: 'blur' }
        ],
        dwmc: [
          { required: true, message: '请填写单位名称', trigger: 'blur' }
        ],
        zhbh: [
          { required: true, message: '请填写账户编号', trigger: 'blur' }
        ],
        zhmc: [
          { required: true, message: '请填写账户名称', trigger: 'blur' }
        ],
        zhlx: [
          { required: true, message: '请填写账户类型', trigger: 'blur' }
        ],
        khrq: [
          { required: true, message: '请填写开户日期', trigger: 'blur' }
        ],
        bz: [
          { required: true, message: '请选择币种', trigger: 'blur' }
        ],
        jx: [
          { required: true, message: '请选择jix', trigger: 'blur' }
        ],
        csje: [
          { required: true, message: '请填写初始金额', trigger: 'blur' }
        ]
      },
      form: {
        dwbh: '',
        dwmc: '',
        zhbh: '',
        zhmc: '',
        zhlx: '',
        khrq: '',
        bz: '',
        jx: '',
        csye: '',
        bzhu: '',
        sqdzt: ''
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
    dwbhChange(res) {
      this.dwbhList.forEach((item, index) => {
        if (item.dwbh === res) {
          this.form.dwmc = item.dwmc
          this.form.zhbh = item.zhbh
        }
      })
    },
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach(item => {
          this.form[item] = ''
        })
        this.form.sqdzt = 1
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
