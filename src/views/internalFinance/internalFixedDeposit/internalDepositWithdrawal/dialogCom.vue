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
          <el-form-item
            label="存款开立流水号："
            prop="ckkllsh"
            class="formItem"
          >
            <el-select
              v-model="form.ckkllsh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="ckkllshChange"
            >
              <el-option
                v-for="item in ckkllshList"
                :key="item.ckkllsh"
                :label="item.ckkllsh"
                :value="item.ckkllsh"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="存款利率：" prop="ckll" class="formItem">
            <el-input
              v-model="form.ckll"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            >
              <template slot="append">%</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="存款期限：" prop="ckqx" class="formItem">
            <el-select
              v-model="form.ckqx"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              :disabled="true"
            >
              <el-option
                v-for="item in depositTermList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开立日期：" prop="klrq" class="formItem">
            <el-input
              v-model="form.klrq"
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
          <el-form-item label="存款金额：" prop="ckje" class="formItem">
            <el-input
              v-model="form.ckje"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="存款余额：" prop="ckye" class="formItem">
            <el-input
              v-model="form.ckye"
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
          <el-form-item label="存款单位编号：" prop="ckdwbh" class="formItem">
            <el-input
              v-model="form.ckdwbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="存款单位名称：" prop="ckdwmc" class="formItem">
            <el-input
              v-model="form.ckdwmc"
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
          <el-form-item label="内部账号：" prop="nbzh" class="formItem">
            <el-input
              v-model="form.nbzh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="内部账户余额：" prop="nbzhye" class="formItem">
            <el-input
              v-model="form.nbzhye"
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
          <el-form-item label="内部账号名称：" prop="nbzhmc" class="formItem">
            <el-input
              v-model="form.nbzhmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="到期续存方式：" prop="dqxcfs" class="formItem">
            <el-select
              v-model="form.dqxcfs"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              :disabled="true"
            >
              <el-option
                v-for="item in dqxcfsList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="利率转换天数：" prop="llzhts" class="formItem">
            <el-select
              v-model="form.llzhts"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              :disabled="true"
            >
              <el-option
                v-for="item in llzhtsList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="备注：" prop="bz" class="formItem">
            <el-input
              v-model="form.bz"
              style="width: 83%"
              type="textarea"
              :rows="3"
              size="mini"
              maxlength="50"
              show-word-limit
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item
            label="存款支取流水号："
            prop="ckzqlsh"
            class="formItem"
          >
            <el-input
              v-model="form.ckzqlsh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="支取金额：" prop="zqje" class="formItem">
            <el-input
              v-model="form.zqje"
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
          <el-form-item label="支取日期：" prop="ckzqrq" class="formItem">
            <el-date-picker
              v-model="form.ckzqrq"
              align="right"
              style="width: 200px"
              size="mini"
              type="date"
              placeholder="选择日期"
              :picker-options="placeholderTips.content"
            >
            </el-date-picker>

            
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="备注：" prop="bzer" class="formItem">
            <el-input
              v-model="form.bzer"
              style="width: 83%"
              type="textarea"
              :rows="3"
              size="mini"
              maxlength="50"
              show-word-limit
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogObj.show = false">取 消</el-button>
      <el-button type="primary" @click="sub">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { placeholderTips } from '@u/validate'
import { DEPOSITTERMLIST, LLZHTSLIST, DQXCFSLIST } from '@u/wordbook'
export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      depositTermList: DEPOSITTERMLIST,
      llzhtsList: LLZHTSLIST,
      dqxcfsList: DQXCFSLIST,
      placeholderTips: placeholderTips,
      ckkllshList: [
        {
          ckkllsh: '132',
          ckll: '4.00',
          ckqx: 1,
          klrq: '2020-10-10',
          ckje: '200',
          ckye: '200',
          ckdwbh: '123',
          ckdwmc: '单位名称',
          nbzh: '123',
          nbzhye: '200',
          nbzhmc: '不知道',
          dqxcfs: 1,
          llzhts: 1,
          bz: ''
        }
      ],
      form: {
        ckkllsh: '',
        ckll: '',
        ckqx: '',
        klrq: '',
        ckje: '',
        ckye: '',
        ckdwbh: '',
        ckdwmc: '',
        nbzh: '',
        nbzhye: '',
        nbzhmc: '',
        dqxcfs: '',
        llzhts: '',
        bz: '',
        ckzqlsh: '',
        zqje: '',
        ckzqrq: '',
        bzer: ''
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
    ckkllshChange(res) {
      this.ckkllshList.forEach((item, index) => {
        if (item.ckkllsh == res) {
          Object.keys(item).forEach(val => {
            this.form[val] = item[val]
          })
        }
      })
    },
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach(item => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach(item => {
          this.form[item] = ''
        })
        this.form.ckzqlsh = '74564879'
      }
    },
    sub() {
      this.$refs['form'].validate(valid => {
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
      this.$emit('updateSub', JSON.parse(JSON.stringify(this.form)))
      this.dialogObj.show = false
    },
    addSub() {
      this.$emit('addSub', JSON.parse(JSON.stringify(this.form)))
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
