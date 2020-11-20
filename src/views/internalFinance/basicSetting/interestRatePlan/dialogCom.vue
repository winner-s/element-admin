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
            label="利率计划名称："
            prop="lljhmc"
            class="formItem"
          >
            <el-input
              v-model="form.lljhmc"
              style="width: 200px"
              size="mini"
             
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="利率类型："
            prop="lllx"
            class="formItem"
          >
            <el-select
              v-model="form.lllx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
            >
              <el-option
                v-for="item in rateTypeList"
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
          <el-form-item
            label="利率计划类型："
            prop="lljhlx"
            class="formItem"
          >
            <el-input
              v-model="form.lljhlx"
              style="width: 200px"
              size="mini"
              
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

    </el-form>

    <div class="dialog-footer">
       <el-button type="primary"  v-if="dialogObj.plan">新增</el-button>
      <el-button type="primary" @click="sub" v-else>保存</el-button>
     
      <el-button @click="dialogObj.show = false">取 消</el-button>
    </div>

    <Table
      v-if="dialogObj.plan"
      :table-data="form.childerList"
      :table-list-data="tableListData"
      :table-btn="tableBtn"
      :current-data="currentData"
      @onPageChange="onPageChange"
      @onSizeChange="onSizeChange"
      @handleEdit="handleEdit"
      @handleViewOther="handleViewOther"
      @handleDelete="handleDelete"
    />
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import { RATETYPELIST } from '@u/wordbook'
import Table from '@c/common/table'
export default {
  components: {Table},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      rateTypeList: RATETYPELIST,
      placeholderTips: placeholderTips,
       // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10,
      },
      // 表格
      tableListData:[],
     
      tableBtn: [],
      form: {
        lljhmc:'',
        lllx:'',
        lljhlx:'',
        childerList:[]
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
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.tableListData =[
      { width: '50', label: '', type: 'index', fixed: 'left' },
      

      {
        prop: 'qjlx',
        width: '',
        label: '区间类型',
       
      },
      {
        prop: 'ye',
        width: '',
        label: '余额',
        
      },
      {
        prop: 'jzll',
        width: '',
        label: '基准利率',
      },
      {
        prop: 'fdlx',
        width: '',
        label: '浮动类型',
      },
      {
        prop: 'fdbl',
        width: '',
        label: '浮动比例',
      },

      {
        prop: 'zxll',
        width: '',
        label: '执行利率(%)',
      },
      { label: '操作', type: 'btn', width: '200', fixed: 'right' },
    ]

    // 按钮
    this.tableBtn = [
      {
        name: '编 辑',
        btnType: 'primary',
        handleFn: 'handleEdit',
      },
      {
        name: '删 除',
        btnType: 'danger',
        handleFn: 'handleDelete',
      },
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    // 删除产品
    handleDelete(v) {
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        // console.log()
        // this.list.splice(this.list.indexOf(v), 1)
        // this.tableData = this.list
        // this.currentData.total = this.list.length
      })
    },
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = ''
        })
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
