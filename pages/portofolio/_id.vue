<template>
    <div class="">
        <div class="bg-black px-10 md:px-12 pt-24 md:pt-32 pb-10 md:pb-40">
            <Title
            title=""
            label="Portfolios"
            content=""
            />
            <!-- section1 -->
            <section class="grid md:grid-cols-5 text-white gap-10">
                <div class="md:col-span-3" :style="`background-image: url(${portfolio.cover}); background-position: center; background-size: cover;`">
                    <div class="min-h-full h-96  lg:my-0 xl:my-10 2xl:my-32">

                    </div>
                </div>
                <div class="flex flex-col md:py-2 md:col-span-2">
                    <div class="text-4xl font-bold mb-10">
                        {{ portfolio.title }}
                    </div>
                    <div class="text-md font-light text-gray-300  flex-1 font-text text-justify">
                        {{ portfolio.description }}
                    </div>
                    <div class="font-text flex flex-row mt-10 justify-items-end items-end content-end">
                        <div class="flex flex-col  flex-1">
                            <p class="font-light text-md text-gray-300">Project Year</p>
                            <p class="text-xl font-bold">
                                {{ portfolio.year }}
                            </p>
                        </div>
                        <div class="flex flex-col flex-1">
                            <p class="font-light text-md text-gray-300">Development Time</p>
                            <p class="text-xl font-bold">
                                {{ portfolio.duration }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>




        <!-- section 2 -->
        <section class="flex flex-col md:flex-row bg-white px-10 md:px-20 py-10 md:py-20">
            <div class="flex flex-col text-black flex-1 md:pb-0 pb-20">
                
                <Minititle
                :title="portfolio.overview"
                label="Project Overview"
                content=""
                />

                <div class="flex flex-col md:flex-row mt-10 gap-10">
                    <div class="flex flex-col  flex-1">
                        <p class="font-light text-md text-gray-500">Client</p>
                        <p class="text-xl font-bold">
                            {{ portfolio.client }}
                        </p>
                    </div>
                    <div class="flex flex-col flex-1">
                        <p class="font-light text-md text-gray-500">Industry</p>
                        <p class="text-xl font-bold">
                            {{ portfolio.industry }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col flex-1 ">
                <Label
                label= "Project Brief"
                textcolor= "text-gray-300"
                bacground= "bg-gray-300"
                />
                <div class="flex flex-row gap-5 mb-10">
                    <div class="w-2 bg-black"></div>
                    <p class="text-xl">
                        {{ portfolio.briefhead }}
                    </p>
                </div>
                <p class="font-light text-md">
                    {{ portfolio.briefcontent }}
                </p>
            </div>

        </section>



        <!-- section 3 -->
        <section class="grid md:grid-cols-2 grid-cols-1  bg-white px-10 md:px-20 py-10 md:py-20  gap-10">
            <div class="flex flex-col">
                <Label
                label="Challenges"
                textcolor="text-gray-400"
                background="bg-gray-400"
                />
                <div class="flex flex-row gap-5">
                    <div class="flex w-2 bg-black"></div>
                    <p class="text-md font-light">
                        {{ portfolio.challenge }}
                    </p>
                </div>
            </div>
            <div class="h-full">
                <img class="md:mx-0 h-auto object-cover" :src="portfolio.challengeImg" alt="">
            </div>
        </section>




        <!-- section 4 -->

        <section class="bg-black px-10 py-20 ">
            <Label
            label="Service Provided"
            textcolor="text-white"
            background="bg-white"
            />
            <div class="mt-20 grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-20">
                <Servicecard
                v-for="(service,index) in portfolio.services" :key="index"
                :title="service.title"
                :image="service.image"
                />
            </div>
            
            
        </section>


    <!-- section 6 -->
    <section class="px-8 pt-20 pb-20 md:pb-40">
            <Label
            label="More Projects"
            textcolor="text-gray-400"
            background="bg-gray-400"
            />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-black text-justify">
        <Projectcard v-for="(suggestion,index) in portfolio.suggestion" :key="index"
        :title="suggestion.title"
        :content="suggestion.content"
        :image="suggestion.cover"
        :linkto="suggestion.link"
        />
        </div>
    </section>
    </div>
</template>

<script>
import { databases } from '@/db'
export default {
    data() {
    return {
      portfolio: {}
    }
  },
  mounted() {
    this.portfolio = databases.find((o) => o.id === this.$route.params.id)
  }
}
</script>

<style>


</style>