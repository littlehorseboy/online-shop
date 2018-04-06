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
      meta: {
        breadcrumb: '首頁',
      },
      children: [
        {
          path: 'product',
          name: 'Product',
          component: Product,
          meta: {
            breadcrumb: '產品',
          },
        },
        {
          path: 'helloword',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: {
            breadcrumb: 'HelloWorld',

          },
        },
      ],
    },
  ],
});
