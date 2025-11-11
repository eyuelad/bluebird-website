<!-- Contact form (migrated to Nuxt UI components) -->
<template>
  <form
    @submit.prevent="submitForm"
    id="contact-form"
    ref="contactForm"
    class="space-y-6"
  >
    <UAlert
      v-if="isSuccess && responseMessage"
      variant="soft"
      color="success"
      :closable="false"
      class="mb-4"
      :description="responseMessage"
    >
    </UAlert>

    <UAlert
      v-if="isError && responseMessage"
      variant="soft"
      color="error"
      :closable="false"
      class="mb-4"
      :description="responseMessage"
    >
    </UAlert>

    <UFormField label="Your name" required>
      <UInput
        class="w-full"
        v-model="form.name"
        size="xl"
        placeholder="Full name"
        :disabled="sending"
      />
    </UFormField>

    <UFormField label="Your phone" required>
      <UInput
        class="w-full"
        v-model="form.phone"
        size="xl"
        type="phone"
        placeholder="+1 555 000 0000"
        :disabled="sending"
      />
    </UFormField>

    <UFormField v-if="!mini" label="Your email">
      <UInput
        class="w-full"
        v-model="form.email"
        size="xl"
        type="email"
        placeholder="Email address"
        :disabled="sending"
      />
    </UFormField>

    <UFormField v-if="!mini" label="Your message" required>
      <UTextarea
        v-model="form.message"
        size="xl"
        rows="4"
        class="w-full"
        placeholder="How can we help you?"
        :disabled="sending"
      ></UTextarea>
    </UFormField>

    <div>
      <UButton type="submit" block :loading="sending" size="xl">
        <span :class="{ 'animate-pulse': sending }">
          {{ mini ? "Submit" : "Send Message" }}
        </span>
      </UButton>
    </div>
  </form>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { reactive, ref } from "vue";

const props = defineProps({
  mini: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    default: "",
  },
});

emailjs.init({ publicKey: "user_QfTgWJVBKORGg4BAkRdpV" });

const contactForm = ref(null);
const form = reactive({
  name: "",
  phone: "",
  email: "",
  message: props.message,
});

const isSuccess = ref(false);
const isError = ref(false);
const sending = ref(false);
const responseMessage = ref("");

const validateForm = () => {
  if (!form.name || !form.phone || !form.message) {
    isError.value = true;
    responseMessage.value = "Please fill in all fields";
    return false;
  }

  if (form.email && !form.email.match(/\S+@\S+\.\S+/)) {
    isError.value = true;
    responseMessage.value = "Please enter a valid email address";
    return false;
  }

  isError.value = false;
  responseMessage.value = "";
  return true;
};

const submitForm = async () => {
  if (!validateForm()) return;

  sending.value = true;

  const payload = {
    name: form.name,
    phone: form.phone,
    email: form.email,
    message: form.message,
    to_name: "Bluebird Millcreek",
  };

  try {
    const result = await emailjs.send(
      "bluebird_service_t40pdmg",
      "contact_template_8yur35k",
      payload
    );
    console.log("SUCCESS!", result.text);
    isSuccess.value = true;
    responseMessage.value = "Thank you. We'll contact you soon.";
    // reset
    form.name = "";
    form.phone = "";
    form.email = "";
    form.message = "";
    sending.value = false;
    if (contactForm.value) contactForm.value.reset();
  } catch (error) {
    console.log("FAILED...", error);
    isError.value = true;
    responseMessage.value = "Failed to send your message, Please try again";
    sending.value = false;
  }
};
</script>
