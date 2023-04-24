<template>
  <div class="px-4 py-1 bg-white fixed right-0 left-0 bottom-0">
    <van-button
      @click="() => (show = !show)"
      class="!bg-secondary !text-lg !text-white font-medium w-full !rounded-lg"
    >
      Buy Now
    </van-button>

    <van-popup v-model:show="show" position="bottom">
      <div class="py-2 px-3">
        <div class="flex justify-end">
          <van-icon
            name="cross"
            class="!text-xl !text-light"
            @click="() => (show = false)"
          />
        </div>
        <div class="grid grid-cols-2 bg-primary p-2 rounded-lg text-white">
          <div class="flex flex-col items-center justify-center">
            <p class="text-sm">Balance Wallet</p>
            <p class="text-xs">0.00</p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="text-sm">Recharge Wallet</p>
            <p class="text-xs">0.00</p>
          </div>
        </div>

        <div class="py-3">
          <van-cell title="Price">
            <p class="text-[#fa5151]">₹550.00</p>
          </van-cell>
          <van-cell title="Total">
            <p class="text-[#fa5151]">₹550.00</p>
          </van-cell>
          <van-cell title="Coupon">
            <select
              class="border border-[#00cdf2] text-[#00cdf2] text-xs py-1 outline-none"
            >
              <option value="">Choose an option</option>
            </select>
          </van-cell>
        </div>

        <div class="mx-5">
          <van-button class="!w-full !bg-[#013d7d] !text-white !rounded-lg"
            >Confirm</van-button
          >
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
const show = ref(false);
</script>
