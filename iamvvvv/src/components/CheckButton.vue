<template>
    <div>
      
       <span class="icon" :class="{checked: checked}" @click="check">
        λμμΌμ§
    </span>

    </div>
</template>


<script>
export default {
    name:'CheckButton',
    data() {
        return {
            checked : false
        }
    },
    methods: {
        check() {
            this.checked = !this.checked
            this.$emit('checked')
        }
    },

}
</script>


<style scoped>


</style>