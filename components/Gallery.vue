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
      class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div class="relative rounded-lg w-full max-w-4xl p-10">
        <h3
          class="font-display text-4xl font-bold capitalize text-center text-gray-50 mb-4"
        >
          {{ currentItem.title }}
        </h3>

        <UButton
          class="absolute top-0 right-0 z-50 text-white hover:text-gray-100"
          icon="lucide:x"
          variant="link"
          size="lg"
          color="neutral"
          @click="closeModal()"
          aria-label="Close"
        />

        <UCarousel
          ref="carousel"
          class="w-full mx-auto"
          :items="currentItem.images"
          arrows
          loop
          :prev="{ onClick: onClickPrev }"
          :next="{ onClick: onClickNext }"
          v-slot="{ item }"
        >
          <NuxtImg
            :src="item"
            class="w-full aspect-[4/3] rounded-lg bg-gray-700"
          />
        </UCarousel>

        <div class="flex gap-3 justify-center pt-4 sm:pt-6 mx-auto">
          <div
            v-for="(image, index) in currentItem.images"
            :key="index"
            class="size-12 md:size-16 opacity-50 hover:opacity-100 transition-opacity"
            :class="{ 'opacity-100': activeIndex === index }"
            @click="select(index)"
          >
            <NuxtImg
              :src="image"
              class="w-12 h-12 md:w-16 md:h-16 rounded-sm bg-gray-700"
            />
          </div>
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
    cover: "/images/home/17.webp",
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
const currentItem = ref(items.value[0]);

function openModal(idx: number) {
  currentItem.value = items.value[idx];
  isOpen.value = true;
  document.body.classList.add("overflow-hidden");
}
function closeModal() {
  isOpen.value = false;
  currentItem.value = items.value[0];
  document.body.classList.remove("overflow-hidden");
}

const carousel = useTemplateRef("carousel");
const activeIndex = ref(0);

function onClickPrev() {
  activeIndex.value--;
}
function onClickNext() {
  activeIndex.value++;
}
function onSelect(index: number) {
  activeIndex.value = index;
}

function select(index: number) {
  activeIndex.value = index;

  carousel.value?.emblaApi?.scrollTo(index);
}
</script>
