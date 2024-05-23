<template>
  <div style="margin-top: 40px">
    <div class="line-outer">
      <div class="line-model">
        <div class="line-item top-left"></div>
        <div class="line-item top-right"></div>
      </div>
      <div class="line-model">
        <div class="line-item bottom-left"></div>
        <div class="line-item bottom-right"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.line-outer {
  height: 200px;
  border-radius: 100000px;
  opacity: 1;

  background: linear-gradient(
    180deg,
    rgba(68, 152, 255, 0.12) 0%,
    rgba(25, 112, 219, 0.052) 100%
  );

  box-sizing: border-box;
  border: 1px solid #21feff;

  box-shadow: 0px 0px 20px 0px rgba(68, 152, 255, 0.33),
    inset 0px 0px 20px 0px rgba(68, 152, 255, 0.33);
    
  .line-item {
    background: url("../../../../assets/images/bgScreen/line-item.png")
      no-repeat;
      height: 70px;
  }
}
</style>
