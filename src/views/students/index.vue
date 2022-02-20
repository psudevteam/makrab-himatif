<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

import Navbar from "../../components/Navbar/index.vue";
import { supabase } from "../../supabase";

const studentData: any = ref([]);
const filtered: any = ref([]);
const filter: any = ref(0);

const filterBy = async () => {
  const res = await supabase.from("pendaftar").select();
  filtered.value = res.body;
  if (filter.value == 1) {
    studentData.value = filtered.value.filter((x: any) => x.classYear === 2020);
  } else if (filter.value == 2) {
    studentData.value = filtered.value.filter((x: any) => x.classYear === 2021);
  } else if (filter.value == 3) {
    studentData.value = filtered.value.filter((x: any) => x.status === 3);
  } else if (filter.value == 4) {
    studentData.value = filtered.value.filter((x: any) => x.status === 2);
  } else if (filter.value == 5) {
    studentData.value = filtered.value.filter((x: any) => x.status === 1);
  } else if (filter.value == 6) {
    studentData.value = filtered.value.filter(
      (x: any) => x.classYear === 2021 && x.gradeNumber === "A1"
    );
  } else if (filter.value == 7) {
    studentData.value = filtered.value.filter(
      (x: any) => x.classYear === 2021 && x.gradeNumber === "A2"
    );
  } else if (filter.value == 8) {
    studentData.value = filtered.value.filter(
      (x: any) => x.classYear === 2021 && x.gradeNumber === "A3"
    );
  } else if (filter.value == 9) {
    studentData.value = filtered.value.filter(
      (x: any) => x.classYear === 2021 && x.gradeNumber === "A4"
    );
  } else if (filter.value == 10) {
    studentData.value = filtered.value.filter(
      (x: any) => x.classYear === 2021 && x.gradeNumber === "A5"
    );
  } else if (filter.value == 11) {
    studentData.value = filtered.value.filter(
      (x: any) => x.classYear === 2021 && x.gradeNumber === "A6"
    );
  } else if (filter.value == 12) {
    studentData.value = filtered.value.filter(
      (x: any) => x.classYear === 2020 && x.gradeNumber === "A1"
    );
  } else if (filter.value == 13) {
    studentData.value = filtered.value.filter(
      (x: any) => x.classYear === 2020 && x.gradeNumber === "A2"
    );
  } else {
    studentData.value = filtered.value;
  }
};

onMounted(async () => {
  const res = await supabase.from("pendaftar").select();
  studentData.value = res.body;
  if (filter.value == 1) {
    console.log("selected");
  }
});
</script>
<template>
  <Navbar />
  <div class="flex h-full bg-white items-start justify-center w-full">
    <div class="p-4 w-full">
      <div class="bg-white p-8 rounded-md w-full">
        <div class="flex items-center justify-between pb-6">
          <div class="flex flex-col space-y-6 md:flex-row w-full justify-between px-4">
            <div class="flex flex-col">
              <h2 class="text-gray-600 font-semibold">Data Mahasiswa</h2>
              <span class="text-xs"
                >Berikut adalah Mahasiswa yang telah terdaftar pada makrab kali
                ini</span
              >
            </div>
            <div class="flex justify-center space-x-4 items-center">
              <div class="flex flex-col">
                <select
                  v-model="filter"
                  class="w-auto space-y-1 h-auto p-2 bg-gray-200 rounded-lg"
                  name="filter"
                  id="filter"
                >
                  <option>Silahkan Pilih</option>
                  <option value="100">Tampilkan Semua</option>
                  <option value="1">Angkatan 2020</option>
                  <option value="2">Angkatan 2021</option>
                  <option value="3">Lunas</option>
                  <option value="4">Belum Lunas</option>
                  <option value="5">Belum Bayar</option>
                  <option value="6">Kelas A1 2021</option>
                  <option value="7">Kelas A2 2021</option>
                  <option value="8">Kelas A3 2021</option>
                  <option value="9">Kelas A4 2021</option>
                  <option value="10">Kelas A5 2021</option>
                  <option value="11">Kelas A6 2021</option>
                  <option value="12">Kelas A1 2020</option>
                  <option value="13">Kelas A2 2020</option>
                </select>
              </div>
              <div class="flex items-center">
                <button
                  class="bg-gray-200 w-[120px] h-[40px] px-1 rounded-lg"
                  @click="filterBy"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            >
              <table class="min-w-full bg-gray-200 leading-normal">
                <thead class="bg-green-200">
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      No
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Nama Lengkap
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      NIM
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Angkatan
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Kelas
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(n, i) in studentData" :key="i">
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      {{ i + 1 }}
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <div class="flex items-center">
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {{ n.fullName }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ n.studentId }}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ n.classYear }}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ n.gradeNumber }}
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      <span
                        v-if="n.status == 1"
                        class="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-gray-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Belum Bayar</span>
                      </span>
                      <span
                        v-if="n.status == 2"
                        class="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Belum Lunas</span>
                      </span>
                      <span
                        v-if="n.status == 3"
                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Lunas</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="flex p-4 w-full justify-center">
                <h1
                  v-if="studentData.length == 0"
                  class="text-md font-bold text-black"
                >
                  Data Tidak Tersedia
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
