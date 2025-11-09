<template>
  <div
    class="page-overlay flex items-center justify-center"
    :class="{
      'page-overlay--hidden': !showPageOverlay,
    }"
  >
    <div class="page-overlay__content relative text-center">
      <Logo
        icon-only
        class="mb-3 justify-center"
        :class="{ 'animate-pulse': showPageOverlay }"
      />

      <div class="text-gray-600">Loading...</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

const showPageOverlay = computed(() => {
  return props.loading;
});
</script>

<style>
.page-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
}

.page-overlay__content {
  z-index: 1;
  transition: all 0.2s ease-in;
}

.page-overlay:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    var(--color-sky-50),
    var(--color-sky-100)
  );
  transition: all 0.4s ease-in;
  transform-origin: bottom;
}

.page-overlay--hidden {
  pointer-events: none;
}
.page-overlay--hidden .page-overlay__content {
  opacity: 0 !important;
}
.page-overlay--hidden::before {
  transform: scaleY(0);
}
</style>
