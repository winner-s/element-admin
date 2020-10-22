<template>
  <div class="company-info">
    <el-card>
      <div slot="header">
        <span>单位基本信息表</span>
      </div>
      <div>
        <Search :search-data="searchData" :search-item="searchItem" @getDataList="getDataList" />
        <Table
          :table-data="tableData"
          :table-list-data="tableListData"
          :current-data="currentData"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
        />
      </div>
    </el-card>
  </div>
</template>
<script>
import Search from '@c/common/search'
import Table from '@c/common/table'
import data from '../../components/data'
export default {
  name: 'CompanyInfo',
  components: {
    Search,
    Table
  },
  data() {
    return {
      searchItem: data.companyInfo.searchFrom,
      searchData: {
        nickname: ''
      },
      tableData: [],
      tableListData: data.companyInfo.tableListData,
      list: data.companyInfo.tableData,
      tableBtn: [],
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getDataList(val) {
      console.log(val)
      this.searchData = val
    },
    onPageChange(val) {
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
    handleEdit(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑账号'
      this.dialogObj.form = row
    },
    handleViewOther(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看账号'
      this.dialogObj.form = row
    },
    handleStatus(val) {},
    handleDelete(val) {},
    getList() {
      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = data.companyInfo.tableData.length
    }
  }
}
</script>
