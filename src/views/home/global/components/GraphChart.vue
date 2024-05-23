<!--  知识图谱 -->
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
    default: "380px",
    required: true,
  },
});

const options = {
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  animation: false, // 初始化时控制的原位置动画
  // color: ["#83e0ff", "#45f5ce", "#b158ff"],
  series: [
    {
      type: "graph",
      layout: "force",
      legendHoverLink: true, //是否启用图例 hover(悬停) 时的联动高亮。
      hoverAnimation: true, //是否开启鼠标悬停节点的显示动画
      focusNodeAdjacency: true,
      force: {
        repulsion: 150,
        edgeLength: 100,
      },
      roam: true,
      draggable: true, //每个节点的拖拉
      itemStyle: {
        // normal: {
        //   color: "#00FAE1",
        //   cursor: "pointer",
        //   label: {
        //     show: true,
        //     position: [-10, -15],
        //     textStyle: {
        //       //标签的字体样式
        //       color: "#fff", //字体颜色
        //       fontStyle: "normal", //文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
        //       fontWeight: "bold", //'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
        //       fontFamily: "sans-serif", //文字的字体系列
        //       fontSize: 12, //字体大小
        //     },
        //   },
        //   nodeStyle: {
        //     brushType: "both",
        //     borderColor: "rgba(255,215,0,0.4)",
        //     borderWidth: 1,
        //   },
        // },
        //鼠标放上去有阴影效果
        emphasis: {
          shadowColor: "#00FAE1",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 40,
        },
      },
      label: {
        // position: "center", //边上的文字样式
        normal: {
          show: true,
          textStyle: {
            fontSize: 14,
            fontWeight: 700,
            color: "#ffffff",
          },
          // position: "center",
          formatter: function (x) {
            return x.data.name;
          },
        },
      },
      lineStyle: {
        normal: {
          opacity: 0.9,
          width: 2, // 指示线宽度
          curveness: 0,
          color: "#6aa1ff",
        },
      },
      edgeSymbol: ["arrow", "arrow"],
      edgeSymbolSize: 6,
      data: [
        {
          name: "B1",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#2387e3",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#3cbafc",
              color: "#143d78",
            },
          },
        },
        {
          name: "B2",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#2387e3",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#3cbafc",
              color: "#143d78",
            },
          },
        },
        {
          name: "B3",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#2387e3",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#3cbafc",
              color: "#143d78",
            },
          },
        },
        {
          name: "B4",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#2387e3",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#3cbafc",
              color: "#143d78",
            },
          },
        },
        {
          name: "B5",
          symbolSize: 50,
          itemStyle: {
            normal: {
              borderColor: "#2387e3",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#3cbafc",
              color: "#143d78",
            },
          },
        },
        {
          name: "B6",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#2387e3",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#3cbafc",
              color: "#143d78",
            },
          },
        },
        {
          name: "B7",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#2387e3",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#3cbafc",
              color: "#143d78",
            },
          },
        },
        {
          name: "C1",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#42c0af",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#076663",
              color: "#07232f",
            },
          },
        },
        {
          name: "C2",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#42c0af",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#076663",
              color: "#07232f",
            },
          },
        },
        {
          name: "C3",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#42c0af",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#076663",
              color: "#07232f",
            },
          },
        },
        {
          name: "C4",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#42c0af",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#076663",
              color: "#07232f",
            },
          },
        },
        {
          name: "C5",
          symbolSize: 30,
          itemStyle: {
            normal: {
              borderColor: "#42c0af",
              borderWidth: 4,
              shadowBlur: 6,
              shadowColor: "#076663",
              color: "#07232f",
            },
          },
        },
      ],
      links: [
        {
          source: "B2",
          target: "B5",
        },
        {
          source: "B3",
          target: "B5",
        },
        {
          source: "B6",
          target: "B5",
        },
        {
          source: "B1",
          target: "B5",
        },
        {
          source: "B4",
          target: "B3",
        },
        {
          source: "B7",
          target: "B1",
        },
        {
          source: "B7",
          target: "B6",
        },
        {
          source: "B3",
          target: "B6",
        },
        {
          source: "C1",
          target: "B5",
        },
        {
          source: "C2",
          target: "B5",
        },
        {
          source: "C3",
          target: "B5",
        },
        {
          source: "C4",
          target: "B5",
        },
        {
          source: "C5",
          target: "B5",
        },
      ],
    },
  ],
};

const downloadEchart = () => {
  // 获取画布图表地址信息
  const img = new Image();
  img.src = chart.value.getDataURL({
    type: "png",
    pixelRatio: 1,
    backgroundColor: "#fff",
  });
  // 当图片加载完成后，生成 URL 并下载
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const link = document.createElement("a");
      link.download = `业绩柱状图.png`;
      link.href = canvas.toDataURL("image/png", 0.9);
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  };
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
<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;

  .download {
    cursor: pointer;

    &:hover {
      color: #409eff;
    }
  }
}
</style>
