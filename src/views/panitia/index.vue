<script setup lang="ts">
import Navbar from "../../components/Navbar/index.vue";
import Card from "../../components/Card/index.vue";
</script>

<template>
  <Navbar />
  <div
    class="flex relative h-screen bg-gradient-to-r from-green-400 to-blue-500 items-center justify-center w-full"
  >
    <div class="flex flex-col space-y-6 w-full">
      <div class="flex flex-col space-y-8 w-full justify-center">
        <h1
          class="lg:text-6xl flex items-center justify-center text-3xl md:text-4xl font-bold text-white"
        >
          Divisi Acara
        </h1>
        <div class="flex flex-col md:flex-row w-full justify-center">
          <div
            class="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 justify-between px-6"
          >
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div class="flex w-full flex-col md:flex-row justify-center">
          <div
            class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-between md:px-6"
          >
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div class="flex w-full justify-center">
          <div
            class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full justify-between md:px-6"
          >
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
