<template>
  <section class="py-20 bg-gray-50" id="gallery">
    <div class="container px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="font-display text-4xl font-bold capitalize text-center text-gray-900 mb-4"
        >
          Photo Gallery
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Take a virtual tour through our beautiful adult family home
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GalleryImage
          v-for="(item, idx) in items"
          :key="idx"
          :url="item.cover"
          :title="item.title"
          @click="openModal(idx)"
        />
      </div>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div
        class="relative rounded-lg w-full max-w-4xl p-10 sm:flex sm:flex-col items-center justify-center"
      >
        <button
          class="absolute rounded-md bg-black bg-opacity-50 w-7 h-7 flex items-center justify-center top-6 right-6 text-white cursor-pointer"
          @click="closeModal"
        >
          <UIcon name="lucide:x" />
        </button>
        <div class="max-w-2xl">
          <img
            :src="currentImage"
            class="rounded-md object-contain max-h-[70vh] mx-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = ref([
  {
    title: "Front View",
    cover: "/images/home/01-green.webp",
    images: [
      "/images/home/01-green.webp",
      "/images/home/02-Green.webp",
      "/images/home/03-green.webp",
      "/images/home/04.webp",
    ],
  },
  {
    title: "Living Space",
    cover: "/images/home/06.webp",
    images: [
      "/images/home/06.webp",
      "/images/home/07.webp",
      "/images/home/08.webp",
    ],
  },
  {
    title: "Dining Area",
    cover: "/images/home/12.webp",
    images: [
      "/images/home/12.webp",
      "/images/home/13.webp",
      "/images/home/14.webp",
      "/images/home/37.webp",
      "/images/home/38.webp",
      "/images/home/39.webp",
      "/images/home/40.webp",
      "/images/home/41.webp",
    ],
  },
  {
    title: "Kitchen",
    cover: "/images/home/09.webp",
    images: [
      "/images/home/09.webp",
      "/images/home/10.webp",
      "/images/home/11.webp",
      "/images/home/34.webp",
      "/images/home/35.webp",
      "/images/home/36.webp",
    ],
  },
  {
    title: "Bedroom",
    cover: "/images/home/45.webp",
    images: [
      "/images/home/45.webp",
      "/images/home/46.webp",
      "/images/home/15.webp",
      "/images/home/47.webp",
      "/images/home/49.webp",
      "/images/home/51.webp",
      "/images/home/54.webp",
    ],
  },
  {
    title: "Bathroom",
    cover: "/images/home/45.webp",
    images: [
      "/images/home/17.webp",
      "/images/home/18.webp",
      "/images/home/19.webp",
      "/images/home/55.webp",
      "/images/home/56.webp",
      "/images/home/57.webp",
      "/images/home/60.webp",
    ],
  },
  {
    title: "Common Area",
    cover: "/images/home/44.webp",
    images: ["/images/home/44.webp", "/images/home/58.webp"],
  },
  {
    title: "Relaxation Space",
    cover: "/images/home/31.webp",
    images: [
      "images/home/31.webp",
      "images/home/30.webp",
      "images/home/32.webp",
      "images/home/33.webp",
      "images/home/42.webp",
    ],
  },
  {
    title: "Garden View",
    cover: "/images/home/27.webp",
    images: [
      "/images/home/27.webp",
      "/images/home/28.webp",
      "/images/home/29.webp",
    ],
  },
  {
    title: "Entertainment Area",
    cover: "/images/home/22.webp",
    images: [
      "images/home/22.webp",
      "images/home/23.webp",
      "images/home/24.webp",
      "images/home/25.webp",
      "images/home/26.webp",
    ],
  },
]);

const isOpen = ref(false);
const currentImage = ref("");

function openModal(idx: number) {
  currentImage.value = items.value[idx].cover;
  isOpen.value = true;
  document.body.classList.add("overflow-hidden");
}
function closeModal() {
  isOpen.value = false;
  currentImage.value = "";
  document.body.classList.remove("overflow-hidden");
}
</script>
