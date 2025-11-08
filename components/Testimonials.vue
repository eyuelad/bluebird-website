<template>
  <section class="py-12">
    <div class="px-12 rounded-xl">
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-8">
        What Our Clients Say
      </h2>

      <div class="grid gap-4 md:grid-cols-3">
        <div
          v-for="t in testimonials"
          :key="t.id"
          class="bg-white p-6 rounded-xl border h-[250px] w-full cursor-pointer overflow-hidden hover:bg-slate-900 group transition-all duration-700"
          @click="select(t)"
        >
          <div class="flex items-center mb-4">
            <img
              :src="t.image"
              :alt="t.name"
              class="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3
                class="text-xl font-medium text-gray-900 group-hover:text-white"
              >
                {{ t.name }}
              </h3>
              <p class="text-gray-600 group-hover:text-white">{{ t.role }}</p>
            </div>
          </div>
          <p
            class="text-gray-700 group-hover:text-white text-sm sm:text-lg line-clamp-4"
          >
            {{ t.message }}
          </p>
        </div>
      </div>

      <div
        v-if="selected"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="selected = null"
      >
        <div class="bg-white p-6 rounded-lg max-w-2xl w-full">
          <button
            class="absolute top-4 right-6 text-gray-500 hover:text-gray-800"
            @click="selected = null"
          >
            ✕
          </button>
          <div class="flex items-center mb-4">
            <img
              :src="selected.image"
              :alt="selected.name"
              class="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h3 class="text-xl font-medium text-gray-900">
                {{ selected.name }}
              </h3>
              <p class="text-gray-600">{{ selected.role }}</p>
            </div>
          </div>
          <div class="overflow-y-auto max-h-[60vh]">
            <p class="text-gray-700 text-sm sm:text-base">
              {{ selected.message }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}
const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: "Lisa Snavely",
    role: "Family member",
    message: "From the first time we entered Bluebird...",
    image: "https://via.placeholder.com/150?text=Mary+Johnson",
  },
  {
    id: 2,
    name: "S.L",
    role: "Caring daughter",
    message: "I feel very fortunate to have found Bluebird Millcreek...",
    image: "https://via.placeholder.com/150?text=David+Lee",
  },
  {
    id: 3,
    name: "Graziella Palumbo-Perry",
    role: "Spouse",
    message: "While describing how well...",
    image: "https://via.placeholder.com/150?text=Susan+Parker",
  },
  {
    id: 4,
    name: "C. Fletcher",
    role: "Family member",
    message: "The Bluebird Mill Creek Adult Family Home was a true blessing...",
    image: "https://via.placeholder.com/150?text=Anna+White",
  },
]);
const selected = ref<Testimonial | null>(null);
function select(t: Testimonial) {
  selected.value = t;
  document.body.classList.add("overflow-hidden");
}
</script>
