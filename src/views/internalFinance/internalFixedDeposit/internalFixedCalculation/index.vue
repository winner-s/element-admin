<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>内部定期利息匡算</span>
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
          @handleStatus="handleStatus"
          @handleViewOther="handleViewOther"
          @handleDelete="handleDelete"
        />
      </div>
    </el-card>
    <dialog-com :dialog-obj="dialogObj" />
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
  components: { Search, Table,dialogCom },
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
          ckdqr:'2021-03-01',
          ksrq:new Date(),
          ckkllsh:'FO20201201145843375',
          ckll:'11.000',
          ckqx:'3个月定期',
          klrq:'2020-12-01',
          ckje:'1,211.00',
          syje:'1,211.00',
          ckye:'1,211.00',
          ckdwbhL:'12312323',
          ckdwmc:'顶级单位',
          nbzh:'0011001',
          nbzhmc:'一级中心内部账户',
          dqxcfs:'到期本息转活期',
          ckklrq:'2020-12-01',
          qrrq:'2020-12-01',
          bz:'111',
          childerList:[
            {
              lxly:'提前支取利息',
              rq:'2020-12-01',
              lx:'1.11'
            },
            {
              lxly:'定期存款利息',
              rq:'2020-12-04',
              lx:'1.11'
            }
          ]
          
          
        },
        
      ],
      

      // 表格
      tableData: [
        
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
        label: '存款开立流水号:',
        prop: 'ckkllsh',
        placeholder: '请填写存款开立流水号'
      },
      {
        type: 'input',
        label: '存款期限:',
        prop: 'ckqx',
        placeholder: '请选择存款期限'
      },
      {
        type: 'select',
        label: '存款单位编号:',
        prop: 'ckdwbh',
        placeholder: '请选择存款单位编号'
      },
      {
        type: 'input',
        label: '存款单位名称:',
        prop: 'ckdwmc',
        placeholder: '请填写存款单位名称'
      },
      {
        type: 'time',
        label: '存款开立日期 从:',
        prop: 'ckklrqc',
        placeholder: '请选择存款开立日期',
        show: this.showAll
      },
      {
        type: 'time',
        label: '到:',
        prop: 'ckklrqd',
        placeholder: '请选择存款开立日期',
        show: this.showAll
      },
      {
        type: 'select',
        label: '存款利率转换天数:',
        prop: 'ckllzhts',
        placeholder: '请选择存款利率转换天数',
        show: this.showAll
      },
      {
        type: 'select',
        label: '到期续存方式:',
        prop: 'dqxcfs',
        placeholder: '请填写到期续存方式',
        show: this.showAll
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { label: '操作', type: 'btn', width: '200', fixed: 'right' },
      {
        prop: 'ckkllsh',
        width: '150',
        label: '存款开立流水号'
      },

      {
        prop: 'ckdwmc',
        width: '',
        label: '存款单位名称'
      },
      {
        prop: 'ckje',
        width: '',
        label: '存款金额'
      },
      {
        prop: 'ckklrq',
        width: '',
        label: '存款开立日期'
      },
      {
        prop: 'syje',
        width: '',
        label: '剩余金额 '
      },
      {
        prop: 'ckqx',
        width: '',
        label: '存款期限'
      },
      {
        prop: 'dqxcfs',
        width: '',
        label: '到期续存方式'
      },
      {
        prop: 'nbzh',
        width: '',
        label: '内部账号'
      }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '利息匡算',
        btnType: 'primary',
        handleFn: 'handleEdit',
      },
    ]
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
      this.currentData.currentPage = val
      this.getList()
    },
    onSizeChange(val) {
      this.currentData.size = val
      this.currentData.currentPage = 1
      this.getList()
    },
    
    handleEdit(row) {
      this.dialogObj.id = row.ckkllsh
      this.dialogObj.read = false
      this.dialogObj.show = true
      this.dialogObj.title = '编辑'
      this.dialogObj.form = JSON.parse(JSON.stringify(row))
    },
    handleViewOther(row) {
      this.dialogObj.id = row.id
      this.dialogObj.read = true
      this.dialogObj.show = true
      this.dialogObj.title = '查看'
      this.dialogObj.form = row
    },

    getList() {
      console.log(this.searchData)
      const list = []
      const this_ = this
      let tableDataTwo = JSON.parse(JSON.stringify(this.list))
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
