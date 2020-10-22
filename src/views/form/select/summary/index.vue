<template>
  <div class="summary">
    <el-card>
      <div slot="header">
        <span> 银行账户交易报表	</span>
      </div>
      <div>
        <Search
          :search-data="searchData"
          :search-item="searchItem"
          :search-bto="searchBto"
          :show-all="showAll"
          @getDataList="getDataList"
          @dropDown="dropDown"
          @dropUp="dropUp"
        />
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
import data from '../../components/data'
import Table from '@c/common/table'
export default {
  name: 'Summary',
  components: {
    Search,
    Table
  },
  data() {
    return {
      searchItem: data.summary.searchFrom,
      searchData: {
        nickname: ''
      },
      searchBto: data.summary.searchBto,
      tableData: [],
      tableListData: data.summary.tableListData,
      list: data.summary.tableData,
      showAll: false,
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0
      }
    }
  },
  created() {
    // console.log(data)
    this.getList()
  },
  methods: {
    // 收起
    dropUp() {
      this.showAll = false
      this.searchItem.forEach((item, index) => {
        if (item.show !== undefined) {
          item.show = false
        }
      })
    },
    // 展开
    dropDown() {
      this.showAll = true
      this.searchItem.forEach((item, index) => {
        if (item.show !== undefined) {
          item.show = true
        }
      })
    },
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
    handleEdit(row) {},
    handleViewOther(row) {},
    handleStatus(val) {},
    handleDelete(val) {},
    getList() {
      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = data.summary.tableData.length
    }
  }
}
</script>
<style>
.page-div{
  text-align: right;
}
</style>
