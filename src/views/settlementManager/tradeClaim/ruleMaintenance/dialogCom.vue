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
      <div class="title"><i class="el-icon-user" />平台信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="规则编号："
            prop="gzbh"
            class="formItem"
          >
            <el-input
              v-model="form.gzbh"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="规则名称："
            prop="gzmc"
            class="formItem"
          >
            <el-input
              v-model="form.gzmc"
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
          <el-form-item label="认领系统：" prop="rlxt">
            <el-select
              v-model="form.rlxt"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in rlxtList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <div class="title"><i class="el-icon-user" /> 匹配条件</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="匹配范围：" prop="ppfw">
            <el-select
              v-model="form.ppfw"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in ppfwList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="匹配条件：" prop="pptj">
            <el-select
              v-model="form.pptj"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in pptjList"
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
          <el-form-item label="匹配方式：" prop="ppfs">
            <el-select
              v-model="form.ppfs"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in ppfsList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="借贷方向：" prop="jdfx">
            <el-select
              v-model="form.jdfx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in lendingList"
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
        <el-col>
          <el-form-item label="匹配内容：" prop="ppnr">
            <el-input
              v-model="form.ppnr"
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
import {PPTJLIST,LENDINGLIST,RLXTLIST} from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      placeholderTips: placeholderTips,
      lendingList:LENDINGLIST,
      pptjList:PPTJLIST,
      ppfwList:[
        {
          id:1,
          value:'现金'
        }
      ],
      ppfsList:[
        {
          id:1,
          value:'包含'
        },
        {
          id:1,
          value:'相等'
        },
        {
          id:1,
          value:'不包含'
        }
      ],
      rlxtList:RLXTLIST,
      form: {
        gzbh:'',
        gzmc:'',
        rlxt:'',
        ppfw:'',
        pptj:'',
        ppfs:'',
        jdfx:'',
        ppnr:''
      },
      rules:{
        gzbh:[
          { required: true, message: '请填写规则编号', trigger: 'blur' },
        ],
        gzmc:[
          { required: true, message: '请填写规则名称', trigger: 'blur' },
        ],
        ppnr:[
          { required: true, message: '请填写匹配内容', trigger: 'blur' },
        ],

      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    "dialogObj.show"(val) {
      if (val) {
        this.initDialog();
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    initDialog(){
      
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item];
        });
        
      } else{
        Object.keys(this.form).forEach(item => {
          this.form[item] =''
        });
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
            this.form.gzzt=1
            this.addSub()
          }
        }
      })
    },
    updateSub(){
      this.$emit('updateSub',JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show=false
    },
    addSub() {
      this.$emit('addSub',JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show=false
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
