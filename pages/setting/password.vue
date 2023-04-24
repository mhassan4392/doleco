<template>
  <div>
    <PageHeader title="Retrieve Password" back-route="/setting" />

    <div class="px-4 py-2 space-y-5">
      <div class="bg-white rounded-lg py-2 text-sm">
        <van-cell-group inset>
          <van-field
            v-model="phone"
            label="Phone"
            type="text"
            readonly
            label-class="!text-right"
          />
          <van-field
            v-model="sms"
            type="number"
            label="SMS"
            label-class="!text-right"
            placeholder="Send Verification Code"
          >
            <template #button>
              <van-button
                class="!bg-secondary !px-4 !text-white !border-secondary"
                size="mini"
                >Send</van-button
              >
            </template>
          </van-field>
          <van-field
            v-model="password"
            type="password"
            label="Password"
            label-class="!text-right"
          />

          <van-field
            v-model="confirmPassword"
            type="password"
            label="Confirm"
            label-class="!text-right"
            placeholder="Confirm Password"
          />
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
const phone = ref("+91 8882100629");
const sms = ref("8882100629");
const password = ref("nk35a5f492");
const confirmPassword = ref("");
</script>
