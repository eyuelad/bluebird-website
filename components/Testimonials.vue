<template>
  <section class="py-20">
    <div class="container px-4 sm:px-6 lg:px-8">
      <h2
        class="font-display text-4xl font-bold capitalize text-center text-gray-900 mb-12 lg:mb-16"
      >
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
            v-html="t.message"
          ></p>
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
            <p
              class="text-gray-700 text-sm sm:text-base"
              v-html="selected.message"
            ></p>
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
    message: `From the first time we entered Bluebird AFH and met Elsa Amanuel and her staff, we thought this has got to be too good to be true! But after 3 years of our mother living at Bluebird, I can tell you it’s not too good to be true. It is true. If you have an opportunity to have Bluebird become your parent’s home, do not hesitate to trust Elsa with your beloved Mom or Dad. During COVID restrictions I had every confidence that Bluebird Staff was caring for our Mom in a family setting, while protecting the residents from COVID diligently.<br />
Elsa has a talent/skill to hire people who have the same outlook about their work as she does. For the Amanuel’s Bluebird isn’t a profession, it’s a calling.`,
    image: "https://via.placeholder.com/150?text=Mary+Johnson",
  },
  {
    id: 2,
    name: "S.L",
    role: "Caring daughter",
    message: `
Review from a Caring daughter;
I feel very fortunate to have found Bluebird Millcreek.
Elsa and her well trained care givers have been so wonderful to my mother with their compassionate and caring personalities.<br />
Elsa is a LPN, so it's very reassuring to know she is keeping a close eye on each residents needs, both health wise and emotionally. Elsa communicates extremely well with family and care givers. She also readily contacts and receives messages from your doctor, pharmacist and other professionals like physical or occupational therapist, when health issues arise. I love how prompt she is to follow through with their instructions and suggestions.<br />
Elsa cares about all of the residents as individuals and tries to find activities that each one enjoys.The home has a cozy, quiet atmosphere and is very clean and organized. Having my mother at Bluebird is a blessing that I'm thankful for every day.`,
    image: "https://via.placeholder.com/150?text=David+Lee",
  },
  {
    id: 3,
    name: "Graziella Palumbo-Perry",
    role: "Spouse",
    message: `While describing how well, gently and compassionately Blue Bird took care of Lee to our friends, my husband ended his account by stating, ‘when I get old, I want to move into Blue Bird for Elsa and her family to take care of me’....and that really does sum it up …Elsa and her team do not provide services; they provide a family environment full of kindness, patience, and love. Yes, the place was clean; yes, Lee loved the food; and yes, they were very attentive to all his grooming needs (he was always clean)….but the love was palpable. They really cared about Lee and our family. We were always welcomed with smiles; provided updates; and were very mindful and respectful of our privacy. Especially while he was transitioning to the next life, Elsa and her family were there for us, ensuring he was comfortable, attending to his every needs and ours as well. What impressed me the most is that after Lee died, her primary concern was not to upset the rest of her guests while showing us dignity and respect. We could had not gone through this time as well as we all did, without their love and support. Thank God for Blue Bird, Elsa and her family.’ ….and I mean it. You guys are a blessing to all that comes to you….thank you so much for how well you took care of Lee and us. I actually miss you.`,
    image: "https://via.placeholder.com/150?text=Susan+Parker",
  },
  {
    id: 4,
    name: "C. Fletcher",
    role: "Family member",
    message: `
The Bluebird Mill Creek Adult Family Home (AFH) was a true blessing for my mother. When we first visited, it had an immediate feel of warmth and comfort. Elsa, the owner, is an LPN and has many years of experience in caring for the elderly. She is very knowledgeable and keeps current with the resident’s needs, doctors, and communication with family members. My mother required total care which they provided and so much more. The staff is very friendly and diligent at making sure the residents are comfortable at all times. The home is very clean and offers a variety of activities for its residents. They also provided nutritious and pleasing meals. I highly recommend the Bluebird Mill Creek AFH as a wonderful place for aging loved ones.`,
    image: "https://via.placeholder.com/150?text=Anna+White",
  },
]);
const selected = ref<Testimonial | null>(null);
function select(t: Testimonial) {
  selected.value = t;
  document.body.classList.add("overflow-hidden");
}
</script>
