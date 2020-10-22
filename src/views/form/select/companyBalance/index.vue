<template>
  <div class="company-balance">
    <el-card>
      <div slot="header">
        <span>单位账户余额统计表</span>
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
        <el-table :data="tableData" border align="center" style="width: 100%" size="mini" class="tableClass" @selection-change="handleSelectionChange">
          <el-table-column prop="superiorCompany" label="上级单位" width="120" />
          <el-table-column prop="accountCompany" />
          <el-table-column prop="accountName" label="账户名称" width="150" />
          <el-table-column prop="roadName" label="开户行" />
          <el-table-column prop="accountNum" label="银行帐号" />
          <el-table-column prop="balance" label="2020-10-31" width="180" />
        </el-table>
        <div class="page-div">
          <el-pagination
            :current-page="currentData.currentPage || 1"
            :page-sizes="[5, 10, 20, 50, 100]"
            :page-size="currentData.size || 10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="currentData.total || 0"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import Search from '@c/common/search'
import data from '../../components/data'
export default {
  name: 'CompanyBalance',
  components: {
    Search
  },
  data() {
    return {
      searchItem: data.companyBalance.searchFrom,
      searchData: {
        nickname: ''
      },
      searchBto: data.role.searchBto,
      tableData: [],
      list: data.companyBalance.tableData,
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
    handleCurrentChange(val) {
      var end = val * this.currentData.size
      var start = (val - 1) * this.currentData.size
      this.tableData = this.list.slice(start, end)
      this.currentData.currentPage = val
    },
    handleSizeChange(val) {
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
      this.currentData.total = data.companyBalance.tableData.length
    }
  }
}
</script>
<style>
.page-div{
  text-align: right;
}
</style>
