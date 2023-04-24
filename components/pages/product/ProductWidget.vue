<template>
  <div class="mx-3 space-y-3">
    <van-swipe
      class="rounded-lg overflow-hidden"
      :autoplay="2000"
      indicator-color="black"
    >
      <van-swipe-item v-for="slide in 3" :key="slide">
        <van-image :src="product_image" />
      </van-swipe-item>
    </van-swipe>

    <div class="bg-[#00000066] p-2 rounded-lg text-white">
      <h2 class="text-center text-lg font-semibold">Banana</h2>
      <div class="grid grid-cols-3 gap-3 mt-2">
        <div class="flex flex-col items-center justify-center">
          <p class="text-primary">₹550.00</p>
          <p class="text-sm">Price</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-primary">45 Days</p>
          <p class="text-sm">Term</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-primary">₹22.55</p>
          <p class="text-sm">Daily Income</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-primary">₹1014.75</p>
          <p class="text-sm">Total Revenue</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-primary">184.5%</p>
          <p class="text-sm">Daily Rate</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-primary">1</p>
          <p class="text-sm">Quantity Limit</p>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-lg p-3 text-light text-sm">
      <h3 class="text-black font-semibold">Project Description</h3>
      <p class="leading-6">
        Start to join the Dole plc (banana variety) project, and our
        professionals will form a series of service structures from
        planting-purchasing-importing-packaging-transportation-marketing to sell
        our high-quality fresh fruit and vegetable products in bulk to global
        consumers and fruit and vegetable distributors. Get Profit 💸💸💸
      </p>
      <p class="leading-6">banana variety</p>
      <p class="leading-6">
        1: [Banana-₹550] planting project, daily income 22.55rs, project cycle
        45 days, total income 1014.75rs 💰💰💰<br /><br />2: Invite a new member
        to join [Banana-₹550], you can get 100rs invitation bonus, and at the
        same time get the member's commission income: 22.55*10%*45=₹101.47<br />
      </p>
    </div>
  </div>
</template>

<script setup>
import product_image from "~/assets/images/pages/product/product.jpg";
</script>
