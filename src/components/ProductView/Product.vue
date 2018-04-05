<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol  class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">{{ breadcrumbArray[0] }}</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
    <div class="row">
      <div v-for="(item, index) in product" :key="index" class="col-sm-4">
        <figure class="figure">
          <img :src="item.url" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
          <figcaption class="figure-caption">A caption for the above image.</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      breadcrumbArray: [],
      product: [
        {
          id: 0,
          Name: '貓',
          url: 'http://25.media.tumblr.com/tumblr_m3hpgn294g1qzr98mo1_500.jpg',
        },
        {
          id: 1,
          Name: '貓1',
          url: 'http://25.media.tumblr.com/tumblr_los3ueU00y1qeycrwo1_500.jpg',
        },
        {
          id: 2,
          Name: '貓2',
          url: 'http://25.media.tumblr.com/tumblr_lsquajtF1t1qbe5pxo1_500.jpg',
        },
        {
          id: 3,
          Name: '貓3',
          url: 'http://25.media.tumblr.com/tumblr_lzz8n8xqow1qawy7po1_1280.jpg',
        },
        {
          id: 4,
          Name: '貓4',
          url: 'http://25.media.tumblr.com/tumblr_lel3j013az1qcn249o1_400.gif',
        },
      ],
    };
  },
  // beforeRouteUpdate (to, from, next) { // 沒有抓到這兩種事件
  //   debugger;
  //   next();
  // },
  // watch: {
  //   '$route' (to, from) {
  //     debugger;
  //   }
  // },
  created() {
    this.breadcrumbArray.push(this.$route.name);
  }
};
</script>

<style scoped>

</style>
