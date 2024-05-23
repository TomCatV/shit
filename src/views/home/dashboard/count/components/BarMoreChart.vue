<!-- 多个柱状图 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "count-barMoreChart",
  },
  className: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "1300px",
    required: true,
  },
  height: {
    type: String,
    default: "260px",
    required: true,
  },
});

const options = {
  grid: {
    top: "3%",
    left: "2%",
    right: "3%",
    bottom: "5%",
    containLabel: true,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      crossStyle: {
        color: "#999",
      },
    },
  },
  legend: {
    x: "right",
    y: "bottom",
    data: ["编目数量(个)", "数据量(T)"],
    textStyle: {
      // color: "#fff",
    },
    padding: [0, 30, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
  },
  xAxis: [
    {
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      // axisLine: {
      //   show: true, // 是否显示坐标轴轴线
      //   lineStyle: {
      //     color: {
      //       type: "linear", // 线性渐变
      //       x: 1, // x:  从左向右 1 ——> 0
      //       y: 0, // y:  从上向下 1 ——> 0
      //       x2: 0, // x2: 从右向左 1 ——> 0
      //       y2: 0, // y2: 从下向上 1 ——> 0
      //       colorStops: [
      //         { offset: 0, color: "#27457b" },
      //         { offset: 0.5, color: "#6684bd" },
      //         { offset: 1, color: "#cadafc" },
      //       ],
      //     },
      //     width: "4", // 坐标轴线线宽
      //     type: "solid", // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
      //   },
      // },
      axisTick: {
        show: false, // 是否显示坐标轴刻度
      },
      axisLabel: {
        show: true, //是否显示刻度标签
        // color: "#FFF", // 刻度标签文字的颜色
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "编目数量(个)",
      min: 0,
      max: 60,
      interval: 15,
      // axisLine: {
      //   show: true, // 是否显示坐标轴轴线
      //   lineStyle: {
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //       { offset: 0, color: "#27457b" },
      //       { offset: 0.5, color: "#6684bd" },
      //       { offset: 1, color: "#cadafc" },
      //     ]),
      //     width: "4", // 坐标轴线线宽
      //     type: "solid", // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
      //   },
      // },
      splitLine: {
        lineStyle: {
          color: "#eee",
          type: "solid", // 线型为虚线
        },
      },
      axisLabel: {
        show: true, //是否显示刻度标签
        interval: "0", //坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
        // color: "#FFF", // 刻度标签文字的颜色
      },
    },
  ],
  series: [
    {
      name: "编目数量(个)",
      type: "bar",
      barWidth: 16,

      // stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [60, 34, 25, 45, 40, 35, 56],
      itemStyle: {
        color: "#3aa0ff",
      },
    },
    {
      name: "数据量(T)",
      type: "bar",
      barWidth: 16,

      // stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [35, 45, 34, 56, 24, 45, 34],
      itemStyle: {
        color: "#4ecb73",
      },
    },
  ],
};

const chart = ref<any>("");
onMounted(() => {
  // 图表初始化
  chart.value = markRaw(
    echarts.init(document.getElementById(props.id) as HTMLDivElement)
  );

  chart.value.setOption(options);

  // 大小自适应
  window.addEventListener("resize", () => {
    chart.value.resize();
  });
});

onActivated(() => {
  if (chart.value) {
    chart.value.resize();
  }
});
</script>
<style lang="scss" scoped></style>
