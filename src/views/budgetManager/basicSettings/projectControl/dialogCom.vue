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
      <div class="title"><i class="el-icon-user" /> 基本信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="体系编号："
            prop="txbh"
            class="formItem"
          >
            <el-select
              v-model="form.txbh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in txbhList"
                :key="item.txbh"
                :label="item.txbh"
                :value="item.txbh"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="体系名称："
            prop="txmc"
            class="formItem"
          >
            <el-input
              v-model="form.txmc"
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
          <el-form-item label="周期编号：" prop="zqbh">
            <el-select
              v-model="form.zqbh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in zqbhList"
                :key="item.zqbh"
                :label="item.zqbh"
                :value="item.zqbh"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="周期名称：" prop="zqmc">
            <el-input
              v-model="form.zqmc"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" />周期间控制关系设置</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="是否受上级周期控制：" prop="zqkz">
            <el-select
              v-model="form.zqkz"
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
        <el-col :span="12" />
      </el-row>

      <div class="title"><i class="el-icon-user" />付款控制设置</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="周期是否控制付款：" prop="kzfk">
            <el-select
              v-model="form.kzfk"
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
        <el-col :span="12" />
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
import { SCORLLLIST } from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      placeholderTips: placeholderTips,
      form: {
        txbh: '',
        txmc: '',
        zqbh: '',
        zqmc: '',
        zqkz: '',
        kzfk: '',
        zqzt: '启用'
      },
      rules: {
        txbh: [
          { required: true, message: '请选择体系编号', trigger: 'blur' }
        ],
        txmc: [
          { required: true, message: '请填写体系名称', trigger: 'blur' }
        ],
        zqbh: [
          { required: true, message: '请选择周期编号', trigger: 'blur' }
        ],
        zqmc: [
          { required: true, message: '请填写周期名称', trigger: 'blur' }
        ],
        zqkz: [
          { required: true, message: '请选择是否受上级周期控制', trigger: 'blur' }
        ],
        kzfk: [
          { required: true, message: '请选择周期是否控制付款', trigger: 'blur' }
        ]
      },
      txbhList: [
        {
          txbh: '2020001',
          txmc: '体系1'
        },
        {
          txbh: '2020002',
          txmc: '体系2'
        }
      ],
      zqbhList: [
        {
          zqbh: '2020027',
          zqmc: 'test',
          zqlx: '月',
          txmc: '2020'
        }
      ],
      scorllList: SCORLLLIST
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
      console.log(this.dialogObj)
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach(item => { this.form[item] = '' })
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
      this.form.zqzt = '启用'
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
