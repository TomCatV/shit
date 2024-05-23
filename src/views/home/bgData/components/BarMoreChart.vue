<!-- 多个柱状图 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "bgData-barMoreChart",
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
    y: "top",
    data: ["数据源", "数据量"],
    textStyle: {
      color: "#fff",
    },
    padding: [0, 30, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
  },
  xAxis: [
    {
      type: "category",
      data: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"],
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
      name: "数据源(个)",
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
    {
      type: "value",
      name: "数据量(T)",
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
      name: "数据源",
      type: "bar",
      barWidth: 16,

      // stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [60, 82, 78, 60, 40, 80, 50],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#00B578" },
          { offset: 0.45, color: "#CFFEEE" },
          { offset: 1, color: "rgba(255, 248, 198, 0)" },
        ]),
      },
    },
    {
      name: "数据量",
      type: "bar",
      barWidth: 16,

      // stack: "Ad",
      emphasis: {
        focus: "series",
      },
      data: [90, 85, 95, 70, 60, 85, 90],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#3662EC" },

          { offset: 0.45, color: "#CDE1FD" },
          { offset: 1, color: "rgba(255, 248, 198, 0)" },

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
