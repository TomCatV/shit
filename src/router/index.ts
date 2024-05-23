import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const Layout = () => import("@/layout/index.vue");
export const outerLayout = () => import("@/layout/outerLayout.vue");

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },
  // 大屏
  {
    path: "/bgMonitor",
    component: () => import("@/views/home/bgMonitor/index.vue"),
    meta: { hidden: true, title: "共享数据管理监控" },
  },
  {
    path: "/bgStorage",
    component: () => import("@/views/home/bgStorage/index.vue"),
    meta: { hidden: true, title: "存储情况资料" },
  },
  {
    path: "/bgTransfer",
    component: () => import("@/views/home/bgTransfer/index.vue"),
    meta: { hidden: true, title: "传输链路监控大屏" },
  },
  {
    path: "/bgNode",
    component: () => import("@/views/home/bgNode/index.vue"),
    meta: { hidden: true, title: "节点数据传输" },
  },
  {
    path: "/bgSpace",
    component: () => import("@/views/home/bgSpace/index.vue"),
    meta: { hidden: true, title: "空间天气保障需求监控" },
  },
  {
    path: "/bgData",
    component: () => import("@/views/home/bgData/index.vue"),
    meta: { hidden: true, title: "数据清洗服务监控" },
  },

  {
    path: "/",
    name: "/",
    component: outerLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/home/dashboard/index.vue"),
        name: "Dashboard", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
        // https://cn.vuejs.org/guide/built-ins/keep-alive.html#include-exclude
        meta: {
          title: "dashboard",
          icon: "homepage",
          affix: true,
          keepAlive: true,
          alwaysShow: false,
        },
      },
      {
        path: "count",
        component: () => import("@/views/home/dashboard/count/index.vue"),
        meta: { hidden: true, title: "统计信息" },
      },
      {
        path: "notice",
        component: () => import("@/views/home/dashboard/notice/index.vue"),
        meta: { hidden: true, title: "通知公告" },
      },
      {
        path: "noticeDetail",
        component: () =>
          import("@/views/home/dashboard/notice/noticeDetail.vue"),
        meta: { hidden: true, title: "公告详情" },
      },
      {
        path: "policy",
        component: () => import("@/views/home/dashboard/policy/index.vue"),
        meta: { hidden: true, title: "政策法规" },
      },
      {
        path: "policyDetail",
        component: () =>
          import("@/views/home/dashboard/policy/policyDetail.vue"),
        meta: { hidden: true, title: "政策法规详情" },
      },
      {
        path: "industry",
        component: () => import("@/views/home/dashboard/industry/index.vue"),
        meta: { hidden: true, title: "行业动态" },
      },
      {
        path: "industryDetail",
        component: () =>
          import("@/views/home/dashboard/industry/industryDetail.vue"),
        meta: { hidden: true, title: "行业动态详情" },
      },
      {
        path: "global",
        component: () => import("@/views/home/global/index.vue"),
        meta: { hidden: true, title: "全局编目" },
        // children: [
        //   {
        //     path: "globalDeatil",
        //     component: () => import("@/views/home/global/globalDeatil.vue"),
        //     meta: { hidden: true, title: "全局编目详情" },
        //   },
        // ],
      },
      {
        path: "globalDetail",
        component: () => import("@/views/home/global/globalDetail.vue"),
        meta: { hidden: true, title: "全局编目详情" },
      },
      {
        path: "manage",
        component: () => import("@/views/home/manage/index.vue"),
        meta: { hidden: true, title: "后台系统管理" },
      },
      {
        path: "shoppingCar",
        component: () => import("@/views/home/shoppingCar/index.vue"),
        meta: { hidden: true, title: "购物车管理" },
      },
      {
        path: "orderForm",
        component: () => import("@/views/home/orderForm/index.vue"),
        meta: { hidden: true, title: "订单管理" },
      },
      {
        path: "orderRead",
        component: () => import("@/views/home/orderRead/index.vue"),
        meta: { hidden: true, title: "订阅管理" },
      },
      {
        path: "message",
        component: () => import("@/views/home/message/index.vue"),
        meta: { hidden: true, title: "消息管理" },
      },
      {
        path: "center",
        component: () => import("@/views/home/center/index.vue"),
        meta: { hidden: true, title: "个人中心" },
      },
      {
        path: "401",
        component: () => import("@/views/error-page/401.vue"),
        meta: { hidden: true },
      },
      {
        path: "404",
        component: () => import("@/views/error-page/404.vue"),
        meta: { hidden: true },
      },
    ],
  },

  // 外部链接
  // {
  //   path: "/external-link",
  //   component: Layout,
  //   children: [ {
  //       component: () => import("@/views/external-link/index.vue"),
  //       path: "https://www.cnblogs.com/haoxianrui/",
  //       meta: { title: "外部链接", icon: "link" },
  //     },
  //   ],
  // },
  // 多级嵌套路由
  /* {
         path: '/nested',
         component: Layout,
         redirect: '/nested/level1/level2',
         name: 'Nested',
         meta: {title: '多级菜单', icon: 'nested'},
         children: [
             {
                 path: 'level1',
                 component: () => import('@/views/nested/level1/index.vue'),
                 name: 'Level1',
                 meta: {title: '菜单一级'},
                 redirect: '/nested/level1/level2',
                 children: [
                     {
                         path: 'level2',
                         component: () => import('@/views/nested/level1/level2/index.vue'),
                         name: 'Level2',
                         meta: {title: '菜单二级'},
                         redirect: '/nested/level1/level2/level3',
                         children: [
                             {
                                 path: 'level3-1',
                                 component: () => import('@/views/nested/level1/level2/level3/index1.vue'),
                                 name: 'Level3-1',
                                 meta: {title: '菜单三级-1'}
                             },
                             {
                                 path: 'level3-2',
                                 component: () => import('@/views/nested/level1/level2/level3/index2.vue'),
                                 name: 'Level3-2',
                                 meta: {title: '菜单三级-2'}
                             }
                         ]
                     }
                 ]
             },
         ]
     }*/
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/login" });
}

export default router;
