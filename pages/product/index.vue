<template>
  <div>
    <van-tabs v-model:active="active">
      <van-tab v-for="(tab, i) in tabs" :title="tab">
        <div class="grid grid-cols-2 gap-3 my-3 mx-3">
          <div v-for="(product, i) in 4" :key="i">
            <ProductsWidget />
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <p class="text-center py-3 text-white">No More</p>
  </div>
</template>

<script setup>
import ProductsWidget from "../../components/pages/product/ProductsWidget.vue";
const tabs = ref(["fruit area"]);
const active = ref(0);

definePageMeta({
  layout: "tabs",
});
</script>

<style></style>
