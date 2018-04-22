<template>
  <!-- Chat -->
  <div class="flex flex-wrap items-start mb-1 w-100 content-start flex-grow"
       :class="chatClass">
    <!-- User photo -->
    <!-- <img src="/img/mm.jpg"
         v-if="!isVisitor && !message.systemMessage && message.user "
         class="w-10 h-10 rounded mr-3" /> -->
    <!-- Chat message -->
    <p class="font-light text-md relative justify-center p-4 w-4/5 rounded text-blue"
       v-if="message.systemMessage">
      {{ message.message }}
    </p>
    <p class="font-light text-md relative p-2 w-4/5 rounded text-white overflow-hidden break-words"
       :class="chatMessageClass"
       v-else>
      {{message.message}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    isVisitor() {
      return this.message.user;
    },
    chatMessageClass() {
      if (this.isVisitor) {
        return "bg-green";
      }
      return "bg-blue";
    },
    chatClass() {
      if (this.isVisitor) {
        return "flex-row-reverse";
      }
      return "flex-row";
    }
  }
};
</script>

