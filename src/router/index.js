import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import ProductView from '@/pages/ProductView';
import Product from '@/components/ProductView/Product';
import HelloWorld from '@/components/HelloWorld';
// backend
import AdminView from '@/pages/admin/AdminView';
// end backend
import store from '../store';

Vue.use(Router);

const router = new Router({
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
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/admin',
      name: 'AdminView',
      component: AdminView,
      meta: {
        // requiresAuth: true,
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

router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to =', to.fullPath, '| from =', from.fullPath);
  if (to.matched.some((record) => {
    console.log(record.name, record.meta.requiresAuth);
    return record.meta.requiresAuth;
  })) {
    console.log('token?', store.state.token);
    if (store.state.token === '') {
      // 轉跳到 Login Page
      alert('請先登入!');
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
