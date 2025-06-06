// 文件：index.js  
// 初始版本由余文建在 2023-03-20 创建，该项功能为创建vue页面路由
import { createRouter, createWebHashHistory } from "vue-router";
import { ElMessage } from 'element-plus';
import api from '@/api/user.js'

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/rootlogin",
    name: "rootlogin",
    component: () =>
      import(/* webpackChunkName: "loginPlus" */ "../views/loginPlus.vue"),
  },
  {
    path: "/warehouse",
    name: "warehouse",
    component: () =>
      import(/* webpackChunkName: "warehouse" */ "../views/warehouse.vue"),
  },
  {
    path: "/market",
    name: "market",
    component: () =>
      import(/* webpackChunkName: "market" */ "../views/market.vue"),
  },
  {
    path: '/transition',
    name: 'transition',
    component: () =>
      import(/* webpackChunkName: "animation" */ "../components/animation/animation.vue"),
    meta: { index: 0 },
  },
  {
    path: "/index",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "showIndex" */ "../views/showIndex.vue"),
    meta: { index: 1 },
  },
  {
    path: "/main",
    name: "main",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/main.vue"),
    meta: { index: 2 },
  },
  {
    path: "/allCard",
    name: "allCard",
    component: () =>
      import(/* webpackChunkName: "allCard" */"../views/allCard.vue"),
    meta: { index: 3 },
  },
  {
    path: "/details/:name",
    name: "details",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/details.vue"),
    meta: { index: 4 },
  },
  {
    path: "/sale/:name/:ref",
    name: "sale",
    component: () =>
      import(/* webpackChunkName: "sale" */ "../views/sale.vue"),
  },

  {
    path: "/rootindex",
    name: "rootindex",
    redirect: '/rootindex/index',
    component: () => import("../views/rootindex.vue"),
    children: [
      {
        path: 'index',
        component: () => import("../components/root/index.vue"),
      },
      {
        path: 'userInformation',
        name: "userInformation",
        component: () => import("../components/root/userInformation.vue"),
        meta: {
          showFather: false,
        },
      },
      {
        path: 'addCard',
        name: "addCard",
        meta: {
          showFather: false,
        },
        component: () => import("../components/root/addCard.vue")
      },
      {
        path: 'cardOwner',
        name: "cardOwner",
        meta: {
          showFather: false,
        },
        component: () => import("../components/root/cardOwner.vue")
      },
      {
        path: 'buyList',
        name: "buyList",
        meta: {
          showFather: false,
        },
        component: () => import("../components/root/buyList.vue")
      },
    ]
  },
  {
    path: "/agreement",
    name: "agreement",
    component: () =>
      import(/* webpackChunkName: "agreement" */ "../components/agreement.vue"),
  },
  {
    path: "/payLoading",
    name: "payLoading",
    component: () =>
      import(/* webpackChunkName: "payLoading" */ "../components/payLoading.vue"),
  },
  {
    path: "/game",
    name: "game",
    component: () =>
      import(/* webpackChunkName: "game" */ "../views/game.vue"),
  },

  {
    path: '/undefined',
    redirect: '/index'
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }

});


router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/register' || to.path === '/rootlogin'|| to.path === '/game' || to.path.includes('/rootindex')) {
    return next()
  } else {
    api.getSession().then(res => {
      const tokenStr = res.data
      if (res.data == 0) {
        ElMessage.error("登录过期，请重新登录")
        return next('/login')
      } else {
        next()
      }
    })
  }

})

export default router;
