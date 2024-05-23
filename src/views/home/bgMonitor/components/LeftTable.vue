<template>
  <div class="scroll-table">
    <div class="line_th">
      <span class="th_name" style="width: 20%"></span>
      <span class="th_name" style="width: 30%">数据名称</span>
      <span class="th_name" style="width: 34%">接入时间</span>
      <span class="th_name" style="width: 16%">数据大小</span>
    </div>
    <vue3-seamless-scroll :list="list" class="scroll">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img class="icon-img" :src="item.type" alt="" />
        <span style="width: 30%; text-align: center">{{ item.name }}</span>
        <div class="line"></div>
        <span style="width: 34%; text-align: center">{{ item.time }}</span>
        <div class="line"></div>
        <span style="width: 16%; text-align: center">{{ item.size }}</span>
      </div>
    </vue3-seamless-scroll>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import jianceIcon from "@/assets/images/bgScreen/jiance-icon.png";
import tongjiIcon from "@/assets/images/bgScreen/tongji-icon.png";
import xinxiIcon from "@/assets/images/bgScreen/xinxi-icon.png";

function isFullScreen(element) {
  // 获取元素的高度
  const elementHeight = element.offsetHeight;
  // 获取视口的高度
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // 判断元素高度是否与视口高度相等
  return elementHeight === viewportHeight;
}

export default defineComponent({
  name: "App",
  components: {
    Vue3SeamlessScroll,
  },
  setup() {
    const list = ref([
      {
        id: "001",
        type: jianceIcon,
        name: "极光光谱仪原始观测数据",
        time: "2024/04/03 10:30:19",
        size: "2M",
      },
      {
        id: "002",
        type: tongjiIcon,

        name: "3天地磁预报",
        time: "2024/04/02 10:30:19",
        size: "3M",
      },
      {
        id: "003",
        type: xinxiIcon,
        name: "磁通门磁力仪磁场基线值",
        time: "2024/03/03 10:30:19",
        size: "2M",
      },
      {
        id: "004",
        type: jianceIcon,
        name: "空间监测数据",
        time: "2024/04/03 10:30:19",
        size: "2M",
      },
      {
        id: "005",
        type: jianceIcon,
        name: "太阳监测数据",
        time: "2024/04/03 10:30:19",
        size: "4M",
      },
      {
        id: "006",
        type: jianceIcon,
        name: "45日AP指数预测",
        time: "2024/04/03 10:30:19",
        size: "2M",
      },
      {
        id: "007",
        type: jianceIcon,
        name: "3天地磁预报",
        time: "2024/04/03 10:30:19",
        size: "2M",
      },
      {
        id: "008",
        type: jianceIcon,
        name: "原始观测数据",
        time: "2024/04/03 10:30:19",
        size: "2M",
      },
      {
        id: "009",
        type: jianceIcon,
        name: "极光数据",
        time: "2024/04/03 10:30:19",
        size: "2M",
      },
    ]);

    onMounted(() => {
      const app = document.getElementById("app");
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const isScrollElement = document.querySelector(".scroll-table .scroll");
      window.onresize = function () {
        if (app.offsetHeight === viewportHeight) {
          isScrollElement.style.height = "360px";
        } else {
          isScrollElement.style.height = "800px";
        }
      };
    });

    return { list };
  },
});
</script>
<style lang="scss" scoped>
.table {
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  .line_th {
    height: 4rem;
    display: flex;
    align-items: center;
    color: #ffffffcc;
    font-weight: 500;
    .th_name1 {
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .line_tr {
    height: 3rem;
    display: flex;
    line-height: 3rem;
    color: #ffffffcc;
    border-top: 0.1rem dotted #506b81;
    cursor: pointer;
  }
  .warp {
    overflow: hidden;
  }
  .th_tr {
    display: inline-block;
    text-align: center;
    font-size: 1.2rem;
  }
  .th_name {
    display: inline-block;
    text-align: center;
    font-size: 1.2rem;
    padding-left: 2%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
<style lang="scss" scoped>
.line_th {
  height: 64px;
  line-height: 64px;
  display: flex;
  .th_name {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
}
.scroll {
  height: 360px;
  overflow: hidden;
  .item {
    height: 56px;
    border-radius: 10000px;
    background: rgba(205, 225, 253, 0.15);
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 8px;
    font-size: 16px;
    .icon-img {
      width: 56px;
      height: 56px;
      line-height: 56px;
    }
    .line {
      background: url("../../../../assets/images/bgScreen/line.png") no-repeat;
      background-size: contain;
      width: 2px;
      height: 20px;
    }
  }
}
</style>
