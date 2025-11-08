<template>
  <section class="py-20 bg-primary-50" id="services">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p class="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
          We provide comprehensive care services tailored to meet the unique
          needs of each resident
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(s, i) in services"
          :key="i"
          class="bg-white hover:bg-slate-900 hover:text-white p-8 rounded-lg shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-500"
        >
          <div class="mb-4">
            <UIcon :name="s.icon" class="h-8 w-8 text-primary-800" />
          </div>
          <h3 class="text-xl font-display font-semibold mb-3">{{ s.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ s.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: "lucide:clock",
    title: "24/7 Care",
    description: "Round-the-clock professional care and supervision",
  },
  {
    icon: "lucide:utensils",
    title: "Nutritious Meals",
    description: "Personalized meal plans and dietary accommodations",
  },
  {
    icon: "lucide:activity",
    title: "Health Monitoring",
    description: "Regular health assessments and medication management",
  },
  {
    icon: "lucide:user-plus",
    title: "Personal Care",
    description: "Assistance with daily activities and personal hygiene",
  },
  {
    icon: "lucide:heart",
    title: "Social Activities",
    description: "Engaging social programs and recreational activities",
  },
  {
    icon: "lucide:home",
    title: "Comfortable Living",
    description: "Private and semi-private rooms in a home-like setting",
  },
];
</script>
