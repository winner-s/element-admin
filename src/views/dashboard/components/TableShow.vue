<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 96%;box-shadow: 0 0 10px #e2e2e2;"
    >
      <el-table-column
        prop="yearMonth"
        label="时间"
        width="180"
      />
      <el-table-column
        prop="orderMonthCount"
        label="每月成交订单总数"
      />
      <el-table-column
        prop="orderMonthSumPrice"
        label="每月成交订单总金额"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  filters: {},
  props: {
    tableData: {
      type: Array,
      required: true
    }
  }
}
</script>
