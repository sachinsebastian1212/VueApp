<template>
  <div id="questForm">
    <ol class="quest-sets">
      <li v-for="obj in jsonData" v-bind:key="obj.id">
        <quest-set v-bind:jsonData="obj"/>
      </li>
    </ol>
  </div>
</template>

<script>
import QuestSet from "./quest-components/QuestSet.vue";
export default {
  components: {
    "quest-set": QuestSet
  },
  props: {
    jsonData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      creationType: ["auto", "predefined"]
    };
  }
};
</script>

