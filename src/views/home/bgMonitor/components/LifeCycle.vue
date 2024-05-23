<template>
  <div style="margin-top: 20px; height: calc(100% - 30px)">
    <dv-border-box-8 class="line-outer">
      <div class="line-model top">
        <div class="line-item top-left">
          <div class="left-title">数据接入</div>
          <div>——</div>
          <div>
            <div>
              <span class="right-title">接入量：</span>
              <span class="title-num">30T</span>
            </div>
            <div>
              <span class="right-title">当前任务量：</span>
              <span class="title-num">15T</span>
            </div>
          </div>
        </div>
        <div class="line-item top-right">
          <div class="left-title">数据处理</div>
          <div>——</div>
          <div>
            <div>
              <span class="right-title">接入量：</span>
              <span class="title-num">30T</span>
            </div>
            <div>
              <span class="right-title">当前任务量：</span>
              <span class="title-num">10T</span>
            </div>
          </div>
        </div>
      </div>
      <div class="center">
        <img
          class="light"
          src="../../../../assets/images/bgScreen/light-column.png"
          alt=""
        />
        <img
          class="light"
          src="../../../../assets/images/bgScreen/light-row.png"
          alt=""
        />
      </div>
      <div class="line-model bottom">
        <div class="line-item bottom-left">
          <div class="left-title">数据清理</div>
          <div>——</div>
          <div>
            <div>
              <span class="right-title">已清除：</span>
              <span class="title-num">10T</span>
            </div>
            <div>
              <span class="right-title">即将过期量：</span>
              <span class="title-num">5T</span>
            </div>
          </div>
        </div>
        <div class="line-item bottom-right">
          <div class="left-title">数据接入</div>
          <div>——</div>
          <div>
            <div>
              <span class="right-title">接入量：</span>
              <span>123</span>
            </div>
            <div>
              <span class="right-title">当前任务量：</span>
              <span class="title-num">123</span>
            </div>
          </div>
        </div>
      </div>
    </dv-border-box-8>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.line-outer {
  height: 200px;
  opacity: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  background: linear-gradient(
    180deg,
    rgba(68, 152, 255, 0.12) 0%,
    rgba(25, 112, 219, 0.052) 100%
  );

  box-sizing: border-box;
  border: 1.5px solid #6aa1ff;

  box-shadow: 0px 0px 20px 0px rgba(68, 152, 255, 0.33),
    inset 0px 0px 20px 0px rgba(68, 152, 255, 0.33);

  .line-item {
    background: url("../../../../assets/images/bgScreen/line-item.png")
      no-repeat;
    background-size: contain;
    width: 280px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 40px;
    padding: 20px;
    .left-title {
      font-family: Microsoft YaHei;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.1em;
      font-variation-settings: "opsz" auto;
      background: linear-gradient(135deg, #ffffff 24%, #ade6ff 59%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .right-title {
      font-family: Microsoft YaHei;
      font-weight: 400;
      font-size: 14px;
      font-variation-settings: "opsz" auto;
    }
    .title-num {
      font-family: Microsoft YaHei;
      font-weight: 700;
      font-size: 14px;
      color: #6affc6;
    }
  }
  .line-model {
    display: flex;
    justify-content: space-around;
  }
  .center {
    position: relative;
    height: 30px;
    // height: 30px;
    .light {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
