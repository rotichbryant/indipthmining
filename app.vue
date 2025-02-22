<template>
  <div class="site-wrapper overflow-hidden ">
    <NuxtLayout>
      <Header v-if="!isMaintenance"/>
      <NuxtPage />
      <Footer v-if="!isMaintenance" />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const { public:{ NUXT_APP_MAINTENANCE } } = useRuntimeConfig();
const isMaintenance = computed( () => JSON.parse(NUXT_APP_MAINTENANCE) );
</script>