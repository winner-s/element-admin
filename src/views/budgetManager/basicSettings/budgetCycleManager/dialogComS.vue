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
        <el-col :span="12">
          <el-form-item label="周期类型：" prop="zqlx">
            <el-select
              v-model="form.zqlx"
              placeholder="请选择"
              size="mini"
              :disabled="true"
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
          <el-form-item label="预算年度：" prop="ysnd">
            <el-select
              v-model="form.ysnd"
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
        <el-col :span="12"> </el-col>
      </el-row>
    </el-form>

    <div class="dialog-footer">
      <el-button>初始化日期</el-button>
      <el-button @click="addSection">添加区间</el-button>
    </div>
    <Table
      :table-data="form.childerList"
      :table-list-data="tableListData"
      :table-btn="tableBtn"
      :current-data="currentData"
      @onPageChange="onPageChange"
      @onSizeChange="onSizeChange"
      @handleEdit="handleEdit"
      @handleViewOther="handleViewOther"
      @handleDelete="handleDelete"
      @handleSelectionChange="handleSelectionChange"
    />
    <div class="dialog-footer">
      <el-button type="primary" @click="sub">保存</el-button>
      <el-button @click="dialogObj.show = false">返回</el-button>
    </div>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import { CYCLETYPELIIST } from '@u/wordbook'
import Table from '@c/common/table'
export default {
  components: { Table },
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      tableListData: [],
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10,
      },
      scorllList: [
        {
          id: 1,
          value: '2017',
        },
        {
          id: 2,
          value: '2018',
        },
        {
          id: 3,
          value: '2019',
        },
        {
          id: 4,
          value: '2020',
        },
        {
          id: 5,
          value: '2021',
        },
        {
          id: 6,
          value: '2022',
        },
        {
          id: 7,
          value: '2023',
        },
      ],
      
      cycletypeList: CYCLETYPELIIST,
      placeholderTips: placeholderTips,
      form: {
        childerList: [
          {
            qjbh: '1',
            ksrq: '',
            jsrq: '',
            ggdllmmc: '',
          },
        ],
        zqbh:'',
        zqmc: '',
        zqlx: '',
        ysnd: 4,
      },
      ystxbhList: [
        {
          txbh: 'TX2020011',
          txmc: '测试1',
        },
        {
          txbh: 'TX2019003',
          txmc: '测试1',
        },
        {
          txbh: 'TX2020006',
          txmc: '测试1',
        },
        {
          txbh: 'TX2020003',
          txmc: '测试1',
        },
      ],
      rules: {
        ystxbh: [
          { required: true, message: '请选择预算体系编号', trigger: 'blur' },
        ],
        yszqbh: [
          { required: true, message: '请填写预算周期编号', trigger: 'blur' },
        ],
        yszqmc: [
          { required: true, message: '请填写预算周期名称', trigger: 'blur' },
        ],
        zqlx: [{ required: true, message: '请选择周期类型', trigger: 'blur' }],
        sfgd: [{ required: true, message: '请选择是否滚动', trigger: 'blur' }],
        xsls: [{ required: true, message: '请选择显示列数', trigger: 'blur' }],
      },
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
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      {
        prop: 'qjbh',
        width: '',
        type: 'input',
        label: '区间编号',
      },
      {
        prop: 'ksrq',
        width: '',
        type: 'input',
        label: '开始日期',
      },
      {
        prop: 'jsrq',
        width: '',
        type: 'input',
        label: '结束日期',
      },
      {
        prop: 'gdllmmc',
        width: '',
        type: 'input',
        label: '滚动列列名名称',
      },
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    addSection() {
      
      this.form.childerList.push({
        qjbh: this.form.childerList.length+1,
        ksrq: '',
        jsrq: '',
        ggdllmmc: '',
      })
    },
    // 分页
    onPageChange(val) {
      console.log(val)
      var end = val * this.currentData.size
      var start = (val - 1) * this.currentData.size

      this.tableData = this.list.slice(start, end)

      this.currentData.currentPage = val
    },
    onSizeChange(val) {
      this.currentData.size = val
      this.currentData.currentPage = 1
      this.getList()
    },
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item];
        });
        
        
      } else{
        Object.keys(this.form).forEach(item => {
          this.form[item] =''
        });
        
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        this.updateSub()
      })
    },
    updateSub() {
      this.$emit('SectionupdateSub', this.form)
      this.dialogObj.show = false
    },
    
  },
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
