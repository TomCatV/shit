<!-- 水位图 -->
<template>
  <div :id="id" :class="className" :style="{ height, width }"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps({
  id: {
    type: String,
    default: "count-waterChart",
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
    default: "200px",
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
    show: true,

    formatter: function (a) {
      var str = "";

      var dataValueNum = Number(Number(a.value) * 100).toFixed(2);

      str = `满意率：${dataValueNum}%`;

      return str;
    },
  },

  title: {
    text: "满意率",

    textStyle: {
      color: "#fff", // 字体颜色
      fontSize: 18,

      fontWeight: "400",

      align: "center", // 文字的水平方式
      baseline: "middle",

      position: "inside",

      verticalAlign: "middle", // 文字的垂直方式
    },

    left: "center", // 定位
    top: "20%",
  },

  series: [
    {
      type: "liquidFill",

      radius: "95%",

      waveAnimation: true,

      data: [
        {
          value: dataValue,

          direction: "left",

          itemStyle: {
            normal: {
              // color: "#1890ff",

              color: {
                //配置水位颜色从上到下渐变

                type: "linear",

                x: 0,

                y: 0,

                x2: 0,

                y2: 1,

                colorStops: [
                  {
                    offset: 0,

                    color: "#06305a",
                  },

                  {
                    offset: 1,

                    color: "#1890ff",
                  },
                ],

                global: false,
              },
            },
          },
        },
      ],

      outline: {
        // show: true , //是否显示轮廓 布尔值

        borderDistance: 2, // 外部轮廓与图表的距离 数字
        itemStyle: {
          borderColor: "#1890ff", // 边框的颜色
          borderWidth: 2,
        },
      },

      itemStyle: {
        opacity: 0.8, // 波浪的透明度
        shadowBlur: 0, // 波浪的阴影范围
      },

      backgroundStyle: {
        color: "#060715", // 图表的背景颜色
      },

      label: {
        // 数据展示样式

        formatter: function (a) {
          var str = "";

          var dataValueNum = Number(Number(a.value) * 100).toFixed(2);

          str = `${dataValueNum}%`;

          return str;
        },

        show: true,

        color: "#fff",

        insideColor: "#fff",

        fontSize: 26,

        fontWeight: 400,

        align: "center",

        baseline: "middle",

        position: "inside",
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
