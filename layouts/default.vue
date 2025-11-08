<template>
  <div
    class="relative page flex flex-col min-h-screen bg-gray-50 text-gray-900"
  >
    <slot class="grow" />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "BlueBird Millcreek",
  ogTitle: "BlueBird Millcreek",
  description: ``,
  ogDescription: ``,
  ogImage: "/logo.png",
  twitterCard: "summary",
});
</script>
