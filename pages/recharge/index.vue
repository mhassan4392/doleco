<template>
  <div class="flex flex-col h-full">
    <PageHeader
      title="Recharge"
      right-text="Records"
      right-route="/recharge/record"
    />
    <div class="grow overflow-y-auto px-3">
      <h2 class="text-lg font-semibold my-2">Balance: 0.00</h2>
      <h2 class="text-lg font-semibold mb-3">Amount</h2>

      <van-field
        class="!bg-transparent !border !border-white !rounded-lg placeholder:!text-red-500 mb-4 recharge-amount-field"
        v-model="amount"
        placeholder="Please Enter the amount"
      />

      <div class="grid grid-cols-3 gap-4 mb-8">
        <div
          v-for="(a, i) in amounts"
          :key="i"
          class="border border-black rounded-lg p-2 text-lg font-medium flex items-center justify-center cursor-pointer"
          :class="[a == amount ? 'text-white !border-white' : '']"
          @click="amount = a"
        >
          {{ a }}
        </div>
      </div>

      <h3 class="text-lg font-semibold mb-1">Payment channel</h3>
      <div class="bg-[#0000004d] rounded-lg !p-0">
        <van-radio-group v-model="checked" class="!p-0">
          <van-cell-group inset class="!bg-transparent !px-0 !mx-0">
            <van-cell
              @click="checked = i"
              v-for="(c, i) in checks"
              :key="i"
              :title="c"
              title-class="pl-2 !text-white"
              size="large"
              class="!bg-transparent cursor-pointer"
            >
              <template #icon>
                <van-image width="22.5px" :src="currency_icon" />
              </template>
              <template #right-icon>
                <van-radio :name="i" checked-color="#ffa653" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>

      <div class="mx-8 my-5">
        <van-button
          class="!bg-secondary !text-white !font-semibold !border-secondary !rounded-lg !w-full !text-xl !h-16"
        >
          Submit
        </van-button>
      </div>

      <h3 class="text-xl font-semibold mb-3">
        New Member Recharge Tutorial Guide:
      </h3>

      <div class="rounded-lg mb-2 overflow-hidden">
        <video width="100%" height="100%" controls>
          <source :src="recharge_video" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "~/components/pages/PageHeader.vue";
import currency_icon from "~/assets/images/common/currency-icon.png";
import recharge_video from "~/assets/videos/2.mp4";
const amount = ref("");
const amounts = ref([550, 3350, 7750, 16500]);
const checked = ref(1);
const checks = ["Upi--HR", "Ptm-Sun", "Paytm-All", "Upi-Sun"];
</script>

<style>
.recharge-amount-field .van-field__control {
  @apply placeholder:!text-gray-600 !text-white;
}
</style>
