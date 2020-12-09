<template>
  <div class="selectSendInfo">
    <el-card>
      <div slot="header">
        <span>下拨信息查询</span>
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

export default {
  name: 'SelectSendInfo',
  components: {
    Search,
    Table
  },
  data() {
    return {
      searchItem: [],
      searchData: {
      },
      searchBto: [],
      showAll: false,
      tableData: [],
      tableListData: [],
      list: [
        {
          id: 1,
          receiptsNumber: 'ZJGJ20071514295001',
          receiptsTime: '2020-08-21',
          money: '1,222',
          company: '二级单位1',
          status: '失败',
          number: 'ZJGJ20071514295001',
          name: '412',
          paymentAccountNum: '2222334455667744',
          paymentAccountName: '工商银行',
          receiptAccountNum: '2222334455667744',
          receiptAccountName: '建设银行',
          acceptBank: 'ABC',
          zlfssj: '2020-12-08',
          speed: '普通'
        },
        {
          id: 2,
          receiptsNumber: 'ZJGJ20072011081832',
          receiptsTime: '2020-08-21',
          money: '1,222',
          company: '二级单位1',
          status: '失败',
          number: 'ZJGJ20072011081832',
          name: '412',
          paymentAccountNum: '2222334455667744',
          paymentAccountName: '工商银行',
          receiptAccountNum: '2222334455667744',
          receiptAccountName: '建设银行',
          acceptBank: 'ABC',
          zlfssj: '2020-12-08',
          speed: '普通'
        },
        {
          id: 3,
          receiptsNumber: 'ZJGJ20071514295001',
          receiptsTime: '2020-08-21',
          money: '1,222',
          company: '二级单位1',
          status: '失败',
          number: 'ZJGJ20071514295001',
          name: '412',
          paymentAccountNum: '2222334455667744',
          paymentAccountName: '工商银行',
          receiptAccountNum: '2222334455667744',
          receiptAccountName: '建设银行',
          acceptBank: 'ABC',
          zlfssj: '2020-12-08',
          speed: '普通'
        },
        {
          id: 4,
          receiptsNumber: 'ZJGJ20071411395892',
          receiptsTime: '2020-08-21',
          money: '1,222',
          company: '二级单位1',
          status: '失败',
          number: 'ZJGJ20071411395892',
          name: '412',
          paymentAccountNum: '2222334455667744',
          paymentAccountName: '工商银行',
          receiptAccountNum: '2222334455667744',
          receiptAccountName: '建设银行',
          acceptBank: 'ABC',
          zlfssj: '2020-12-08',
          speed: '普通'
        },
        {
          id: 5,
          receiptsNumber: 'ZJGJ20071411395892',
          receiptsTime: '2020-08-21',
          money: '1,222',
          company: '二级单位1',
          status: '失败',
          number: 'ZJGJ20071411395892',
          name: '412',
          paymentAccountNum: '2222334455667744',
          paymentAccountName: '工商银行',
          receiptAccountNum: '2222334455667744',
          receiptAccountName: '建设银行',
          acceptBank: 'ABC',
          zlfssj: '2020-12-08',
          speed: '普通'
        },
        {
          id: 6,
          receiptsNumber: 'ZJGJ20072011081832',
          receiptsTime: '2020-08-21',
          money: '1,222',
          company: '二级单位1',
          status: '失败',
          number: 'ZJGJ20072011081832',
          name: '412',
          paymentAccountNum: '2222334455667744',
          paymentAccountName: '工商银行',
          receiptAccountNum: '2222334455667744',
          receiptAccountName: '建设银行',
          acceptBank: 'ABC',
          zlfssj: '2020-12-08',
          speed: '普通'
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
    this.getList()
    this.searchItem = [
      {
        type: 'select',
        label: '指令状态:',
        selectList: [

          {
            value: '撤销',
            id: '撤销'
          },
          {
            value: '保存',
            id: '保存'
          },
          {
            value: '已发送',
            id: '已发送'
          },
          {
            value: '成功',
            id: '成功'
          },
          {
            value: '失败',
            id: '失败'
          },
          {
            value: '未知',
            id: '未知'
          }
        ],
        prop: 'zlzt',
        placeholder: '请选择指令状态'
      },
      {
        type: 'select',
        label: '指令接受银行:',
        selectList: [

          {
            value: '中国人民银行营业处',
            id: '中国人民银行营业处'
          },
          {
            value: '中国人民银行国库处',
            id: '中国人民银行国库处'
          },
          {
            value: '中国工商银行',
            id: '中国工商银行'
          },
          {
            value: '中国农业银行',
            id: '中国农业银行'
          },
          {
            value: '中国银行',
            id: '中国银行'
          },
          {
            value: '国家开发银行',
            id: '国家开发银行'
          }
        ],
        prop: 'zljsyh',
        placeholder: '请选择银行'
      },
      {
        type: 'daterange',
        label: '指令发送时间:',
        timeList: ['zlfssjks', 'zlfssjjs'],
        timeFormat: 'yyyy-MM-dd',
        prop: 'zlfssj',
        placeholder: '请选择日期'
      },
      {
        type: 'select',
        label: '策略编号:',
        show: false,
        selectList: [

          {
            value: 'ZJGJ20072011081832',
            id: 'ZJGJ20072011081832'
          },
          {
            value: 'ZJGJ20071411395892',
            id: 'ZJGJ20071411395892'
          },
          {
            value: 'ZJGJ20071514295001',
            id: 'ZJGJ20071514295001'
          }
        ],
        prop: 'clbh',
        placeholder: '请选择编号'
      },
      {
        type: 'input',
        label: '策略名称:',
        show: false,
        prop: 'clmc',
        placeholder: '请输入策略编号名称'
      },
      {
        type: 'select',
        label: '业务单位:',
        show: false,
        selectList: [
          {
            value: '全部',
            id: 0
          },
          {
            value: '二级单位1',
            id: 1
          }
        ],
        prop: 'ywdw',
        placeholder: '请选择单位'
      },
      {
        type: 'checkbox',
        show: false,
        label: '包含下级业务单位:',
        prop: 'ywdw'
      }
    ]
    this.searchBto = [
      {
        prop: 'select',
        type: 'primary',
        label: '查询'
      }
    ]
    this.tableListData = [
      { width: '50', label: '', type: 'index' },
      {
        prop: 'receiptsNumber',
        width: '150',
        label: '单据编号'
      },
      {
        prop: 'receiptsTime',
        width: '150',
        label: '单据日期'
      },
      {
        prop: 'money',
        width: '150',
        label: '金额'
      },
      {
        prop: 'company',
        width: '150',
        label: '付款申请单位'
      },
      {
        prop: 'status',
        width: '150',
        label: '指令状态'
      },
      {
        prop: 'number',
        width: '150',
        label: '策略编号'
      },
      {
        prop: 'name',
        width: '150',
        label: '策略名称'
      },
      {
        prop: 'paymentAccountNum',
        width: '150',
        label: '付款银行帐号'
      },
      {
        prop: 'paymentAccountName',
        width: '150',
        label: '付款账户名称'
      },
      {
        prop: 'receiptAccountNum',
        width: '150',
        label: '收款银行帐号'
      },
      {
        prop: 'receiptAccountName',
        width: '150',
        label: '收款账户名称帐号'
      },
      {
        prop: 'acceptBank',
        width: '150',
        label: '指令接受银行'
      },
      {
        prop: 'speed',
        width: '150',
        label: '汇款速度'
      }
    ]
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
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.list))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] !== '' && this.searchData[i] !== undefined) {
            if (i === 'zlzt') {
              if (item.status.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'zljsyh') {
              if (item.acceptBank.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'zlfssjks') {
              if (Date.parse(item.zlfssj) >= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }
            if (i === 'zlfssjjs') {
              if (Date.parse(item.zlfssj) <= Date.parse(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'clbh') {
              if (item.number.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'clmc') {
              if (item.name.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'ywdw') {
              if (item.company.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }
          } else {
            continue
          }
        }
        if (bool === true) {
          list.push(item)
        }
      })
      console.log(list)
      this_.tableData = list
    }
  }
}
</script>
