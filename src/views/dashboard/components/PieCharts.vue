<template>
  <div ref="myCharts" style="width:100%;height:300px"></div>
</template>

<script>
import echarts from "echarts";
import resize from "@/mixins/resize";

require("echarts/theme/macarons"); // echarts theme
export default {
  mixins: [resize],
  props: ["tableData"],

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
  watch: {
    tableData: function(newVal, OldVal) {
      console.log(newVal, OldVal);
      this._setOtion();
    }
  },
  methods: {
    initEcharts() {
      this.mycharts = echarts.init(this.$refs.myCharts, "macarons");
      this._setOtion();
    },
    _setOtion() {
      let list = [];
      this.tableData.forEach((res, index) => {
        list[index] = {
          value: res.value,
          name: res.name
        };
      });
      this.mycharts.setOption({
        type: 'scroll',
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          right:"10",
          top:"20",
          data: list
        },
        color:['#FBD337','#975FE4','#1890FF','#F04864',"#13C2C2"],
        series: [
          {
            name: "银行",
            type: "pie",
            radius: ['50%', '70%'],
            center: ["50%", "42%"],
            data: list,
            animationDuration: 2600,
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            }
          }
        ]
      });
    }
  }
};
</script>
<style></style>
