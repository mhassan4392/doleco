<template>
  <PageHeader title="My Teams" />

  <div class="p-5">
    <div class="grid grid-cols-3">
      <div
        v-for="(t, i) in tabs1"
        :key="i"
        class="flex items-center justify-center border py-1 border-secondary text-secondary text-sm"
        :class="{
          '!text-white bg-secondary': tab1 == i,
        }"
        @click="tab1 = i"
      >
        {{ t }}
      </div>
    </div>
    <p class="my-2 text-sm font-semibold text-white text-center">Total 0</p>
    <div class="grid grid-cols-2">
      <div
        v-for="(t, i) in tabs2"
        :key="i"
        class="flex items-center justify-center border py-1 border-secondary text-secondary text-sm bg-white"
        :class="{
          '!text-white !bg-secondary': tab2 == i,
        }"
        @click="tab2 = i"
      >
        {{ t }}
      </div>
    </div>
    <table class="w-full my-3">
      <thead>
        <tr>
          <td class="text-center">Avatar</td>
          <td class="text-center">Account</td>
          <td class="text-center">Level</td>
          <td class="text-center">Registration Time</td>
        </tr>
      </thead>
      <tfoot>
        <tr v-for="(t, i) in team" :key="i">
          <td
            class="text-center border-b border-secondary border-opacity-50 py-2 text-xs"
          >
            <img
              v-if="t.avatar"
              :src="`/uploads/users/${t.avatar}`"
              :style="{ width: '50px', height: '50px' }"
              alt=""
            />
            <van-image v-else width="50px" height="50px" />
          </td>
          <td
            class="text-center border-b border-secondary border-opacity-50 py-2 text-xs"
          >
            {{ t.phone }}
          </td>
          <td
            class="text-center border-b border-secondary border-opacity-50 py-2 text-xs"
          ></td>
          <td
            class="text-center border-b border-secondary border-opacity-50 py-2 text-xs"
          >
            {{ format(new Date(t.createdAt), "yyyy-MM-dd") }}
          </td>
        </tr>
      </tfoot>
    </table>
    <p class="my-3 text-sm text-white text-center">No More</p>
  </div>
</template>

<script setup>
import { format } from "date-fns";
import PageHeader from "~/components/pages/PageHeader.vue";
import Axios from "~/utils/axios";

const tabs1 = ref(["B10% - (0)", "C5% - (0)", "D2% - (0)"]);
const tabs2 = ref(["Invalid Members", "Valid Members"]);

const tab1 = ref(0);
const tab2 = ref(0);

const team = ref([]);

onMounted(async () => {
  try {
    const res = await Axios({ url: "/api/auth/team" });
    console.log(res);
    team.value = res.data.team;
  } catch (e) {}
});
</script>
