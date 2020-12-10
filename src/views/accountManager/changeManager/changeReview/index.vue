<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>变更复核</span>
      </div>
      <div>
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
        />
      </div>
    </el-card>
    <dialog-com
      :dialog-obj="dialogObj"
      @updateSub="updateSub"
      @addSub="addSub"
    />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import {
  DJZT,
  DJZTLIST,
  CURRENCY,
  CURRENCYLIST,
  UNITNO,
  UNITNOLIST,
  BACK,
  BACKLIST,
  DIRECT,
  DIRECTLIST,
  ACCOUNTUSAGE,
  ACCOUNTUSAGELIST
} from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table, dialogCom },
  data() {
    // 这里存放数据
    return {
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },
      djztList: DJZTLIST,
      currencyList: CURRENCYLIST,
      accountUsageList: ACCOUNTUSAGELIST,
      directList: DIRECTLIST,
      backList: BACKLIST,
      unitNoList: UNITNOLIST,
      showAll: false,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },
      // 顶部按钮
      searchBto: [],

      list: [
        {

          documentNumber: 'KH20082615093741',
          accountPhone: 521520131,
          accountName: '测试51',
          bankName: 1,
          currency: 1,
          yhzh: 1111111111,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '北京分行',
          lhh: '5200103901',
          zhyt: 3,
          sfzl: 1,
          bgrq: '2020-09-10',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        },
        {

          documentNumber: 'KH20082615093731',
          accountPhone: 120352015,
          accountName: '测试15',
          bankName: 5,
          currency: 1,
          yhzh: 1111111111,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '北京分行',
          lhh: '5200103901',
          zhyt: 4,
          sfzl: 1,
          bgrq: '2020-08-22',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        },
        {

          documentNumber: 'KH20082615093754',
          accountPhone: 632180970,
          accountName: '测试12',
          bankName: 3,
          currency: 2,
          yhzh: 1111111111,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '北京分行',
          lhh: '5200103901',
          zhyt: 2,
          sfzl: 2,
          bgrq: '2020-05-23',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        },
        {

          documentNumber: 'KH20082615093125',
          accountPhone: 405632809,
          accountName: '测试2',
          bankName: 1,
          currency: 1,
          yhzh: 1111111111,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '北京分行',
          lhh: '5200103901',
          zhyt: 3,
          sfzl: 1,
          bgrq: '2020-07-13',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        },
        {

          documentNumber: 'KH20082615093831',
          accountPhone: 1111111111,
          accountName: '测试1',
          bankName: 3,
          currency: 3,
          yhzh: 1111111111,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '北京分行',
          lhh: '5200103901',
          zhyt: 1,
          sfzl: 1,
          bgrq: '2020-03-16',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        },
        {

          documentNumber: 'KH20082615093000',
          accountPhone: 520320150,
          accountName: '测试5',
          bankName: 2,
          currency: 1,
          yhzh: 1111111111,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '北京分行',
          lhh: '5200103901',
          zhyt: 4,
          sfzl: 2,
          bgrq: '2020-12-10',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        },
        {

          documentNumber: 'KH20082615093153',
          accountPhone: 846523123,
          accountName: '测试8',
          bankName: 5,
          currency: 1,
          yhzh: 456852156,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '上海分行',
          lhh: '5200103901',
          zhyt: 2,
          sfzl: 1,
          bgrq: '2020-01-03',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        },
        {

          documentNumber: 'KH20082615093852',
          accountPhone: 754856965,
          accountName: '测试1',
          bankName: 6,
          currency: 2,
          yhzh: 1111111111,
          zhmc: '测试9',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '北京分行',
          lhh: '5200103901',
          zhyt: 2,
          sfzl: 1,
          bgrq: '2020-06-03',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        },
        {

          documentNumber: 'KH20082615093831',
          accountPhone: 1111111111,
          accountName: '测试1',
          bankName: 7,
          currency: 2,
          yhzh: 1111111111,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '杭州分行',
          lhh: '5200103901',
          zhyt: 3,
          sfzl: 2,
          bgrq: '2020-08-29',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        },
        {

          documentNumber: 'KH20082615093751',
          accountPhone: 153246258,
          accountName: '测试10',
          bankName: 8,
          currency: 1,
          yhzh: 1111111111,
          zhmc: '测试1',
          yhmc: 1,
          khhszss: ['北京市', '市辖区', '西城区'],
          bgsqr: 'admin',
          khhmc: '北京分行',
          lhh: '5200103901',
          zhyt: 4,
          sfzl: 1,
          bgrq: '2020-02-03',
          unitName: 1324,
          bghUnitName: 1324,
          documentStatus: 1
        }
      ],
      // 表格
      tableData: [],
      tableBtn: [],
      // 顶部搜索
      searchItem: [],
      searchData: {
        nickname: '',
        documentNumber: ''
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},

  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.tableData = this.list.slice(0, this.currentData.size)
    this.currentData.total = this.list.length
    // 顶部按钮
    this.searchBto = [
      {
        prop: 'select',
        type: 'primary',
        label: '查询'
      },

      {
        prop: 'reset',
        type: '',
        label: '重置'
      }
    ]
    // 搜索
    this.searchItem = [
      {
        type: 'select',
        label: '单位编号:',
        prop: 'unitNo',
        placeholder: '请填写单位编号',
        selectList: this.unitNoList
      },
      {
        type: 'input',
        label: '单位名称:',
        prop: 'unitName',
        placeholder: '请填写单位名称'
      },
      {
        type: 'select',
        label: '银行名称:',
        prop: 'bankName',
        placeholder: '请填写银行名称',
        selectList: this.backList
      },
      {
        type: 'input',
        label: '银行账号:',
        prop: 'bankOpenName',
        placeholder: '请填写银行账号'
      },
      {
        type: 'select',
        label: '单据状态:',
        prop: 'documentStatus',
        placeholder: '请选择单据状态',
        show: this.showAll,
        selectList: this.djztList
      },
      {
        type: 'select',
        label: '币种:',
        prop: 'currency',
        show: this.showAll,
        selectList: this.currencyList
      },
      {
        type: 'checkbox',
        label: '包含下级业务单位:',
        prop: 'contain',
        show: this.showAll
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index' },

      {
        prop: 'documentNumber',
        width: '150',
        label: '单据编号',
        type: 'a'
      },
      {
        prop: 'accountPhone',
        width: '150',
        label: '银行号码'
      },
      {
        prop: 'accountName',
        width: '150',
        label: '账户名称'
      },
      {
        prop: 'bankName',
        width: '150',
        label: '银行名称',
        type: 'wordbook',
        wordbookList: this.back
      },
      {
        prop: 'khhmc',
        width: '150',
        label: '开户行名称'
      },
      {
        prop: 'documentStatus',
        width: '150',
        label: '单据状态',
        type: 'wordbook',
        wordbookList: this.djzt
      },
      {
        prop: 'sfzl',
        width: '150',
        label: '是否直联',
        type: 'wordbook',
        wordbookList: this.direct
      },
      {
        prop: 'currency',
        width: '150',
        label: '币种',
        type: 'wordbook',
        wordbookList: this.currency
      },
      {
        prop: 'unitName',
        width: '150',
        label: '单位名称'
      },
      { label: '操作', type: 'btn', width: '200', fixed: 'right' }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '复核',
        btnType: 'primary',
        handleFn: 'handleEdit'
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
  methods: {
    // 过滤
    // 过滤
    djzt(val) {
      return DJZT[val]
    },
    unitno(val) {
      return UNITNO[val]
    },
    currency(val) {
      return CURRENCY[val]
    },
    accountUsage(val) {
      return ACCOUNTUSAGE[val]
    },
    direct(val) {
      return DIRECT[val]
    },
    back(val) {
      return BACK[val]
    },
    updateSub(res, item) {
      let ind = 0
      this.tableData.forEach((item, index) => {
        if (item.documentNumber === res.documentNumber) {
          ind = index
        }
      })
      console.log(ind)

      const fore = this.tableData[ind]
      Object.keys(fore).forEach(item => {
        fore[item] = res[item]
      })

      this.tableData[ind] = fore
      this.list[ind] = fore
    },
    addSub(res) {
      this.list.push(res)

      this.tableData = this.list.slice(0, this.currentData.size)
      this.currentData.total = this.list.length
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
    // 单击新增按钮
    handleInsert() {
      this.dialogObj.id = ''
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '新增'
    },
    add() {
      this.dialogObj.id = ''
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '添加账号'
    },
    // 获取search信息
    getDataList(val) {
      this.currentData.size = 10
      this.currentData.currentPage = 1
      this.searchData = val
      this.getList()
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

    handleEdit(row) {
      row.documentStatus = 2
    },
    handleViewOther(row) {
      this.dialogObj.id = row.documentNumber
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      const tableDataTwo = JSON.parse(JSON.stringify(this.tableData))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] !== '' && this.searchData[i] !== undefined) {
            if (i === 'documentNumber') {
              if (item.documentNumber.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'openApplicant') {
              if (item.openApplicant.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'unitNo') {
              if (item.unitNo.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
                return
              }
            }

            if (i === 'unitName') {
              if (item.unitName.includes(this.searchData[i])) {
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
<style scoped></style>
