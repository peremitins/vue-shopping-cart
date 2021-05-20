<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in cart" :key="item.id">
        <button @click="removeItem(item.id)" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="media">
          <img :src="item.imgUrl" class="mr-3" width="80px" alt="item.title">
          <div class="media-body">
            <h5 class="mt-0">{{ item.title }}</h5>
            <button @click="reduceQty(item.id)" class="btn btn-qty btn-sm btn-secondary">-</button>
            x {{ item.qty }}
            <button @click="addQty(item.id)" class="btn btn-qty btn-sm btn-secondary">+</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["cart"])
  },
  methods: {
    ...mapActions(["addQty", "reduceQty", "removeItem"])
  }
}
</script>
<style scoped>
  .btn-qty {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
</style>