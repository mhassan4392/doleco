<template>
  <van-nav-bar
    :title="title || ''"
    left-text="Back"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script setup>
const { backRoute } = defineProps(["backRoute", "title"]);
const router = useRouter();

const onClickLeft = () => {
  console.log(backRoute);
  if (backRoute) {
    router.push({ path: backRoute });
  } else {
    router.back();
  }
};
</script>

<style>
.van-nav-bar,
.van-hairline--bottom,
.van-nav-bar__content {
  @apply !bg-primary !text-white !border-none !border-primary;
}

.van-nav-bar-left {
  @apply !text-white;
}

.van-icon-arrow-left,
.van-nav-bar__text,
.van-nav-bar__title {
  @apply !text-white;
}

.van-nav-bar__title {
  @apply !font-medium;
}
</style>
