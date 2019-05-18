<template>
  <div id="app">
    <quest-config v-on:setJsonData="setJsonData($event)" v-bind:jsonData="data"/>
    <quest-form v-bind:jsonData="data"/>
  </div>
</template>

<script>
import QuestConfig from "./components/QuestConfig.vue";
import QuestForm from "./components/QuestForm.vue";
import Data from "./QuestCreationData.json";
export default {
  name: "app",
  components: {
    "quest-config": QuestConfig,
    "quest-form": QuestForm
  },
  data() {
    return {
      data: Data
    };
  },
  methods: {
    setJsonData(jsonData) {
      this.data = jsonData;
    }
  }
};
</script>

