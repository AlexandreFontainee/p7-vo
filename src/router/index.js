import { createRouter, createWebHistory } from "vue-router"; 
import SignUpVue from '@/SignUp.vue';
import LogiN from '@/LogIn.vue';
import ProfilHome from '@/ProfilHome.vue';

   const routes = [
        {
            name: 'SignUp',
            path: '/signup',
            component: SignUpVue,
        },
        {
            name: 'LogiN',
            path: '/Login',
            component: LogiN,
        },
        {
            name: 'Profil',
            path: '/Profil',
            component: ProfilHome ,
        },
        
    ];

    const router = createRouter({
        history: createWebHistory(),
        routes,
    })

 export default router;
