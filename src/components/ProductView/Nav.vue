<template>
  <div>
    <div v-for="(item, index) in productList" :key="index">
      <div class="d-flex mb-1">
        <a class="col list-group-item-action" @click="setProductsSearchListId(item.id)">
          {{ item.title }}
        </a>
        <button type="button" class="btn btn-sm btn-outline-secondary"
          @click="toggleShow(item.id, item.show)">
          <!--<span class="oi" :class="[ { 'oi-caret-bottom': item.show, 'oi-caret-top': !item.show } ]"></span>-->
          <span class="oi" :class="[ item.show ? 'oi-caret-bottom' : 'oi-caret-top' ]"></span>
          <span class="sr-only"></span>
        </button>
      </div>
      <transition name="router-anim">
        <div class="list-group list-group-flush" v-show="item.show">
          <a class="list-group-item list-group-item-action" @click="setProductsSearchDetailsId(item.id, detail.id)"
            v-for="(detail, index) in item.productDetails" :key="index">
            {{ detail.productName }}
          </a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Nav',
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      productList: 'getProductLists',
    }),
  },
  methods: {
    toggleShow(id, value) {
      const vm = this;
      if (value) {
        const o = vm.productList.find(obj => obj.id === id);
        o.show = false;
      } else {
        const o = vm.productList.find(obj => obj.id === id);
        o.show = true;
      }
    },

    setProductsSearchListId(value) {
      this.$router.push({ name: 'Product'});
      this.$store.dispatch('productsSearchListId', value);
      this.$store.dispatch('productsSearchDetailsId', null);
    },

    setProductsSearchDetailsId(ListId, DatailId) {
      this.$router.push({ name: 'Product'});
      this.$store.dispatch('productsSearchListId', ListId);
      this.$store.dispatch('productsSearchDetailsId', DatailId);
    },
  },
};
</script>

<style scoped>
  .list-group-item-action:hover {
    cursor: pointer;
  }
</style>
