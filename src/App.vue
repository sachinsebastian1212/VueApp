<template>
  <div id="app">
    <quest-form v-bind:data="data"/>
  </div>
</template>

<script>
import QuestForm from "./components/QuestForm.vue";
import Data from "./QuestCreationData.json";
export default {
  name: "app",
  components: {
    "quest-form": QuestForm
  },
  data() {
    return {
      data: Data
    };
  }
};
</script>

