<template>
  <div class="">
    <div
      class="flex flex-col items-center justify-center space-y-1 text-white pt-5"
    >
      <img
        :src="profile"
        :style="{ width: '69px' }"
        class="rounded-full"
        alt=""
      />
      <p class="text-lg">918882100629</p>
      <p>ID: 140645</p>
    </div>
  </div>
</template>

<script setup>
import profile from "~/assets/images/common/profile.jpeg";
</script>
