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
            label="单位编号："
            prop="dwbh"
            class="formItem"
          >
            <el-input
              v-model="form.dwbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单位名称：" prop="dwmc" class="formItem">
            <el-input
              v-model="form.dwmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            >
              <template slot="append">%</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="账户编号：" prop="zhbh" class="formItem">
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
          <el-form-item label="账户名称：" prop="zhmc" class="formItem">
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

      <el-row>
        <el-col :span="12">
          <el-form-item label="账户类型：" prop="zhlx" class="formItem">
            <el-input
              v-model="form.zhlx"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开户日期：" prop="khrq" class="formItem">
            <el-input
              v-model="form.khrq"
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
          <el-form-item label="币种：" prop="bz" class="formItem">
            <el-input
              v-model="form.bz"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="计息：" prop="jx" class="formItem">
            <el-input
              v-model="form.jx"
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
          <el-form-item label="开始计息日：" prop="ksjxr" class="formItem">
            <el-input
              v-model="form.ksjxr"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="利率计划：" prop="lljh" class="formItem">
            <el-input
              v-model="form.lljh"
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
          <el-form-item label="初始余额：" prop="csye" class="formItem">
            <el-input
              v-model="form.csye"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账户余额：" prop="zhye" class="formItem">
             <el-input
              v-model="form.zhye"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="title"><i class="el-icon-user" /> 附加信息</div>
      <el-row>
        <el-col >
          <el-form-item label="备注：" prop="bzhu" class="formItem">
            <el-input
              v-model="form.bzhu"
              style="width: 83%"
              type="textarea"
              :rows="3"
              size="mini"
              :disabled="true"
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
      
      placeholderTips: placeholderTips,
      
      form: {
        dwbh:'',
        dwmc:'',
        zhbh:'',
        zhmc:'',
        zhlx:'',
        khrq:'',
        bz:'',
        jx:'',
        jxksr:'',
        lljh:'',
        csye:'',
        zhye:'',
        bzhu:''
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
        this.form.ckzqlsh = '74564879'
      }
    },
    
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
