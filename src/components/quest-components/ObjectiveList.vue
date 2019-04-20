<template>
  <ol>
    <li>
      <label>objectiveList creation</label>
      <select>
        <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
      </select>
    </li>
    <li>
      <ol class="objectives">
        <li v-for="child in jsonData.children" v-bind:key="child.id">
          <objective v-bind:jsonData="child"/>
        </li>
      </ol>
    </li>
  </ol>
</template>

<script>
import Objective from "./Objective.vue";
export default {
  components: {
    objective: Objective
  },
  props: {
    jsonData: {
      type: Object,
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

