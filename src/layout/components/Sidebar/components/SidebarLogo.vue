<template>
  <div class="logo-container" @click="handleClick">
    <transition enter-active-class="animate__animated animate__fadeInLeft">
      <router-link v-if="collapse" class="wh-full flex-center" to="/">
        <img v-if="settingsStore.sidebarLogo" :src="logo" class="logo-image" />
      </router-link>

      <router-link v-else class="wh-full flex-center" to="/">
        <img v-if="settingsStore.sidebarLogo" :src="logo" class="logo-image" />
        <span class="logo-title"> {{ appStore.title }}</span>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import defaultSettings from "@/settings";
import { useSettingsStore, usePermissionStore, useAppStore } from "@/store";
const settingsStore = useSettingsStore();
const appStore = useAppStore();
const permissionStore = usePermissionStore();

defineProps({
  collapse: {
    type: Boolean,
    required: true,
  },
});

const logo = ref(new URL(`../../../../assets/logo.png`, import.meta.url).href);
const handleClick = () => {
  appStore.changeTitle("空间信息共享服务平台");
  const currentModel = localStorage.getItem("currentModel");
  switch (currentModel) {
    case "共享数据管理分系统":
      appStore.activeTopMenu("/monitorData");
      permissionStore.setMixLeftMenus("/monitorData");
      localStorage.setItem("activeTopMenuPath", "/monitorData");
      break;
    case "数据共享服务分系统":
      appStore.activeTopMenu("/system");
      permissionStore.setMixLeftMenus("/system");
      localStorage.setItem("activeTopMenuPath", "/system");
      break;
    case "共享服务支持分系统":
      appStore.activeTopMenu("/system");
      permissionStore.setMixLeftMenus("/system");
      localStorage.setItem("activeTopMenuPath", "/system");
      break;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
.logo-container {
  /* width: 210px; */
  /* height: $navbar-height; */
  background-color: $sidebar-logo-background;

  .logo-image {
    width: 64px;
    height: 64px;
  }

  .logo-title {
    flex-shrink: 0; /* 防止容器在空间不足时缩小 */
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
}

.layout-top,
.layout-mix {
  .logo-container {
    /* width: $sidebar-width; */
  }

  &.hideSidebar {
    .logo-container {
      width: $sidebar-width-collapsed;
    }
  }
}
</style>
