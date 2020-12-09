<!--  -->
<template>
  <el-dialog
    :title="dialogObj.title"
    append-to-body
    center
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
      <div class="title"><i class="el-icon-user" /> 借款合同信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="合同编号："
            prop="sqdh"
            class="formItem"
          >
            <el-input
              v-model="form.sqdh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="合同名称："
            prop="htmc"
            class="formItem"
          >
            <el-input
              v-model="form.htmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款类型：" prop="dklx">
            <el-input
              v-model="form.dklx"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="债权人：" prop="zqr">
            <el-input
              v-model="form.zqr"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="债务人：" prop="zwr">
            <el-input
              v-model="form.zwr"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款币种：" prop="bz">
            <el-input
              v-model="form.bz"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="贷款期限：" prop="dkqx">
            <el-input
              v-model="form.dkqx"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="开始日期：" prop="ksrq">
            <el-input
              v-model="form.ksrq"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="结束日期：" prop="jsrq">
            <el-input
              v-model="form.jsrq"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款金额(元)：" prop="dkje">
            <el-input
              v-model="form.dkje"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="金额大写：" prop="jedx">
            <el-input
              v-model="form.jedx"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="利率转换天数：" prop="llzhts">
            <el-input
              v-model="form.llzhts"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="计息方式：" prop="jxfs">
            <el-input
              v-model="form.jxfs"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="合同签订利率(%)：" prop="htqdll">
            <el-input
              v-model="form.htqdll"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="付息方式：" prop="fxfs">
            <el-input
              v-model="form.fxfs"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="还本方法" prop="hbff">
            <el-input
              v-model="form.hbff"
              style="width: 200px"
              size="mini"
              :disabled="dialogObj.id !== ''"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="备注：" prop="bzhu">
            <el-input
              v-model="form.bzhu"
              style="width: 83%"
              type="textarea"
              :rows="3"
              size="mini"
              :disabled="true"
              maxlength="50"
              show-word-limit
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" /> 附近(请上传借款合同、保证合同、借款人/担保人董事会决议、抵/质押合同)</div>

      <el-row>
        <el-col>
          <el-form-item label="附件：" prop="sysFamilyAddress">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
            >
              <el-button size="small" type="primary">上传附件(0)条</el-button>

            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="title"><i class="el-icon-user" /> 担保合同列表</div>

    </el-form>

    <div class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>

    </div>
    <Table
      :table-data="form.childerList"
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
  props: {
    dialogObj: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
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
        sqdh: '',
        htmc: '',
        dklx: '',
        zqr: '',
        zwr: '',
        bz: '',
        dkqx: '',
        ksrq: '',
        jsrq: '',
        dkje: '',
        jedx: '',
        llzhts: '',
        jxfs: '',
        htqdll: '',
        fxfs: '',
        hbff: '',
        bzhu: '',
        childerList: []
      }

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
      { width: '50', label: '', type: 'index', fixed: 'left' },
      { label: '操作', type: 'btn', width: '' },
      {
        prop: 'dbhtbh',
        width: '150',
        label: '担保合同编号'
      },
      {
        prop: 'dbhtmc',
        width: '150',
        label: '担保合同名称'
      },

      {
        prop: 'dbzt',
        width: '150',
        label: '担保主体'
      },

      {
        prop: 'dbfs',
        width: '150',
        label: '担保方式'
      },
      {
        prop: 'je',
        width: '150',
        label: '金额'
      },
      {
        prop: 'bz',
        width: '150',
        label: '备注 '
      }

    ]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach(item => {
          this.form[item] = ''
        })
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
