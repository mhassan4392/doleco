<template>
  <div>
    <PageHeader title="Personal Information" back-route="/setting" />

    <div class="px-4 py-2 space-y-5">
      <div class="bg-white rounded-lg py-2 text-sm">
        <van-cell-group inset>
          <van-field
            v-model="id"
            label="ID"
            readonly
            label-class="!text-right"
          />
          <van-field
            v-model="account"
            type="tel"
            label="Account"
            readonly
            label-class="!text-right"
          />
          <van-field
            v-model="nickname"
            type="digit"
            label="Nickname"
            label-class="!text-right"
          />

          <van-field
            type="digit"
            label="Current Avatar"
            label-class="!text-right"
          >
            <template #input>
              <van-image
                width="80px"
                height="80px"
                fit="contain"
                :src="profile"
              />
            </template>
          </van-field>

          <van-field
            type="digit"
            label="Modify Avatar"
            label-class="!text-right"
          >
            <template #input>
              <van-uploader upload-icon="plus" />
            </template>
          </van-field>
        </van-cell-group>
      </div>

      <van-button
        class="!w-full !text-white !text-lg !font-medium !rounded-lg !bg-secondary !border-secondary"
      >
        Submit
      </van-button>
    </div>
  </div>
</template>

<script setup>
import PageHeader from "~/components/pages/PageHeader.vue";
import profile from "~/assets/images/common/profile.jpeg";
const id = ref("140645");
const account = ref("918882100629");
const nickname = ref("nk35a5f492");
</script>
