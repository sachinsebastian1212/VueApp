<template>
  <div class="q-container">
    <b-button variant="danger" class="btn-del">X</b-button>
    <span class="q-leaf">
      <label>objectiveList creation</label>
      <select>
        <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
      </select>
    </span>
    <span class="q-internal">
      <div class="objectives">
        <h6 class="heading">{{heading}}</h6>
        <span v-for="child in jsonData.children" v-bind:key="child.id">
          <objective v-bind:jsonData="child"/>
        </span>
      </div>
    </span>
  </div>
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
      creationType: ["auto", "predefined"],
      heading:"Objectives"
    };
  }
};
</script>

