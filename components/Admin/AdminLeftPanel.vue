<template>
  <!-- Left -->
  <div class="w-1/3 border flex flex-col">
    <!-- Contacts -->
    <div class="bg-grey-lighter flex-1 overflow-auto">
      <AdminLeftPanelConversation v-for="(conversation, index) in conversations"
                                  :conversation="conversation"
                                  :key="`conversation-${index}`" />
    </div>
  </div>
</template>

<script>
import AdminLeftPanelConversation from "./AdminLeftPanelConversation";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    AdminLeftPanelConversation
  },
  created() {
    this.getConversations();
  },
  computed: {
    ...mapGetters({
      conversations: "admin/conversations"
    })
  },
  methods: {
    ...mapActions({
      getConversations: "admin/getConversations"
    })
  }
};
</script>
