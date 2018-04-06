<template>
  <div>
    <div class="row">
      <div v-for="(item, index) in product" :key="index" class="col-sm-4">
        <figure class="figure">
          <img :src="item.url" class="figure-img img-fluid rounded"
            alt="A generic square placeholder image with rounded corners in a figure.">
          <figcaption class="figure-caption">{{ item.id }}</figcaption>
          <figcaption class="figure-caption">{{ item.name }}</figcaption>
        </figure>
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
