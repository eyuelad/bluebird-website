<template>
  <div class="py-8">
    <div class="overflow-hidden">
      <div class="marquee" aria-hidden="false">
        <div class="marquee-track">
          <template v-for="(item, idx) in doubledItems" :key="idx">
            <div class="marquee-item">
              <NuxtImg
                v-if="item.type === 'image'"
                :src="item.src"
                alt="marquee image"
                class="bg-gray-700 rounded-md"
                :class="{ 'aspect-square': idx % 2 == 0 }"
              />
              <video
                v-else-if="item.type === 'video'"
                :src="item.src"
                muted
                autoplay
                loop
                playsinline
                class="bg-gray-700 rounded-md"
              ></video>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const items = [
  { type: "image", src: "/images/family/1.webp" },
  {
    type: "video",
    src: "/videos/1.mp4",
  },
  { type: "image", src: "/images/family/4.webp" },
  { type: "image", src: "/images/home/12.webp" },
  {
    type: "video",
    src: "/videos/2.mp4",
  },
  { type: "image", src: "/images/family/3.webp" },
  {
    type: "video",
    src: "/videos/3.mp4",
  },
  { type: "image", src: "/images/home/27.webp" },
  {
    type: "video",
    src: "/videos/4.mp4",
  },
  { type: "image", src: "/images/family/10.webp" },
];

// duplicate items for seamless loop
const doubledItems = computed(() => [...items, ...items]);
</script>

<style scoped>
.marquee {
  position: relative;
  width: 100%;
}
.marquee-track {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 200%; /* duplicated */
  animation: marquee 28s linear infinite;
}
@media (max-width: 600px) {
  .marquee-track {
    animation-duration: 8s;
  }
}
.marquee-item img,
.marquee-item video {
  height: 240px;
  width: auto;
  max-width: unset;
  display: block;
  object-fit: cover;
}
.marquee-item video {
  background: #000;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
