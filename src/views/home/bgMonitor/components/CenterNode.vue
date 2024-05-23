<template>
  <div class="center-page">
    <div class="top-model">
      <ul class="center-top">
        <li class="item-model">
          <div class="item-text">监测数据</div>
          <div class="item-num">100T</div>
        </li>
        <li class="item-model">
          <div class="item-text">监测数据</div>
          <div class="item-num">100T</div>
        </li>
        <li class="item-model">
          <div class="item-text">监测数据</div>
          <div class="item-num">100T</div>
        </li>
      </ul>
      <div class="light-bottom"></div>
      <!-- <img src="../../../../assets/images/bgScreen/light-bottom.png" alt="" /> -->
    </div>
    <div class="center-node">
      <ul class="content-node">
        <li class="node">
          <div class="node-title">B4</div>
        </li>
      </ul>
      <div class="first-column-line-left"></div>

      <ul class="content-node">
        <li class="node">
          <div class="node-title">B2</div>
        </li>
        <li class="line"></li>
        <li class="node">
          <div class="node-title">B3</div>
        </li>
        <li class="line"></li>
        <li class="node">
          <div class="node-title">B6</div>
        </li>
        <li class="line"></li>
        <li class="node">
          <div class="node-title">B7</div>
        </li>
      </ul>
      <div class="third-column-line-start"></div>

      <div class="third-column-line-left"></div>
      <div class="third-column-line-right"></div>
      <div class="third-column-line-end"></div>

      <ul class="content-node third">
        <li class="node">
          <div class="node-title">B5</div>
        </li>
        <li class="line-third"></li>
        <li class="node">
          <div class="node-title">B1</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.center-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top-model {
  height: 140px;
  margin-top: -62px;
}
.center-top {
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
  .item-model {
    background: url("../../../../assets/images/bgScreen/bottom-bg.png")
      no-repeat;
    background-size: contain;
    width: 180px;
    height: 186px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    .item-text {
      height: 24px;
      opacity: 1;
      font-family: YouSheBiaoTiHei;
      font-size: 22px;
      font-weight: normal;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.1em;
      background: url("../../../../assets/images/bgScreen/bottom-title.png")
        no-repeat;
      background-size: contain;
    }
    .item-num {
      height: 50px;
      opacity: 1;
      font-family: Microsoft YaHei;
      font-size: 30px;
      font-weight: bold;
      line-height: 50px;
      text-align: center;
      letter-spacing: 0.02em;

      font-variation-settings: "opsz" auto;
      background: linear-gradient(
        295deg,
        #b1ddff 11%,
        #ccf7ff 44%,
        #e8eeff 83%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      text-shadow: 0px 2px 10px rgba(0, 161, 225, 0.8);
    }
  }
  .light-bottom {
    background: url("../../../../assets/images/bgScreen/light-bottom.png")
      no-repeat;
    background-size: contain;
    height: 30px;
    width: 100%;
  }
}
.center-node {
  position: relative;
  // padding-top: 160px;
}
.content-node {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .node {
    background: url("../../../../assets/images/bgScreen/node.png") no-repeat;
    background-size: contain;
    width: 120px;
    height: 132px;
    position: relative;
  }
  .node-title {
    background: url("../../../../assets/images/bgScreen/node-title.png")
      no-repeat;
    background-size: contain;
    width: 70px;
    height: 63px;
    line-height: 63px;
    text-align: center;
    position: absolute;
    top: -30px;
    left: 20px;

    // transform: rotate(30deg);
    font-family: Source Han Sans;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.04em;
  }
  .line {
    width: 120px;
    height: 0;
    border: 1.2px solid #6aa1ff;
  }
}
.first-column-line-left {
  width: 150px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(125deg);
  -o-transform: rotate(125deg);
  -moz-transform: rotate(125deg);
  -webkit-transform: rotate(125deg);
  position: absolute;
  left: 225px;
}
.first-column-line-right {
  width: 150px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(-125deg);
  -o-transform: rotate(-125deg);
  -moz-transform: rotate(-125deg);
  -webkit-transform: rotate(-125deg);
  position: absolute;
  right: 245px;
}
.third-column-line-start {
  width: 250px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(-150deg);
  -o-transform: rotate(-150deg);
  -moz-transform: rotate(-150deg);
  -webkit-transform: rotate(-150deg);
  position: absolute;
  left: 85px;
}
.third-column-line-left {
  width: 130px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(-125deg);
  -o-transform: rotate(-125deg);
  -moz-transform: rotate(-125deg);
  -webkit-transform: rotate(-125deg);
  position: absolute;
  left: 245px;
}
.third-column-line-right {
  width: 130px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(125deg);
  -o-transform: rotate(125deg);
  -moz-transform: rotate(125deg);
  -webkit-transform: rotate(125deg);
  position: absolute;
  right: 285px;
}
.third-column-line-end {
  width: 80px;
  height: 0;
  border: 1.2px solid #6aa1ff;
  transform: rotate(-75deg);
  -o-transform: rotate(-75deg);
  -moz-transform: rotate(-75deg);
  -webkit-transform: rotate(-75deg);
  position: absolute;
  right: 25px;
}
.third {
  justify-content: flex-end;
  .line-third {
    width: 225.5px;
    height: 0;
    border: 1.2px solid #6aa1ff;
  }
}
</style>
