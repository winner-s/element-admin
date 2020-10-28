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
            label="单据编号："
            prop="sysStudentNumber"
            class="formItem"
          >
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="单位名称："
            prop="sysStudentName"
            class="formItem"
          >
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="销户日期：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="币种：" prop="sysStudentName">
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="银行账号：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账户名称：" prop="sysStudentName">
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="银行名称：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="科目号：" prop="sysStudentName">
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="开户行所在省：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开户行所在市：" prop="sysStudentName">
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="开户行名称：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联行号：" prop="sysStudentName">
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="账户用途：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否直联：" prop="sysStudentName">
            <el-input
              v-model="form.sysStudentName"
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
          <el-form-item label="销户申请人：" prop="sysStudentNumber">
            <el-input
              v-model="form.sysStudentNumber"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <div class="title"><i class="el-icon-user" /> 附加信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="客户经理：" prop="sysParentName">
            <el-input
              v-model="form.sysParentName"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户经理电话：" prop="sysParentTelphone">
            <el-input
              v-model="form.sysParentTelphone"
              style="width: 200px"
              size="mini"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="备注：" prop="sysFamilyAddress">
            <el-input
              v-model="form.sysFamilyAddress"
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

      <el-row>
        <el-col>
          <el-form-item label="附件：" prop="sysFamilyAddress">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
            >
              <el-button size="small" type="primary">上传附件(0)条</el-button>

            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button
        type="primary"
        @click="dialogObj.show = false"
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
      form: {}
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {}
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
