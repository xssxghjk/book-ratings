<script setup lang="ts">
const route = useRoute();
const query = useSearchQuery(route.params.query as string);
await query.suspense();
console.log(query.data);
</script>

<template>
  <div>
    {{ query.data }}
  </div>
</template>
