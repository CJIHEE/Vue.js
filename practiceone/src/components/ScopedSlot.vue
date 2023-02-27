<template>
    
    <div>
        <slot name="type1" :text="범위슬롯test" :count="1"></slot>
      </div>
      <div>
        <slot name="type2" :numX="x" :numY="y"></slot>
      </div>
</template>

<script>

export default {

  name : "ScopedSlot",
  data() {
    return {
      x : 4, y: 5
    }
  }
}
    

   

</script>
