<template>
  <ol>
    <li>
      <label>objectiveList creation</label>
      <select>
        <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
      </select>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    creationType: {
      type: Array,
      required: true
    }
  }
};
</script>

