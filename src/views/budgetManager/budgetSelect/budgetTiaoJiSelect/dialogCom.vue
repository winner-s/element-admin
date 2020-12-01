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
            label="版本号："
            prop="bbh"
            class="formItem"
          >
            <el-input
              v-model="form.bbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="预算年度："
            prop="ysnd"
            class="formItem"
          >
            <el-select
              v-model="form.ysnd"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in ysndList"
                :key="item.ysnd"
                :label="item.ysnd"
                :value="item.ysnd"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="预算体系：" prop="ystx">
            <el-select
              v-model="form.ystx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in ystsList"
                :key="item.txmc"
                :label="item.txmc"
                :value="item.txmc"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算周期：" prop="zqmc">
            <el-select
              v-model="form.zqmc"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in yszqList"
                :key="item.zqmc"
                :label="item.zqmc"
                :value="item.zqmc"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="预算开始日期：" prop="ksrq">
            <el-date-picker
              v-model="form.ksrq"
              type="date"
              value-format="yyyy-MM-dd"
              style="width: 200px"
              size="mini"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算结束日期：" prop="jsrq">
            <el-date-picker
              v-model="form.jsrq"
              type="date"
              value-format="yyyy-MM-dd"
              style="width: 200px"
              size="mini"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="预算编制单位：" prop="ysbzdw">
            <el-input
              v-model="form.ysbzdw"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算描述：" prop="ysms">
            <el-input
              v-model="form.ysms"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="title"><i class="el-icon-user" /> 预算编制明细</div>
      <Table
          :table-data="tableData"
          :table-list-data="tableListData"
          :table-btn="tableBtn"
          :current-data="currentData"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
         
        />
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
import Table from '@c/common/table'
export default {
  components: {Table},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10,
      },
      // 表格
      tableData: [],
      tableBtn: [],
      placeholderTips: placeholderTips,
      yszqList:[
        {
          zqbh:'2020027',
          zqmc:'test',
          zqlx:'年',
        },
        {
          zqbh:'2020029',
          zqmc:'ABCDEFG',
          zqlx:'月',
        },
      ],
      ystsList:[
        {
          txbh:'2020001',
          txmc:'2020'
        },
        {
          txbh:'2020006',
          txmc:'测试1'
        },
        {
          txbh:'2020008',
          txmc:'测试2'
        },
        {
          txbh:'2020014',
          txmc:'测试3'
        },

      ],
      ysndList:[
        {
          ysnd:'2017'
        },
        {
          ysnd:'2018'
        },
        {
          ysnd:'2019'
        },
        {
          ysnd:'2020'
        },
        {
          ysnd:'2021'
        },
        {
          ysnd:'2022'
        },
        {
          ysnd:'2023'
        },
        {
          ysnd:'2024'
        }
      ],
      rules:{
        bbh:[
          { required: true, message: '请输入版本号', trigger: 'blur' },
        ],
        ysnd:[
          { required: true, message: '请选择预算年度', trigger: 'blur' },
        ],
        ystx:[
          { required: true, message: '请选择预算体系', trigger: 'blur' },
        ],
        yszq:[
          { required: true, message: '请选择预算周期', trigger: 'blur' },
        ],
        ysksrq:[
          { required: true, message: '请选择预算开始日期', trigger: 'blur' },
        ],
        ysjsrq:[
          { required: true, message: '请选择预算结束日期', trigger: 'blur' },
        ],
      },
      form: {
        bbh:'',
        ysnd:'',
        ystx:'',
        zqmc:'',
        ksrq:'',
        jsrq:'',
        ysbzdw:'二级单位',
        ysms:'',
        bbzt:'保存'
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
  created() {
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      

      {
        prop: 'ysxm',
        width: '',
        label: '预算项目',
        fixed: 'left',
      },
      {
        prop: '1',
        width: '',
        label: '1',
        fixed: 'left',
      },
      {
        prop: 'hz',
        width: '',
        label: '汇总',
        fixed: 'left',
      }
      
    ]
  },
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
        let bbh = ''
        for(let i=0;i<16;i++){
          bbh+= Math.round(Math.random() * 10)
        }
        Object.keys(this.form).forEach(item => {this.form[item] = ''});
        this.form.bbh= bbh
        this.form.ysbzdw="二级单位1"
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
    updateSub(){
      this.$emit('updateSub',JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show=false
    },
    addSub() {
      console.log(this.form)
      this.form.bbzt='保存'
      this.form.bzr='admin'
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
