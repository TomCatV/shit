<template>
  <div class="bg-monitor">
    <div class="header">
      <span class="header-text">存储情况资料</span>
      <div class="header-img"></div>
    </div>
    <el-row class="content" :gutter="20">
      <el-col :span="7" class="left">
        <div class="item-model left-top">
          <div class="title">
            <span class="title-text">7日增长情况</span>
          </div>
          <LineChart />
        </div>
        <div class="item-model left-bottom">
          <div class="title">
            <span class="title-text">XXXXX分类</span>
          </div>
          <PieChart />
        </div>
      </el-col>
      <el-col :span="10" class="center">
        <div class="center-top">
          <div class="center-content">
            <div>
              <div class="center-bg">
                <div class="center-label">存量</div>
                <div class="center-num">100T</div>
              </div>
              <div class="center-bg">
                <div class="center-label">今日增量</div>
                <div class="center-num">60T</div>
              </div>
            </div>
            <div class="arror">
              <div class="center-arror-top"></div>
              <div class="center-arror-bottom"></div>
            </div>
            <div class="center-right-bg">
              <div class="center-label">总量</div>
              <div class="center-num">160T</div>
            </div>
          </div>
        </div>

        <div class="item-model center-bottom">
          <div class="title">
            <span class="title-text">资源使用分析</span>
          </div>
          <CenterTable />
        </div>
      </el-col>
      <el-col :span="7" class="right">
        <div class="item-model right-top">
          <div class="title">
            <span class="title-text">实时存储</span>
          </div>
          <BarMoreChart />
        </div>
        <div class="item-model right-bottom">
          <div class="title">
            <span class="title-text">节点存储分布</span>
          </div>
          <RadarChart />
        </div>
      </el-col>
    </el-row>
    <div class="bottom-bg"></div>
  </div>
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
</script>

<style lang="scss" scoped>
.bg-monitor {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  background-image: url("../../../assets/images/bgScreen/bg-storage.png");
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
        flex-grow: 1;
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
      }
    }
    .center {
      .center-top {
        position: relative;
        .center-content {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -40px;
          left: 62px;
        }

        .center-bg {
          background: url("../../../assets/images/bgScreen/center-top1.png")
            no-repeat;
          background-size: contain;

          width: 240px;
          height: 240px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .arror {
          height: 240px;
          margin: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .center-arror-top {
            background: url("../../../assets/images/bgScreen/arror-top.png")
              no-repeat;
            background-size: contain;
            width: 40px;
            height: 42px;
          }
          .center-arror-bottom {
            background: url("../../../assets/images/bgScreen/arror-bottom.png")
              no-repeat;
            background-size: contain;

            width: 40px;
            height: 42px;
          }
        }

        .center-right-bg {
          background: url("../../../assets/images/bgScreen/center-right.png")
            no-repeat;
          background-size: contain;

          width: 360px;
          height: 360px;
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
