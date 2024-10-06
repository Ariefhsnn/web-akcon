<template>
    <div id="app" class="tracking-tight">
        <nav class="fixed mt-2 md:mt-5 w-full  items-center justify-center align-center z-40">
            <div class=" flex text-white m-5 mx-10">
              <transition name="main-nav">
                <div v-if="!modal" class="leading-0 flex md:-ml-4 -ml-10 w-auto flex-shrink text-xl md:text-4xl items-center justify-center align-center" style="line-height: 0px">
                  <transition name="on-scroll">
                    <NuxtLink to="/" v-if="hideNav">
                      <img class="w-48" src="/akcon-putih.png" alt="Infinitec">
                    </NuxtLink>
                  </transition>
                </div>
              </transition>
                <div class="flex flex-auto w-full justify-end gap-16 text-md md:text-2xl font-bold items-center" style="line-height: 0px">
                    <transition name="on-scroll">
                      <transition-group v-if="hideNav" name="main-nav" class="md:flex flex-auto gap-16 justify-end hidden">
                        <NuxtLink key="b" v-if="!modal" to="/us">Us</NuxtLink>
                        <NuxtLink key="c" v-if="!modal" to="/portofolio">Work</NuxtLink>
                      </transition-group>
                    </transition>
                    <NavButton @click="modal = !modal" class="z-50" :opened="isOpen" :disabled="isDisabled" :isScroll="!hideNav" />
                </div>
            </div>
        </nav>
        <Modal :show="modal" @toggle-status="isOpen = !isOpen" @close="closeModal" @d-status="(val) => isDisabled = val" class="z-30"/>
        
        <Nuxt/>
        
        <Footer/>
    </div>
</template>


<script>

export default {
  data() {
    return {
      modal: false,
      isOpen: false,
      isDisabled: false,
      hideNav: true,
    }
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    handleScroll(e) {
      // console.log(e.target)
      if (window.scrollY < 100) {
        this.hideNav = true
      } else {
        this.hideNav = false
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.removeEventListener)
  },
}
</script>



<style>

body {
  font-family: 'IBM Plex Sans Arabic', sans-serif;
}
.font-bold {
  font-family: 'Oxygen', sans-serif;
  line-height: 1.15 !important;
}
.text-md {
  line-height: 1.5 !important;
}

.btn-nav {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
}


.main-nav-enter {
  opacity: 0;
}

.main-nav-leave-to {
  opacity: 0;
}

.main-nav-enter-active {
  transition: opacity .3s;
  transition-delay: 1s;
}
.main-nav-leave-active  {
  transition: opacity .3s;
  transition-delay: 0s;
}

.on-scroll-enter {
  transform: translateY(-100px);
}
.on-scroll-leave-to {
  transform: translateY(-100px);
}
.on-scroll-enter-active {
  transition: transform .3s;
}
.on-scroll-leave-active {
  transition: transform .3s;
}

</style>