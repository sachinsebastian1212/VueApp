<template>
  <ol>
    <li>
      <label>Select objective </label>
      <select>
        <option v-for="opt in objectives" v-bind:key="opt.val">{{opt.desc}}</option>
      </select>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    objectives: {
      type: Array,
      required: true
    }
  }
};
</script>

