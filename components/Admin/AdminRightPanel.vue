<template>
  <!-- Right -->
  <div class="w-2/3 border flex flex-col">
    <!-- Header -->
    <AdminRightPanelHeader />
    <!-- Messages -->
    <AdminRightPanelMessages />
    <!-- Input -->
    <AdminRightPanelInput v-if="hasActiveConversation" />
  </div>
</template>

<script>
import AdminRightPanelMessages from "./AdminRightPanelMessages";
import AdminRightPanelHeader from "./AdminRightPanelHeader";
import AdminRightPanelInput from "./AdminRightPanelInput";
import { mapGetters } from "vuex";

export default {
  components: {
    AdminRightPanelHeader,
    AdminRightPanelMessages,
    AdminRightPanelInput
  },
  computed: {
    ...mapGetters({
      hasActiveConversation: "admin/hasActiveConversation"
    })
  }
};
</script>
