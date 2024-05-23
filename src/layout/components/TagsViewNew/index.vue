<template>
  <div class="breadcrumb-box">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        class="breadcrumb-link"
        v-for="(item, index) in breadcrumbItems"
        :to="{ path: item.path }"
        :key="item.path"
        ><span
          class="breadcrumb-text"
          :style="{
            color: index === breadcrumbItems.length - 1 ? '#000' : '#4E5969',
            fontWeight:
              index === breadcrumbItems.length - 1 ? 'bold' : 'lighter',
          }"
          >{{ item.name }}</span
        ></el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

interface BreadcrumbItem {
  path: string;
  name?: string;
}

const breadcrumbItems = ref<BreadcrumbItem[]>([]);

const updateBreadcrumb = () => {
  breadcrumbItems.value = route.matched.map((item) => ({
    path: item.path,
    name: item.meta.title,
  }));
  // breadcrumbItems.value.unshift({
  //   path: "/",
  //   name: "首页",
  // });
};

watch(route, updateBreadcrumb, { immediate: true });
</script>

<style lang="scss" scoped>
.breadcrumb-box {
  padding: 15px 0 15px 40px;
  opacity: 1;
  background: #ffffff;
  display: flex;
  align-items: center;
  .el-breadcrumb {
    font-size: 12px;
  }
}
.breadcrumb-text:hover {
  color: #409eff !important;
}
</style>
