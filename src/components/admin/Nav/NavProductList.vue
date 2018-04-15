<template>
  <div class="d-flex w-100">

    <a @click="setProductsSearchListId(item.id)" v-show="!editMode"
      class="col list-group-item-action">
      {{ item.title }}
    </a>

    <div v-show="editMode" class="input-group input-group-sm">
      <input v-model="updateProductList" class="form-control form-control" placeholder="修改類別">
      <div class="input-group-append">
        <button @click="updateProductListFunc(item.id)"
          class="btn btn-sm btn-outline-secondary" type="button">
          <span class="oi oi-check"></span>
        </button>
        <button @click="cancelEdit" class="btn btn-sm btn-outline-secondary" >
          <span class="oi oi-x"></span>
        </button>
      </div>
    </div>

    <button @click="toggleEditMode" v-show="!editMode" class="btn btn-sm btn-outline-secondary">
      <span class="oi oi-pencil"></span>
    </button>

    <button v-show="!editMode" class="btn btn-sm btn-outline-secondary" >
      <span class="oi oi-x"></span>
    </button>

  </div>
</template>

<script>
export default {
  name: 'NavProductList',
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      updateProductList: '',
      editMode: false,
    };
  },
  computed: {

  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
      this.updateProductList = this.item.title;
    },

    cancelEdit() {
      this.editMode = !this.editMode;
    },

    updateProductListFunc(id) {
      this.$store.dispatch('updateProductListTitle',
        { key: id, update: this.updateProductList }
      );
      this.editMode = !this.editMode;
    },
  },

  watch: {

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
