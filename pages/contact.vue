<template>
  <div
    class="pt-32 bg-black text-white grid md:grid-cols-2 grid-cols-1"
    style="min-height: 90vh"
  >
    <div class="mx-12 md:mb-0 mb-5">
      <section class="mb-12">
        <p class="text-xl font-bold">Do you have a business plan or idea?</p>
        <h2 class="text-6xl font-bold">Let's talk about it!</h2>
      </section>

      <section class="text-xl">
        <p>We would love to hear about your project.</p>
        <p class="mb-6">
          One of our specialists will reach out to you within the next 2 hours.
        </p>

        <p>Simply fill out the form or email us at hi@infinitec.id</p>
      </section>
    </div>

    <div class="w-full">
      <form class="mx-12 md:mb-5 text-center" @submit="submitMessage">
        <div class="grid grid-rows-4 gap-4 mb-20">
          <input
            type="text"
            placeholder="Name"
            class="w-11/12 bg-black border-b-2 border-white mb-3 text-lg p-2"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-11/12 bg-black border-b-2 border-white mb-3 text-lg p-2"
          />
          <input
            type="text"
            placeholder="Phone"
            class="w-11/12 bg-black border-b-2 border-white mb-3 text-lg p-2"
          />
          <input
            type="text"
            placeholder="Message or Questions"
            class="w-11/12 bg-black border-b-2 border-white mb-3 text-lg p-2"
          />
          <!-- </textarea> -->
          <button
            class="mx-auto bg-white p-4 block rounded-sm text-black font-bold"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitMessage(e) {
      e.preventDefault();
    },
  },
};
</script>
