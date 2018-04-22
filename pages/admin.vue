<template>
  <div class="container mx-auto antialiased m-4">
    <button class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
            @click="login"
            v-if="!authenticated">Login with Netlify Identity</button>
    <div class="w-full h-2 bg-green-dark"
         v-if="authenticated"></div>
    <div class="h-screen flex border border-grey rounded shadow-lg"
         v-if="authenticated">
      <AdminLeftPanel />
      <AdminRightPanel />
    </div>
  </div>
</template>

<script>
import AdminLeftPanel from "~/components/Admin/AdminLeftPanel";
import AdminRightPanel from "~/components/Admin/AdminRightPanel";
import { mapGetters } from "vuex";

export default {
  layout: "admin",
  components: {
    AdminLeftPanel,
    AdminRightPanel
  },
  methods: {
    login() {
      this.$netlifyIdentity.open();
    }
  },
  computed: {
    authenticated() {
      return true;
      return this.$netlifyIdentity.gotrue.currentUser();
    }
  }
  // created() {
  //   this.$auth.login({
  //     data: {
  //       email: "admin@admin.com",
  //       password: "1234"
  //     }
  //   });
  // }
};
</script>
