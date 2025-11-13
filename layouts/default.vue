<template>
  <div
    class="h-screen overflow-hidden relative page flex flex-col min-h-screen bg-gray-900 text-gray-100 dark"
  >
    <LHeader />

    <LoadingOverlay :loading="isLoading" />

    <main>
      <slot class="grow" />
    </main>

    <LFooter />
  </div>
</template>

<script setup>
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    document.querySelector(".page").classList.remove("overflow-hidden");
    document.querySelector(".page").classList.remove("h-screen");
    isLoading.value = false;
  }, 10);
});

useSeoMeta({
  title: "BlueBird Millcreek",
  ogTitle: "BlueBird Millcreek",
  description: ``,
  ogDescription: ``,
  ogImage: "/logo.png",
  twitterCard: "summary",
});
</script>
