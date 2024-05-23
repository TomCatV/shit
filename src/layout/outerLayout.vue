<template>
  <!-- 首页布局 -->
  <div class="wh-full">
    <div class="sidebar-container">
      <div class="flex w-full">
        <SidebarLogo v-if="sidebarLogo" :collapse="!appStore.sidebar.opened" />
        <el-menu
          mode="horizontal"
          :default-active="activePath"
          :background-color="variables['menu-background']"
          :text-color="variables['menu-text']"
          :active-text-color="variables['menu-active-text']"
          @select="handleMenuSelect"
          style="
            --el-tag-bg-color: #165dff;
            flex: 1;
            height: 64px;
            border: none;
            justify-content: right;
          "
        >
          <el-menu-item
            v-for="route in menuList"
            :key="route.path"
            :index="route.path"
            style="font-size: 16px"
          >
            <template #title>
              <svg-icon
                v-if="route.meta && route.meta.icon"
                :icon-class="route.meta.icon"
              />
              <span class="ml-1">
                {{ translateRouteTitle(route.name) }}
              </span>
            </template>
          </el-menu-item>
        </el-menu>
        <NavbarRight />
      </div>
    </div>
    <AppMain />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useSettingsStore, usePermissionStore, useAppStore } from "@/store";
import variables from "@/styles/variables.module.scss";
import { translateRouteTitle } from "@/utils/i18n";

const appStore = useAppStore();
const settingsStore = useSettingsStore();
const permissionStore = usePermissionStore();
import { RouteRecordRaw } from "vue-router";
const router = useRouter();

const sidebarLogo = computed(() => settingsStore.sidebarLogo);
const menuList = ref([
  {
    name: "首页",
    path: "/dashboard",
  },
  {
    name: "全局编目",
    path: "/global",
  },
  {
    name: "后台系统管理",
    path: "/manage",
  },
]);
const activePath = ref("/dashboard");
const handleMenuSelect = (routePath: string) => {
  router.push(routePath);
};
watch(
  () => menuList.value,
  () => {
    router.push(menuList.value[0].path);
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
.has-logo {
  .el-scrollbar {
    height: calc(100vh - $navbar-height);
  }
}
</style>
<style lang="scss" scoped>
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background: transparent;
}
.ml-1 {
  margin-left: 8px;
}
</style>
<style module>
.menu {
  --el-menu-hover-bg-color: #165dff;
}
</style>
