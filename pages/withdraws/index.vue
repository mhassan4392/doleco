<template>
  <div class="flex flex-col h-full">
    <PageHeader
      title="Withdraws"
      right-text="Records"
      right-route="/withdraws/record"
    />
    <div class="grow overflow-y-auto px-3">
      <div class="my-3 flex items-center space-x-2">
        <h3 class="font-semibold">Balance: 0.00</h3>
        <van-button
          class="!bg-[#ee0a24] !text-white !px-3 !py-1 !border-[#ee0a24] !h-6 !text-xs"
          >All</van-button
        >
      </div>
      <h3 class="font-semibold mb-1">Bank Account</h3>

      <van-cell-group inset class="!mx-0">
        <van-cell
          v-for="(b, i) in bank"
          :key="i"
          :title="b.title"
          :value="b.value"
        ></van-cell>
      </van-cell-group>

      <h3 class="font-semibold my-2">Amount</h3>
      <van-field
        class="!bg-transparent !border !border-white !rounded-lg placeholder:!text-red-500 mb-4 withdraws-amount-field"
        v-model="amount"
        placeholder="Please Enter the amount"
      />

      <h3 class="font-semibold my-2">Password</h3>
      <van-field
        class="!bg-transparent !border !border-white !rounded-lg placeholder:!text-red-500 mb-4 withdraws-amount-field"
        v-model="password"
        placeholder="Please Enter Password"
      />

      <div class="mx-5 my-5">
        <van-button
          class="!bg-secondary !text-white !border-secondary !rounded-full !h-12 !w-full !text-lg"
          >Submit</van-button
        >
      </div>
    </div>
  </div>
  <WithdrawsModal />
</template>

<script setup>
import WithdrawsModal from "~/components/pages/withdraws/WithdrawsModal.vue";
import PageHeader from "~/components/pages/PageHeader.vue";

const amount = ref("");
const password = ref("");

const bank = ref([
  { title: "Bank", value: "HDFC Bank" },
  { title: "Realname", value: "Akash" },
  { title: "Account", value: "9897875565" },
  { title: "IFSC", value: "FDRL0005" },
]);
</script>

<style>
.withdraws-amount-field .van-field__control {
  @apply placeholder:!text-gray-600 !text-white;
}
</style>
