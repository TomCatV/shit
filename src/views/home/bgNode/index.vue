<template>
  <div class="bg-monitor">
    <div class="header">
      <span class="header-text">节点数据传输</span>
      <div class="header-img"></div>
    </div>
    <div class="content">
      <el-row :gutter="10" class="content-info">
        <el-col :span="8" class="left">
          <div class="item-model left-top-model" style="margin-bottom: 20px">
            <div class="title">
              <span class="title-text">{{ nameText }}节点</span>
            </div>
            <div class="search-form" style="padding-right: 60px">
              <el-form
                ref="form"
                :model="form"
                label-position="right"
                label-width="120px"
              >
                <el-form-item label="时间周期：">
                  <el-date-picker
                    v-model="form.dataTime"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  />
                </el-form-item>
                <el-form-item label="传输类型：">
                  <el-radio-group v-model="type">
                    <el-radio :value="1">下载</el-radio>
                    <el-radio :value="2">推送</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="接收方：">
                  <el-select v-model="form.receive" placeholder="请选择">
                    <el-option
                      v-for="item in receiveOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="item-model left-bottom-model">
            <div class="title">
              <span class="title-text">数据传输详情</span>
            </div>
            <LeftTable />
          </div>
        </el-col>
        <el-col :span="16" class="right">
          <CenterNode @get-name="getName" />
        </el-col>
      </el-row>

      <div class="item-model right-bottom">
        <div class="title">
          <span class="title-text">数据分发情况统计</span>
        </div>
        <PieMoreChart />
      </div>
    </div>
    <div class="bottom-bg"></div>
  </div>
</template>

<script setup lang="ts">
import CenterNode from "./components/CenterNode.vue";
import LeftTable from "./components/LeftTable.vue";
import PieMoreChart from "./components/PieMoreChart.vue";

import windowResize from "@/utils/resize";
import { onMounted, onUnmounted } from "vue";

const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize();

const nameText = ref("B5");
const getName = (name: string) => {
  nameText.value = name;
};
const form = ref({
  dataTime: "",
  receive: "",
});
const type = ref(1);
const receiveOptions = ref([
  {
    value: "1",
    label: "接收方01",
  },
  {
    value: "2",
    label: "接收方02",
  },
  {
    value: "3",
    label: "接收方03",
  },
]);
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
    position: relative;
    .content-info {
      height: 100%;
      .left,
      .right {
        height: 100%;
      }
      .left {
        display: flex;
        flex-direction: column;
      }
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
    .left-top-model {
      // display: flex;
      flex-grow: 0;
      height: 250px;
    }
    .left-bottom-model {
      flex-grow: 1;
    }
  }
  .right-bottom {
    width: 25%;
    height: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
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
.search-form {
  .el-form-item--default {
    .el-form-item__label {
      color: #fff;
      font-family: Microsoft YaHei;
      font-size: 14px;
      font-weight: normal;
      line-height: 24px;
    }
  }
}
</style>
<style lang="scss">
.content-info {
  .el-form-item--default .el-form-item__label {
    color: #fff;
    font-family: Microsoft YaHei;
    font-size: 14px;
    font-weight: normal;
    height: 40px;
    line-height: 40px;
  }
  .el-range-editor.el-input__wrapper {
    height: 40px;
    background: linear-gradient(180deg, #052850 0%, #105283 100%);
    box-sizing: border-box;
    border: 1px solid;
    border-image: linear-gradient(180deg, #56beed 0%, #e3f8ff 100%) 1;

    box-shadow: inset 0px -2px 10px 0px rgba(35, 143, 255, 0.66);
  }
  .el-radio--default {
    color: #fff;
  }
  .el-select__wrapper {
    height: 40px;
    background: linear-gradient(180deg, #052850 0%, #105283 100%);
    box-sizing: border-box;
    border: 1px solid;
    border-image: linear-gradient(180deg, #56beed 0%, #e3f8ff 100%) 1;

    box-shadow: inset 0px -2px 10px 0px rgba(35, 143, 255, 0.66);
  }
}
</style>
