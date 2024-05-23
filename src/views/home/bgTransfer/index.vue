<template>
  <div class="bg-monitor">
    <div class="header">
      <span class="header-text">传输链路监控大屏</span>
      <div class="header-img"></div>
    </div>
    <div class="content">
      <el-row class="top-content">
        <el-col :span="12" class="left">
          <div class="item-model center-bottom">
            <div class="title">
              <span class="title-text">{{ nameText }}节点服务信息详情</span>
            </div>
            <LeftTable />
          </div>
        </el-col>
        <el-col :span="4" class="center" />
        <el-col :span="8" class="right">
          <div class="item-model right-top">
            <div class="title">
              <span class="title-text">传输链路实时监控详情</span>
            </div>
            <RightTable />
          </div>
        </el-col>
      </el-row>
      <el-row class="bottom-content">
        <el-col :span="24" style="padding: 50px 355px 0 355px">
          <CenterNode @get-name="getName" />
        </el-col>
      </el-row>
    </div>
    <div class="bottom-bg"></div>
    <div class="warn-model" v-if="isShowWarn">
      <div class="warn-content">
        <div class="content">
          <div class="warn-icon"></div>
          <ul class="warn-text">
            <li class="warn-text-item" v-for="item in warnList" :key="item.id">
              {{ item.text }}
            </li>
          </ul>
        </div>
        <div class="close-icon" @click="handleWaranClose"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CenterNode from "./components/CenterNode.vue";
import LeftTable from "./components/LeftTable.vue";
import RightTable from "./components/RightTable.vue";

import windowResize from "@/utils/resize";
import { onMounted, onUnmounted } from "vue";

const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize();

onMounted(() => {
  // 监听浏览器窗口尺寸变化
  windowDraw();
  calcRate();
});

onUnmounted(() => {
  unWindowDraw();
});

const nameText = ref("B5");
const getName = (name: string) => {
  nameText.value = name;
};
const isShowWarn = ref(true);
const warnList = ref([
  {
    id: "001",
    text: "B5节点的XX服务器出现故障",
  },
  {
    id: "001",
    text: "B4节点的XX服务器当前CPU使用率为85%，已超过阈值",
  },
]);
const handleWaranClose = () => {
  isShowWarn.value = false;
};
</script>

<style lang="scss" scoped>
.bg-monitor {
  width: 100%;
  height: 100vh;
  background-color: #000;
  background-image: url("../../../assets/images/bgScreen/bg-data.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  color: #fff;
  padding: 0 20px;
  position: relative;
  .header {
    position: relative;
    .header-text {
      font-family: "YouSheBiaoTiHei";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-family: YouSheBiaoTiHei;
      font-size: 56px;
      font-weight: normal;
      height: 100px;
      line-height: 100px;
      letter-spacing: 0.04em;

      background: linear-gradient(
        169deg,
        #e8faff 30%,
        #afe6ff 52%,
        #9dd9ff 67%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .header-img {
      background: url("../../../assets/images/bgScreen/top-header.png")
        no-repeat;
      background-position: center;
      background-size: contain;
      height: 128px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 128px);
    .top-content {
      height: 280px;
    }
    .title {
      position: relative;
      background: url("../../../assets/images/bgScreen/small-title.png")
        no-repeat;
      background-size: contain;

      height: 45.83px;
      margin-bottom: 12px;
      .title-text {
        position: absolute;
        left: 54px;
        bottom: 12px;
        height: 24px;
        opacity: 1;

        font-family: YouSheBiaoTiHei;
        font-size: 28px;
        font-weight: normal;
        line-height: 24px;
        letter-spacing: 0.02em;

        color: #ffffff;

        text-shadow: 2px -3px 10px rgba(82, 189, 255, 0.27),
          0px 2.5px 4px #0089de;
      }
    }
    .item-model {
      padding: 0 8px;
      background: linear-gradient(
        180deg,
        rgba(23, 54, 105, 0.33) 0%,
        rgba(24, 63, 120, 0.33) 34%,
        rgba(23, 66, 126, 0.1485) 71%,
        rgba(21, 84, 161, 0) 94%
      );

      border: 1px solid;
      border-image: linear-gradient(
          180deg,
          #426180 0%,
          rgba(66, 97, 128, 0) 100%
        )
        1;
    }
  }
  .bottom-bg {
    background: url("../../../assets/images/bgScreen/bg-bottom.png") no-repeat;
    background-size: contain;
    height: 24px;
    width: 100%;
    background-position: center;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.warn-model {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
  .warn-content {
    background: url("../../../assets/images/bgScreen/warn-bg.png") no-repeat;
    background-size: contain;
    position: relative;
    width: 740px;
    height: 384.08px;
    padding: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      .warn-icon {
        background: url("../../../assets/images/bgScreen/warn-icon.png")
          no-repeat;
        background-size: contain;
        width: 100px;
        height: 100px;
        margin: 0 auto;
      }
      .warn-text {
        margin-top: 40px;
        height: 28px;
        opacity: 1;

        font-family: HarmonyOS Sans SC;
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0.1em;

        font-variation-settings: "opsz" auto;
        font-feature-settings: "kern" on;
        color: #ffffff;
      }
      .warn-text-item {
        margin: 12px 0;
      }
    }
    .close-icon {
      background: url("../../../assets/images/bgScreen/close.png") no-repeat;
      background-size: contain;
      width: 52px;
      height: 52px;
      position: absolute;
      top: -30px;
      right: -10px;
    }
  }
  /* 放大缩小 */
  .warn-icon {
    -webkit-animation: s1 1.5s linear infinite;
  }

  @-webkit-keyframes s1 {
    0%,
    100% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.2, 1.2);
    }
  }
}
</style>
