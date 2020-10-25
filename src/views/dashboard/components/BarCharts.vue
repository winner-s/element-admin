<template>
  <div ref="myCharts" :style="{ width: width, height: height }"></div>
</template>

<script>
import echarts from "echarts";
import resize from "@/mixins/resize";
import { List } from 'echarts/lib/export';
require("echarts/theme/macarons"); // echarts theme
export default {
  mixins: [resize],
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    },
    tableData:{
      type:List
    }
  },
  data() {
    return {
      mycharts: null
    };
  },
  mounted() {
    this.$nextTick().then(() => {
      this.initEcharts();
    });
  },
  methods: {
    initEcharts() {
      this.mycharts = echarts.init(this.$refs.myCharts, "macarons");
      this._setOtion();
    },
    _setOtion() {
      this.mycharts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
       
        series: [
          {
            name: "余额占比",
            type: "pie",
            
            radius: '70%',
            center: ["50%", "50%"],
            data: this.tableData,
            
            animationDuration: 2600
          }
        ]
      });
    }
  }
};
</script>
<style></style>