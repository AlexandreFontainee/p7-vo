import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
createApp(App).mount('#app')


const Home = {template: '<div id= "ProfilConnard"></div>'};

const routes = [
    {path: '/', component: Home}
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  const app = Vue.createApp({})
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router)
  
  app.mount('#app')