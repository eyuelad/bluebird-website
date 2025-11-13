<template>
  <UAvatar v-if="iconOnly" src="/logo-icon.webp" alt="Logo" size="3xl" />
  <NuxtImg
    v-else
    class="h-12"
    :src="
      light ? '/logo-horizontal--black.webp' : '/logo-horizontal--white.webp'
    "
    alt="Logo"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  iconOnly?: boolean;
  light?: {
    type: Boolean;
    default: false;
  };
}>();
</script>
