<script setup lang="ts">
import { ref } from "vue";
const isDropdown = ref(false);
</script>

<template>
  <nav
    class="flex sticky z-50 top-0 bg-white h-auto px-8 py-4 w-full justify-center"
  >
    <div class="flex items-center w-full justify-between">
      <div class="flex">
        <h1 class="text-[18px]">
          Logo |<span class="text-green-400 font-bold">
            Makrab Himatif 2022</span
          >
        </h1>
      </div>
      <ul class="hidden md:flex items-center space-x-4 cursor-pointer">
        <router-link to="/">
          <li class="text-green-500 text-[16px] font-bold hover:font-medium">
            Beranda
          </li>
        </router-link>

        <router-link to="/panitia">
          <li class="text-green-500 text-[16px] font-bold hover:font-medium">
            Panitia
          </li>
        </router-link>

        <router-link to="/peserta">
          <li class="text-green-500 text-[16px] font-bold hover:font-medium">
            Peserta
          </li>
        </router-link>
      </ul>
      <ul
        v-if="isDropdown"
        class="flex transition-all ease-linear bg-green-400 px-4 py-2 rounded-lg flex-col justify-start fixed right-3 md:hidden space-y-4 cursor-pointer top-16"
      >
        <router-link to="/">
          <li class="text-white text-[16px] font-bold hover:font-medium">
            Beranda
          </li>
        </router-link>
        <router-link to="/panitia">
          <li class="text-white text-[16px] font-bold hover:font-medium">
            Panitia
          </li>
        </router-link>
        <router-link to="/peserta">
          <li class="text-white text-[16px] font-bold hover:font-medium">
            Peserta
          </li>
        </router-link>
      </ul>
      <span
        @click="isDropdown = !isDropdown"
        class="border-2 flex items-center justify-center md:hidden border-green-400 rounded-md p-[2px] text-green-500"
      >
        Menu
      </span>
    </div>
  </nav>
</template>
