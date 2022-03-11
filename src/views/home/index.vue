<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Navbar from "../../components/Navbar/index.vue";
import Modal from "../../components/Modal/index.vue";
import Swal from "sweetalert2";
import { supabase } from "../../supabase";

onMounted(() => {
  Swal.fire(
    "Pemberitahuan",
    "Pendaftaran telah ditutup pada tanggal 26 Februari 2022 Jam 23:59",
    "warning"
  );
});

const countDown = new Date("March 12, 2022 11:10:00").getTime();
const hari = ref();
const jam = ref();
const menit = ref();
const detik = ref();
const isTimeExpired = ref(false);

const isModalShow = ref(false);
const showModalExpired = () => {
  Swal.fire(
    "Pemberitahuan",
    "Mohon maaf pendaftaran Makrab sudah ditutup",
    "warning"
  );
};

const showModal = () => {
  isModalShow.value = true;
};

const clearForm = () => {
  fullName.value = "";
  phoneNumber.value = "";
  studentId.value = "";
  classYear.value = 2021;
  gradeNumber.value = "";
  email.value = "";
  tshirtSize.value = "";
};

const closeModal = () => {
  clearForm();
  isModalShow.value = false;
};

const isValid = computed(
  () =>
    fullName.value.length > 0 &&
    phoneNumber.value.length > 0 &&
    studentId.value.length > 0 &&
    gradeNumber.value.length > 0 &&
    email.value.length > 0 &&
    tshirtSize.value.length > 0
);

const fullName = ref("");
const phoneNumber = ref("");
const studentId = ref("");
const classYear = ref(2021);
const gradeNumber = ref("");
const email = ref("");
const tshirtSize = ref("");

const addPeserta = async () => {
  try {
    const { error } = await supabase.from("pendaftar").insert([
      {
        fullName: fullName.value,
        phoneNumber: phoneNumber.value,
        studentId: studentId.value,
        classYear: classYear.value,
        gradeNumber: gradeNumber.value,
        email: email.value,
        tshirtSize: tshirtSize.value,
      },
    ]);
    if (error) throw error;
    Swal.fire(
      "Selamat!",
      "Selamat Anda Telah terdaftar di Makrab 2022",
      "success"
    );
    closeModal();
  } catch (error: any) {
    console.log(error);
    Swal.fire("Error :(", `${error.message}`, "error");
  }
};

const count = () => {
  const now = new Date().getTime();
  const distance = countDown - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  hari.value = days + " Hari ";
  jam.value = hours + " Jam ";
  menit.value = minutes + " Menit ";
  detik.value = seconds + " Detik ";

  if (distance < 0) {
    isTimeExpired.value = true;
  }
};

setInterval(count, 1000);
</script>

<template>
  <Navbar />
  <Modal
    v-if="isModalShow"
    @cancel="closeModal"
    @submit="addPeserta"
    :is-valid="isValid"
    title="Daftar Makrab"
    button-color="bg-blue-500"
    cancel-text="Batal"
    submit-text="Simpan"
  >
    <form @submit.prevent="addPeserta" class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="flex justify-start text-gray-700 text-xs font-bold mb-2"
            for="fullName"
          >
            Nama Lengkap
          </label>
          <input
            v-model="fullName"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="fullName"
            type="text"
            placeholder="Masukkan Nama Anda"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="flex justify-start text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Alamat Email
          </label>
          <input
            v-model="email"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="Masukkan Email Anda"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="flex justify-start text-gray-700 text-xs font-bold mb-2"
            for="phoneNumber"
          >
            Nomor Telepon (Whatsapp)
          </label>
          <input
            v-model="phoneNumber"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="phoneNumber"
            type="number"
            placeholder="Masukkan Nomor Telepon Anda"
          />
          <p class="text-gray-600 text-xs italic">
            Mohon masukkan nomor yang valid dan selalu aktif!
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="flex justify-start text-gray-700 text-xs font-bold mb-2"
            for="studentId"
          >
            Nomor Induk Mahasiswa
          </label>
          <input
            v-model="studentId"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="studentId"
            type="number"
            placeholder="Masukkan NIM Anda"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="flex justify-start text-gray-700 text-xs font-bold mb-2"
            for="classYear"
          >
            Angkatan
          </label>
          <div class="relative">
            <select
              v-model="classYear"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="classYear"
            >
              <option selected value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="flex justify-start text-gray-700 text-xs font-bold mb-2"
            for="gradeNumber"
          >
            Kelas
          </label>
          <div class="relative">
            <select
              v-if="classYear == 2020"
              v-model="gradeNumber"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gradeNumber"
            >
              <option selected disabled>Silahkan Pilih</option>
              <option>A1</option>
              <option>A2</option>
            </select>
            <select
              v-else
              v-model="gradeNumber"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gradeNumber"
            >
              <option disbaled selected>Silahkan Pilih</option>
              <option>A1</option>
              <option>A2</option>
              <option>A3</option>
              <option>A4</option>
              <option>A5</option>
              <option>A6</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="flex justify-start text-gray-700 text-xs font-bold mb-2"
            for="classYear"
          >
            Ukuran Baju
          </label>
          <div class="relative">
            <select
              v-model="tshirtSize"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="classYear"
            >
              <option disbaled selected>Silahkan Pilih</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>
  </Modal>
  <div
    class="flex h-screen bg-gradient-to-r from-green-400 to-blue-500 items-center justify-center w-full"
  >
    <div v-if="isTimeExpired" class="flex flex-col items-center">
      <h1 class="text-7xl text-white font-bold">Selamat Melaksanakan Makrab</h1>
      <h1 class="text-5xl text-white">Untuk Panitia dan Peserta</h1>
    </div>
    <div v-else class="flex flex-col space-y-6 items-center">
      <h1
        class="lg:text-6xl flex items-center justify-center text-3xl md:text-4xl font-bold text-white"
      >
        Waktu Menuju Makrab
      </h1>
      <div
        class="flex flex-col px-24 md:p-0 space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
      >
        <div
          class="flex items-center justify-center p-4 border-2 border-white w-auto h-auto rounded-lg"
        >
          <h1 class="text-3xl text-white font-bold">{{ hari }}</h1>
        </div>
        <div
          class="flex items-center justify-center p-4 border-2 border-white w-auto h-auto rounded-lg"
        >
          <h1 class="text-3xl text-white font-bold">{{ jam }}</h1>
        </div>
        <div
          class="flex items-center justify-center p-4 border-2 border-white w-auto h-auto rounded-lg"
        >
          <h1 class="text-3xl text-white font-bold">{{ menit }}</h1>
        </div>
        <div
          class="flex items-center justify-center p-4 border-2 border-white w-auto h-auto rounded-lg"
        >
          <h1 class="text-3xl text-white font-bold">{{ detik }}</h1>
        </div>
      </div>
      <div class="flex justify-center items-center space-x-6">
        <button
          @click="showModal"
          disabled
          class="hidden items-center justify-center bg-white w-auto h-auto p-4 rounded-lg"
        >
          <h1 class="md:text-3xl text-md text-green-500 font-bold">
            Daftar Makrab
          </h1>
        </button>
        <button
          @click="showModalExpired"
          class="flex items-center justify-center bg-white w-auto h-auto p-4 rounded-lg"
        >
          <h1 class="md:text-3xl text-md text-green-500 font-bold">
            Daftar Makrab
          </h1>
        </button>
        <a
          href="/parrentPermission.docx"
          class="items-center justify-center bg-white w-auto h-auto p-4 rounded-lg"
        >
          <h1 class="md:text-3xl text-md text-green-500 font-bold">
            Unduh Surat Izin Orang Tua
          </h1>
        </a>
        <router-link to="/terdaftar">
          <button
            class="flex items-center justify-center bg-white w-auto h-auto p-4 rounded-lg"
          >
            <h1 class="md:text-3xl text-md text-green-500 font-bold">
              Lihat Peserta
            </h1>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
