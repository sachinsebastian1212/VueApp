<template>
  <ol>
    <li>
      <label>Questset creation</label>
      <select>
        <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
      </select>
    </li>
    <li>
      <label>Reward</label>
      <select>
        <option v-for="opt in rewards" v-bind:key="opt.val">{{opt.desc}}</option>
      </select>
    </li>
    <li>
      <label>Difficulty</label>
      <input type="number" value="1">
    </li>
    <li>
      <ol class="quests">
        <li v-for="child in jsonData.children" v-bind:key="child.id">
          <quest v-bind:jsonData="child"/>
        </li>
      </ol>
    </li>
  </ol>
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
      ]
    };
  }
};
</script>
