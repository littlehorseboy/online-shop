<template>
  <div>
    <div class="row">
      <div v-for="(item, index) in product" :key="index" class="col-sm-6 col-md-4 mb-2">
        <div class="card text-center">
          <img :src="item.url" class="card-img-top"
            alt="商品圖片">
          <div class="card-body">
            <h5 class="card-title">商品名稱</h5>
            <p class="card-text"><small class="text-muted">{{ item.name }}</small></p>
            <p class="card-text"><small class="text-muted">賣 {{ item.id }} 塊</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Product',
  data() {
    return {
      breadcrumbArray: [],
    };
  },
  computed: {
    ...mapGetters({
      product: 'getProducts',
    }),
  },
  created() {
    this.breadcrumbArray.push(this.$route.name);
  },
};
</script>

<style scoped>

</style>
