<template>
    <div>
        <section id="hero">
            <div class="pt-40 md:pt-60 md:pb-40 pb-10 md:px-20 px-8 flex-row bg-black gap-5 items-center" style="background: url('https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')">
                <div class="text-white font-bold text-4xl md:text-6xl order-2 my-10 md:w-3/6">
                    Product Design & Discovery
                </div>
                <div class="gird grid-cols-3 md:flex hidden gap-10 mt-40">
                    <div class="flex flex-col gap-5 backdrop-filter backdrop-blur-md p-5 rounded-md filter drop-shadow-lg" style="background: rgb(255 255 255 / 10%)">
                        <div class="text-white text-2xl font-bold">
                            Research
                        </div>
                        <div class="font-light text-md text-gray-300 ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloremque possimus ea enim aliquid nihil, aspernatur, laborum, quae explicabo quos quas saepe corporis! Non delectus doloribus ut! Dignissimos, eos neque?
                        </div>
                    </div>
                    <div class="flex flex-col gap-5 backdrop-filter backdrop-blur-md p-5 rounded-md filter drop-shadow-lg" style="background: rgb(255 255 255 / 10%)">
                        <div class="text-white text-2xl font-bold">
                            Plan
                        </div>
                        <div class="font-light text-md text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloremque possimus ea enim aliquid nihil, aspernatur, laborum, quae explicabo quos quas saepe corporis! Non delectus doloribus ut! Dignissimos, eos neque?
                        </div>
                    </div>
                    <div class="flex flex-col gap-5  backdrop-filter backdrop-blur-md p-5 rounded-md filter drop-shadow-lg" style="background: rgb(255 255 255 / 10%)">
                        <div class="text-white text-2xl font-bold">
                            Design
                        </div>
                        <div class="font-light text-md text-gray-300">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloremque possimus ea enim aliquid nihil, aspernatur, laborum, quae explicabo quos quas saepe corporis! Non delectus doloribus ut! Dignissimos, eos neque?
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="2" class="md:px-20 px-8 py-20 md:py-40 divide-y divide-gray-400">
            <div class="grid md:grid-cols-6 py-10 gap-10">
                <div class="md:col-span-2 text-xl md:text-4xl font-bold ">
                    Discovery Phase
                </div>
                <div class="md:col-span-4 text-md font-light text-gray-400">
                    In a project we often find the difference between what you want and what you need, looking similar doesn't mean it's right for the time and budget you have. This leads to dissatisfaction or even worse, the failure of a product. Or maybe, your budget and time are too much for a simple product. Let us do the things for you.
                </div>
            </div>
            <div class="divide-y divide-gray-300 px-2 md:hidden">
                <div
                v-for="(phase, index) in Discoveryphase"
                :key="phase.title"
                class="py-5"
                >
                    <p class="text-md md:text-md font-bold cursor-pointer" @click="phaseItemClick(index)">
                        {{ phase.title }}
                    </p>
                    <div :data-phase-id="index" class="font-light  text-gray-400 text-md md:text-md hidden md:block">
                        <p>{{ phase.content }}</p>
                    </div>
                </div>
            </div>
            <div class="md:grid grid-cols-3 px-5 hidden gap-10 pt-10">
                <div
                v-for="(phase, index) in Discoveryphase"
                :key="index"
                class="col-span-1 px-5"
                >
                    <div class="h-24 w-24 border-full mb-2">
                        <img :src="phase.image" alt="">
                    </div>
                    <p class="text-md md:text-md font-bold cursor-pointer">
                        {{ phase.title }}
                    </p>
                    <div class="font-light  text-gray-400 text-md md:text-md hidden md:block">
                        <p>{{ phase.content }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="3" class="md:px-20 px-8 md:py-20">
          <div class="bg-black py-10 px-10 grid md:grid-cols-2  divide-y divide-gray-400 md:divide-black">
            <div class="flex flex-col py-10">
              <div class="text-xl md:text-4xl text-white font-bold">
                Research & Development
              </div>
              <div class="font-light text-gray-300 text-md mt-3">
                lorem ipsum dolor sir amet
              </div>
            </div>
            <div class="text-md font-light text-gray-300 py-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sint quae id maxime, sapiente soluta cupiditate? Itaque distinctio recusandae repudiandae ad cupiditate illum laboriosam, at similique eaque explicabo quo voluptas.
            </div>
          </div>
        </section>

        <section class="px-8 py-20 md:px-20">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
              
              <div class="col-span-1 px-5">
                <p class="text-xl md:text-4xl font-bold">
                  Plan
                </p>
                <p class="text-md font-light text-gray-400 mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae unde autem fugiat suscipit ratione voluptatum pariatur provident exercitationem, eaque culpa obcaecati porro beatae accusantium recusandae reiciendis rem. Voluptas, aliquid?
                </p>
                <div class="flex flex-col px-5 mt-10">
                  <div class="flex flex-row gap-5">
                    <div class="h-24 w-24 border-full mb-2">
                        <img src="http://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png" alt="">
                    </div>
                    <div class="flex flex-col">
                      <p class="text-md md:text-md font-bold"> test</p>
                      <p class="font-light  text-gray-400 text-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, tempora debitis possimus ea et soluta laboriosam esse
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-row gap-5">
                    <div class="h-24 w-24 border-full mb-2">
                        <img src="http://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png" alt="">
                    </div>
                    <div class="flex flex-col">
                      <p class="text-md md:text-md font-bold"> test</p>
                      <p class="font-light  text-gray-400 text-md">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, tempora debitis possimus ea et soluta laboriosam esse
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="relative h-auto ">
                <img class="absolute md:mx-auto w-full object-cover" src="https://www.decolore.net/wp-content/uploads/2019/12/mobile-app-mockup-templates-cover.jpg" alt="">
              </div>
            </div>
            
          </section>

          <section id="2" class="md:px-20 px-8 py-20 md:py-40 divide-y divide-gray-400">
            <div class="grid md:grid-cols-6 py-10 gap-10">
                <div class="md:col-span-2 text-xl md:text-4xl font-bold ">
                    Discovery Phase
                </div>
                <div class="md:col-span-4 text-md font-light text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dicta nemo. Distinctio quo ducimus eius, ratione possimus aliquam commodi delectus earum quaerat numquam corrupti eveniet soluta rem ab placeat voluptatum.
                </div>
            </div>
            <div class="divide-y divide-gray-300 px-2 md:hidden">
                <div
                v-for="(phase, index) in Discoveryphase"
                :key="phase.title"
                class="py-5"
                >
                    <p class="text-md md:text-md font-bold cursor-pointer" @click="phaseItemClick(index)">
                        {{ phase.title }}
                    </p>
                    <div :data-phase-id="index" class="font-light  text-gray-400 text-md md:text-md hidden md:block">
                        <p>{{ phase.content }}</p>
                    </div>
                </div>
            </div>
            <div class="md:grid grid-cols-3 px-5 hidden gap-10 pt-10">
                <div
                v-for="(phase, index) in Discoveryphase"
                :key="index"
                class="col-span-1 px-5"
                >
                    <div class="h-24 w-24 border-full mb-2">
                        <img :src="phase.image" alt="">
                    </div>
                    <p class="text-md md:text-md font-bold cursor-pointer">
                        {{ phase.title }}
                    </p>
                    <div class="font-light  text-gray-400 text-md md:text-md hidden md:block">
                        <p>{{ phase.content }}</p>
                    </div>
                </div>
              </div>
            </section>


    </div>
</template>


<script>
export default {
  data () {
    return {
      Discoveryphase: [
        {
          title: 'Product Design & Discovery',
          content: 'Analyze, calculate and design plans for your project or business needs to meet the best workmanship solution within the specified timeframe and cost, or let us do the math.',
          image: 'http://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png'
        },
        {
          title: 'Product Development',
          content: 'Design and assemble your project from a bunch of papers into maintainable code in a user-friendly interface product using up-to-date technology. We ensure your product works fine and stable when it comes to live.',
          image: 'http://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png'
        },
        {
          title: 'Product Tailoring & Integration',
          content: 'Resume pending work or add new features to existing applications at some point in the technology, to connect the system with third parties.',
          image: 'http://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png'
        },
        {
          title: 'Product Support & Maintenance',
          content: 'All digital products are never free from bugs and feature updates caused by technology that continues to develop. Therefore, monitoring and maintenance of your software needs to be done regularly or periodically so that the product works optimally.',
          image: 'http://assets.stickpng.com/images/585e4ad1cb11b227491c3391.png'
        }
      ]
    }
  },
  methods: {
    phaseItemClick (phaseIndex) {
      const phaseInfoElement = document.querySelectorAll('[data-phase-id="' + phaseIndex + '"]')[0]
      if (phaseInfoElement.classList.contains('block')) {
        phaseInfoElement.classList.remove('block')
        phaseInfoElement.classList.add('hidden')
      } else {
        phaseInfoElement.classList.remove('hidden')
        phaseInfoElement.classList.add('block')
      }
    }
  }
}
</script>