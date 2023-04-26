<template>
  <div class="h-screen bg-primary overflow-hidden w-screen">
    <div class="h-full max-width relative !mx-auto">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Crystal",
  meta: [{ name: "description", content: "My amazing site." }],
});
</script>

<style>
.max-width {
  @apply !max-w-[640px];
}

/* .van-overlay,
.van-popup {
  @apply !max-w-[650px] !mx-auto;
  left: auto;
  right: 0;
} */

.van-tabs__nav {
  @apply !bg-primary;
}

.van-tabs__line {
  @apply !bg-white;
}

.van-tab__text {
  @apply !text-black !font-thin;
}

.van-tab--active .van-tab__text {
  @apply !text-white !font-thin;
}
</style>
