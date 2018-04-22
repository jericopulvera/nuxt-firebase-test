<template>
  <section class="flex justify-center items-center flex-col h-64">
    <h1 class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="info">
      {{ error.message }}
    </h2>
    <nuxt-link class="button"
               to="/"
               v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: ["error"]
};
</script>

