<template>
  <div id="questForm">
    <quest-set v-bind:rewards="rewardsRetrieved" v-bind:creationType="creationType"/>
    <quest
      v-bind:rewards="rewardsRetrieved"
      v-bind:creationType="creationType"
      v-bind:actionType="questActionTypeRetrived"
      v-bind:action="questActionRetrived"
    />
    <objective-list v-bind:creationType="creationType"/>
    <objective v-bind:objectives="objectivesRetrieved"/>
  </div>
</template>

<script>
import QuestSet from "./quest-components/QuestSet.vue";
import Quest from "./quest-components/Quest.vue";
import ObjectiveList from "./quest-components/ObjectiveList.vue";
import Objective from "./quest-components/Objective.vue";

export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    "quest-set": QuestSet,
    quest: Quest,
    "objective-list": ObjectiveList,
    Objective: Objective
  },
  data() {
    return {
      creationType: ["auto", "predefined"],
      rewardsRetrieved: [
        { desc: "reward1", val: "qr_26" },
        { desc: "reward2", val: "qr_31" },
        { desc: "reward3", val: "qr_32" },
        { desc: "reward4", val: "qr_33" }
      ],
      questActionTypeRetrived: ["Type1", "Type2", "Type3"],
      questActionRetrived: ["action1", "action2", "action3"],
      objectivesRetrieved: [
        { desc: "desc1", val: "ob_77" },
        { desc: "desc2", val: "ob_78" },
        { desc: "desc3", val: "ob_79" },
        { desc: "desc4", val: "ob_80" }
      ]
    };
  },
  created() {
    console.log(JSON.stringify(this.data));
  }
};
</script>

