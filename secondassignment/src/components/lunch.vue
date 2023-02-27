<template>
  <div class="lunchfast">
    점심 
    <select v-model="selectmenu" style="margin-right: 10px;">
      <option v-for="(item, index) in menuList" v-bind:key="index" :value="item.name">
        {{ item.name }}
      </option>
    </select>
    <button @click="registerMenu">등록</button>


  </div>
</template>

<script>
export default {
  name: 'lunchMenu',
  data() {
    return {
      selectmenu : "",
      menuList : [
      {name : "오징어짬뽕"},
      {name : "짜장면"},
      {name : "탕수육"}
       ]
    }
  },
  methods: {
    registerMenu() {
      this.$emit('reglunch', this.selectmenu);
      console.log("this.selectmenu: " +this.selectmenu);
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
