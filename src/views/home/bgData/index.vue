<template>
  <div class="bg-monitor">
    <div class="header">
      <span class="header-text">数据清洗服务监控</span>
      <div class="header-img"></div>
    </div>
    <el-row class="content" :gutter="20">
      <el-col :span="8" class="left">
        <div class="item-model left-top">
          <div class="title">
            <span class="title-text">实时清洗任务清单</span>
          </div>
          <LeftTable />
        </div>
        <div class="item-model left-bottom">
          <div class="title">
            <span class="title-text">各节点数据清洗情况</span>
          </div>
          <BarMoreChart />
        </div>
      </el-col>
      <el-col :span="16" class="center">
        <el-row class="center-top">
          <el-col :span="14" style="position: relative">
            <div class="center-content">
              <div class="center-model">
                <div class="center-left-bg">
                  <div class="center-label">数据源</div>
                  <div class="center-num">81个</div>
                </div>
              </div>
              <div class="center-model">
                <div class="center-right-bg">
                  <div class="center-label">数据量</div>
                  <div class="center-num">160T</div>
                </div>
              </div>
            </div>
            <div class="bgData-line"></div>
          </el-col>
          <el-col :span="10">
            <div class="item-model center-right">
              <div class="title">
                <span class="title-text">规则问题数量统计</span>
              </div>
              <BarCrossChart />
            </div>
          </el-col>
        </el-row>
        <div class="center-bottom">
          <div class="item-model center-bottom">
            <div class="title">
              <span class="title-text">数据质量分析</span>
            </div>
            <el-row :gutter="20" class="center-bottom-model">
              <el-col :span="8" class="bottom-pie">
                <PieChart />
              </el-col>
              <el-col :span="16" class="bottom-tree">
                <TreeModel />
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="bottom-bg"></div>
  </div>
</template>

<script setup lang="ts">
import PieChart from "./components/PieChart.vue";
import LeftTable from "./components/LeftTable.vue";
import BarMoreChart from "./components/BarMoreChart.vue";
import BarCrossChart from "./components/BarCrossChart.vue";
import TreeModel from "./components/TreeModel.vue";

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
</script>

<style lang="scss" scoped>
.bg-monitor {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  background-image: url("../../../assets/images/bgScreen/bg-data.png");
  background-repeat: no-repeat; /* 如果需要，设置不重复 */
  background-position: center; /* 设置图片居中 */
  background-size: contain;
  color: #fff;
  padding: 0 20px;
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
    justify-content: space-between;
    height: calc(100vh - 128px);
    width: 100%;
    .left,
    .center {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
    .left {
      .left-top {
        flex-grow: 0;
        height: 440px;
      }
      .left-bottom {
        // flex: auto; //自动伸缩填满剩余空间
        flex-grow: 1;
        // height: 340px;
      }
    }
    .center {
      .center-top {
        position: relative;
        flex-grow: 0;
        height: 320px;
      }
      .center-bottom {
        flex-grow: 1;
      }
    }
    .center {
      .center-top {
        .center-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .bgData-line {
          background: url("../../../assets/images/bgScreen/bgData-line.png")
            no-repeat;
          background-size: contain;
          background-position: center;
          position: absolute;
          bottom: 40px;
          left: 0;
          width: 100%;
          height: 30px;
        }

        .center-left-bg {
          background: url("../../../assets/images/bgScreen/data-left.png")
            no-repeat;
          background-size: contain;
          background-position: center;
          width: 300px;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .center-model {
          height: 100%;
        }
        .center-right-bg {
          background: url("../../../assets/images/bgScreen/data-right.png")
            no-repeat;
          background-size: contain;
          background-position: center;
          width: 300px;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .center-label {
          height: 24px;
          font-family: YouSheBiaoTiHei;
          font-size: 28px;
          font-weight: normal;
          line-height: 24px;
          letter-spacing: 0.02em;
          margin-bottom: 12px;
        }
        .center-num {
          height: 24px;
          font-family: YouSheBiaoTiHei;
          font-size: 36px;
          font-weight: normal;
          line-height: 24px;
          letter-spacing: 0.02em;
          color: #6affc6;
        }
        .center-right {
          height: 100%;
        }
      }
      .center-bottom {
        height: 100%;
        .center-bottom-model,
        .bottom-pie,
        .bottom-tree {
          height: 100%;
        }
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
