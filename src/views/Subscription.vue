<template>
  <!-- design inspiration by https://dribbble.com/shots/13848224-Pricing-Page-Web -->

  <div
    class="max-w-screen-xl py-20 px-10 mx-auto flex flex-col md:flex-row md:gap-10"
  >
    <div
      class="flex flex-col sm:flex-1 lg:max-w-sm bg-gradient-to-br from-black to-purple-900 text-white p-10 rounded-3xl relative"
    >
      <div class="text-4xl leading-9 pb-10">
        <p class="font-light">Save Your</p>
        <p class="font-bold">money now.</p>
      </div>
      <p class="text-base font-light leading-7">
        Manage your company Bot in few easy steps, join our Pro plan to try a
        460º experience of our service. <br /><br />
        Start you 14 days of free pro plan, you can always upgrade it or stay
        with the Lite version for free.
      </p>
      <div class="absolute md:bottom-40 lg:bottom-0 right-0">
        <img
          src="https://i.ibb.co/0XT3pgW/Screen-Shot-2021-10-06-at-06-58-50-removebg-preview.png"
          class="hidden md:block lg:max-h-64"
          alt=""
        />
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-between pt-10">
      <div class="text-4xl leading-9 pb-10 text-center md:text-left">
        <p class="font-light">Start Now</p>
        your <span class="font-bold">free plan.</span>
      </div>
      <div class="flex flex-col lg:flex-row md:gap-10">
        <div class="py-10 px-7 flex-1 bg-gray-100 md:pt-10 sm:my-8 rounded-3xl">
          <div class="flex justify-between flex-col pb-7">
            <div class="flex justify-between items-baseline">
              <p class="text-4xl font-bold leading-none">Lite</p>
              <p class="text-3xl leading-none">Free</p>
            </div>
            <div class="flex justify-between items-baseline">
              <span class="h-1 w-5 bg-purple-900 inline-block"></span>
              <span class="text-xs font-bold text-gray-400"
                >with restrictions</span
              >
            </div>
          </div>
          <div class="text-sm">
            <p class="font-bold pb-5">Plan includes:</p>
            <ul class="flex flex-col gap-3">
              <li>Manage conversations directly from your website.</li>
              <li>Bot without the AI service.</li>
              <li>Archive chat for 30 days.</li>
              <li>Free, for always.</li>
            </ul>
          </div>
          <button
            class="w-full p-5 rounded-2xl mt-10 flex bg-purple-900 text-white"
          >
            <p class="text-center w-full font-bold">
              Start 14 days of free Pro plan
            </p>
          </button>
        </div>

        <div
          class="py-10 px-7 flex-1 bg-gradient-to-br from-black to-purple-300 sm:my-8 text-white rounded-3xl"
        >
          <div class="flex justify-between flex-col pb-7">
            <div class="flex justify-between items-baseline">
              <p class="text-4xl font-bold leading-none">Pro</p>
              <p class="text-3xl leading-none">29$</p>
            </div>
            <div class="flex justify-between items-baseline">
              <span class="h-1 w-5 bg-white inline-block"></span>
              <span class="text-xs">monthly</span>
            </div>
          </div>
          <div class="text-sm">
            <p class="font-bold pb-5">Plan includes:</p>
            <ul class="flex white flex-col gap-3">
              <li>Manage conversations directly from your website.</li>
              <li>Bot without the AI service.</li>
              <li>Archive chat for 30 days.</li>
              <li>Free, for always.</li>
            </ul>
          </div>
          <button class="w-full p-5 rounded-2xl mt-10 flex bg-white text-white">
            <p class="text-center text-black font-bold w-full">
              Start 14 days of free Pro plan
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Subscription",
};
</script>

<style scoped>
ul li {
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>')
    no-repeat;
  background-size: auto;
  background-size: 1em 1.5em;
  padding-left: 3rem;
}

ul.white li {
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>')
    no-repeat;
  background-size: auto;
}
</style>
