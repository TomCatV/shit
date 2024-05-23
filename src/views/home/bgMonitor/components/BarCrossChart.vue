<!-- 横向柱状图 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "BarCrossChart",
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
    default: "80%",
    required: true,
  },
});

const options = {
  grid: {
    top: "5%",
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
    y: "top",
    data: ["空间目标", "空间物体", "空间天气", "空间碎片"],
    itemHeight: 8, //修改icon图形大小
    // itemGap: 0, //图例图标与文字间的间距
    textStyle: {
      color: "#fff",
      fontSize: 12,
      // padding: [0, 0], //文字与图形之间的左右间距
    },
    icon: "circle", //图标样式设置
  },
  xAxis: {
    show: true,
    min: 0,
    max: 200,
    interval: 20,
    // axisLabel: {
    //   formatter: "{value}",
    //   show: true,
    //   color: "#fff",
    // },
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
    splitLine: {
      show: false,
      // lineStyle: {
      //   color: "#426180",
      //   type: "dashed", // 线型为虚线
      // },
    },
  },
  yAxis: {
    type: "category",
    // inverse: true, // 倒叙
    // axisLabel: {
    //   color: "#fff",
    //   formatter: (val) => {
    //     return `${val}`;
    //   },
    // },
    axisLine: {
      show: true, // 是否显示坐标轴轴线
      lineStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#27457b" },
          { offset: 0.5, color: "#6684bd" },
          { offset: 1, color: "#cadafc" },
        ]),
        width: "4",
        type: "solid",
      },
    },

    axisLabel: {
      show: true, //是否显示刻度标签
      interval: "0", //坐标轴刻度标签的显示间隔，在类目轴中有效.0显示所有
      color: "#FFF", // 刻度标签文字的颜色
    },
    axisTick: {
      show: false, // 是否显示坐标轴刻度
    },
    data: ["B1", "B2", "B3", "B4", "B5", "B6", "B7"],
  },
  series: [
    {
      name: "空间目标",
      type: "bar",
      barWidth: 8,

      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [30, 32, 20, 30, 10, 20, 40, 10],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: "#C6D5FF" },
          { offset: 1, color: "#3662EC" },
        ]),
      },
    },
    {
      name: "空间物体",
      type: "bar",
      barWidth: 16,
      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [30, 32, 20, 30, 10, 20, 40, 10],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: "#FFDFAE" },
          { offset: 1, color: "#FF8F1F" },
        ]),
      },
    },
    {
      name: "空间天气",
      type: "bar",
      barWidth: 16,
      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [30, 32, 20, 30, 10, 20, 40, 10],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: "#FFF8C6" },
          { offset: 1, color: "#FFC300" },
        ]),
      },
    },
    {
      name: "空间碎片",
      type: "bar",
      barWidth: 16,
      stack: "total",
      label: {
        show: false,
      },
      emphasis: {
        focus: "series",
      },
      data: [30, 32, 20, 30, 10, 20, 40, 10],
      itemStyle: {
        // borderRadius: [0, 10, 10, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: "#C6FFDD" },
          { offset: 1, color: "#00B578" },
        ]),
        // borderWidth: 1,
        // borderColor: "black",
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
