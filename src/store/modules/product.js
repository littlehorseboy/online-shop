const types = {
  PRODUCTS_SEARCH_LISTID: 'PRODUCTS_SEARCH_LISTID',
  PRODUCTS_SEARCH_DETAILSID: 'PRODUCTS_SEARCH_DETAILSID',
};

const state = {
  products: [
    {
      id: 0,
      name: '貓',
      url: 'http://25.media.tumblr.com/tumblr_m3hpgn294g1qzr98mo1_500.jpg',
      productListId: 0,
      productDetailsId: 0,
    },
    {
      id: 1,
      name: '貓1',
      url: 'http://25.media.tumblr.com/tumblr_los3ueU00y1qeycrwo1_500.jpg',
      productListId: 0,
      productDetailsId: 1,
    },
    {
      id: 2,
      name: '貓2',
      url: 'http://25.media.tumblr.com/tumblr_lsquajtF1t1qbe5pxo1_500.jpg',
      productListId: 1,
      productDetailsId: 1,
    },
    {
      id: 3,
      name: '貓3',
      url: 'http://25.media.tumblr.com/tumblr_lzz8n8xqow1qawy7po1_1280.jpg',
      productListId: 0,
      productDetailsId: 2,
    },
    {
      id: 4,
      name: '貓4',
      url: 'http://24.media.tumblr.com/tumblr_m4mnvamXq41r6jd7fo1_500.jpg',
      productListId: 1,
      productDetailsId: 1,
    },
    {
      id: 5,
      name: '貓5',
      url: 'http://24.media.tumblr.com/tumblr_m7blgzadlw1qzex9io1_1280.jpg',
      productListId: 0,
      productDetailsId: 1,
    },
    {
      id: 6,
      name: '貓6',
      url: 'http://25.media.tumblr.com/tumblr_lm6pq3VUhm1qdvbl3o1_1280.jpg',
      productListId: 0,
      productDetailsId: 0,
    },
  ],
  productList: [
    {
      id: 0,
      title: '最新上架商品',
      productDetails: [
        {
          id: 0,
          productName: '電視',
        },
        {
          id: 1,
          productName: '冰箱',
        },
        {
          id: 2,
          productName: '電風扇',
        },
      ],
      show: true,
    },
    {
      id: 1,
      title: '熱門商品',
      productDetails: [
        {
          id: 0,
          productName: '螢幕',
        },
        {
          id: 1,
          productName: '主機板',
        },
        {
          id: 2,
          productName: '顯示卡',
        },
      ],
      show: true,
    },
  ],
  search: {
    productListId: null,
    productDetailsId: null,
  },
};

const getters = {
  getProducts: (state) => {
    let tempProducts = state.products;

    if (state.search.productListId !== null) {
      tempProducts = tempProducts.filter(item => item.productListId === state.search.productListId);
    }

    if (state.search.productDetailsId !== null) {
      tempProducts = tempProducts.filter(item => item.productDetailsId === state.search.productDetailsId);
    }

    return tempProducts;
  },
  getProductLists: state => state.productList,
};

const actions = {
  productsSearchListId({ commit }, listId) {
    commit(types.PRODUCTS_SEARCH_LISTID, listId);
  },
  productsSearchDetailsId({ commit }, detailsId) {
    commit(types.PRODUCTS_SEARCH_DETAILSID, detailsId);
  },
};

const mutations = {
  [types.PRODUCTS_SEARCH_LISTID](state, listId) {
    state.search.productListId = listId;
  },
  [types.PRODUCTS_SEARCH_DETAILSID](state, detailsId) {
    state.search.productDetailsId = detailsId;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
