<template>
  <div>
    <div class="mt-16 mx-8 h-48 flex justify-center text-center shadow-lg bt-1 border-grey rounded border border-transparent bg-grey-lightest">
      <div class="p-4 flex flex-col flex-grow relative">
        <div class="rounded-full relative -mt-16">
          <img src="/profile-picture.jpg"
               class="rounded-full max-w-xs h-32 p-2"
               alt="profile-picture">
        </div>
        <h1 class="text-black font-bold">JERICO A. PULVERA</h1>
        <h2 class="text-black-light ">Web Developer</h2>
      </div>
    </div>
    <div class="mt-8 mx-8 shadow-lg bt-1 border-grey rounded border border-transparent bg-grey-lightest relative block">
      <div class="flex-col flex justify-center text-center overflow-y-auto">
        <h1 class="mt-4 italic">PROJECTS</h1>
        <div class="flex mb-4 flex-wrap">
          <div class="flex-1 m-8">
            <ProjectCard/>
          </div>
          <div class="flex-1 m-8">
            <ProjectCard/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "~/components/ProjectCard";

export default {
  components: {
    ProjectCard
  }
};
</script>

