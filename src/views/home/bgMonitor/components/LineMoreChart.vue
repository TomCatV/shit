<!-- 双曲线 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "lineChart",
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
    bottom: "4%",
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
    data: ["数据库", "存储", "警戒线"],
    textStyle: {
      color: "#fff",
    },
    padding: [0, 30, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
  },
  xAxis: [
    {
      type: "category",
      data: [
        "2024/04/01",
        "2024/04/02",
        "2024/04/03",
        "2024/04/04",
        "2024/04/05",
        "2024/04/06",
        "2024/04/07",
      ],
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
      max: 1000,
      interval: 250,
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
      type: "line",
      smooth: true,
      symbol: "none",
      data: [100, 500, 1000, 900, 600, 300, 250, 100],
      // itemStyle: {
      //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //     { offset: 0, color: "#83bff6" },
      //     { offset: 0.5, color: "#188df0" },
      //     { offset: 1, color: "#188df0" },
      //   ]),
      // },
      lineStyle: {
        color: "#00B578", //用于设置折线颜色
        width: 2, //折现粗细
      },
    },
    {
      name: "存储",
      type: "line",
      smooth: true,
      symbol: "none",

      data: [80, 180, 600, 500, 380, 250, 180],
      // itemStyle: {
      //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //     { offset: 0, color: "#25d73c" },
      //     { offset: 0.5, color: "#1bc23d" },
      //     { offset: 1, color: "#179e61" },
      //   ]),
      // },
      lineStyle: {
        color: "#74DCFF", //用于设置折线颜色
        width: 2, //折现粗细
      },
    },
    {
      name: "警戒线",
      type: "line",
      smooth: true,
      symbol: "none",
      markLine: {
        symbol: "none",
        data: [
          {
            yAxis: 900,
            name: "警戒线",
            // lineStyle: { color: "#FA5151", type: "dashed" },
            lineStyle: {
              type: "dashed",
              color: "#FA5151",
              cap: "square",
            },
            label: {
              position: "insideEndBottom",
              formatter: () => {
                return "警戒线";
              },
              color: "#FA5151",
            },
          },
        ],
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
