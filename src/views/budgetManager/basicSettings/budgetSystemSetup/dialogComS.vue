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
    <div>
      <el-button type="primary" @click="xz(1)">新增同级</el-button>
      <el-button
        type="primary"
        @click="xz(2)"
      >新增下级</el-button>
    </div>
    <el-row :gutter="20">
      <el-col :span="12" :offset="0">
        <el-table
          :data="parent.children"
          style="width: 100%;margin-bottom: 20px;"
          row-key="txbh"
          border
          default-expand-all
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          @row-click="rowClick"
        >
          <el-table-column
            prop="txbh"
            label="项目编号"
            sortable
            width=""
          />
          <el-table-column
            prop="txmc"
            label="项目名称"
            sortable
            width=""
          />

        </el-table>
      </el-col>
      <el-col :span="12" :offset="0">
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
              <el-form-item
                label="项目编号："
                prop="txbh"
                class="formItem"
              >
                <el-input
                  v-model="form.txbh"
                  style="width: 200px"
                  size="mini"

                  :placeholder="placeholderTips.content"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" />
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="项目名称："
                prop="txmc"
                class="formItem"
              >
                <el-input
                  v-model="form.txmc"
                  style="width: 200px"
                  size="mini"

                  :placeholder="placeholderTips.content"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" />
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="项目类型："
                prop="xmlx"
                class="formItem"
              >
                <el-input
                  v-model="form.xmlx"
                  style="width: 200px"
                  size="mini"

                  :placeholder="placeholderTips.content"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" />
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="是否有项目公式："
                prop="xmgs"
                class="formItem"
              >
                <el-input
                  v-model="form.xmgs"
                  style="width: 200px"
                  size="mini"

                  :placeholder="placeholderTips.content"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" />
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="备注："
                prop="bz"
                class="formItem"
              >
                <el-input
                  v-model="form.bz"
                  style="width: 200px"
                  size="mini"

                  :placeholder="placeholderTips.content"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12" />
          </el-row>

        </el-form>
      </el-col>

    </el-row>

    <span slot="footer" class="dialog-footer">
      <el-button
        type="primary"
        @click="baocun"
      >保存</el-button>
      <el-button
        type="primary"
      >删除</el-button>
      <el-button @click="fh">返回</el-button>

    </span>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'

export default {
  components: { },
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
      type: 0,
      placeholderTips: placeholderTips,
      form: {
        txbh: '',
        txmc: '',
        xmlx: '',
        xmgs: ''

      },
      row: {
        txbh: '',
        txmc: ''
      },
      parent: {

      },

      rules: {
        txmc: [
          { required: true, message: '请填写项目名称', trigger: 'blur' }
        ],
        txbh: [
          { required: true, message: '请填写项目编号', trigger: 'blur' }
        ],
        xmlx: [
          { required: true, message: '请填写项目类型', trigger: 'blur' }
        ],
        xmgs: [
          { required: true, message: '请填写是否有项目公式', trigger: 'blur' }
        ]
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {
    'dialogObj.show'(val) {
      if (val) {
        this.form = {
          txbh: '',
          txmc: '',
          xmlx: '',
          xmgs: ''
        }
        this.parent = {
          txbh: '',
          txmc: '',
          children: [
          ]
        }

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
    fh() {
      this.$emit('fh', JSON.parse(JSON.stringify(this.parent)))
      this.dialogObj.show = false
    },
    xz(v) {
      if (this.row.txbh === '') {
        this.$confirm('请选择一条数据', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

        })
      } else {
        Object.keys(this.form).forEach(key => (this.form[key] = ''))
        this.form.children = []
        this.type = v
      }
    },
    baocun() {
      if (this.type === 2) {
        this.form.txbh = parseInt(this.form.txbh)
        this.form.children = []
        this.form.parent = this.row.txbh
        const this_ = this
        if (this.row.txbh === this.parent.txbh) {
          if (this.parent.children[0].children) {
            this.parent.children[0].children.push(JSON.parse(JSON.stringify(this.form)))
          } else {
            this.parent.children[0].children = []
            this.parent.children[0].children.push(JSON.parse(JSON.stringify(this.form)))
          }
        } else {
          this.parent.children.forEach((item, index) => {
            this_.diedai(item)
          })
        }
        console.log(this.parent.children)
      } else if (this.type === 1) {
        this.form.txbh = parseInt(this.form.txbh)
        this.form.children = []
        this.form.parent = this.row.parent
        const this_ = this
        if (this.row.parent === this.parent.txbh) {
          if (this.parent.children[0].children) {
            this.parent.children[0].children.push(JSON.parse(JSON.stringify(this.form)))
          } else {
            this.parent.children[0].children = []
            this.parent.children[0].children.push(JSON.parse(JSON.stringify(this.form)))
          }
        } else {
          this.parent.children[0].children.forEach((item, index) => {
            this_.diedai(item)
          })
        }
        console.log(this.parent.children)
      } else {
        this.parent.children[0].children.forEach((item, index) => {
          if (item.txbh === this.row.txbh) {
            Object.keys(this.form).forEach(vvv => {
              item[vvv] = this.form[vvv]
            })
          } else {
            this.diedaixiug(item)
          }
        })
      }
    },
    diedaixiug(res) {
      if (res.children) {
        res.children.forEach((item, index) => {
          if (item.txbh === this.row.txbh) {
            Object.keys(this.form).forEach(vvv => {
              item[vvv] = this.form[vvv]
            })
          } else {
            this.diedaixiug(item)
          }
        })
      }
    },
    diedai(res) {
      const this_ = this
      if (this.type === 2) {
        if (res.txbh === this.row.txbh) {
          if (res.children) {
            res.children.push(JSON.parse(JSON.stringify(this.form)))
          } else {
            res.children = []
            res.children.push(JSON.parse(JSON.stringify(this.form)))
          }
        } else {
          if (res.children) {
            res.children.forEach((item, index) => {
              this_.diedai(item)
            })
          }
        }
      } else if (this.type === 1) {
        if (res.txbh === this.row.parent) {
          if (res.children) {
            res.children.push(JSON.parse(JSON.stringify(this.form)))
          } else {
            res.children = []
            res.children.push(JSON.parse(JSON.stringify(this.form)))
          }
        } else {
          if (res.children) {
            res.children.forEach((item, index) => {
              this_.diedai(item)
            })
          }
        }
      }
    },
    rowClick(zhi) {
      this.type = 0
      const row = JSON.parse(JSON.stringify(zhi))
      Object.keys(this.form).forEach(item => {
        this.form[item] = row[item]
        this.row[item] = row[item]
      })
    },

    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.parent).forEach(item => {
          this.parent[item] = this.dialogObj.form[item]
        })

        // this.form = this.dialogObj.form
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.addSub()
          }
        }
      })
    },
    updateSub() {
      this.$emit('updateSub', this.form)
      this.dialogObj.show = false
    },
    addSub() {
      this.$emit('addSub', this.form)
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
