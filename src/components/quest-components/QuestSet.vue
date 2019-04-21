<template>
  <ol>
    <b-button variant="danger" class="btn-del">X</b-button>
    <table>
      <tr>
        <td v-for="(data,index) in tableHeading" v-bind:key="index">{{data}}</td>
      </tr>
      <tr>
        <td>
          <select>
            <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
          </select>
        </td>
        <td>
          <select>
            <option v-for="opt in rewards" v-bind:key="opt.val">{{opt.desc}}</option>
          </select>
        </td>
        <td>
          <input type="number" value="1">
        </td>
      </tr>
    </table>
    
    <li>
      <ol class="quests">
        <h6 class="heading">{{heading}}</h6>
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
      ],
      heading: "Quests",
      tableHeading: ["Questset creation", "Reward", "Difficulty"]
    };
  }
};
</script>
