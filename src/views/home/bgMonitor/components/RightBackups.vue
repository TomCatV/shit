<template>
  <div class="backups-content">
    <div class="left-img">
      <div class="left-img"></div>
      <div class="left-text">存储：50T</div>
    </div>
    <!-- <div class="center"></div> -->
    <ul class="right-content">
      <li class="right-item">
        <div>&</div>
        <p class="small-text">备份A</p>
        <p class="small-text">20T</p>
      </li>
      <li class="right-item">
        <div>&</div>
        <p class="small-text">备份B</p>
        <p class="small-text">20T</p>
      </li>
      <li class="right-item">
        <div>&</div>
        <p class="small-text">备份C</p>
        <p class="small-text">10T</p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.backups-content {
  display: flex;
  justify-content: center;
  align-items: center;
  .left-img {
    background: url("../../../../assets/images/bgScreen/backups.png") no-repeat;
    background-size: contain;
    width: 180px;
    height: 180px;
    position: relative;
    .left-text {
      height: 24px;
      opacity: 1;
      font-family: YouSheBiaoTiHei;
      font-size: 20px;
      font-weight: normal;
      line-height: 24px;
      letter-spacing: 0.02em;
      position: absolute;
      left: 30px;
      bottom: 20px;
    }
  }
  .right-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .right-item {
      margin: 10px;
      width: 160px;
      height: 32px;
      border-radius: 1000px;
      opacity: 1;

      background: linear-gradient(
        180deg,
        rgba(40, 56, 89, 0.66) 0%,
        rgba(50, 74, 114, 0.66) 49%,
        rgba(70, 104, 152, 0.66) 100%
      );

      box-sizing: border-box;
      border: 0.5px solid #72a5e4;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 20px;
      .small-text {
        height: 16px;
        opacity: 1;

        font-family: HarmonyOS Sans SC;
        font-size: 14px;
        font-weight: bold;
        line-height: 16px;
        letter-spacing: 0em;
      }
    }
  }
}
</style>
