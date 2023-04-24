<template>
  <div>
    <PageHeader title="Security Settings" backRoute="/user" />

    <div class="px-4 py-2 space-y-5">
      <div class="bg-white rounded-lg py-2 text-sm">
        <van-cell
          v-for="(link, i) in links"
          :key="i"
          :title="link.title"
          isLink
          :to="link.route"
        >
          <van-image v-if="i == 0" :src="profile" width="30px" alt="" />
        </van-cell>
      </div>

      <van-button
        class="!w-full !text-white !text-lg !font-medium !rounded-lg !bg-secondary !border-secondary"
      >
        Sign Out
      </van-button>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "~/components/pages/PageHeader.vue";
import profile from "~/assets/images/common/profile.jpeg";

const links = ref([
  { title: "Peronal Information", route: "/setting/uinfo" },
  { title: "Modify Login Password", route: "/setting/password" },
  { title: "Modify Payment Password", route: "/setting/password2" },
  { title: "Bind Bank Password", route: "/setting/bank" },
]);
</script>
