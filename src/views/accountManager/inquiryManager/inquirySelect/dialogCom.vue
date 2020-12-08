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
      <div class="title"><i class="el-icon-user" /> 基本信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="单位名称："
            prop="unitName"
            class="formItem"
          >
            <el-input
              v-model="form.unitName"
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
          <el-form-item label="开户日期：" prop="khrq" class="formItem">
            <el-date-picker
              v-model="form.khrq"
              style="width: 200px"
              type="date"
              placeholder="请选择开户日期"
              size="mini"
              :disabled="true"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="币种：" prop="currency">
            <el-select
              v-model="form.currency"
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
          <el-form-item label="账户号码：" prop="accountPhone">
            <el-select
              v-model="form.accountPhone"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in zhhmList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账户名称：" prop="accountName">
            <el-input
              v-model="form.accountName"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="银行名称：" prop="bankName">
            <el-select
              v-model="form.bankName"
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
          <el-form-item label="科目号：" prop="kmh">
            <el-input
              v-model="form.kmh"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="开户行所在省：" prop="khhszs">
            <el-input
              v-model="form.khhszs"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开户行所在市：" prop="khhszshi">
            <el-input
              v-model="form.khhszshi"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="开户行名称：" prop="bankOpenName">
            <el-input
              v-model="form.bankOpenName"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联行号：" prop="lhh">
            <el-input
              v-model="form.lhh"
              style="width: 200px"
              size="mini"

              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="账户用途：" prop="zhyt">
            <el-select
              v-model="form.zhyt"
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
        <el-col :span="12">
          <el-form-item label="是否直联：" prop="connection">
            <el-select
              v-model="form.connection"
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
      </el-row>

      <div class="title"><i class="el-icon-user" /> 附加信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="客户经理：" prop="khjl">
            <el-input
              v-model="form.khjl"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户经理电话：" prop="khjlPhone">
            <el-input
              v-model="form.khjlPhone"
              style="width: 200px"
              size="mini"
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

    <div class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button type="primary" @click="sub">保存</el-button>
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

  ZHHMLIST,
  CURRENCYLIST,
  ACCOUNTUSAGELIST,
  DIRECTLIST
} from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      zhhmList: ZHHMLIST,
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      placeholderTips: placeholderTips,
      form: {
        unitName: '',
        khrq: '',
        accountPhone: '',
        accountName: '',
        currency: 1,
        bankName: 1,
        bankOpenName: '',
        lhh: '',
        accountStatus: 1,
        connection: 1,
        zhyt: 1,
        kmh: '',
        khhszs: '',
        khhszshi: ''
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
        // this.form = this.dialogObj.form
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
      this.$emit('updateSub', this.form)
      this.dialogObj.show = false
    },
    addSub() {
      this.$emit('addSub', this.form)
      this.dialogObj.show = false
    },

    handleRemove(file, fileList) {
      console.log(file, fileList)
      this.fileList = fileList
    },
    handleSuccess(res, file) {
      console.log(file)
      this.fileList.push(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
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
