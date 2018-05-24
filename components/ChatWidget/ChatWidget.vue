<template>
  <div>
    <div class="lg:w-1/4 w-full border shadow fixed pin-r pin-b z-50"
         style="margin-bottom: 6.5rem;"
         v-show="showChat">
      <div class="flex">
        <!-- Chat box -->
        <div class="w-full flex flex-col h-80"
             v-if="messages.length > 0">
          <!-- Chat box header -->
          <div class="border-b flex px-6 items-center bg-blue-lightest py-3">
            <div class="flex flex-col">
              <h3 class="text-grey-darkest text-md mb-1 font-extrabold">Jerico Pulvera</h3>
            </div>
          </div>
          <!-- Chat logs -->
          <div class="px-6 py-4 flex-1 overflow-y-scroll h-64 w-full bg-white"
               ref="messagesContainer">
            <ChatWidgetMessage v-for="(message, index) in messages"
                               :key="index"
                               :message="message" />
          </div>
          <!-- Chat form -->
          <div class="flex rounded-lg border-2 border-grey overflow-hidden">
            <textarea v-model="message"
                      @keydown="inputHandler"
                      placeholder="Write your message..."
                      class="w-full h-16 resize-none"
                      style="outline: none;"></textarea>
          </div>
        </div>
        <div class="w-full flex flex-col h-80 "
             v-else>
          <div class="px-6 py-4 flex-1 h-64 w-full bg-white content-center">
            <form @submit.prevent="startConversation">
              <div class="mb-4">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                       id="email"
                       type="text"
                       placeholder="Enter your email"
                       v-model="email"
                       required>
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded w-full"
                        type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="cursor-pointer border border-green bg-green text-white rounded-full mb-8 mr-8 shadow fixed pin-r pin-b z-50"
         @click.prevent="showChat = !showChat">
      <div class="inline-block p-4 w-16 text-center select-none">
        <i class="fa fa-ellipsis-h fa-2x"
           v-if="!showChat"></i>
        <i class="fa fa-times fa-2x"
           v-else></i>
      </div>
    </div>
  </div>
</template>

<script>
import ChatWidgetMessage from "./ChatWidgetMessage";
import { mapGetters } from "vuex";
import { emailDbfy } from "@/utils";

export default {
  components: {
    ChatWidgetMessage
  },
  data: () => ({
    name: "",
    email: "",
    message: "",
    messages: [],
    showChat: false
  }),

  watch: {
    messages() {
      this.scrollToBottom();
    },
    showChat() {
      this.scrollToBottom();
    }
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        if (this.$refs.messagesContainer) {
          this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;
        }
      });
    },
    inputHandler(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        this.submitForm();
      }
    },
    submitForm() {
      if (this.message.trim()) {
        // this.messages.push({ user: this.name, message: this.message });
        this.$firebasedb.ref(`conversations/${emailDbfy(this.email)}`).push({
          name: this.name,
          message: this.message
        });

        this.$nextTick(() => {
          this.$refs.messagesContainer.scrollTop = this.$refs.messagesContainer.scrollHeight;
        });
      }
      this.message = "";
    },
    startConversation() {
      this.$firebasedb
        .ref(`conversations/${emailDbfy(this.email)}`)
        .on("child_added", snapshot => {
          this.messages.push({
            user: snapshot.val().name,
            message: snapshot.val().message
          });
        });
      this.messages.push({
        systemMessage: true,
        message: "Conversation Started"
      });
    }
  }
};
</script>

