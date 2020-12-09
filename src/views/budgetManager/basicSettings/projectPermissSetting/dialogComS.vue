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

      :disabled="dialogObj.read"
      status-icon
      class="form"
    >

      <el-row>
        <el-col :span="12">
          <el-form-item
            label="体系名称："
            prop="sstx"
            class="formItem"
          >
            <el-input
              v-model="form.sstx"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="周期类型："
            prop="zqlx"
            class="formItem"
          >
            <el-input
              v-model="form.zqlx"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
    <el-table
      :data="form.list"
      style="width: 100%"
    >
      <el-table-column
        prop="label"
        label="项目名称"
        width="180"
      />
      <el-table-column
        prop="txmx"
        label="是否填写明细"
        width="180"
      >
        <template slot-scope="scope">
          <div>
            <el-select v-model="scope.row['txmx']" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>

          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="mxmb"
        label="预算明细模板"
      >
        <template slot-scope="scope">
          <div>
            <el-select v-model="scope.row['mxmb']" placeholder="请选择" size="mini">
              <el-option
                v-for="item in mxmbList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>

          </div>
        </template>
      </el-table-column>
    </el-table>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button
        type="primary"
        @click="updateSub"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
export default {
  components: {},
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
      mxmbList: [
        {
          value: 1,
          label: '模板1'

        },
        {
          value: 2,
          label: '模板2'

        }
      ],
      options: [
        {
          value: 1,
          label: '是'

        },
        {
          value: 2,
          label: '否'

        }
      ],
      placeholderTips: placeholderTips,
      form: {
        zqbh: '',
        sstx: '',
        zqlx: '',
        list: []
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
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {

    initDialog() {
      if (this.dialogObj.id) {
        this.form.sstx = this.dialogObj.form.sstx
        this.form.zqlx = this.dialogObj.form.zqlx
        const list = []
        this.dialogObj.form.list.forEach(ele => {
          if (ele.children) {
            ele.children.forEach((item, index) => {
              list.push(item)
            })
          }
        })
        this.form.list = list
        console.log(list)
      }
    },

    updateSub() {
      this.$emit('updateSub', JSON.parse(JSON.stringify(this.form)))

      this.dialogObj.show = false
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
