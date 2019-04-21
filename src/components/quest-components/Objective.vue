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
        <option
          v-for="opt in objectives"
          v-bind:key="opt.val"
          v-bind:selected="jsonData.id === opt.val"
        >{{opt.desc}}</option>
      </select>    
        </td>
      </tr>
    </table>
    
  </ol>
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
      tableHeading: ["Select objective"]
    };
  }
};
</script>

