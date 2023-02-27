<template>
    <ul>
        <li v-for="s in subs" v-bind:class="s.type" :key="s">
            {{name}}
            <tree :subs="s.subs"></tree>
        </li> 
   </ul>
  </template>
   
  <script>
  export default {
     name: 'treeGo',
     props: ['subs']
  } 
  </script>