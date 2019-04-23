<template>
  <div class="q-container">
    <div class="q-leafs">
      <b-button variant="danger" class="btn-del">X</b-button>
      <h6 class="heading">{{heading}}</h6>
      <span class="q-leaf">
        <label>Questset creation</label>
        <select>
          <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
        </select>
      </span>
      <span class="q-leaf">
        <label>Reward</label>
        <select>
          <option v-for="opt in rewards" v-bind:key="opt.val">{{opt.desc}}</option>
        </select>
      </span>
      <span class="q-leaf">
        <label>Difficulty</label>
        <input type="number" value="1">
      </span>
    </div>

    <div class="q-internal">
      <quest v-for="child in jsonData.children" v-bind:key="child.id" v-bind:jsonData="child"/>
    </div>
    <b-button variant="success" class="btn-new">{{createBtnTxt}}</b-button>
  </div>
</template>

<script>
import Quest from "./Quest.vue";
export default {
  components: {
    quest: Quest
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
      rewards: [
        { desc: "reward1", val: "qr_26" },
        { desc: "reward2", val: "qr_31" },
        { desc: "reward3", val: "qr_32" },
        { desc: "reward4", val: "qr_33" }
      ],
      heading: "Quest set",
      createBtnTxt: "Add Quest"
    };
  }
};
</script>
