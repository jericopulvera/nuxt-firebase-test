<template>
  <div>
    <ChatWidget />
    <nav class="relative select-none bg-transparent lg:flex flex justify-center lg:items-stretch w-full shadow-md">
      <div class="flex flex-no-shrink justify-center items-stretch h-12 text-2xl">
        <a href="https://twitter.com/JericoPulvera"
           target="_blank"
           class="relative px-3 leading-normal text-black no-underline flex items-center">
          <i class="fa fa-twitter"></i>  
        </a>
        <a href="https://www.linkedin.com/in/jericopulvera"
           class="relative px-3 leading-normal text-black no-underline flex items-center">
          <i class="fa fa-linkedin"></i>  
        </a>
        <a href="https://github.com/jericopulvera"
           target="_blank"
           class="relative p-3 leading-normal text-black no-underline flex items-center">
          <i class="fa fa-github"></i>  
        </a>
      </div>
    </nav>
    <div class="container mx-auto">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import ChatWidget from "~/components/ChatWidget/ChatWidget";
export default {
  components: {
    ChatWidget
  }
};
</script>
