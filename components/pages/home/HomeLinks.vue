<template>
  <div>
    <div class="flex items-center space-x-10 my-5">
      <NuxtLink
        class="grow flex items-center justify-center bg-red-500 text-white rounded-lg space-x-2"
        :style="{ height: '52px' }"
      >
        <img :src="recharge_icon" alt="" class="w-8" />
        <p class="text-lg font-semibold">Recharge</p>
      </NuxtLink>
      <NuxtLink
        class="grow flex items-center justify-center bg-green-700 text-white rounded-lg space-x-2"
        :style="{ height: '52px' }"
      >
        <img :src="withdraws_icon" alt="" class="w-8" />
        <p class="text-lg font-semibold">Withdraws</p>
      </NuxtLink>
    </div>
    <div class="grid grid-cols-4 gap-5">
      <NuxtLink
        v-for="(link, i) in links"
        :key="i"
        :to="link.route"
        class="flex flex-col items-center justify-start space-y-2"
      >
        <img
          :src="link.image"
          :style="{
            width: '67px',
          }"
          alt=""
        />
        <p class="text-xs text-white text-center">{{ link.title }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import recharge_icon from "../../../assets/images/pages/home/recharge-icon.png";
import withdraws_icon from "../../../assets/images/pages/home/withdraws-icon.png";

import gift_icon from "../../../assets/images/pages/home/gift-icon.png";
import invitation_icon from "../../../assets/images/pages/home/invitation-icon.png";
import teams_icon from "../../../assets/images/pages/home/teams-icon.png";
import projects_icon from "../../../assets/images/pages/home/projects-icon.png";
import service_icon from "../../../assets/images/pages/home/service-icon.png";
import download_icon from "../../../assets/images/pages/home/download-icon.png";
import money_icon from "../../../assets/images/pages/home/money-icon.png";
import check_icon from "../../../assets/images/pages/home/check-icon.png";

const links = ref([
  { title: "Gift Redemption", image: gift_icon, route: "/" },
  { title: "Invitation", image: invitation_icon, route: "/" },
  { title: "My Teams", image: teams_icon, route: "/" },
  { title: "My Projects", image: projects_icon, route: "/" },
  { title: "Customer Service", image: service_icon, route: "/" },
  { title: "App Download", image: download_icon, route: "/" },
  { title: "Money Making Tasks", image: money_icon, route: "/" },
  { title: "Check Ins", image: check_icon, route: "/" },
]);
</script>
