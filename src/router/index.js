import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
//Componentes
import h from '@/components/Componentes/init';
import btn from '@/components/Componentes/css/botones';
import alert from '@/components/Componentes/css/alert';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/css',
      name: 'css',
      component: h,
      children: [
        {
           path: '/css/btn',

           component: btn,
        },
        {
           path: '/css/alert',
           component: alert,
        }

      ]
      
    }
  ],
});
