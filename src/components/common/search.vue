<!-- 
   elementb搜索表单封装组件
  -->
<template>
  <el-form :inline="true" label-position="left" :model="searchData" ref="searchData" size="mini" label-width="130px">
    <el-row >
      <template v-for="(item, index) in searchItem" >
        <el-col :span="8
        " :key='index' >
          <el-form-item
            v-if="item.type === 'input' || ''"
            :label="item.label"
            :key="item.prop"
            :prop="item.prop"
            
          >
            <el-input
              v-model="searchData[item.prop]"
              style="width:250px"
              :placeholder="item.placeholder"
            ></el-input>
          </el-form-item>
          <el-form-item
            v-if="item.type === 'select'"
            :label="item.label"
            :key="item.prop"
            :prop="item.prop"
            
            filterable 
          >
            <el-select
              v-model="searchData[item.prop]"
              style="width:250px"
              @click.native="handleChange"
              :placeholder="item.placeholder"
              clearable
              filterable
            >
              <el-option
                v-for="i in item.selectList"
                :label="i.value"
                :value="i.id"
                :key="i.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            v-if="item.type === 'time'"
            :label="item.label"
            :key="item.prop"
            :prop="item.prop"
          >
            <el-date-picker
              type="date"
              :picker-options="pickerOptions"
              :format="item.timeFormat"
              :value-format="item.timeFormat"
              placeholder="选择日期"
              v-model="searchData[item.prop]"
              style="width: 140px;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item
            v-if="item.type === 'daterange'"
            :label="item.label"
            :key="index"
          >
            <el-form-item :prop="item.timeList[0]">
              <el-date-picker
                type="date"
                :picker-options="pickerOptions0"
                :format="item.timeFormat"
                :value-format="item.timeFormat"
                placeholder="开始日期"
                v-model="searchData[item.timeList[0]]"
                style="width: 140px;"
                @change="changeValue(searchData[item.timeList[0]], 1)"
              ></el-date-picker>
            </el-form-item>
            <span class="ml-5">-</span>
            <el-form-item :prop="item.timeList[1]">
              <el-date-picker
                type="date"
                :picker-options="pickerOptions1"
                :format="item.timeFormat"
                :value-format="item.timeFormat"
                placeholder="结束日期"
                v-model="searchData[item.timeList[1]]"
                @change="changeValue(searchData[item.timeList[1]], 2)"
                style="width: 140px;"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>
        </el-col>  
      </template>
    </el-row>
    <el-row  :gutter="20">
      <el-col :span="20">
        <template v-for="(item,index) in searchBto"  >
          <el-form-item class="searchFloat" :key="index" v-if="item.prop=='select'">
              <el-button type="primary" @click="handleSearch()" >{{item.label}}</el-button>
          </el-form-item>
          <el-form-item class="searchFloat" :key="index" v-if="item.prop=='reset'">
              <el-button  @click="handleReset('searchData')" 
                >重 置</el-button
              >
          </el-form-item>
          <el-form-item class="searchFloat" :key="index" v-if="item.prop=='commit'">
              <el-button type="primary" @click="handleSearch()" >{{item.label}}</el-button>
          </el-form-item>
          <el-form-item class="searchFloat" :key="index" v-if="item.prop=='insert'">
              <el-button type="primary" @click="handInsert()" >{{item.label}}</el-button>
          </el-form-item>
          
          
        </template>
        
        <el-form-item class="searchFloat"  v-if="!showAll">
          <el-dropdown trigger="click" >
            <span class="el-dropdown-link">
              展开<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
        
          </el-dropdown>
        </el-form-item>

        <el-form-item class="searchFloat"  v-else>
          <el-dropdown trigger="click" >
            <span class="el-dropdown-link">
              收起<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
        
          </el-dropdown>
        </el-form-item>
      </el-col>
      
      
    </el-row>
    
  </el-form>
</template>
<script>
export default {
  props: {
    searchData: {
      type: Object,
      required: true
    },
    searchItem: {
      type: Array,
      required: true
    },
    searchBto: {
      type: Array,
      required: true
    },
    showAll:{
      type: Object,
      required: true
    }
  },
  data() {
    return {
      value1: "",
      value2: "",
      // 单个时间
      pickerOptions: {
        disabledDate: time => {
          return time.getTime() > Date.now();
        }
      },
      // 第一个日期限制第二个日期
      pickerOptions0: {
        disabledDate: time => {
          if (this.value2 != "" && this.value2 != null) {
            return (
              time.getTime() > Date.now() ||
              time.getTime() > new Date(this.value2)
            );
          } else {
            return time.getTime() > Date.now();
          }
        }
      },
      pickerOptions1: {
        disabledDate: time => {
          return (
            time.getTime() < new Date(this.value1) - 24 * 60 * 60 * 1000 || // 减去一天 可前后时间相等
            time.getTime() > Date.now()
          );
        }
      }
    };
  },
  mounted() {},
  methods: {
    //新增事件
    handInsert(){
      this.$emit("handleInsert");
    },
    // 按钮事件
    handleClick(row, fn) {
      return this.$parent[fn](row);
    },
    handleSearch() {
      this.$emit("getDataList", this.searchData);
    },
    handleReset(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange() {
      // window.console.log(this.searchData);
    },
    // 获取第一个第二个时间
    changeValue(val, i) {
      if (i == 1) {
        this.value1 = val;
      } else if (i == 2) {
        this.value2 = val;
      }
    }
  }
};
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
    color: #409EFF;
}
.el-input--mini .el-input__inner {
  // width: 180px;
}
.timeWidth {
  width: 120px;
}
.searchFloat{
  position: relative;
  left: 50%;
}

</style>
