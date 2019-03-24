import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Index
    },
  ]
});
