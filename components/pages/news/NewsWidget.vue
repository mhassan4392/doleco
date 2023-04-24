<template>
  <NuxtLink
    to="/news/1"
    class="flex justify-between bg-white rounded p-2 text-sm"
  >
    <div class="flex flex-col justify-between">
      <h2>Our History</h2>
      <p>17/2/2021</p>
    </div>
    <van-image :src="news_image" :style="{ width: '115px' }" />
  </NuxtLink>
</template>

<script setup>
import news_image from "~/assets/images/pages/news/news.jpg";
</script>
