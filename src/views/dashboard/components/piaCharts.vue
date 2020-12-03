<template>
  <div
    ref="myCharts"
    class="lineCharts"
    :style="{ width: width, height: height }"
  />
</template>

<script>
import echarts from 'echarts'
import resize from '@/mixins/resize'
require('echarts/theme/macarons')
// import { getLineData } from '@/api/dashboard'
export default {
  mixins: [resize],
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '280px',
    },
    lineChartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mycharts: null,
    }
  },
  watch: {
    lineChartData: {
      deep: true,
      handler(val) {
        this._setOption(val.inPrice, val.outPrice)
      },
    },
  },
  mounted() {
    this.$nextTick().then(() => {
      this.initEcharts()
    })
  },
  methods: {
    initEcharts() {
      this.mycharts = echarts.init(this.$refs.myCharts, 'macarons')
      if (Object.keys(this.lineChartData).length > 0) {
        this._setOption(this.lineChartData.inPrice, this.lineChartData.outPrice)
      }
    },
    _setOption(inprice = [], outprice = []) {
      this.mycharts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              background: '#6a7985',
            },
          },
        },
        grid: {
          left: '50',
          top: '10',
          right: '20',
          bottom: '0',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'value',
            boundaryGap: [0, 0.01],
            show: false,
          },
        ],
        yAxis: [
          {
            type: 'category',
            data: ['zgyh', 'jtyh', 'zsyh', 'gsyh', 'jsyh'],
            axisLabel: {
              formatter: function (value) {
                if(value==='zgyh'){
                  return '{' + value + '| }\t\t{value|中国银行}'
                }else if(value ==='jtyh'){
                  return '{' + value + '| }\t\t{value|交通银行}'
                }else if(value ==='zsyh'){
                  return '{' + value + '| }\t\t{value|招商银行}'
                }else if(value ==='gsyh'){
                  return '{' + value + '| }\t\t{value|工商银行}'
                }else if(value ==='jsyh'){
                  return '{' + value + '| }\t\t{value|建设银行}'
                }
                
              },
              rich: {
                value: {
                  lineHeight: 12,
                  align: 'right',
                },
                zgyh: {
                  height: 20,
                  align: 'center',
                  backgroundColor: {
                    image: require('@a/img/zgyh.png'),
                  },
                },
                jtyh: {
                  height: 20,
                  align: 'center',
                  backgroundColor: {
                    image: require('@a/img/jtyh.png'),
                  },
                },
                zsyh: {
                  height: 20,
                  align: 'center',
                  backgroundColor: {
                    image: require('@a/img/zsyh.png'),
                  },
                },
                gsyh: {
                  height: 20,
                  align: 'center',
                  backgroundColor: {
                    image: require('@a/img/gsyh.png'),
                  },
                },
                jsyh: {
                  height: 20,
                  align: 'center',
                  backgroundColor: {
                    image: require('@a/img/jsyh.png'),
                  },
                },
              },
            },
            axisLine: {
              //y轴
              show: false,
            },
            axisTick: {
              //y轴刻度线
              show: false,
            },
            splitLine: {
              //网格线
              show: false,
            },
          },
        ],
        color: ['#3AA0FF'],
        series: [
          {
            name: '账户数量',
            type: 'bar',
            barWidth: '60%',
            data: this.lineChartData,
          },
        ],
      })
    },
  },
}
</script>
<style></style>
