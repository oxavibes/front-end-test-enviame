<template>
  <div id="app">
    <character-list></character-list>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    characterList: () => import("./components/CharacterList.vue"),
  },
};
</script>

<style></style>
