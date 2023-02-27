import Vue from "vue";
import VueRouter from "vue-router";
import RouterTest from "./views/RouterTest.vue";
import FinalRouterTest from "./views/FinalRouterTest.vue";


Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/router",
    },
    {
      path: "/router",
      component: RouterTest,
    },
    {
      path: "/final",
      component: FinalRouterTest,
    },

  ],
});


// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import RouterTest from './views/RouterTest.vue'


// // Vue와 VueRouter 연결
// Vue.use(VueRouter)
 
// export const router = new VueRouter({
//   base: "/",
//   mode: "history",

//     routes: [
//         {
//           path: '/routertest',
//           //name: 'home',
//           component: RouterTest,
         
//           // children: [
//           //   { path: '/final', component: FinalRouterTest},
         
//           //   ]
//         },
//         {
//           path: '/final', 
//           //name: 'about',
//           // route level code-splitting
//           // this generates a separate chunk (about.[hash].js) for this route
//           // which is lazy-loaded when the route is visited.
//           component: () => import(/* webpackChunkName: "about" */ './views/FinalRouterTest.vue')
//         },

//       ]

//  })

 




// // 라우트 객체 생성 VueRoter에 route를 등록하고 설정한다.
// const router = new VueRouter({
//     mode: 'history',
//     base:  process.env.BASE_URL,
//     routes : [
//         {
//             path : '/',
//             name : 'RouterTest',
//             component : RouterTest
//         },
//         {
//             path : '/finalRouterTest',
//             name : 'FinalRouterTest',
//             component : () =>import('../components/FinalRouterTest'),

//         }
//     ]

// })

// //설정한 VueRouter 내보내기
// export default router;

