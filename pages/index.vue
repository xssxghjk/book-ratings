<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
const searchQuery = ref("");
const hasValue = computed(() => searchQuery.value.length >= 1);

const isShaking = ref(false);
const triggerShake = () => {
  if (isShaking.value === true) return;
  isShaking.value = true;
  setTimeout(() => {
    isShaking.value = false;
  }, 1000);
};
const query = useSearchQuery("lord+of+the+rings");
console.log(query.isLoading);
console.log(query.data);
const submitSearch = () => {
  if (!searchQuery.value) {
    triggerShake();
    return;
  }
  alert(searchQuery.value);
};
</script>

<template>
  <div class="flex w-full h-full">
    <div
      :class="{ 'animate-shake': isShaking }"
      class="relative mx-3 my-auto w-full h-fit sm:w-fit sm:mx-auto bg-slate-300 dark:bg-slate-700 rounded-lg"
    >
      <input
        class="w-full sm:w-80 p-3 rounded-lg font-mono placeholder:font-extralight bg-transparent text-slate-600 placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
        placeholder="Search"
        autocomplete="off"
        v-model="searchQuery"
        @keyup.enter="submitSearch"
      />
      <button @click="submitSearch" class="absolute right-3 top-3">
        <MagnifyingGlassIcon
          class="m-auto h-6 w-6 text-slate-600 dark:text-slate-200"
        />
      </button>
    </div>
  </div>
</template>
