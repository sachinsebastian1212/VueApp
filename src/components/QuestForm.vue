<template>
  <div id="questForm">
    <ol class="quest-sets">
      <h6 class="heading">{{heading}}</h6>
      <li v-for="obj in jsonData" v-bind:key="obj.id">
        <quest-set v-bind:jsonData="obj"/>
      </li>
    </ol>
  </div>
</template>

<script>
import QuestSet from "./quest-components/QuestSet.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  components: {
    "quest-set": QuestSet
  },
  props: {
    jsonData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      creationType: ["auto", "predefined"],
      heading:"Quest sets"
    };
  }
};
</script>

<style>
ol{
  position: relative;
  border:1px solid grey;
  margin-top: 10px;
  padding: 5px 40px;
}

h6.heading{
position: absolute;
top:5px;
left: 47px;
background-color:#eee;
padding: 0 5px;
z-index: 1;
}

button.btn-del{
  position: absolute;
  right: 0;
  top:0;
  padding: 2px 8px;
  z-index: 1;
}
</style>

