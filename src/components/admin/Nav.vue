<template>
  <div>
    <div v-for="(item, index) in productList" :key="index">
      <div class="d-flex mb-1">

        <NavProductList :item="item"></NavProductList>

        <button type="button" class="btn btn-sm btn-outline-secondary ml-auto"
          @click="toggleShow(item.id, item.show)">
          <!--<span class="oi"
            :class="[ { 'oi-caret-top': item.show, 'oi-caret-bottom': !item.show } ]"></span>-->
          <span class="oi" :class="[ item.show ? 'oi-caret-top' : 'oi-caret-bottom' ]"></span>
          <span class="sr-only"></span>
        </button>

      </div>
      <transition name="router-anim">
        <div class="mb-2" v-show="item.show">
          <div class="d-flex my-2" v-for="(detail, index) in item.productDetails" :key="index">
            <a class="d-block border-top ml-3 col list-group-item-action"
              @click="setProductsSearchDetailsId(item.id, detail.id)">
              {{ detail.productName }}
            </a>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              <span class="oi oi-pencil"></span>
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              <span class="oi oi-x"></span>
            </button>
          </div>
        </div>
      </transition>
    </div>

    <!-- 新增類別 ProductList -->
    <div class="mb-2">
      <div class="input-group input-group-sm">
        <input v-model="newProductList" class="form-control form-control" placeholder="新增類別">
        <div v-show="newProductListBtn" class="input-group-append">
          <button @click="newProductListFunc" class="btn btn-outline-secondary" type="button">
            <span class="oi oi-check"></span>
          </button>
        </div>
      </div>
    </div>
    <!-- end 新增類別 ProductList -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavProductList from '../../components/admin/Nav/NavProductList';

export default {
  name: 'Nav',
  components: {
    NavProductList,
  },
  data() {
    return {
      newProductList: '',
      newProductListBtn: false,
    };
  },
  computed: {
    ...mapGetters({
      productList: 'getProductLists',
    }),
  },
  methods: {
    // 子項目選單開關
    toggleShow(id, value) {
      const vm = this;
      if (value) {
        this.$store.dispatch('toggleProductListDetails',
          { key: id, toggle: !value }
        );
      } else {
        this.$store.dispatch('toggleProductListDetails',
          { key: id, toggle: !value }
        );
      }
    },

    setProductsSearchDetailsId(ListId, DatailId) {
      this.$router.push({ name: 'Product' });
      this.$store.dispatch('productsSearchListId', ListId);
      this.$store.dispatch('productsSearchDetailsId', DatailId);
    },

    newProductListFunc() {
      this.$store.dispatch('insertProductList', this.newProductList);
      this.newProductList = '';
    },

  },

  watch: {
    newProductList(val) {
      if (val !== '') {
        this.newProductListBtn = true;
      } else {
        this.newProductListBtn = false;
      }
    },
  },
};
</script>

<style scoped>
  .list-group-item-action:hover {
    cursor: pointer;
    color: #888 !important;
  }

  .btn.btn-sm.btn-outline-secondary {
    padding: 0.1rem 0.3rem;
  }
</style>
