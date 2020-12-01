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
          <el-form-item label="版本号：" prop="bbh" class="formItem">
            <el-input
              v-model="form.bbh"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算年度：" prop="ysnd" class="formItem">
            <el-input
              v-model="form.ysnd"
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
          <el-form-item label="预算体系：" prop="ystx">
            <el-input
              v-model="form.ystx"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算周期：" prop="yszq">
            <el-input
              v-model="form.yszq"
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
          <el-form-item label="预算开始日期：" prop="ysksrq">
            <el-input
              v-model="form.ysksrq"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算结束日期：" prop="ysjsrq">
            <el-input
              v-model="form.ysjsrq"
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
        <el-col :span="12"> </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="调剂说明：" prop="tjsm">
            <el-input
              v-model="form.tjsm"
              style="width: 200px"
              size="mini"
              type="textarea"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12"> </el-col>
      </el-row>
    </el-form>
    <div class="dialog-footer">
      <el-button @click="tableDataInsert" type="primary">新增</el-button>
      <el-button @click="tableDataDelete">删除</el-button>
    </div>
    <Table
      :table-data="tableData"
      :table-list-data="tableListData"
      :table-btn="tableBtn"
      :current-data="currentData"
      @onPageChange="onPageChange"
      @onSizeChange="onSizeChange"
      @handleSelectionChange="handleSelectionChange"
    />
    <div class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button type="primary" @click="dialogObj.show = false"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import Table from '@c/common/table'
export default {
  components: { Table },
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      selectChange: [],
      rules:{
        bbh:[
          { required: true, message: '请填写版本号', trigger: 'blur' },
        ]
      },
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10,
      },
      placeholderTips: placeholderTips,
      form: {},
      // 表格
      tableData: [
        {
          id: 1,
          yszt: '',
          ysxm: '',
          tjlx: '',
          tjqje: '',
          tjhje: '',
        },
      ],
      tableBtn: [],
      id: 1,
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index' },
      { width: '50', label: '', type: 'selection' },
      {
        prop: 'yszt',
        width: '',
        label: '预算主体',
        type: 'input',
      },

      {
        prop: 'ysxm',
        width: '',
        label: '预算项目',
        type: 'input',
      },

      {
        prop: 'tjlx',
        width: '',
        label: '调剂类型',
        type: 'input',
        disabled: true,
      },
      {
        prop: 'tjqje',
        width: '',
        label: '调剂前金额',
        type: 'input',
        disabled: true,
      },
      {
        prop: 'tjhje',
        width: '',
        label: '调剂后金额',
        type: 'input',
      },
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '调整',
        btnType: 'primary',
        handleFn: 'handleEdit',
      },
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    tableDataDelete() {
      this.selectChange.forEach((item, index) => {
        this.tableData.forEach((res, index) => {
          if (res.id == item.id) {
            this.tableData.splice(index,1)
          }
        })
      })
    },
    handleSelectionChange(res) {
      this.selectChange = res
    },
    tableDataInsert() {
      let id = this.id + 1
      this.id = id
      this.tableData.push({
        id: id,
        yszt: id,
        ysxm: '',
        tjlx: '',
        tjqje: '',
        tjhje: '',
      })
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
