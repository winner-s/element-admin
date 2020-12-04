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
      :inline-message="true"
      :disabled="dialogObj.read"
      status-icon
      class="form"
    >
      <div class="title"><i class="el-icon-user" /> 预算周期</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="预算体系编号："
            prop="ystxbh"
            class="formItem"
          >
            <el-select
              v-model="form.ystxbh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in ystxbhList"
                :key="item.txbh"
                :label="item.txbh"
                :value="item.txbh"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="预算周期编号："
            prop="zqbh"
            class="formItem"
          >
            <el-input
              v-model="form.zqbh"
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
          <el-form-item label="预算周期名称：" prop="zqmc">
            <el-input
              v-model="form.zqmc"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="周期类型：" prop="zqlx">
           <el-select
              v-model="form.zqlx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in cycletypeList"
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
          <el-form-item label="是否滚动：" prop="sfgd">
            <el-select
              v-model="form.sfgd"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in scorllList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="显示列数：" prop="xsls">
            <el-input
              v-model="form.xsls"
              style="width: 200px"
              size="mini"
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
import {
 SCORLLLIST,CYCLETYPELIIST
} from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      scorllList:SCORLLLIST,
      cycletypeList:CYCLETYPELIIST,
      placeholderTips: placeholderTips,
      form: {
        ystxbh:'',

        zqbh:'',
        zqmc:'',
        sstx:'',
        zqlx:"",
        sfgd:'',
        xsls:'',
        zqzt:''

      },
      ystxbhList:[
        {
          txbh:'TX2020011',
          txmc:'测试1'
        },
        {
          txbh:'TX2019003',
          txmc:'测试1'
        },
        {
          txbh:'TX2020006',
          txmc:'测试1'
        },
        {
          txbh:'TX2020003',
          txmc:'测试1'
        },
      ],
      rules:{
        ystxbh:[
          { required: true, message: '请选择预算体系编号', trigger: 'blur' },
        ],
        yszqbh:[
          { required: true, message: '请填写预算周期编号', trigger: 'blur' },
        ],
        yszqmc:[
          { required: true, message: '请填写预算周期名称', trigger: 'blur' },
        ],
        zqlx:[
          { required: true, message: '请选择周期类型', trigger: 'blur' },
        ],
        sfgd:[
          { required: true, message: '请选择是否滚动', trigger: 'blur' },
        ],
        xsls:[
          { required: true, message: '请选择显示列数', trigger: 'blur' },
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
        this.form.zqbh = "4587244848498"
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.form.zqzt="停用"
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
      console.log(this.form)
      this.form.zqzt='启用'
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
