<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>付款指令查询</span>
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
          @handleViewOther="handleViewOther"
         
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj"  />
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import { UNITNOLIST } from '@u/wordbook'
import Search from '@c/common/search'
import Table from '@c/common/table'
import dialogCom from './dialogCom'
export default {
  // import引入的组件需要注入到对象中才能使用
  components: { Search, Table ,dialogCom},
  data() {
    // 这里存放数据
    return {
      showAll: false,
      unitNoList: UNITNOLIST,
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },
      // 顶部按钮
      searchBto: [],
      // 弹出框
      dialogObj: {
        id: '',
        title: '',
        read: false,
        show: false,
        form: {}
      },
      list:[
        {
          
          djbh: "57110317798255631",
          djrq: "2020/11/4",
          ywdw:'业务单位',
          sjly:'财资云',
          fkfyhzh:'236785',
          skfyhzh:'87954597',
          fkfzhmc:'张三',
          skfzhmc:'李四',
          fkfkhh:'株洲分行',
          skfkhh:'株洲分行',
          je:'10000',
          skfszs:'湖南省株洲市',
          dx:'10000',
          lhh:'879108463',
          ywlx:'资金归集',
          bz:'000000',
          zfclzt:'失败',
          fkyh:'中国银行',
          hksd:'普通',
          sfth:'是',
          cjsj:'2020-10-29 14:00:36',
          fssj:'2020-10-29 14:00:36',
          cssj:'',
          csczyh:'',
          zy:'手动归集',
          csyy:'',
          yhbs1:'',
          yhbs2:'',
          yhbs3:'',
          yhbs4:'',
          jysj:"",
          ztbs:'',
          ztms:'',
          fkxx:'创建"BOC_2019112101"的对应服务室出错',
          zljsyh:'中国银行',

        }
      ],
      // 表格
      tableData: [
        {
          bto: false,
          documentNumber: 'KH20082615093831',
          accountPhone: '999888000',
          accountName: '阿里巴巴88',
          bankName: '中国人民银行营业处',
          openBankName: '',
          status: '通过',
          connection: '直联'
        }
      ],
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
        type: 'input',
        label: '单据编号:',
        prop: 'documentNumber',
        placeholder: '请填写单据编号'
      },
      {
        type: 'select',
        label: '业务类型:',
        prop: 'openApplicant',
        placeholder: '请选择业务类型'
      },

      {
        type: 'input',
        label: '单据日期 从:',
        prop: 'unitNo',
        placeholder: '请填写单据日期',
        selectList: this.unitNoList
      },
      {
        type: 'input',
        label: '到:',
        prop: 'unitName',
        placeholder: '请填写单据日期'
      },
      {
        type: 'select',
        label: '指令状态:',
        prop: 'openApplicant',
        placeholder: '请选择单据状态',
        show: this.showAll
      },
      {
        type: 'select',
        label: '业务单位:',
        prop: 'bankName',
        placeholder: '请选择业务单位',
        show: this.showAll
      },
      {
        type: 'input',
        label: '收方账号:',
        prop: 'bankOpenName',
        placeholder: '请填写收方账号',
        show: this.showAll
      },
      {
        type: 'input',
        label: '收方户名:',
        prop: 'bankOpenName',
        placeholder: '请填写收方户名',
        show: this.showAll
      },
      {
        type: 'input',
        label: '付方账号:',
        prop: 'bankOpenName',
        placeholder: '请填写付方账号',
        show: this.showAll
      },

      {
        type: 'input',
        label: '金额(元) 从:',
        prop: 'accountOpenTimeEnd',
        placeholder: '请填写金额(元)',
        show: this.showAll
      },
      {
        type: 'select',
        label: '到:',
        prop: 'start',
        placeholder: '请填写金额(元)',
        show: this.showAll
      },
      {
        type: 'select',
        label: '数据来源:',
        prop: 'contain',
        show: this.showAll
      },
      {
        type: 'input',
        label: '外部单号:',
        prop: 'contain',
        show: this.showAll
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
      { width: '50', label: '', type: 'index', fixed: 'left' },
      {
        prop: 'djbh',
        width: '150',
        type:'a',
        label: '单据编号',
        fixed: 'left'
      },
      {
        prop: 'djrq',
        width: '150',
        label: '单据日期',
        fixed: 'left'
      },
      {
        prop: 'zlzt',
        width: '',
        label: '指令状态'
      },
      {
        prop: 'fkfyhzh',
        width: '',
        label: '付款方银行账号'
      },
      {
        prop: 'fkfzhmc',
        width: '',
        label: '付方户名'
      },
      
      {
        prop: 'je',
        width: '',
        label: '金额(元)'
      },
      {
        prop: 'skfyhzh',
        width: '',
        label: '收款方银行账号'
      },
      {
        prop: 'skfzhmc',
        width: '',
        label: '收款方账户名称'
      },
      {
        prop: 'ywlx',
        width: '',
        label: '业务类型'
      },
      {
        prop: 'hksd',
        width: '',
        label: '汇款速度'
      },
      {
        prop: 'sjly',
        width: '',
        label: '数据来源'
      },
      {
        prop: 'zljsyh',
        width: '',
        label: '指令接受银行'
      },
      {
        prop: 'zlcjsj',
        width: '',
        label: '指令创建时间'
      },
      {
        prop: 'zlfssj',
        width: '',
        label: '指令发送时间'
      },
      {
        prop: 'yhdfkxx',
        width: '',
        label: '银行的反馈信息'
      }
    ]
    // 按钮
    this.tableBtn = []
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.getList();
  },
  // 方法集合
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
    // 单击新增按钮
    handleInsert() {},
    
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
    
    
    handleViewOther(row) {
      console.log(row.djbh)
      this.dialogObj.id = row.djbh
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      let tableDataTwo = JSON.parse(JSON.stringify(this.tableData))
      tableDataTwo.forEach((item, index) => {
        let bool = true
        for (var i in this.searchData) {
          if (this.searchData[i] != '' && this.searchData[i] != undefined) {
            if (i == 'documentNumber') {
              if (item.documentNumber.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'openApplicant') {
              if (item.openApplicant.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'unitNo') {
              if (item.unitNo.includes(this.searchData[i])) {
                bool = true
              } else {
                bool = false
              }
            }

            if (i == 'unitName') {
              if (item.unitName.includes(this.searchData[i])) {
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
    }
  }
}
</script>
<style scoped></style>
