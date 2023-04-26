<template>
  <div>
    <PageHeader title="Bind Bank Account" />

    <div class="px-4 py-2 space-y-5">
      <div class="bg-white rounded-lg py-2 text-sm">
        <van-cell-group inset>
          <van-field
            v-model="name"
            label="Realname"
            type="text"
            label-class="!text-right"
          />
          <van-field
            type="text"
            label="Bank"
            label-class="!text-right"
            right-icon="arrow"
            readonly
            v-model="bank"
            @click="() => (showPicker = true)"
          >
          </van-field>
          <van-field
            v-model="account"
            type="number"
            label="Account"
            label-class="!text-right"
          >
          </van-field>
          <van-field
            v-model="ifsc"
            type="text"
            label="IFSC"
            label-class="!text-right"
          />
        </van-cell-group>
      </div>

      <van-button
        class="!w-full !text-white !text-lg !font-medium !rounded-lg !bg-secondary !border-secondary"
      >
        Submit
      </van-button>
    </div>

    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        title="Bank"
        cancel-button-text="Cancel"
        confirm-button-text="Confirm"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script setup>
import PageHeader from "~/components/pages/PageHeader.vue";
const name = ref("Akash");
const account = ref("8882100629");
const ifsc = ref("nk35a5f492");
const bank = ref("Delaware");
const showPicker = ref(false);
const columns = [
  { text: "Delaware", value: "Delaware" },
  { text: "Florida", value: "Florida" },
  { text: "Wenzhou", value: "Wenzhou" },
  { text: "Indiana", value: "Indiana" },
  { text: "Maine", value: "Maine" },
];
const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  bank.value = selectedOptions[0].text;
};
</script>
