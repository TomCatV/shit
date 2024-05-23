<!-- 柱状堆积图 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "barChart",
  },
  className: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
    required: true,
  },
  height: {
    type: String,
    default: "100%",
    required: true,
  },
});

const options = {
  grid: {
    top: "3%",
    left: "2%",
    right: "3%",
    // bottom: "2%",
    containLabel: true,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  legend: {
    x: "right",
    y: "top",
    data: ["数据库", "文件"],
    textStyle: {
      color: "#fff",
    },
    padding: [0, 30, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
  },
  xAxis: [
    {
      type: "category",
      data: ["02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22"],
      axisLine: {
        show: true, // 是否显示坐标轴轴线
        lineStyle: {
          color: {
            type: "linear", // 线性渐变
            x: 1, // x:  从左向右 1 ——> 0
            y: 0, // y:  从上向下 1 ——> 0
            x2: 0, // x2: 从右向左 1 ——> 0
            y2: 0, // y2: 从下向上 1 ——> 0
            colorStops: [
              { offset: 0, color: "#27457b" },
              { offset: 0.5, color: "#6684bd" },
              { offset: 1, color: "#cadafc" },
            ],
          },
          width: "4", // 坐标轴线线宽
          type: "solid", // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
        },
      },
      axisTick: {
        show: false, // 是否显示坐标轴刻度
      },
      axisLabel: {
        show: true, //是否显示刻度标签
        color: "#FFF", // 刻度标签文字的颜色
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      min: 0,
      max: 100,
      interval: 25,
      axisLine: {
        show: true, // 是否显示坐标轴轴线
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#27457b" },
            { offset: 0.5, color: "#6684bd" },
            { offset: 1, color: "#cadafc" },
          ]),
          width: "4", // 坐标轴线线宽
          type: "solid", // 坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
        },
      },
      splitLine: {
        lineStyle: {
          color: "#426180",
          type: "dashed", // 线型为虚线
        },
      },
      axisLabel: {
        show: true, //是否显示刻度标签
        interval: "0", //坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
        color: "#FFF", // 刻度标签文字的颜色
      },
    },
  ],
  series: [
    {
      name: "数据库",
      type: "bar",
      barWidth: 16,

      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [60, 32, 45, 20, 20, 30, 10, 40, 30, 10, 40],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#1890FF" },
          { offset: 1, color: "rgba(24, 144, 255, 0.35" },
        ]),
      },
    },
    {
      name: "文件",
      type: "bar",
      barWidth: 16,

      stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [30, 25, 25, 30, 20, 15, 10, 30, 10, 40, 30, 25, 30],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#1ee6e7" },
          { offset: 1, color: "#18b8bd" },
        ]),
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
