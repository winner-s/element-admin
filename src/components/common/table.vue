<!--
   element表格分页组合封装组件
  -->
<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      align="center"
      style="width: 100%"
      size="mini"
      class="tableClass"
      :show-summary="showSummary"
      @selection-change="handleSelectionChange"
      @row-click="tableClick"
    >
      <template v-for="(item, index) in tableListData">

        <el-table-column
          v-if="item.type === 'selection'"
          :key="index"
          align="center"
          type="selection"
          :width="item.width"
          :index="indexMethod"
          :fixed="item.fixed"
        />
        <el-table-column
          v-if="item.type === 'index'"
          :key="index"
          align="center"
          type="index"
          :width="item.width"
          :index="indexMethod"
          :fixed="item.fixed"
        />
        <el-table-column
          v-if="item.type === undefined"
          :key="index"
          :prop="item.prop"
          align="center"
          :label="item.label"
          :width="item.width"
          :show-overflow-tooltip="'' || item.tooltiop"
          :fixed="item.fixed"
        />
        <el-table-column
          v-if="item.type === 'a'"
          :key="index"
          :prop="item.prop"
          align="center"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template slot-scope="scope">
            <div>
              <span
                class="color-blue"
                title="查看详情"
                @click="handleClickViewOther(scope.row)"
              >
                {{ scope.row[item.prop] }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="item.type === 'input'"
          :key="index"
          :prop="item.prop"
          align="center"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template slot-scope="scope">
            <div>
              <el-input v-model="scope.row[item.prop] " size="mini" />
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="item.type === '_bank'"
          :key="index"
          :prop="item.prop"
          align="center"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template slot-scope="scope">
            <div>
              <span
                class="color-blue"
                title="查看详情"
                @click="handleClickViewBank(scope.row)"
              >
                {{ scope.row[item.prop] ? item.text : "" }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="item.type === '_rangeTime'"
          :key="index"
          :prop="item.prop"
          align="center"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template slot-scope="scope">
            <div>
              <span>
                {{ item.wordbookList(scope.row[item.time[0]]) }}-{{
                  item.wordbookList(scope.row[item.time[1]])
                }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="item.type === 'wordbook'"
          :key="index"
          :prop="item.prop"
          align="center"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template slot-scope="scope">
            <div>
              {{ item.wordbookList(scope.row[item.prop], scope.row) }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-if="item.type === 'img'"
          :key="index"
          :prop="item.prop"
          align="center"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template slot-scope="scope">
            <div>
              <img
                :src="$root.prefix + scope.row[item.prop]"
                class="img-size"
                alt=""
                title="查看详情"
              >
            </div>
          </template>
        </el-table-column>

        <el-table-column
          v-if="item.type === 'userImg'"
          :key="index"
          :prop="item.prop"
          align="center"
          :label="item.label"
          :width="item.width"
          :fixed="item.fixed"
        >
          <template slot-scope="scope">
            <div>
              <img
                :src="scope.row[item.prop]"
                class="img-size"
                alt=""
                title="查看详情"
              >
            </div>
          </template>
        </el-table-column>
        <!-- 按钮 -->
        <template>
          <el-table-column
            v-if="item.type === 'btn'"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :fixed="'' || item.fixed"
            :width="item.width"
            align="center"
          >
            <template slot-scope="scope">
              <span
                v-for="(item, index) in tableBtn"
                :key="index"
                class="span-btn-ml"
              >
                <el-button
                  v-if="item.type === undefined"
                  v-has="item.has"
                  :type="item.btnType"
                  size="mini"
                  plain
                  @click="handleClick(scope.row, item.handleFn)"
                >{{ item.name }}</el-button>
                <el-button
                  v-if="
                    item.type === 'isShow' &&
                      scope.row[item.isShowStatus] === item.isShowValue
                  "
                  v-has="item.has"
                  :type="item.btnType"
                  size="mini"
                  plain
                  @click="handleClick(scope.row, item.handleFn)"
                >{{ item.name }}</el-button>
                <el-button
                  v-if="
                    item.type === 'isNoShow' &&
                      item.isShowValue.indexOf(scope.row[item.isShowStatus]) ===
                      -1
                  "
                  v-has="item.has"
                  :type="item.btnType"
                  size="mini"
                  plain
                  @click="handleClick(scope.row, item.handleFn)"
                >{{ item.name }}</el-button>
              </span>
            </template>
          </el-table-column>
        </template>
      </template>
    </el-table>
    <template>
      <div class="page-div">
        <el-pagination
          :current-page="currentData.currentPage || 1"
          :page-sizes="[5, 10, 20, 50, 100]"
          :page-size="currentData.size || 10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="currentData.total || 0"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
        <el-button type="primary" size="mini">导出Excel</el-button>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    objectSpanMethod: {
      type: Function
    },
    // indexMethod: {
    //   type: Function
    // },
    tableData: {
      type: Array,
      required: true
    },
    tableListData: {
      type: Array
    },
    tableBtn: {
      type: Array
    },
    showSummary: {
      type: Boolean,
      default: false
    },
    currentData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {},
  created() {},
  methods: {
    //当某一行被点击时
    tableClick(res){
        this.$emit('tableClick',res)
    },
    handleSelectionChange(res) {
      console.log(res)
      this.$emit("handleSelectionChange",res)
    },
    // 索引事件
    indexMethod(val) {
      return (
        (this.currentData.currentPage - 1) * this.currentData.size + val + 1
      )
    },
    // 按钮事件
    handleClick(row, fn) {
      // return this.$parent[fn](row);
      this.$emit(fn, row)
    },
    handleClickViewBank(val) {
      this.$emit('handleClickViewBank', val)
    },
    handleClickViewOther(val) {
      this.$emit('handleViewOther', val)
    },
    // 改变页码
    handleCurrentChange(val) {
      // this.$parent.onPageChange(val);
      this.$emit('onPageChange', val)
    },
    // 改变每页数量
    handleSizeChange(val) {
      // this.$parent.onSizeChange(val);
      this.$emit('onSizeChange', val)
    }
  }
}
</script>
<style lang="scss" scoped>
.page-div {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  text-align: right;
  & >:nth-child(1){
    flex:1;
  }
  & >:nth-child(2){
    flex: 0.05;
  }
}
.img-size {
  width: 100px;
  cursor: pointer;
}
.color-blue {
  color: rgb(79, 148, 212);
  cursor: pointer;
}
.span-btn-ml button {
  margin: 5px;
}
</style>
