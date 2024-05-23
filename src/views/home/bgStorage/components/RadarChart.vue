<!-- 双曲线 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "radarChart",
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
    // top: "center",
    // left: "center",
    // // bottom: "2%",
    // containLabel: true,
  },
  tooltip: {
    show: true,
  },
  radar: {
    indicator: [
      { name: "B1", max: 100 },
      { name: "B2", max: 100 },
      { name: "B3", max: 100 },
      { name: "B4", max: 100 },
      { name: "B5", max: 100 },
      { name: "B6", max: 100 },
      { name: "B7", max: 100 },
    ],
    center: ["50%", "40%"],
    // 修改雷达图的大小
    radius: "120",
    shape: "circle",
    // 分割的圆圈个数
    splitNumber: 4,
    name: {
      // 修饰雷达图文字的颜色
      textStyle: {
        color: "#fff",
        fontSize: 12,
      },
    },
    // 分割的圆圈线条的样式
    splitLine: {
      lineStyle: {
        color: "#8faffe",
      },
    },
    splitArea: {
      show: false,
    },
    // 坐标轴的线修改为白色半透明
    // axisLine: {
    //   show: true,
    //   lineStyle: {
    //     color: "rgba(255, 255, 255, 0.5)",
    //   },
    // },
  },
  series: [
    {
      name: "节点分布",
      type: "radar",
      // 填充区域的线条颜色
      lineStyle: {
        normal: {
          color: "#74dcff",
          width: 1,
          // opacity: 0.5,
        },
      },
      data: [[90, 79, 86, 61, 64, 68, 80]],
      // 设置图形标记 （拐点）
      symbol: "circle",
      // 这个是设置小圆点大小
      symbolSize: 5,
      // 设置小圆点颜色
      itemStyle: {
        color: "#74dcff",
      },
      // 让小圆点显示数据
      // label: {
      //   show: true,
      //   fontSize: 12,
      // },
      // 修饰我们区域填充的背景颜色
      areaStyle: {
        show: true,
        color: "rgba(34, 118, 252, 0.2)",
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
