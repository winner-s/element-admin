<!--  -->
<template>
  <el-dialog
    :title="dialogObj.title"
    append-to-body
    :visible.sync="dialogObj.show"
    :close-on-click-modal="false"
    width="1000px"
    class="abow_dialog"
  >
    <el-form
      v-if="dialogObj.show"
      ref="form"
      :model="form"
      label-width="140px"
      label-position="left"
      :rules="rules"
      :disabled="dialogObj.read"
      status-icon
      class="form"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="版本号：" prop="bbh" class="formItem">
            <el-input
              v-model="form.bbh"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算年度：" prop="ysnd" class="formItem">
            <el-input
              v-model="form.ysnd"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="预算体系：" prop="ystx">
            <el-input
              v-model="form.ystx"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算周期：" prop="yszq">
            <el-input
              v-model="form.yszq"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="预算开始日期：" prop="ysksrq">
            <el-input
              v-model="form.ysksrq"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="预算结束日期：" prop="ysjsrq">
            <el-input
              v-model="form.ysjsrq"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="预算编制单位：" prop="ysbzdw">
            <el-input
              v-model="form.ysbzdw"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="调剂说明：" prop="tjsm">
            <el-input
              v-model="form.tjsm"
              style="width: 200px"
              size="mini"
              type="textarea"
              :disabled="dialogObj.id != ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>
    </el-form>

    <div class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button
        type="primary"
        @click="dialogObj.show = false"
      >确 定</el-button>
    </div>

    <Table
      v-if="dialogObj.id === ''"
      :table-data="tableData"
      :table-list-data="tableListData"
      :table-btn="tableBtn"
      :current-data="currentData"
      @onPageChange="onPageChange"
      @onSizeChange="onSizeChange"
    />

    <el-table v-if="dialogObj.id !== ''" :data="tableDataTwo" border align="center" size="mini" style="width: 100%">
      <el-table-column prop="ysxm" label="预算项目" />
      <el-table-column label="年">
        <el-table-column prop="tzqje" label="调整前金额" />
        <el-table-column prop="tzhje" label="调整后金额" />
      </el-table-column>
      <el-table-column label="汇总">
        <el-table-column prop="hztzqje" label="调整前金额" />
        <el-table-column prop="hztzhje" label="调整后金额" />
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import Table from '@c/common/table'
export default {
  components: { Table },
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      // 分页
      currentData: {
        currentPage: 1,
        size: 10,
        total: 10
      },
      placeholderTips: placeholderTips,
      form: {
        bbh: '',
        ysnd: '',
        ystx: '',
        yszq: '',
        ysksrq: '',
        ysjsrq: '',
        yszt: '',
        ysbzdw: '',
        jedw: ''
      },
      tableDataTwo: [
        {
          ysxm: '项目指出',
          tzqje: '120.00',
          tzhje: '120.00',
          hztzqje: '120.00',
          hztzhje: '120.00'
        }
      ],
      // 表格
      tableData: [
        {
          bbh: 'BZ0001202011251019942',
          ystx: '预算体系名称001',
          yszq: '预算周期-月',
          ysnd: '2020',
          ksrq: '2020-01-01',
          jsrq: '2020-01-31',
          bzr: 'admin',
          bbzt: '生效'
        },
        {
          bbh: 'BZ0001202011251001754',
          ystx: '预算体系名称001',
          yszq: '预算周期-月',
          ysnd: '2020',
          ksrq: '2020-01-01',
          jsrq: '2020-01-31',
          bzr: 'admin',
          bbzt: '生效'
        },
        {
          bbh: 'BZ0001202011242045154',
          ystx: '预算体系名称001',
          yszq: '预算周期-月',
          ysnd: '2020',
          ksrq: '2020-01-01',
          jsrq: '2020-01-31',
          bzr: 'admin',
          bbzt: '生效'
        },
        {
          bbh: 'BZ0001202011190934123',
          ystx: '预算体系名称001',
          yszq: '预算周期-月',
          ysnd: '2020',
          ksrq: '2020-01-01',
          jsrq: '2020-01-31',
          bzr: 'admin',
          bbzt: '生效'
        },
        {
          bbh: 'BZ0001202011190932913',
          ystx: '预算体系名称001',
          yszq: '预算周期-月',
          ysnd: '2020',
          ksrq: '2020-01-01',
          jsrq: '2020-01-31',
          bzr: 'admin',
          bbzt: '生效'
        }
      ],
      tableBtn: []
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    'dialogObj.show'(val) {
      if (val) {
        this.initDialog()
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //  table表格
    this.tableListData = [
      { width: '50', label: '', type: 'index' },
      { label: '操作', type: 'btn', width: '', fixed: 'right' },
      {
        prop: 'bbh',
        width: '',
        type: 'a',
        label: '版本号'
      },

      {
        prop: 'ystx',
        width: '',
        label: '预算体系'
      },

      {
        prop: 'ysnd',
        width: '',
        label: '预算年度'
      },
      {
        prop: 'ksrq',
        width: '',
        label: '开始日期'
      },
      {
        prop: 'jsrq',
        width: '',
        label: '结束日期'
      },
      {
        prop: 'bzr',
        width: '',
        label: '编制人'
      },
      {
        prop: 'bbzt',
        width: '',
        label: '版本状态'
      }
    ]
    // 按钮
    this.tableBtn = [
      {
        name: '调整',
        btnType: 'primary',
        handleFn: 'handleEdit'
      }
    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        let bbh = ''
        for (let i = 0; i < 16; i++) {
          bbh += Math.round(Math.random() * 10)
        }
        Object.keys(this.form).forEach((item) => {
          this.form[item] = ''
        })
        this.form.bbh = bbh
        this.form.ysbzdw = '二级单位1'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.form {
  .el-form-item {
    margin: 0px !important;
  }
}

.title {
  background: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
}
</style>
