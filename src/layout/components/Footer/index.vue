<template>
  <!-- 底部footer -->
  <div class="footer-container">
    <div class="footer">
      <ul class="footer-first">
        <li class="footer-first-item">
          <div class="footer-icon">
            <img
              class="footer-img"
              src="../../../assets/images/home/footer-1.png"
              alt=""
            />
          </div>
          <div>北京市海淀区北清路107号院</div>
        </li>
        <li class="footer-first-item">
          <div class="footer-icon">
            <img
              class="footer-img"
              src="../../../assets/images/home/footer-2.png"
              alt=""
            />
          </div>
          <div>0532-88889900</div>
        </li>
        <li class="footer-first-item">
          <div class="footer-icon">
            <img
              class="footer-img"
              src="../../../assets/images/home/footer-3.png"
              alt=""
            />
          </div>
          <div>123@123.com.cn</div>
        </li>
        <li class="footer-first-item">
          <div class="footer-icon">
            <img
              class="footer-img"
              src="../../../assets/images/home/footer-4.png"
              alt=""
            />
          </div>
          <div>建议留言</div>
        </li>
      </ul>
      <div class="footer-second">
        <div>平台统计信息：页面访问量：281次</div>
        <div>统计信息截止到：2023-12-10 14:12:00</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  height: 260px;
  background: #125b9f;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  .footer-first {
    display: flex;
    width: 1440px;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 68px;
    .footer-first-item {
      display: flex;
      align-items: center;
      .footer-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 4px solid #fff;
        margin-right: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        .footer-img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  .footer-second {
    display: flex;
    width: 1440px;
    justify-content: space-between;
    border-bottom: 1px solid;
  }
}
</style>
