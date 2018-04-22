<template>
  <div class="flex-1 overflow-auto"
       style="background-color: #DAD3CC"
       ref="messagesContainer">
    <div class="py-2 px-3 "
         v-if="messages.length > 0">
      <!-- <div class="flex justify-center mb-2">
        <div class="rounded py-2 px-4"
             style="background-color: #DDECF2">
          <p class="text-sm uppercase">
            February 20, 2018
          </p>
        </div>
      </div> -->
      <AdminRightPanelMessage v-for="(message, index) in messages"
                              :message="message"
                              :key="`chatmessage-${index}`" />
    </div>
    <div class="py-2 px-3"
         v-else>
      <div class="flex justify-center mb-2">
        <div class="rounded py-2 px-4"
             style="background-color: #DDECF2">
          <p class="text-sm uppercase">
            {{ fallBackMessage }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminRightPanelMessage from "./AdminRightPanelMessage";
import { mapGetters } from "vuex";

export default {
  components: {
    AdminRightPanelMessage
  },
  computed: {
    ...mapGetters({
      messages: "admin/messages",
      hasActiveConversation: "admin/hasActiveConversation"
    }),
    fallBackMessage() {
      if (!this.hasActiveConversation) {
        return "Please Select a Conversation";
      }
      return "No Messages";
    }
  },
  watch: {
    messages(value) {
      this.$nextTick(() => {
        // const ul = this.$refs.messagesContainer;
        // ul.scrollTop = ul.scrollHeight;
      });
    }
  }
};
</script>
