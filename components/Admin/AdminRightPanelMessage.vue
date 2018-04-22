<template>
  <div class="flex mb-2"
       :class="{'justify-end': myMessage}">
    <div class="rounded py-2 px-3"
         :class="[myMessage ? 'bg-green-light' : 'bg-grey-light']">
      <p class="text-sm mt-1">
        {{ message.message }}
      </p>
      <p class="text-right text-xs text-grey-dark mt-1">
        {{ message.updated_at }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    message: {
      required: true,
      type: Object
    }
  },
  computed: {
    myMessage() {
      return this.message.name == "" || this.message.name == null;
    }
  }
};
</script>