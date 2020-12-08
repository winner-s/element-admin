<template>
  <div class="selectCollsectionInfo">
    <el-card>
      <div slot="header">
        <span>归集信息查询</span>
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
          @handleViewOther="handleViewOther"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" />
  </div>
</template>
<script>
import Search from '@c/common/search'
import Table from '@c/common/table'
import data from '../../components/data'
import dialogCom from './dialogCom'
export default {
  name: 'SelectCollsectionInfo',
  components: {
    Search,
    Table,
    dialogCom
  },
  data() {
    return {
      // 弹出框
      dialogObj: {
        id: '',
        title: 'aaa',
        read: false,
        show: false,
        form: {}
      },
      searchItem: data.selectCollsectionInfo.searchFrom,
      searchData: {
        nickname: ''
      },
      searchBto: data.selectCollsectionInfo.searchBto,
      showAll: false,
      tableData: [],
      tableListData: [],
      list: [
        {
          djbh: 'GJ20102914003603220',
          djrq: '2020-10-29',
          fkgsbh: '002',
          fkgsmc: '二级单位1',
          ywlx: '资金归集',
          hzje: '1.00',
          gsbh: '002',
          gsmc: '二级单位1',
          yhzh: '104',
          yhmc: '中国银行株洲市分行',
          zhbh: '2222334455667711',
          zhmc: '二级单位1CNY直联账户2',
          zflx: '直联支付',
          qwrq: '2020-10-29',
          skgsbh: '002',
          skgsmc: '二级单位1',
          skyhzh: '104',
          skyhmc: '中国银行株洲市分行',
          skzhbh: '2222334455667700',
          skzhmc: '二级单位1CNY直联账户1',
          je: '1.00',
          zy: '手动归集',
          clbh: 'ZJGJ20072011081832',
          clmc: '11',
          zlzt: '失败',
          zlfssj: '2020-10-29 14:00:36',
          zlcxsj: '',
          yhfhxx: '创建"BOC_2019112101"对应的服务时出错',
          hksd: '普通'
        }
      ],
      tableBtn: [],
      currentData: {
        currentPage: 1,
        size: 10,
        total: 0
      }
    }
  },
  created() {
    this.tableData = this.list.slice(0, this.currentData.size)
    this.currentData.total = this.list.length
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      {
        type: 'a',
        prop: 'djbh',
        fixed: 'left',
        width: '150',
        label: '单据编号'
      },
      {
        prop: 'djrq',
        width: '150',
        fixed: 'left',
        label: '单据日期'
      },
      {
        prop: 'je',
        width: '150',
        label: '金额'
      },
      {
        prop: 'gsmc',
        width: '150',
        label: '付款申请单位'
      },
      {
        prop: 'zlzt',
        width: '150',
        label: '指令状态'
      },
      {
        prop: 'clbh',
        width: '150',
        label: '策略编号'
      },
      {
        prop: 'clmc',
        width: '150',
        label: '策略名称'
      },
      {
        prop: 'yhzh',
        width: '150',
        label: '付款银行帐号'
      },
      {
        prop: 'yhmc',
        width: '150',
        label: '付款账户名称'
      },
      {
        prop: 'skyhzh',
        width: '150',
        label: '收款银行帐号'
      },
      {
        prop: 'skzhmc',
        width: '150',
        label: '收款账户名称'
      },
      {
        prop: 'skyhmc',
        width: '150',
        label: '指令接受银行'
      },
      {
        prop: 'hksd',
        width: '150',
        label: '汇款速度'
      }
    ]
  },
  methods: {
    handleViewOther(row) {
      console.log(row)
      this.dialogObj.id = row.djbh
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
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

    getList() {

    }
  }
}
</script>
