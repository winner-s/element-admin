<!--
   elementb搜索表单封装组件
  -->
<template>
  <el-form
    ref="searchData"
    :inline="true"
    label-position="left"
    :model="searchData"
    size="mini"
    label-width="130px"
  >
    <el-row>
      <template v-for="(item, index) in searchItem">
        <el-col :key="index" :span="8">
          <el-form-item
            v-if="
              (item.type === 'input' || '') &&
              (item.show || item.show === undefined)
            "
            :key="item.prop"
            :label="item.label"
            :prop="item.prop"
          >
            <el-input
              v-model="searchData[item.prop]"
              :style="{ width: width }"
              :placeholder="item.placeholder"
            />
          </el-form-item>

          <el-form-item
            v-if="item.type === 'num' && (item.show || item.show === undefined)"
            :key="index"
            :label="item.label"
          >
            
              <el-input
                v-model="searchData[item.numList[0]]"
                style="width: 120px"
                :placeholder="item.placeholder"
              />
            
            <span class="ml-5">-</span>
            
              <el-input
                v-model="searchData[item.numList[1]]"
                style="width: 120px"
                :placeholder="item.placeholder"
              />
            
          </el-form-item>

          <el-form-item
            v-if="
              (item.type === 'checkbox' || '') &&
              (item.show || item.show === undefined)
            "
            :key="item.prop"
            :label="item.label"
            :prop="item.prop"
          >
            <el-checkbox v-model="searchData[item.prop]" />
          </el-form-item>
          <el-form-item
            v-if="
              item.type === 'select' && (item.show || item.show === undefined)
            "
            :key="item.prop"
            :label="item.label"
            :prop="item.prop"
            filterable
          >
            <el-select
              v-model="searchData[item.prop]"
              :style="{ width: width }"
              :placeholder="item.placeholder"
              clearable
              filterable
              @click.native="handleChange"
            >
              <el-option
                v-for="i in item.selectList"
                :key="i.value"
                :label="i.value"
                :value="i.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item
            v-if="
              item.type === 'time' && (item.show || item.show === undefined)
            "
            :key="item.prop"
            :label="item.label"
            :prop="item.prop"
          >
            <el-date-picker
              v-model="searchData[item.prop]"
              type="date"
              :picker-options="pickerOptions"
              :format="item.timeFormat"
              :value-format="item.timeFormat"
              placeholder="选择日期"
              style="width: 250px"
            />
          </el-form-item>
          <el-form-item
            v-if="
              item.type === 'daterange' &&
              (item.show || item.show === undefined)
            "
            :key="index"
            :label="item.label"
          >
            <el-form-item :prop="item.timeList[0]">
              <el-date-picker
                v-model="searchData[item.timeList[0]]"
                type="date"
                :picker-options="pickerOptions0"
                :format="item.timeFormat"
                :value-format="item.timeFormat"
                placeholder="开始日期"
                :disabled="item.disabled"
                style="width: 120px"
                @change="changeValue(searchData[item.timeList[0]], 1)"
              />
            </el-form-item>
            <span class="ml-5">-</span>
            <el-form-item :prop="item.timeList[1]">
              <el-date-picker
                v-model="searchData[item.timeList[1]]"
                type="date"
                :picker-options="pickerOptions1"
                :format="item.timeFormat"
                :value-format="item.timeFormat"
                placeholder="结束日期"
                :disabled="item.disabled"
                style="width: 120px"
                @change="changeValue(searchData[item.timeList[1]], 2)"
              />
            </el-form-item>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
    <el-row>
      <el-col :span="20">
        <template v-for="(item, index) in searchBto">
          <el-form-item
            v-if="item.prop == 'select'"
            :key="index"
            class="searchFloat"
          >
            <el-button type="primary" @click="handleSearch()">{{
              item.label
            }}</el-button>
          </el-form-item>
          <el-form-item
            v-if="item.prop == 'reset'"
            :key="index"
            class="searchFloat"
          >
            <el-button @click="handleReset('searchData')">重 置</el-button>
          </el-form-item>
          <el-form-item
            v-if="item.prop == 'commit'"
            :key="index"
            class="searchFloat"
          >
            <el-button type="primary" @click="handleSearch()">{{
              item.label
            }}</el-button>
          </el-form-item>
          <el-form-item
            v-if="item.prop == 'insert'"
            :key="index"
            class="searchFloat"
          >
            <el-button type="primary" @click="handInsert()">{{
              item.label
            }}</el-button>
          </el-form-item>
        </template>

        <el-form-item v-if="!showAll" class="searchFloat">
          <span class="el-dropdown-link" @click="dropDown">
            展开<i class="el-icon-arrow-down el-icon--right" />
          </span>
        </el-form-item>

        <el-form-item
          v-if="showAll === true || (showAll === true && showAll !== 1)"
          class="searchFloat"
        >
          <span class="el-dropdown-link" @click="dropUp">
            收起<i class="el-icon-arrow-up el-icon--right" />
          </span>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
import { number } from 'echarts/lib/export'
export default {
  props: {
    searchData: {
      type: Object,
      required: true,
    },
    searchItem: {
      type: Array,
      required: true,
    },
    searchBto: {
      type: Array,
      required: true,
    },
    showAll: {
      type: Boolean,
      required: true,
    },
    width: {
      type: String,
      default: '250px',
      required: true,
    },
  },
  data() {
    return {
      value1: '',
      value2: '',
      // 单个时间
      pickerOptions: {
        disabledDate: (time) => {
          return time.getTime() > Date.now()
        },
      },
      // 第一个日期限制第二个日期
      pickerOptions0: {
        disabledDate: (time) => {
          if (this.value2 != '' && this.value2 != null) {
            return (
              time.getTime() > Date.now() ||
              time.getTime() > new Date(this.value2)
            )
          } else {
            return time.getTime() > Date.now()
          }
        },
      },
      pickerOptions1: {
        disabledDate: (time) => {
          return (
            time.getTime() < new Date(this.value1) - 24 * 60 * 60 * 1000 || // 减去一天 可前后时间相等
            time.getTime() > Date.now()
          )
        },
      },
    }
  },
  mounted() {},
  methods: {
    // 收起
    dropUp() {
      this.$emit('dropUp')
    },
    // 展开
    dropDown() {
      console.log('点击了展开')
      this.$emit('dropDown')
    },
    // 新增事件
    handInsert() {
      this.$emit('handleInsert')
    },
    // 按钮事件
    handleClick(row, fn) {
      return this.$parent[fn](row)
    },
    handleSearch() {
      this.$emit('getDataList', this.searchData)
    },
    handleReset(formName) {
      this.$refs[formName].resetFields()
    },
    handleChange() {
      // window.console.log(this.searchData);
    },
    // 获取第一个第二个时间
    changeValue(val, i) {
      if (i == 1) {
        this.value1 = val
      } else if (i == 2) {
        this.value2 = val
      }
    },
  },
}
</script>
<style scoped>
.ml-5 {
  margin-right: 10px;
  display: inline-block;
}
</style>

<style lang="scss">
// .el-form-item__label {
//   color: #37ce59;
// }

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.timeWidth {
  width: 120px;
}
.searchFloat {
  position: relative;
  left: 50%;
}
</style>
