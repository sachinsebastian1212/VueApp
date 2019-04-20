<template>
  <ol>
    <li>
      <label>Quest creation</label>
      <select>
        <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
      </select>
    </li>
    <li>
      <label>Title</label>
      <input type="text">
    </li>
    <li>
      <label>Description</label>
      <input type="text">
    </li>
    <li>
      <label>Reward</label>
      <select>
        <option v-for="opt in rewards" v-bind:key="opt.val">{{opt.desc}}</option>
      </select>
    </li>
    <li>
      <label>Quest Action Type</label>
      <select>
        <option v-for="opt in actionType" v-bind:key="opt">{{opt}}</option>
      </select>
    </li>
    <li>
      <label>Quest Action</label>
      <select>
        <option v-for="opt in action" v-bind:key="opt">{{opt}}</option>
      </select>
    </li>
    <li>
      <ol class="objective-lists">
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
      action: ["action1", "action2", "action3"]
    };
  }
};
</script>
