<template>
<ScopedSlot>
  <template slot="type1" scope="first">
    <div>
      {{first.text}}
    </div>
  </template>

  <template slot="type2" scope="second">


</template>
</ScopedSlot>
</template>

<script>
import ScopedSlot from './components/ScopedSlot.vue';
  
export default {
  components: {
    ScopedSlot
  }
}
</script>

