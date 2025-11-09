<template>
  <section class="testimonials py-20 bg-white">
    <MediaMarquee class="mb-6" />

    <div class="container px-4 sm:px-6 lg:px-8">
      <h2
        class="font-display text-4xl font-bold capitalize text-center text-gray-900 mb-12 lg:mb-16"
      >
        Testimonials
      </h2>

      <div
        ref="carouselRef"
        class="snap-x overflow-x-auto no-scrollbar flex flex-nowrap gap-4 pb-5 mb-12 lg:mb-16"
      >
        <div
          v-for="(t, i) in doubledTestimonials"
          :key="`${t.id}-${i}`"
          class="snap-center min-w-4/5 sm:min-w-3/5 xl:min-w-1/3 p-6 rounded-xl border border-gray-300 cursor-pointer bg-white hover:border-gray-900 hover:bg-sky-50 group transition-all duration-300"
          @click="select(t)"
        >
          <div class="flex items-center mb-4">
            <UAvatar
              :src="t.image"
              :alt="t.name"
              class="w-16 h-16 rounded-full object-cover mr-4 bg-sky-100 group-hover:bg-sky-200 duration-300"
            />
            <div>
              <h3 class="text-lg sm:text-xl font-medium text-gray-900">
                {{ t.name }}
              </h3>
              <p class="text-gray-600">{{ t.role }}</p>
            </div>
          </div>
          <p
            class="text-gray-700 italic max-xs:text-sm line-clamp-4"
            v-html="t.message"
          ></p>
        </div>
      </div>

      <div
        v-if="selected"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click.self="selected = null"
      >
        <div class="relative bg-sky-50 p-6 rounded-lg max-w-2xl w-full">
          <UButton
            class="absolute top-6 right-6 z-50"
            icon="lucide:x"
            variant="ghost"
            color="neutral"
            @click="selected = null"
            aria-label="Close"
          />

          <div class="flex items-center mb-4">
            <UAvatar
              :src="selected.image"
              :alt="selected.name"
              class="w-16 h-16 rounded-full object-cover mr-4 bg-sky-200"
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
              class="text-gray-700 max-xs:text-sm"
              v-html="selected.message"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
    message: `From the first time we entered Bluebird AFH and met Elsa Amanuel and her staff, we thought this has got to be too good to be true! But after 3 years of our mother living at Bluebird, I can tell you it's not too good to be true. It is true. If you have an opportunity to have Bluebird become your parent's home, do not hesitate to trust Elsa with your beloved Mom or Dad. During COVID restrictions I had every confidence that Bluebird Staff was caring for our Mom in a family setting, while protecting the residents from COVID diligently.<br /><br />
Elsa has a talent/skill to hire people who have the same outlook about their work as she does. For the Amanuel's Bluebird isn't a profession, it's a calling.`,
    image: "https://via.placeholder.com/150?text=Mary+Johnson",
  },
  {
    id: 2,
    name: "S.L",
    role: "Caring daughter",
    message: `
Review from a Caring daughter;
I feel very fortunate to have found Bluebird Millcreek.
Elsa and her well trained care givers have been so wonderful to my mother with their compassionate and caring personalities.<br /><br />
Elsa is a LPN, so it's very reassuring to know she is keeping a close eye on each residents needs, both health wise and emotionally. Elsa communicates extremely well with family and care givers. She also readily contacts and receives messages from your doctor, pharmacist and other professionals like physical or occupational therapist, when health issues arise. I love how prompt she is to follow through with their instructions and suggestions.<br /><br />
Elsa cares about all of the residents as individuals and tries to find activities that each one enjoys.The home has a cozy, quiet atmosphere and is very clean and organized. Having my mother at Bluebird is a blessing that I'm thankful for every day.`,
    image: "https://via.placeholder.com/150?text=David+Lee",
  },
  {
    id: 3,
    name: "Graziella Palumbo-Perry",
    role: "Spouse",
    message: `While describing how well, gently and compassionately Blue Bird took care of Lee to our friends, my husband ended his account by stating, ‘when I get old, I want to move into Blue Bird for Elsa and her family to take care of me'....and that really does sum it up …Elsa and her team do not provide services; they provide a family environment full of kindness, patience, and love. Yes, the place was clean; yes, Lee loved the food; and yes, they were very attentive to all his grooming needs (he was always clean)….but the love was palpable. They really cared about Lee and our family. We were always welcomed with smiles; provided updates; and were very mindful and respectful of our privacy. Especially while he was transitioning to the next life, Elsa and her family were there for us, ensuring he was comfortable, attending to his every needs and ours as well. What impressed me the most is that after Lee died, her primary concern was not to upset the rest of her guests while showing us dignity and respect. We could had not gone through this time as well as we all did, without their love and support. Thank God for Blue Bird, Elsa and her family.' ….and I mean it. You guys are a blessing to all that comes to you….thank you so much for how well you took care of Lee and us. I actually miss you.`,
    image: "https://via.placeholder.com/150?text=Susan+Parker",
  },
  {
    id: 4,
    name: "C. Fletcher",
    role: "Family member",
    message: `
The Bluebird Mill Creek Adult Family Home (AFH) was a true blessing for my mother. When we first visited, it had an immediate feel of warmth and comfort. Elsa, the owner, is an LPN and has many years of experience in caring for the elderly. She is very knowledgeable and keeps current with the resident's needs, doctors, and communication with family members. My mother required total care which they provided and so much more. The staff is very friendly and diligent at making sure the residents are comfortable at all times. The home is very clean and offers a variety of activities for its residents. They also provided nutritious and pleasing meals. I highly recommend the Bluebird Mill Creek AFH as a wonderful place for aging loved ones.`,
    image: "https://via.placeholder.com/150?text=Anna+White",
  },
]);

// render the list twice so Vue attaches listeners to both copies
const doubledTestimonials = computed(() => [
  ...testimonials.value,
  ...testimonials.value,
]);

const selected = ref<Testimonial | null>(null);
function select(t: Testimonial) {
  selected.value = t;
}

watch(selected, (newVal) => {
  if (newVal) {
    document.body.classList.add("overflow-hidden");
    pauseAutoScroll();
  } else {
    document.body.classList.remove("overflow-hidden");
    resumeAutoScroll();
  }
});

// Carousel auto-scroll logic
const carouselRef = ref<HTMLElement | null>(null);
let autoScrollTimer: number | null = null;
let originalWidth = 0;
let onScrollHandler: ((this: HTMLElement, ev: Event) => any) | null = null;

function startAutoScroll() {
  const el = carouselRef.value;
  if (!el) return;

  // avoid starting multiple intervals
  if (autoScrollTimer) return;

  // calculate original width (half of scrollWidth). We render the items twice
  // in the template (doubledTestimonials), so half the scrollWidth is the
  // logical original width to wrap around.
  const children = Array.from(el.children);
  if (children.length === 0) return;

  originalWidth = el.scrollWidth / 2;

  // compute step as distance between first two items (includes gap)
  const first = el.children[0] as HTMLElement;
  const second = el.children[1] as HTMLElement;
  const step = second
    ? second.offsetLeft - first.offsetLeft
    : first.offsetWidth;

  // Add hover listeners and scroll handler only once
  if (el.dataset["autoscrollInit"] !== "true") {
    el.addEventListener("mouseenter", pauseAutoScroll);
    el.addEventListener("mouseleave", resumeAutoScroll);

    onScrollHandler = () => {
      if (!el) return;
      if (el.scrollLeft >= originalWidth) {
        // subtract originalWidth to loop seamlessly
        el.scrollLeft = el.scrollLeft - originalWidth;
      }
    };

    el.addEventListener("scroll", onScrollHandler);
    el.dataset["autoscrollInit"] = "true";
  }

  // start interval
  autoScrollTimer = window.setInterval(() => {
    // smooth scroll by one item
    el.scrollBy({ left: step, behavior: "smooth" });
  }, 2000);
}

function pauseAutoScroll() {
  if (autoScrollTimer) {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
  }
}

function resumeAutoScroll() {
  if (!autoScrollTimer && !selected.value) startAutoScroll();
}

onMounted(async () => {
  await nextTick();
  startAutoScroll();
});

onUnmounted(() => {
  pauseAutoScroll();
  const el = carouselRef.value;
  if (el) {
    el.removeEventListener("mouseenter", pauseAutoScroll);
    el.removeEventListener("mouseleave", resumeAutoScroll);
    if (onScrollHandler) el.removeEventListener("scroll", onScrollHandler);
  }
});
</script>

<style>
.testimonials {
  clip-path: ellipse(250% 100% at 50% 100%);
}
</style>
