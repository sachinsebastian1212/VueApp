<template>
  <div id="questForm">
    <div class="quest-sets">
      <quest-set v-for="obj in jsonData" v-bind:key="obj.id" v-bind:jsonData="obj"/>
      <b-button variant="success" class="btn-new">{{createBtnTxt}}</b-button>
    </div>
    
  </div>
</template>

<script>
import QuestSet from "./quest-components/QuestSet.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

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
      createBtnTxt:"Add QuestSet"
    };
  }
};
</script>

<style >

div.q-container {
  position: relative;
  border: 1px solid grey;
  margin-top: 10px;
  margin-right: 10px;
  padding: 5px 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

div.q-internal{
  margin-left: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
 span.q-leaf {
  padding: 4px 7px;
  display: inline-block;
}



h6.heading {
  position: absolute;
  top: -9px;
  left: 7px;
  background-color: #eee;
  padding: 0 5px;
  z-index: 1;
}

button.btn-del {
  position: absolute;
  right: 0;
  top: 0;
  padding: 2px 8px;
  z-index: 1;
}

button.btn-new{
  padding: 2px 8px;
  margin-top:10px;
  width: 150px;
}
</style>

