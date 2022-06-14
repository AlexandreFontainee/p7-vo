import { createRouter, createWebHistory } from "vue-router"; 
import LogIn from '@/views/LogIn.vue';
import ProfilHome from '@/views/ProfilHome';
import signUp from '@/views/SignUp.vue';
import BasePage from '@/views/BasePage.vue';
import HomePage from '@/views/HomePage.vue';
   const routes = [
        
    {
        path: '/login',
        name: 'Login',
        component: LogIn,
      },

      {
        path: '/profile',
        name: 'profile',
        component: ProfilHome,
      },
      {
        path: '/signup',
        name: 'signUp',
        component: signUp,
      },
      {
        path: '/',
        name: 'BasePage',
        component: BasePage,
      },
      {
        path: '/homePage',
        name: 'HomePage',
        component: HomePage,
      },
     
        
    ];

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

 export default router;
