import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "./views/LoginPage.vue";
import DiaryMain from "./views/DiaryMain.vue";
import DiaryList from "./views/DiaryList.vue";
import WriteDiary from "./views/WriteDiary";
import diaryDetail from "./views/DiaryDetail";

Vue.use(VueRouter);

export const router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: LoginPage,
    },
    {
      path: "/diary",
      component: DiaryMain,
      children : [
        {
          path:":id",
          name : 'detail',
          component :diaryDetail,
          props:true
        },
        {
          path:"list",
          name:"list",
          component :DiaryList
        },
        {
          path:"write",
          name:"write",
          component :WriteDiary
        },
      ]
    },

  ],
});