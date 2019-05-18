<template>
  <div class="config">
    <div id="edit-jsonData" v-show="!showTextArea">
      <b-button variant="dark" v-on:click="getJsonData(true)">edit JsonData</b-button>
    </div>
    <div id="save-jsonData" v-show="showTextArea">
      <b-button variant="primary" v-on:click="setJsonData()">save</b-button>
      <b-button variant="secondary" v-on:click="showTextArea=false">cancel</b-button>
    </div>
    <div>
      <textarea
        v-if="showTextArea"
        class="form-control expandable"
        v-model.lazy="displayedJsonData"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jsonData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showTextArea: false,
      displayedJsonData: "",
      notCompleteJsonWarn: false,
      use_db_ids: { qs: false, q: false, ol: false, o: true },
      autoIds: {}
    };
  },
  methods: {
    setJsonData() {
      try {
        var local_JsonData = JSON.parse(this.displayedJsonData);
        this.$emit('setJsonData',local_JsonData);
      } catch (error) {
        alert(error);
      }
    },
    getJsonData(needFormat) {
      this.showTextArea = true;
      this.autoIds = { qs: 1, q: 1, ol: 1, o: 1 };
      var local_JsonData = JSON.parse(JSON.stringify(this.jsonData));
      if (needFormat) {
        this.formatJsonData(local_JsonData);
        // console.log(local_JsonData);
        this.displayedJsonData = JSON.stringify(local_JsonData);
      }
    },
    formatJsonData(data) {
      data.forEach(obj => {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            if (key === "id")
              switch (obj.type) {
                case "questset":
                  obj.id = this.use_db_ids.qs
                    ? obj.db_id
                    : "qs_" + this.autoIds.qs++;
                  break;
                case "quest":
                  obj.id = this.use_db_ids.q
                    ? obj.db_id
                    : "q_" + this.autoIds.q++;
                  break;
                case "objectivelist":
                  obj.id = this.use_db_ids.ol
                    ? obj.db_id
                    : "ol_" + this.autoIds.ol++;
                  break;
                case "objective":
                  obj.id = this.use_db_ids.o
                    ? obj.db_id
                    : "ob_" + this.autoIds.o++;
                  break;
              }
            else if (element == "") notCompleteJsonWarn = true;
            else if (key === "children") this.formatJsonData(element);
          }
        }
      });
    }
  }
};
</script>

<style scoped>
div.config {
  border: 1px solid grey;
  margin: 20px;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
textarea {
  overflow-y: hidden;
  min-height: 200px;
}
</style>
