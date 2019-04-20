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
  </ol>
</template>

<script>
export default {
  props: {
    rewards: {
      type: Array,
      required: true
    },
    creationType: {
      type: Array,
      required: true
    },
    actionType: {
      type: Array,
      required: true
    },
    action: {
      type: Array,
      required: true
    }
  }
};
</script>
