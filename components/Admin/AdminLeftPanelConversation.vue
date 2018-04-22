<template>
  <a @click.prevent="setActiveConversation(conversation)"
     class="px-3 flex items-center hover:bg-grey-lighter cursor-pointer no-underline"
     :class="[isActiveConversation ? 'bg-grey-lighter' : 'bg-white']">
    <div>
      <img class="h-12 w-12 rounded-full"
           :src="conversation.user.image" />
    </div>
    <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
      <div class="flex items-bottom justify-between">
        <p class="text-grey-darkest">
          {{ conversation.user.name }}
        </p>
        <p class="text-xs text-grey-darkest">
          {{ conversation.updated_at }}
        </p>
      </div>
      <p class="text-grey-dark mt-1 text-sm">
        {{ conversation.last_message }}
      </p>
    </div>
  </a>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    conversation: {
      required: true,
      type: Object
    }
  },
  methods: {
    ...mapActions({
      setActiveConversation: "admin/setActiveConversation"
    })
  },
  computed: {
    ...mapGetters({
      activeConversation: "admin/conversation"
    }),
    isActiveConversation() {
      if (this.activeConversation) {
        return this.conversation.id == this.activeConversation.id;
      }
      return false;
    }
  }
};
</script>
