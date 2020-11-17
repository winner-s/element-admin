<!--  -->
<template>
  <el-dialog
    :title="dialogObjNei.title"
    :visible.sync="dialogObjNei.show"
    :close-on-click-modal="false"
    width="1000px"
    class="abow_dialog"
    append-to-body
  >
    <Search
      :search-data="searchData"
      :search-item="searchItem"
      :search-bto="searchBto"
      :show-all="showAll"
      @getDataList="getDataList"
      @handleInsert="handleInsert"
      @dropDown="dropDown"
      @dropUp="dropUp"
    />

    <Table
      :table-data="tableData"
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
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { ACCOUNTUSAGE, ACCOUNTUSAGELIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Search, Table },
  props: ['dialogObjNei'],
  data() {
    //这里存放数据
    return {
      accountUsageList: ACCOUNTUSAGELIST,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10,
      },
      showAll: false,
      list: [
          {
              dwmc:'',
              yhzh:'',
              zhmc:'',
              khhmc:'',
              zhzt:'',
              zhyt:''
          }
      ],
      // 表格
      tableData: [],
      tableBtn: [],
      // 顶部按钮
      searchBto: [],
      // 顶部搜索
      searchItem: [],
      searchData: {},
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    accountUsage(val) {
      return ACCOUNTUSAGE[val]
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.tableData = this.list.slice(0, this.currentData.size)
    this.currentData.total = this.list.length
    // 顶部按钮
    this.searchBto = [
      {
        prop: 'select',
        type: 'primary',
        label: '查询',
      },
      {
        prop: 'confirm',
        type: 'primary',
        label: '确认',
      },
    ]
    // 搜索
    this.searchItem = [
      {
        type: 'input',
        label: '单位名称:',
        prop: 'dwmc',
        placeholder: '请填写单位名称',
      },
      {
        type: 'input',
        label: '银行账号:',
        prop: 'yhzh',
        placeholder: '请填写银行账号',
      },
      {
        type: 'input',
        label: '账号名称:',
        prop: 'zhmc',
        show: false,
        placeholder: '请填写账号名称',
      },
      {
        type: 'input',
        label: '开户行名称:',
        prop: 'khhmc',
        show: false,
        placeholder: '请填写开户行名称',
      },
      {
        type: 'select',
        label: '账户用途:',
        prop: 'yhzh',
        show: false,
        selectList: this.accountUsageList,
        placeholder: '请选择账户用途',
      },
    ]

    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },

      {
        prop: 'dwmc',
        width: '150',
        type: 'a',
        label: '单位名称',
        fixed: 'left',
      },
      {
        prop: 'yhzh',
        width: '150',
        label: '银行账号',
        fixed: 'left',
      },
      {
        prop: 'zhmc',
        width: '',
        label: '账户名称',
      },
      {
        prop: 'khhmc',
        width: '',
        label: '开户行名称',
      },
      {
        prop: 'zhzt',
        width: '',
        label: '账户状态',
      },
      {
        prop: 'zhyt',
        width: '',
        label: '账户用途',
      },
    ]
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
}
</script>
<style  scoped>
</style>