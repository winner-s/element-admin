<!--  -->
<template>
  <div>
    <el-card>
      <div slot="header">
        <span>对私付款复核</span>
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
          @handleCommit="handleCommit"
        />

        <Table
          :table-data="tableData"
          :table-list-data="tableListData"
          :table-btn="tableBtn"
          :current-data="currentData"
          @onPageChange="onPageChange"
          @onSizeChange="onSizeChange"
          @handleEdit="handleEdit"
          @handleSelectionChange="handleSelectionChange"
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
import { UNITNOLIST, DJZT, DJZTLIST } from '@u/wordbook'
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

      list: [
        {
          skfzgmc: '123',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '12345789',
          djzt: 1,
          bz: '',
          djbh: '57110317798255631',
          djrq: '2020/11/4',
          dscs: '',
          dxje: '1000',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国工商银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '20111006',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '1000',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4654654',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }, {
          skfzgmc: '123',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '12345789',
          djzt: 1,
          bz: '',
          djbh: '57110317798255631',
          djrq: '2020/11/4',
          dscs: '',
          dxje: '1000',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国工商银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '20111006',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '1000',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4654654',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }, {
          skfzgmc: '123',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '12345789',
          djzt: 1,
          bz: '',
          djbh: '57110317798255631',
          djrq: '2020/11/4',
          dscs: '',
          dxje: '1000',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国工商银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '20111006',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '1000',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4654654',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }, {
          skfzgmc: '123',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '12345789',
          djzt: 1,
          bz: '',
          djbh: '57110317798255631',
          djrq: '2020/06/24',
          dscs: '',
          dxje: '1000',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国建设银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '20111006',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '45660',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4654654',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }, {
          skfzgmc: '123',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '12345789',
          djzt: 1,
          bz: '',
          djbh: '57110317798257516',
          djrq: '2020/03/04',
          dscs: '',
          dxje: '1000',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国招商银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '20111006',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '3000',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4654654',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }, {
          skfzgmc: '123',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '12345789',
          djzt: 1,
          bz: '',
          djbh: '57110317798255631',
          djrq: '2020/05/06',
          dscs: '',
          dxje: '8945',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国工商银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '20111006',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '9800',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4654654',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }, {
          skfzgmc: '123',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '12345789',
          djzt: 1,
          bz: '',
          djbh: '57110317798255159',
          djrq: '2020/11/4',
          dscs: '',
          dxje: '1000',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国农业银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '78464105',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '54600',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4157485546',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }, {
          skfzgmc: '123',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '12345789',
          djzt: 1,
          bz: '',
          djbh: '57110317798255598',
          djrq: '2020/11/4',
          dscs: '',
          dxje: '1000',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '20111006',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '1000',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4654654',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }, {
          skfzgmc: '123',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '545154',
          djzt: 2,
          bz: '',
          djbh: '57110317798255631',
          djrq: '2020/06/04',
          dscs: '',
          dxje: '1000',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国交通银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '451864',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '2000',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4654654',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }, {
          skfzgmc: '456',
          llr: 'admin',
          sjly: '财资云',
          wbdh: '4568745',
          djzt: 1,
          bz: '',
          djbh: '57110317798255123',
          djrq: '2020/05/04',
          dscs: '',
          dxje: '2000',
          fkdw: '二级单位1',
          fkfkhhmc: '北京分行',
          fkfyhmc: '中国工商银行',
          fkfyhs: '北京',
          fkfyhshi: '北京市',
          fkfyhzh: '4786456',
          fkfzhmc: '测试非直联支付确认',
          fkyt: 1,
          je: '6000',
          lhh: '548982894',
          qwzfrq: '2020-11-04T16:00:00.000Z',
          skfkhhmc: '株洲分行',
          skfyhmc: 1,
          skfyhss: '不知道',
          skfyhzh: '4654654',
          skfzhmc: '小三',
          ywdw: '业务单位',
          zffs: 1,
          zy: '000'
        }
      ],
      // 表格
      tableData: [
      ],
      tableBtn: [],
      // 顶部搜索
      searchItem: [],
      searchData: {

      },
      selectChange: ''
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
        prop: 'insert',
        type: 'primary',
        label: '复核'
      },
      {
        prop: 'commit',
        type: 'primary',
        label: '拒绝'
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
        label: '单据状态:',
        prop: 'openApplicant',
        placeholder: '请选择单据状态',
        selectList: this.djztList
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
        label: '业务单位:',
        prop: 'bankName',
        placeholder: '请选择业务单位',
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
        label: '收方账号:',
        prop: 'accountOpenTimeStart',
        placeholder: '请填写收方账号',
        show: this.showAll
      },
      {
        type: 'input',
        label: '收方户名:',
        prop: 'accountOpenTimeEnd',
        placeholder: '请填写收方户名',
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
        prop: 'sjly',
        show: this.showAll
      }, {
        type: 'input',
        label: '外部单号:',
        prop: 'wbdh',
        show: this.showAll
      }, {
        type: 'checkbox',
        label: '包含下级业务单位:',
        prop: 'contain',
        show: this.showAll
      }
    ]
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { width: '50', label: '', type: 'selection', fixed: 'left' },
      { label: '操作', type: 'btn', width: '150', fixed: 'right' },
      {
        prop: 'djbh',
        width: '150',
        type: 'a',
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
        prop: 'djzt',
        width: '150',
        label: '单据状态',
        type: 'wordbook',
        wordbookList: this.djzt
      },
      {
        prop: 'fkfyhzh',
        width: '150',
        label: '付方账号'
      },
      {
        prop: 'fkfzhmc',
        width: '150',
        label: '付方户名'
      },
      {
        prop: 'fkfyhmc',
        width: '150',
        label: '付款方银行'
      },
      {
        prop: 'je',
        width: '150',
        label: '金额(元)'
      },
      {
        prop: 'skfyhzh',
        width: '150',
        label: '收方账号'
      },
      {
        prop: 'skfzgmc',
        width: '150',
        label: '收方户名'
      },
      {
        prop: 'llr',
        width: '150',
        label: '录入人'
      },
      {
        prop: 'sjly',
        width: '150',
        label: '数据来源'
      },
      {
        prop: 'wbdh',
        width: '150',
        label: '外部单号'
      }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '复 核',
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
    handleCommit() {
      if (this.selectChange.length !== 0) {
        this.selectChange.forEach((item, index) => {
          this.list.forEach((res, index) => {
            if (res.djbh === item.djbh) {
              res.djzt = 4
            }
          })
        })
      } else {
        this.$message({
          message: '请选择数据再进行提交操作！',
          type: 'warning'
        })
      }
    },
    handleSelectionChange(res) {
      this.selectChange = res
    },
    // 过滤
    djzt(val) {
      return DJZT[val]
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
    handleInsert(row) {
      if (this.selectChange.length !== 0) {
        this.selectChange.forEach((item, index) => {
          this.list.forEach((res, index) => {
            if (res.djbh === item.djbh) {
              res.djzt = 3
            }
          })
        })
      } else {
        this.$message({
          message: '请选择数据再进行提交操作！',
          type: 'warning'
        })
      }
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
    // 删除产品
    handleDelete(v) {

    },

    handleEdit(row) {
      row.djzt = 2
      this.$confirm('操作成功?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'success'
      }).then(() => {

      })
    },
    handleViewOther(row) {
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
