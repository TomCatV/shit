<template>
  <div
    class="flex"
    style="align-items: center; background-color: #165dff; color: #fff"
  >
    <template v-for="item in menuList" :key="item.path">
      <!-- 购物车管理 订单管理 订阅管理 消息管理-->
      <el-tooltip :content="item.name" effect="dark" placement="bottom">
        <!-- <el-icon
          class="el-icon-class"
          style="font-size: 20px; margin: 0 20px"
          @click="goJump(item)"
        >
          <i-ep-upload />
        </el-icon> -->
        <img
          :src="item.imgUrl"
          style="margin: 0 8px; cursor: pointer"
          @click="goJump(item)"
          alt=""
        />
      </el-tooltip>
    </template>
    <!-- 用户头像 -->
    <el-dropdown class="setting-item" trigger="click">
      <div class="flex-center h100% p10px">
        <img
          :src="userStore.user.avatar + '?imageView2/1/w/80/h/80'"
          class="rounded-full mr-10px w24px w24px"
        />
        <span>{{ userStore.user.username }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <a
            target="_blank"
            href="https://gitee.com/youlaiorg/vue3-element-admin"
          >
            <el-dropdown-item>{{ $t("navbar.gitee") }}</el-dropdown-item>
          </a>
          <a target="_blank" href="https://juejin.cn/post/7228990409909108793">
            <el-dropdown-item>{{ $t("navbar.document") }}</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click="logout">
            {{ $t("navbar.logout") }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- 设置 -->
    <!-- <template v-if="defaultSettings.showSettings">
      <div class="setting-item" @click="settingStore.settingsVisible = true">
        <svg-icon icon-class="setting" />
      </div>
    </template> -->
  </div>
</template>
<script setup lang="ts">
import {
  useAppStore,
  useTagsViewStore,
  useUserStore,
  useSettingsStore,
} from "@/store";
import defaultSettings from "@/settings";
import { DeviceEnum } from "@/enums/DeviceEnum";
import shoppingCar from "@/assets/images/home/shoppingCar.png";
import order from "@/assets/images/home/order.png";
import msg from "@/assets/images/home/msg.png";


const appStore = useAppStore();
const tagsViewStore = useTagsViewStore();
const userStore = useUserStore();
const settingStore = useSettingsStore();

const route = useRoute();
const router = useRouter();

const menuList = ref([
  {
    name: "购物车管理",
    path: "/shoppingCar",
    imgUrl: shoppingCar,
  },
  {
    name: "订单管理",
    path: "/orderForm",
    imgUrl: order,
  },
  {
    name: "订阅管理",
    path: "/orderRead",
    imgUrl: order,
  },
  {
    name: "消息管理",
    path: "/message",
    imgUrl: msg,
  },
]);
const goJump = (item: any) => {
  router.push(item.path);
};
/**
 * 注销
 */
function logout() {
  ElMessageBox.confirm("确定注销并退出系统吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
    lockScroll: false,
  }).then(() => {
    userStore
      .logout()
      .then(() => {
        tagsViewStore.delAllViews();
      })
      .then(() => {
        router.push(`/login?redirect=${route.fullPath}`);
      });
  });
}
</script>
<style lang="scss" scoped>
.setting-item {
  display: inline-block;
  min-width: 40px;
  height: $navbar-height;
  line-height: $navbar-height;
  color: var(--el-text-color);
  text-align: center;
  cursor: pointer;

  &:hover {
    background: rgb(0 0 0 / 10%);
  }
}

.layout-top,
.layout-mix {
  .setting-item,
  .el-icon {
    color: var(--el-color-white);
  }
}

.dark .setting-item:hover {
  background: rgb(255 255 255 / 20%);
}
.el-icon-class {
  &:hover {
    cursor: pointer;
  }
}
</style>
