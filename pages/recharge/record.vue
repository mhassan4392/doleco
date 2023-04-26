<template>
  <div class="h-full flex flex-col">
    <PageHeader title="Recharge Records" />

    <div class="p-5 grow overflow-y-auto">
      <table class="w-full my-3">
        <thead>
          <tr>
            <td class="text-center">Time</td>
            <td class="text-center">Amount</td>
            <td class="text-center">Status</td>
            <td class="text-center">Details</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in 15">
            <td
              class="text-center py-3 border-b border-secondary border-opacity-70 text-sm"
            >
              04-14 13:46:16
            </td>
            <td
              class="text-center py-3 border-b border-secondary border-opacity-70 text-sm"
            >
              550
            </td>
            <td
              class="text-center py-3 border-b border-secondary border-opacity-70 text-sm"
            >
              Waiting Payment
            </td>
            <td
              class="text-center py-3 border-b border-secondary border-opacity-70 text-sm"
            >
              <van-button
                is-link
                to="/payinfo/1"
                class="!bg-secondary !border-secondary !text-white !text-xs !h-6 !w-10"
                >View</van-button
              >
            </td>
          </tr>
        </tbody>
      </table>
      <p class="my-3 text-sm text-white text-center">No More</p>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "~/components/pages/PageHeader.vue";
</script>
