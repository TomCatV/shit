<template>
  <div class="bg-monitor">
    <div class="header">
      <span class="header-text">空间天气保障需求监控</span>
      <div class="header-img"></div>
    </div>
    <div class="content">
      <div style="width: 34%" class="left">
        <div class="item-model left-top">
          <div class="title">
            <span class="title-text">实时需求详情</span>
          </div>
          <LeftTable />
        </div>
        <div class="item-model left-bottom">
          <div class="title">
            <span class="title-text">来源单位需求情况</span>
          </div>
          <PieChart />
        </div>
      </div>
      <div style="width: 30%; margin: 0 18px" class="center">
        <div class="center-top">
          <div class="center-content">
            <div class="center-model center-left">
              <div class="center-left-bg">
                <div class="center-label">次数</div>
                <div class="center-num">1127</div>
              </div>
            </div>
            <div class="space-line"></div>
            <div class="center-model center-right">
              <div class="center-right-bg">
                <div class="center-label">成功率</div>
                <div class="center-num">99%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="item-model center-bottom">
          <div class="title">
            <span class="title-text">近半年需求保障情况</span>
          </div>
          <BarLineChart />
        </div>
      </div>
      <div style="width: 34%" class="right">
        <div class="item-model right-top">
          <div class="title">
            <span class="title-text">需求下发详情</span>
          </div>
          <RightTable />
        </div>
        <div class="item-model right-bottom">
          <div class="title">
            <span class="title-text">各节点保障情况</span>
          </div>
          <GraphChart />
        </div>
      </div>
    </div>
    <div class="bottom-bg"></div>
  </div>
</template>

<script setup lang="ts">
import PieChart from "./components/PieChart.vue";
import LeftTable from "./components/LeftTable.vue";
import RightTable from "./components/RightTable.vue";
import BarLineChart from "./components/BarLineChart.vue";
import GraphChart from "./components/GraphChart.vue";

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
  background-image: url("../../../assets/images/bgScreen/bg-space.png");
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
    .center,
    .right {
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
        height: 440px;
      }
      .center-bottom {
        flex-grow: 1;
        // height: 340px;
      }
    }
    .center {
      .center-top {
        .center-content {
          height: 100%;
          display: flex;
          align-items: center;
        }

        .center-left-bg {
          background: url("../../../assets/images/bgScreen/space-1.png")
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
          .center-right {
            padding-top: 100px;
          }
        }
        .space-line {
          // background: url("../../../assets/images/bgScreen/space-2.png")
          //   no-repeat;
          // background-size: contain;
          // background-position: center;
          // width: 50px;
          // height: 50px;
          // transform: rotate(-51.97deg);
          width: 7px;
          height: 47.97px;
          transform: rotate(-51.97deg);
          opacity: 1;

          background: linear-gradient(
            180deg,
            rgba(15, 112, 112, 0) 0%,
            rgba(15, 112, 112, 0.27) 55%,
            rgba(15, 112, 112, 0) 100%
          );

          border: 1px solid;
          border-image: linear-gradient(
              0deg,
              rgba(227, 255, 249, 0) 0%,
              #21feff 53%,
              rgba(227, 255, 249, 0) 100%
            )
            1;
        }
        .center-right-bg {
          background: url("../../../assets/images/bgScreen/space-2.png")
            no-repeat;
          background-size: contain;
          background-position: center;
          width: 300px;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 0;
          bottom: 0;
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
      }
    }
    .right {
      .right-top {
        flex-grow: 0;
        height: 440px;
      }
      .right-bottom {
        flex-grow: 1;
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
