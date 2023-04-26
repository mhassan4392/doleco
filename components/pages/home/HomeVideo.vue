<template>
  <div class="rounded-lg mb-2 overflow-hidden">
    <video height="240" controls>
      <source :src="home_video" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
import home_video from "~/assets/videos/1.mp4";
</script>
