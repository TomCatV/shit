<template>
  <div class="main_box">
    <div ref="chartContainer" class="line"></div>
    <div class="btn_box">
      <el-button type="primary">三维方式查看地球磁层</el-button>
    </div>
    <div class="btn_close">
      <el-button @click="sendEvent" color="#F2F3F5">关闭</el-button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, defineComponent } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  setup(_, { emit }) {
    const chartContainer = ref(null);
    let chartInstance = null;

    const colors = ["#5470C6", "#EE6666"];
    const option = {
      color: colors,
      tooltip: {
        trigger: "none",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        bottom: 0, // 将图例置于图表底部
      },
      grid: {
        top: 70,
        bottom: 70,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "Precipitation  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          // prettier-ignore
          data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
        },
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[0],
            },
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return (
                  "Precipitation  " +
                  params.value +
                  (params.seriesData.length
                    ? "：" + params.seriesData[0].data
                    : "")
                );
              },
            },
          },
          // prettier-ignore
          data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
          axisLine: {
            show: false, // 隐藏顶部 x 轴的轴线
          },
          axisTick: {
            show: false, // 隐藏顶部 x 轴的刻度线
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "COES-l6 >= 2 Mev",
          show: false,
          type: "line",
          xAxisIndex: 1,
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
        },
        {
          name: "COES-18 >=  2 Mev",
          type: "line",
          smooth: true,
          emphasis: {
            focus: "series",
          },
          data: [
            3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3,
            0.7,
          ],
        },
      ],
    };
    const sendEvent = () => {
      emit("close");
    };
    function initializeChart() {
      chartInstance = echarts.init(chartContainer.value);
      chartInstance.setOption(option);
      window.addEventListener("resize", resizeChart);
    }

    function resizeChart() {
      if (chartInstance) {
        chartInstance.resize();
      }
    }
    onMounted(() => {
      initializeChart();
    });

    onUnmounted(() => {
      if (chartInstance) {
        window.removeEventListener("resize", resizeChart);
        chartInstance.dispose();
      }
    });

    return {
      chartContainer,
      sendEvent,
    };
  },
});
</script>

<style scoped lang="scss">
.main_box {
  width: 100%;
  height: 100%;
  .line {
    width: 800px;
    height: 600px;
    margin: auto;
  }
}
.btn_box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -25px;
}
.btn_close {
  margin-top: 10px;
  text-align: center;
}
</style>
