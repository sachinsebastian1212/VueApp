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
      <input type="number" value="1"/>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    rewards: {
      type: Array,
      required:true
    },
    creationType: {
      type: Array,
      required:true
    }
  },
  data() {
    return {};
  }
};
</script>
