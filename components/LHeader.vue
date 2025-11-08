<template>
  <header class="bg-slate-50 shadow-md fixed w-full z-10">
    <div class="container px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 items-center">
        <Logo />

        <nav class="hidden md:flex space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="hover:text-primary-500"
            >{{ link.name }}</NuxtLink
          >
        </nav>

        <button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
          <UIcon
            :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'"
            class="h-6 w-6"
          />
        </button>
      </div>

      <nav v-if="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="link in navLinks"
            :href="link.href"
            class="block px-3 py-2 hover:text-primary-500"
            >{{ link.name }}</NuxtLink
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ROUTES } from "~/constants/ROUTES";

const isMenuOpen = ref(false);

const navLinks = ref([
  { name: "Home", href: ROUTES.HOME },
  { name: "Services", href: ROUTES.SERVICES },
  { name: "About", href: ROUTES.ABOUT },
  { name: "Gallery", href: ROUTES.GALLERY },
  { name: "Contact", href: ROUTES.CONTACT },
]);
</script>
