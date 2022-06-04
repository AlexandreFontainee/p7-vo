import { createRouter, createWebHistory } from "vue-router"; 
import LogIn from '@/views/LogIn.vue';
import ProfilHome from '@/views/ProfilHome';
import signUp from '@/views/SignUp.vue';
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
      }
     
        
    ];

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

 export default router;
