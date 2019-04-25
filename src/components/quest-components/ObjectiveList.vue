<template>
  <div class="q-container">
    <div class="q-leafs">
      <b-button variant="danger" class="btn-del" v-on:click="DelButtonEvent(jsonData)">X</b-button>
      <h6 class="heading">{{heading}}</h6>
      <span class="q-leaf">
        <label>objectiveList creation</label>
        <select>
          <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
        </select>
      </span>
    </div>
    <div class="q-internal">
      <objective
        v-for="(child,index) in jsonData.children"
        v-bind:key="index"
        v-bind:jsonData="child"
        v-on:delBtnClick="handleChildDelButton($event)"
      />
    </div>
    <b-button
      variant="success"
      class="btn-new"
      v-on:click="handleAddButton(jsonData.children)"
    >{{createBtnTxt}}</b-button>
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
  },
  methods: {
    handleAddButton(arr) {
      //cheat
      const obj = {
        type: "objective",
        id: "ob_78"
      };
      arr.push(obj);
    },
    handleChildDelButton(obj) {
      console.log(this.jsonData.children.length);
      if (this.jsonData.children.length > 1) this.jsonData.children.pop(obj);
    },
    DelButtonEvent(data) {
      this.$emit("delBtnClick", data);
    }
  }
};
</script>

