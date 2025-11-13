<template>
  <section class="py-20 bg-gray-800" id="services">
    <div class="container px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl font-bold mb-4">Our Services</h2>
        <p class="text-base max-w-2xl mx-auto leading-relaxed">
          We provide comprehensive care services tailored to meet the unique
          needs of each resident
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(s, i) in services"
          :key="i"
          class="border border-gray-700 hover:bg-gray-900 hover:text-white p-8 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <div class="mb-4">
            <UIcon :name="s.icon" class="h-8 w-8 text-primary" />
          </div>
          <h3 class="text-xl font-display font-semibold mb-3">{{ s.title }}</h3>
          <p class="leading-relaxed">{{ s.description }}</p>
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
