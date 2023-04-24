<template>
  <div class="bg-white rounded-lg py-3 auth-form">
    <van-field
      v-model="phone"
      type="number"
      placeholder="Please Type Phone Number"
    >
      <template #left-icon>
        <div class="flex items-start">
          <van-image :src="phone_icon" width="40px" />
          <p class="mx-2">+ 91</p>
          <div class="w-[2px] mt-1 h-4 bg-light mr-2"></div>
        </div>
      </template>
    </van-field>

    <van-field
      v-model="password"
      type="password"
      placeholder="Please Type Your Password"
    >
      <template #left-icon>
        <van-image :src="lock_icon" class="-mb-2.5" width="40px" />
      </template>
    </van-field>

    <van-field
      v-model="validCode"
      type="text"
      placeholder="Graphic Verification Code"
    >
      <template #left-icon>
        <van-image :src="shield_icon" class="-mb-2.5" width="40px" />
      </template>
      <template #button>
        <van-image :src="verification_code" width="90px" />
      </template>
    </van-field>

    <div class="px-5 my-3">
      <van-button
        class="!bg-secondary !border-secondary !text-white !text-lg !font-medium !w-full"
      >
        Sign In
      </van-button>
    </div>

    <div
      class="flex items-center justify-around text-xs text-[#666] mt-5 mb-3 px-5"
    >
      <NuxtLink to="/forgot"> Forgot Password ? </NuxtLink>
      <NuxtLink to="/register"> Register Now </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import phone_icon from "~/assets/images/auth/phone-icon.png";
import lock_icon from "~/assets/images/auth/lock-icon.png";
import shield_icon from "~/assets/images/auth/shield-icon.png";

import verification_code from "~/assets/images/auth/verification-code.png";
const phone = ref("");
const password = ref("");
const validCode = ref("");
definePageMeta({
  layout: "auth",
});
</script>

<style>
.auth-form .van-cell {
  @apply !pb-0;
}
</style>
