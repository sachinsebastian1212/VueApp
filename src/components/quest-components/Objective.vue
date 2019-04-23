<template>
  <div class="q-container">
    <b-button variant="danger" class="btn-del">X</b-button>
    <h6 class="heading">{{heading}}</h6>
    <div class="q-leafs">
      <span class="q-leaf">
        <label>Select objective</label>
        <select>
          <option
            v-for="opt in objectives"
            v-bind:key="opt.val"
            v-bind:selected="jsonData.id === opt.val"
          >{{opt.desc}}</option>
        </select>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jsonData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      objectives: [
        { desc: "desc1", val: "ob_77" },
        { desc: "desc2", val: "ob_78" },
        { desc: "desc3", val: "ob_79" },
        { desc: "desc4", val: "ob_80" }
      ],
      heading: "Objective"
    };
  }
};
</script>

