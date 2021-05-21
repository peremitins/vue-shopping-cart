import Vue from 'vue';
import Vuex from 'vuex';
import products from '../mock/product.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    products: [],
    cart: JSON.parse(localStorage.getItem('storageCart')) || []
  },
  getters: {
    products: state => state.products,
    cart: state => state.cart
  },
  actions: {
    getProducts({ commit }) {
      commit('getProductData');
    },
    addToCart({ commit }, item) {
      commit("addItemToCart", item);
    },
    addQty({ commit }, id) {
      commit('addQty', id);
    },
    reduceQty({ commit }, id) {
      commit('reduceQty', id);
    },
    removeItem({ commit }, id) {
      commit('removeItem', id);
    },
    emptyCart({ commit }) {
      commit('emptyCart');
    },
    saveCart({ commit }) {
      commit('saveCart');
    }
  },
  mutations: {
    getProductData(state) {
      state.products = products;
    },
    addItemToCart(state, item) {
      const addedItem = state.cart.find(product => product.id === item.id);
      if (addedItem) {
        addedItem.qty++;
      } else {
        state.cart.push({...item, qty: 1});
      }
    },
    addQty(state, id) {
      const currentItem = state.cart.find(product => product.id === id);
      currentItem.qty++;
    },
    reduceQty(state, id) {
      const currentItem = state.cart.find(product => product.id === id);
      if (currentItem.qty > 1) {
        currentItem.qty--;
      } else {
        state.cart = state.cart.filter(item => item.id !== id);
      }
    },
    removeItem(state, id) {
      state.cart = state.cart.filter(item => item.id !== id);
    },
    emptyCart(state) {
      state.cart = [];
    },
    saveCart(state) {
      localStorage.setItem('storageCart', JSON.stringify(state.cart));
    }
  }
})