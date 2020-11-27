<template>
  <div class="company-info">
    <el-card>
      <div slot="header">
        <span>单位基本信息表</span>
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
import Table from '@c/common/table'
import data from '../components/data'
import {UNITLEVEL,UNITLEVELLIST,UNITTYPE,UNITTYPELIST} from '@u/wordbook'
export default {
  name: 'CompanyInfo',
  components: {
    Search,
    Table,
  },
  data() {
    return {
      unitTypeList:UNITTYPELIST,
      unitLevelList:UNITLEVELLIST,
      searchItem: [],
      searchData: {
      },
      tableData: [],
      searchBto: [],
      showAll: false,
      tableListData: [],
      list: [
        {
          id: 1,
          hierarchy: 1,
          companyNum: '052',
          company: '二级单位234',
          companyTyle: '私营企业',
        },
        {
          id: 2,
          hierarchy: 2,
          companyNum: '512',
          company: '二级单位234',
          companyTyle: '中外合营企业',
        },
        {
          id: 3,
          hierarchy: 3,
          companyNum: '432',
          company: '上海xxxx公司',
          companyTyle: '外商投资企业',
        },
        {
          id: 4,
          hierarchy: 4,
          companyNum: '430',
          company: '浙江xxxx公司',
          companyTyle: '随便一个',
        },
        {
          id: 5,
          hierarchy: 5,
          companyNum: '224',
          company: '庐山xxxx公司',
          companyTyle: '航天',
        },
        {
          id: 6,
          hierarchy: '6',
          companyNum: '503',
          company: '九江xxxx公司',
          companyTyle: '01717',
        },
        {
          id: 7,
          hierarchy: '七级',
          companyNum: '486',
          company: '棋联xxxx公司',
          companyTyle: '0806',
        },
        {
          id: 8,
          hierarchy: '八级',
          companyNum: '992',
          company: '北海xx公司',
          companyTyle: '单位类别',
        },
        {
          id: 9,
          hierarchy: '九级',
          companyNum: '452',
          company: '电子xxxx公司',
          companyTyle: '国有企业',
        },
        {
          id: 10,
          hierarchy: '十级',
          companyNum: '232',
          company: '上海xxxx公司',
          companyTyle: '外商投资企业',
        },
        {
          id: 11,
          hierarchy: '十一级',
          companyNum: '412',
          company: '上海xxxx公司',
          companyTyle: '外商投资企业',
        },
      ],
      tableBtn: [],
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0,
      },
    }
  },
  created() {
    this.tableData = this.list.slice(0, this.currentData.size)
    this.currentData.total = this.list.length

    this.searchItem = [
      {
        type: 'select',
        label: '单位层级:',
        prop: 'hierarchy',
        selectList: this.unitLevelList,
        placeholder: '请选择单位层级',
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'company',
        placeholder: '请填写单位名称',
      },
      {
        type: 'select',
        label: '单位类型:',
        prop: 'companyTyle',
        selectList: this.unitTypeList,
        placeholder: '请选择单位类型',
      },
    ]
    this.searchBto = [
      {
        prop: 'select',
        type: 'primary',
        label: '查询',
      },
    ]

    this.tableListData = [
      {
        prop: 'hierarchy',
        width: '',
        label: '单位层级',
        type:"wordbook",
        wordbookList: this.unitLevel
      },
      {
        prop: 'companyNum',
        width: '',
        label: '单位编号',
        
       
      },
      {
        prop: 'company',
        width: '',
        label: '单位名称',
      },
      {
        prop: 'companyTyle',
        width: '',
        label: '单位类型',
        type:"wordbook",
        wordbookList: this.unitType
        
      },
    ]
  },
  methods: {
    //过滤
    unitLevel(val){
      return UNITLEVEL[val]
    },
    unitType(val){
      return UNITTYPE[val]
    },
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
      this.currentData.size = 10
      this.currentData.currentPage = 1
      this.searchData = val
      this.getList()
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
      this.dialogObj.title = '编辑'
      this.dialogObj.form = row
    },
    handleViewOther(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = row
    },
    handleStatus(val) {},
    handleDelete(val) {},
    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.list))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] != '' && this.searchData[i] != undefined) {
            
            if (i == 'hierarchy') {
              if (item.hierarchy.toString().includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'company') {
              if (item.company.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i == 'companyTyle') {
              if (item.companyTyle.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            
          } else {
            continue
          }
        }
        if (bool == true) {
          list.push(item)
        }
      })
      console.log(list)
      this_.tableData = list
    },
  },
}
</script>
