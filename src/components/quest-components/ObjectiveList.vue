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
        v-for="child in jsonData.children"
        v-bind:key="child.id"
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
      createBtnTxt: "Add Objective",
      new_id: 1
    };
  },
  methods: {
    handleAddButton(arr) {
      const obj = {
        type: "objective",
        id: "ob_77",
        db_id: "ob_77"
      };
      obj.id = "new_" + this.new_id++;
      arr.push(obj);
    },
    handleChildDelButton(data) {
      if (this.jsonData.children.length > 1) {
        this.$bvModal
          .msgBoxConfirm("Are you sure?")
          .then(value => {
            if (value === true)
              this.jsonData.children = this.jsonData.children.filter(obj1 => {
                return obj1.id !== data.id;
              });
          })
      } else {
        this.$bvModal
          .msgBoxOk("Cant delete when only one")
          .then(value => {
            this.boxOne = value;
          })
      }
    },
    DelButtonEvent(data) {
      this.$emit("delBtnClick", data);
    }
  }
};
</script>

