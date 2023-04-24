<template>
  <div class="flex flex-col h-full">
    <PageHeader title="News" back-route="/" />
    <div class="grow h-full overflow-auto py-2 space-y-3 px-3 bg-[#f6f6f6]">
      <div v-for="(news, i) in 8">
        <NewsWidget />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "~/components/pages/PageHeader.vue";
import NewsWidget from "~/components/pages/news/NewsWidget.vue";
</script>
