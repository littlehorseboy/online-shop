import Vue from 'vue';
import Vuex from 'vuex';

import { state, actions, mutations } from './root';

import product from './modules/product';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    product,
  },

  strict: true,
});
