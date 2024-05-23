<template>
  <!-- 后台系统管理 -->
  <div style="margin-bottom: 150px">
    <ul class="card-content">
      <li
        class="item-content"
        v-for="item in firstList"
        :key="item.name"
        @click="goJump(item)"
      >
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="card-text">{{ item.name }}</div>
      </li>
    </ul>
    <ul class="card-content">
      <li class="item-content" v-for="item in secondList" :key="item.name">
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="card-text">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
import manage1 from "@/assets/images/home/manage-1.png";
import manage2 from "@/assets/images/home/manage-2.png";
import manage3 from "@/assets/images/home/manage-3.png";
import manage4 from "@/assets/images/home/manage-4.png";
import manage5 from "@/assets/images/home/manage-5.png";
import manage6 from "@/assets/images/home/manage-6.png";
import manage7 from "@/assets/images/home/manage-7.png";

const firstList = ref([
  {
    name: "共享数据管理分系统",
    imgUrl: manage1,
    path: "/monitorData/dataAccess",
  },
  {
    name: "数据共享服务分系统",
    imgUrl: manage2,
    path: "/sharedPortalManagement/personalCenter",
  },
  {
    name: "共享服务支持分系统",
    imgUrl: manage3,
    path: "/system/user",
  },
]);
const secondList = ref([
  {
    name: "数据同步管理分系统",
    imgUrl: manage4,
  },
  {
    name: "跨网安全交换分系统",
    imgUrl: manage5,
  },
  {
    name: "运行数据分析分系统",
    imgUrl: manage6,
  },
  {
    name: "综合信息显示分系统",
    imgUrl: manage7,
  },
]);
const goJump = (item: any) => {
  router.push(item.path);
  localStorage.setItem("currentModel", item.name);
};
</script>

<style lang="scss" scoped>
.card-content {
  display: flex;
  justify-content: center;
  margin: 100px 0;
}
.item-content {
  border: 1px solid rgba(106, 161, 255, 0.04);
  width: 365px;
  margin: 0 20px;
  height: 320px;
  text-align: center;
  position: relative;
  .item-img {
    display: block;
    width: 100%;
    height: 100%;
  }
  &:hover {
    cursor: pointer;
    .card-text {
      color: #4080ff;
    }
  }
  .card-text {
    height: 80px;
    border-radius: 0px 0px 20px 20px;
    opacity: 1;
    background: linear-gradient(
      0deg,
      rgba(218, 228, 255, 0.66) 0%,
      rgba(218, 228, 255, 0.528) 35%,
      rgba(236, 241, 255, 0.2178) 72%,
      rgba(255, 255, 255, 0) 100%
    );
    position: absolute;
    width: 365px;
    bottom: 0;
    font-family: Microsoft YaHei;
    font-size: 18px;
    letter-spacing: 0.08em;
    color: #000000;
    padding-top: 40px;
    font-weight: 700;
  }
}
</style>
