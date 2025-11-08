<template>
  <div
    class="relative page flex flex-col min-h-screen bg-slate-50 text-slate-900"
  >
    <LHeader />
    <main>
      <slot class="grow" />
    </main>

    <LFooter />
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
