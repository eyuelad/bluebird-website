<template>
  <section class="py-20 bg-white" id="contact">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="font-display text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We're here to answer your questions and help you make the best
          decision for your loved one
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-50 p-8 rounded-lg">
          <h3 class="font-display text-2xl font-semibold mb-6">Get in Touch</h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <UIcon
                name="lucide:phone"
                class="h-5 w-5 text-primary-600 mr-3"
              /><a
                href="tel:+12063132874"
                class="text-gray-600 hover:text-primary-600"
                >+1 (206) 313-2874</a
              >
            </div>
            <div class="flex items-center">
              <UIcon
                name="lucide:mail"
                class="h-5 w-5 text-primary-600 mr-3"
              /><span class="text-gray-600">BlueBirdmcafh@gmail.com</span>
            </div>
            <div class="flex items-center">
              <UIcon
                name="lucide:map-pin"
                class="h-5 w-5 text-primary-600 mr-3"
              /><span class="text-gray-600">Mill Creek, WA</span>
            </div>
            <div class="flex items-center">
              <UIcon
                name="lucide:clock"
                class="h-5 w-5 text-primary-600 mr-3"
              /><span class="text-gray-600">Available 24/7 for inquiries</span>
            </div>
          </div>

          <div class="mt-8">
            <h4 class="font-display text-xl font-semibold mb-4">Location</h4>
            <div class="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.7638882372766!2d-122.2087873!3d47.8605161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDUxJzM3LjkiTiAxMjLCsDEyJzMxLjYiVw!5e0!3m2!1sen!2sus!4v1631825092134!5m2!1sen!2sus"
                class="w-full h-64 rounded-lg"
                style="border: 0"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Name</label
            >
            <input
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Email</label
            >
            <input
              type="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Phone</label
            >
            <input
              type="tel"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="(xxx) xxx-xxxx"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Message</label
            >
            <textarea
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
