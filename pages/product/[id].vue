import ProductHeader from '~/components/pages/product/ProductHeader.vue';

<template>
  <div class="h-full flex flex-col overflow-hidden">
    <ProductHeader />
    <div class="grow overflow-auto pb-16">
      <ProductWidget />
    </div>
  </div>
  <ProductBuyButton />
</template>

<script setup>
import ProductHeader from "~/components/pages/product/ProductHeader.vue";
import ProductBuyButton from "~/components/pages/product/ProductBuyButton.vue";
import ProductWidget from "~/components/pages/product/ProductWidget.vue";
</script>
