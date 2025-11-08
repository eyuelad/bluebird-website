<template>
  <footer class="bg-slate-900 text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">BlueBird Millcreek</h3>
          <p class="text-gray-400">
            Providing exceptional care and comfort in Mill Creek, WA
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="#home" class="text-gray-400 hover:text-white">Home</a>
            </li>
            <li>
              <a href="#services" class="text-gray-400 hover:text-white"
                >Services</a
              >
            </li>
            <li>
              <a href="#about" class="text-gray-400 hover:text-white">About</a>
            </li>
            <li>
              <a href="#contact" class="text-gray-400 hover:text-white"
                >Contact</a
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
const year = new Date().getFullYear();
</script>
