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
          <input type="text">
        </td>
        <td>
          <input type="text">
        </td>
        <td>
          <select>
            <option v-for="opt in rewards" v-bind:key="opt.val">{{opt.desc}}</option>
          </select>
        </td>
        <td>
          <select>
            <option v-for="opt in actionType" v-bind:key="opt">{{opt}}</option>
          </select>
        </td>
        <td>
          <select>
            <option v-for="opt in action" v-bind:key="opt">{{opt}}</option>
          </select>
        </td>
      </tr>
    </table>
    
    <li>
      <ol class="objective-lists">
        <h6 class="heading">{{heading}}</h6>
        <li v-for="child in jsonData.children" v-bind:key="child.id">
          <objective-list v-bind:jsonData="child"/>
        </li>
      </ol>
    </li>
  </ol>
</template>

<script>
import ObjectiveList from "./ObjectiveList.vue";
export default {
  components: {
    "objective-list": ObjectiveList
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
      actionType: ["Type1", "Type2", "Type3"],
      action: ["action1", "action2", "action3"],
      heading: "Objective Lists",
      tableHeading: [
        "Quest creation",
        "Title",
        "Description",
        "Reward",
        "Quest Action Type",
        "Quest Action"
      ]
    };
  }
};
</script>
