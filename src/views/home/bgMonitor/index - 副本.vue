<template>
  <!-- <dv-full-screen-container> -->
  <div class="bg-monitor">
    <div class="header">
      <span class="header-text">共享数据管理监控</span>
      <div class="header-img"></div>
    </div>
    <div class="content-box">
      <el-row class="content content-top" :gutter="20">
        <el-col :span="7" class="left">
          <div class="item-model left-top">
            <div class="title">
              <span class="title-text">实时接入数据</span>
            </div>
            <LeftTable />
          </div>
        </el-col>
        <el-col :span="10" class="center">
          <div class="center-top-title">
            <CenterNode />
          </div>
        </el-col>
        <el-col :span="7" class="right">
          <div class="right-box">
            <div class="item-model right-top">
              <div class="title">
                <span class="title-text">接入数据分类统计</span>
              </div>
              <RightTable />
            </div>
            <div class="item-model right-center">
              <div class="title">
                <span class="title-text">存储用量分析</span>
              </div>
              <LineMoreChart />
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="content content-bottom" :gutter="20">
        <el-col :span="7" class="left">
          <div class="item-model">
            <div class="title">
              <span class="title-text">接入数据统计</span>
            </div>
            <BarCrossChart />
          </div>
        </el-col>
        <el-col :span="10" class="center">
          <div class="item-model center-bottom">
            <div class="title">
              <span class="title-text">数据生命周期</span>
            </div>
            <LifeCycle />
          </div>
        </el-col>
        <el-col :span="7" class="right">
          <div class="item-model right-bottom">
            <div class="title">
              <span class="title-text">数据备份</span>
            </div>
            <RightBackups />
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="bottom-bg"></div>
  </div>
  <!-- </dv-full-screen-container> -->
</template>

<script setup lang="ts">
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
import LeftTable from "./components/LeftTable.vue";
import BarCrossChart from "./components/BarCrossChart.vue";

import CenterNode from "./components/CenterNode.vue";
import LifeCycle from "./components/LifeCycle.vue";

import RightTable from "./components/RightTable.vue";
import LineMoreChart from "./components/LineMoreChart.vue";
import RightBackups from "./components/RightBackups.vue";
</script>

<style lang="scss" scoped>
#dv-full-screen-container {
  width: 100vw; /* 视口宽度 */
  margin: 0; /* 移除默认的边距 */
  padding: 0; /* 移除默认的填充 */
  box-sizing: border-box; /* 确保边框和填充不会影响宽度 */
}
.bg-monitor {
  width: 100%;
  height: 100vh;
  background: #000;
  color: #fff;
  padding: 0 20px;
  // overflow: hidden;
  .header {
    position: relative;
    // display: flex;
    // justify-content: center;
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
      // text-shadow: 0px 4px 2px #09124c, 6.5px 3.5px 2.5px #011163;
    }
    .header-img {
      background: url("../../../assets/images/bgScreen/top-header.png")
        no-repeat;
      background-size: contain;
      background-position: center;
      height: 128px;
    }
    // .header-light {
    //   position: absolute;
    //   bottom: 0;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    // }
  }
  .content-box {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 128px);
    .content-top {
      // flex-grow: 1;
      height: calc(100vh - 448px);
      .el-col {
        height: 100%;
        .item-model {
          height: 100%;
        }
      }
      .right-box {
        height: 100%;
        display: flex;
        flex-direction: column;
        .right-top {
          height: 50%;
          // margin-bottom: 20px;
        }
        .right-center {
          flex: 1;
        }
      }
    }
    .content-bottom {
      flex-grow: 0;
      height: 320px;
      .item-model {
        height: 100%;
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
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
    .center {
      .center-top-title {
        position: relative;
        background: url(/src/assets/images/bgScreen/center-top.png) no-repeat;
        // height: 50.5%;
        background-size: contain;
        // margin-top: -12px;
      }
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
</style>
