<template>
  <div>
    <div v-for="(item, index) in productList" :key="index">
      <div class="clearfix">
        <h5 class="mr-2 mb-3 float-left">{{ item.title }}</h5>
        <button type="button" class="btn btn-sm btn-outline-secondary float-right" @click="toggleNavLiShow(item.id, item.show)">
          <!--<span class="oi" :class="[ { 'oi-caret-bottom': item.show, 'oi-caret-top': !item.show } ]"></span>-->
          <span class="oi" :class="[ item.show ? 'oi-caret-bottom' : 'oi-caret-top' ]"></span>
          <span class="sr-only"></span>
        </button>
      </div>
      <transition name="router-anim">
        <ul class="list-group list-group-flush" v-show="item.show">
          <li class="list-group-item" v-for="(detail, index) in item.productDetails" :key="index">
            {{ detail.productName }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      navLiShow: true,
      productList: [
        {
          id: 0,
          title: '最新上架商品',
          productDetails: [
            {
              productName: '電視',
            },
            {
              productName: '冰箱',
            },
            {
              productName: '電風扇',
            },
          ],
          show: true,
        },
        {
          id: 1,
          title: '最新上架商品',
          productDetails: [
            {
              productName: '電視',
            },
            {
              productName: '冰箱',
            },
            {
              productName: '電風扇',
            },
          ],
          show: true,
        },
      ],
    };
  },
  methods: {
    toggleNavLiShow(id, value) {
      const vm = this;
      if (value) {
        const o = vm.productList.find((obj) => {
          return obj.id === id;
        });
        o.show = false;
      } else {
        const o = vm.productList.find((obj) => {
          return obj.id === id;
        });
        o.show = true;
      }
    },
    NavLiShowIcon(value) {
      if (value) {

      } else {

      }
    },
  },
};
</script>

<style scoped>

</style>
