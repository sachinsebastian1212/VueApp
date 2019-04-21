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
      </tr>
    </table>
    
    <li>
      <ol class="objectives">
        <h6 class="heading">{{heading}}</h6>
        <li v-for="child in jsonData.children" v-bind:key="child.id">
          <objective v-bind:jsonData="child"/>
        </li>
      </ol>
    </li>
  </ol>
</template>

<script>
import Objective from "./Objective.vue";
export default {
  components: {
    objective: Objective
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
      heading: "Objectives",
      tableHeading: ["Quest creation"]
    };
  }
};
</script>

