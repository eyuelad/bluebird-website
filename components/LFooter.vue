<template>
  <footer class="border-t border-gray-700 bg-gray-900 text-white py-8">
    <div class="container px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Logo class="mb-4" />
          <p class="text-gray-400">
            Providing exceptional care and comfort in Mill Creek, WA
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-gray-400 hover:text-white"
                >{{ link.name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
          <p class="text-gray-400">Phone: +1 (206) 313-2874</p>
          <p class="text-gray-400">Location: Mill Creek, WA</p>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>
          &copy; <span>{{ year }}</span> BlueBird Millcreek Adult Family Home.
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ROUTES } from "~/constants/ROUTES";

const year = new Date().getFullYear();

const links = ref([
  { name: "Home", href: ROUTES.HOME },
  { name: "Services", href: ROUTES.SERVICES },
  { name: "Pricing", href: ROUTES.PRICING },
  { name: "Privacy Policy", href: ROUTES.PRIVACY_POLICY },
  { name: "Contact", href: ROUTES.CONTACT },
]);
</script>
