<template>
  <div class="bg-[#00000066] p-2 rounded-lg text-white space-y-1">
    <img :src="product_image" class="rounded-lg" />
    <h2 class="font-medium">Banana</h2>
    <p class="text-xs">Price: <span class="text-primary">₹550.00</span></p>
    <p class="text-xs">Term: <span class="text-primary">45 days</span></p>
    <p class="text-xs">
      Daily Income: <span class="text-primary">₹22.55</span>
    </p>
    <p class="text-xs">
      Total Revenue: <span class="text-primary">₹1014.75</span>
    </p>

    <div class="h-3 w-full bg-white rounded-full !my-2"></div>
    <NuxtLink
      to="/product/1"
      class="bg-primary text-white rounded-lg py-1.5 w-full flex items-center justify-center font-medium"
    >
      View Project
    </NuxtLink>
  </div>
</template>

<script setup>
import product_image from "../../../assets/images/pages/product/product.jpg";
</script>
