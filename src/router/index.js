import Vue from 'vue';
import Router from 'vue-router';
import ProductView from '@/pages/ProductView';
import Product from '@/components/ProductView/Product';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductView',
      component: ProductView,
      children: [
        {
          path: 'product',
          name: 'Product',
          component: Product,
        },
        {
          path: 'helloword',
          name: 'HelloWorld',
          component: HelloWorld,
        },
      ],
    },
  ],
});
