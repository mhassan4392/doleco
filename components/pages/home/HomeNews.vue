<template>
  <div class="text-white my-5">
    <div class="flex items-center justify-between mb-2">
      <h1 class="text-lg border-l-4 border-white leading-none pl-3">News</h1>
      <NuxtLink to="/news" class="text-xs"
        >More <van-icon name="arrow"
      /></NuxtLink>
    </div>
    <div class="grid grid-cols-2">
      <NuxtLink
        to="/news"
        class="border-b border-white border-opacity-50 px-2 py-3 space-y-3"
        v-for="news in 6"
        :key="news"
      >
        <img
          src="~/assets/images/pages/home/news.jpg"
          :style="{ aspectRatio: '2/1.3' }"
          class="rounded-lg"
          alt=""
        />
        <p class="text-xs text-center">How to make money in Dole plc?</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
