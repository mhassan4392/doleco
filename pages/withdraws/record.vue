<template>
  <div class="h-full flex flex-col">
    <PageHeader title="Withdrawals Record" />

    <div class="p-5 grow overflow-y-auto">
      <table class="w-full my-3">
        <thead>
          <tr>
            <td class="text-center">Time</td>
            <td class="text-center">Amount</td>
            <td class="text-center">Status</td>
          </tr>
        </thead>
      </table>
      <p class="my-3 text-sm text-white text-center">No More</p>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "~/components/pages/PageHeader.vue";
</script>
