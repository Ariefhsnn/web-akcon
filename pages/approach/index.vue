<template>
    <div class="">
        <div class="bg-black pt-40 px-10 pb-10">
        <Title
        title="Our Case Studies"
        label="Approach"
        content=""
        />
        </div>
        <div class="grid  grid-cols-1 md:grid-cols-2 bg-black p-10 gap-10">
            <div v-for="( porto,index) in  portos" :key="index"  :class="`${ porto.gridcol} filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out`">

                    <div class="flex flex-col text-white">
                        <nuxt-link class="flex flex-col"  :to="{ name: 'portofolio-id', params: { id: porto.linkto } }">
                            <img :class="`h-full object-cover bg-white mb-5 ${ porto.margin}`" :src=" porto.cover" alt="">
                            <p class="text-xl md:text-2xl font-bold">{{  porto.title }}</p>
                         </nuxt-link>
                        <p class="text-md md:text-md font-light">{{  porto.description }}</p>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import { databases } from '@/db'
export default {
  data() {
    return {
        portos: databases
    }
  },
}
</script> 
