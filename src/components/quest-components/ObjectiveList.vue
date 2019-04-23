<template>
  <div class="q-container">
    <div class="q-leafs">
      <b-button variant="danger" class="btn-del">X</b-button>
      <h6 class="heading">{{heading}}</h6>
      <span class="q-leaf">
        <label>objectiveList creation</label>
        <select>
          <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
        </select>
      </span>
    </div>
    <div class="q-internal">
      <objective v-for="child in jsonData.children" v-bind:key="child.id" v-bind:jsonData="child"/>
    </div>
    <b-button variant="success" class="btn-new">{{createBtnTxt}}</b-button>
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
      heading: "Objective List",
      createBtnTxt: "Add Objective"
    };
  }
};
</script>

