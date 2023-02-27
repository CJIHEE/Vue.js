<template>
  <div class="breakfast">
    아침 
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
  name: 'breakfastMenu',
  data() {
    return {
      selectmenu : "선택하기",
      menuList : [
      {name : "김치찌개"},
      {name : "된장찌개"},
      {name : "김치볶음밥"}
       ]
    }
  },
  methods: {
    registerMenu() {
      this.$emit('regBreakfast', this.selectmenu);
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
