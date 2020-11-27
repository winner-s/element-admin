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
      :inline-message="true"
    >
      <div class="title"><i class="el-icon-user" /> 基本信息</div>
      <div class="mb-10" />
      <el-row>
        <el-col :span="12">
          <el-form-item label="单据编号：" prop="djbh" class="formItem">
            <el-input
              v-model="form.djbh"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="单位名称：" prop="dwmc" class="formItem">
            <el-input
              v-model="form.dwmc"
              style="width: 200px"
              size="mini"
             
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="销户日期：" prop="xhrq">
            <el-date-picker
              v-model="form.xhrq"
              type="date"
              placeholder="选择日期"
              size="mini"
              :disabled="true"
              style="width: 200px"
              value-format="yyyy-MM-dd"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="币种：" prop="bz">
            <el-select
              v-model="form.bz"
              placeholder="请选择"
              size="mini"
              :disabled="true"
              style="width: 200px"
            >
              <el-option
                v-for="item in currencyList"
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
          <el-form-item label="银行账号：" prop="yhzh">
            <el-select
              v-model="form.yhzh"
              placeholder="请选择"
              size="mini"
              style="width: 200px"
              @change="yhzhChange"
            >
              <el-option
                v-for="item in yhzhList"
                :key="item.id"
                :label="item.yhzh"
                :value="item.yhzh"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账户名称：" prop="zhmc">
            <el-input
              v-model="form.zhmc"
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
          <el-form-item label="银行名称：" prop="yhmc">
            <el-select
              v-model="form.yhmc"
              placeholder="请选择"
              size="mini"
              :disabled='true'
              style="width: 200px"
            >
              <el-option
                v-for="item in backList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="科目号：" prop="kmh">
            <el-input
              v-model="form.kmh"
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
          <el-form-item label="开户行所在省：" prop="khhszs">
            <el-input
              v-model="form.khhszs"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开户行所在市：" prop="khhszshi">
            <el-input
              v-model="form.khhszs"
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
          <el-form-item label="开户行名称：" prop="khhmc">
            <el-input
              v-model="form.khhmc"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联行号：" prop="lhh">
            <el-input
              v-model="form.lhh"
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
          <el-form-item label="账户用途：" prop="zhyt">
            <el-select
              v-model="form.zhyt"
              placeholder="请选择"
              size="mini"
              :disabled="true"
              style="width: 200px"
            >
              <el-option
                v-for="item in accountUsageList"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否直联：" prop="sfzl">
            <el-select
              v-model="form.sfzl"
              placeholder="请选择"
              size="mini"
              :disabled="true"
              style="width: 200px"
            >
              <el-option
                v-for="item in directList"
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
          <el-form-item label="销户申请人：" prop="xhsqr">
            <el-input
              v-model="form.xhsqr"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12" />
      </el-row>

      <div class="title"><i class="el-icon-user" /> 附加信息</div>

      <el-row>
        <el-col :span="12">
          <el-form-item label="客户经理：" prop="khjl">
            <el-input
              v-model="form.khjl"
              style="width: 200px"
              size="mini"
              :disabled="true"
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户经理电话：" prop="khjldh">
            <el-input
              v-model="form.khjldh"
              style="width: 200px"
              size="mini"
              :disabled="true"
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
              maxlength="50"
              show-word-limit
              :placeholder="placeholderTips.content"
            />
          </el-form-item>
        </el-col>
      </el-row>

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
import { CURRENCYLIST, ACCOUNTUSAGELIST, DIRECTLIST,BACKLIST } from '@u/wordbook'

export default {
  components: {},
  // import引入的组件需要注入到对象中才能使用
  props: ['dialogObj'],
  data() {
    // 这里存放数据
    return {
      backList:BACKLIST,
      currencyList: CURRENCYLIST,
      accountUsageList: ACCOUNTUSAGELIST,
      directList: DIRECTLIST,
      placeholderTips: placeholderTips,
      rules:{
        djbh:[
          { required: true, message: '请填写单据编号', trigger: 'blur' },
        ],
        dwmc:[
          { required: true, message: '请填写单位名称', trigger: 'blur' },
        ],
        xhrq:[
          { required: true, message: '请填写销户日期', trigger: 'blur' },
        ],
        yhzh:[
          { required: true, message: '请填写银行账号', trigger: 'blur' },
        ],
        bzhu:[
          { required: true, message: '请填写备注', trigger: 'blur' },
        ],
      },
      yhzhList: [
        {
          yhzh: '125844446',
          bz: 1,
          zhmc: 'ABCD',
          yhmc: 1,
          kmh: '',
          khhszs: '北京',
          khhszs: '北京',
          khhmc: '北京分行',
          lhh: '1233211234567',
          zhyt: 1,
          sfzl: 1,
        },
      ],
      form: {
        djbh: '',
        dwmc: '',
        xhrq: '',
        bz: '',
        yhzh: '',
        zhmc: '',
        yhmc: '',
        kmh: '',
        khhszs: '',
        khhszs: '',
        khhmc: '',
        lhh: '',
        zhyt: '',
        sfzl: '',
        xhsqr: '',
        khjl: '',
        khjldh: '',
        bzhu: '',
      },
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
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 方法集合
  methods: {
    yhzhChange(res){
      this.yhzhList.forEach((item,index)=>{
        if(item.yhzh==res){
          Object.keys(item).forEach((val) => {
          this.form[val] = item[val]
        })
        }
      })
    },
    initDialog() {
      if (this.dialogObj.id) {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = this.dialogObj.form[item]
        })
      } else {
        Object.keys(this.form).forEach((item) => {
          this.form[item] = ''
        })

        this.form.djbh = 'KH20091410151601'
        this.form.xhrq = new Date()
        this.form.xhsqr = 'admin'
      }
    },
    sub() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.dialogObj.id) {
            this.updateSub()
          } else {
            this.form.djzt = 1
            
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
    },
  },
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
