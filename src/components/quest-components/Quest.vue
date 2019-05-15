<template>
  <div class="q-container">
    <div class="q-leafs">
      <b-button variant="danger" class="btn-del" v-on:click="DelButtonEvent(jsonData)">X</b-button>
      <h6 class="heading">{{heading}}</h6>
      <span class="q-leaf">
        <label>Quest creation</label>
        <select>
          <option v-for="opt in creationType" v-bind:key="opt">{{opt}}</option>
        </select>
      </span>
      <span class="q-leaf">
        <label>Title</label>
        <input type="text" v-model="jsonData.title">
      </span>
      <span class="q-leaf">
        <label>Description</label>
        <input type="text" v-model="jsonData.description">
      </span>
      <span class="q-leaf">
        <label>Reward</label>
        <select v-model="jsonData.reward">
          <option v-for="opt in rewards" v-bind:key="opt.val" v-bind:value="opt.val">{{opt.desc}}</option>
        </select>
      </span>
      <span class="q-leaf">
        <label>Quest Action Type</label>
        <select v-model="jsonData.questActionType">
          <option v-for="opt in actionType" v-bind:key="opt" v-bind:value="opt">{{opt}}</option>
        </select>
      </span>
      <span class="q-leaf">
        <label>Quest Action</label>
        <select v-model="jsonData.questAction">
          <option v-for="opt in action" v-bind:key="opt" v-bind:value="opt">{{opt}}</option>
        </select>
      </span>
    </div>
    <div class="q-internal">
      <objective-list
        v-for="child in jsonData.children"
        v-bind:key="child.id"
        v-bind:jsonData="child"
        v-on:delBtnClick="handleChildDelButton($event)"
      />
    </div>
    <b-button
      variant="success"
      class="btn-new"
      v-on:click="handleAddButton(jsonData.children)"
    >{{createBtnTxt}}</b-button>
  </div>
</template>

<script>
import ObjectiveList from "./ObjectiveList.vue";
export default {
  components: {
    "objective-list": ObjectiveList
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
      rewards: [
        { desc: "reward1", val: "qr_26" },
        { desc: "reward2", val: "qr_31" },
        { desc: "reward3", val: "qr_32" },
        { desc: "reward4", val: "qr_33" }
      ],
      actionType: ["Type1", "Type2", "Type3"],
      action: ["action1", "action2", "action3"],
      heading: "Quest",
      createBtnTxt: "Add ObjectiveList",
      new_id: 1
    };
  },
  methods: {
    handleAddButton(arr) {
      const obj = {
        type: "objectivelist",
        id: "ol_1",
        children: [
          {
            type: "objective",
            id: "ob_77",
            db_id: "ob_77"
          }
        ]
      };
      obj.id = "new_" + this.new_id++;
      arr.push(obj);
    },
    handleChildDelButton(data) {
            if (this.jsonData.children.length > 1) {
        this.$bvModal
          .msgBoxConfirm("Are you sure?")
          .then(value => {
            if (value === true)
              this.jsonData.children = this.jsonData.children.filter(obj1 => {
                return obj1.id !== data.id;
              });
          })
          .catch(err => {
            // An error occurred
          });
      } else {
        this.$bvModal
          .msgBoxOk("Cant delete when only one")
          .then(value => {
            this.boxOne = value;
          })
          .catch(err => {
            // An error occurred
          });
      }
    },
    DelButtonEvent(data) {
      this.$emit("delBtnClick", data);
    }
  }
};
</script>
