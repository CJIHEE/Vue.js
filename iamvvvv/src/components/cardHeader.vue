<template>
    <div>
       
        <CheckButton @checked="onChecked"/>
        나나

    </div>
</template>


<script>
import CheckButton from './CheckButton.vue';

export default {
    name:'CheckButton',
    components : {
        CheckButton
    },

    methods: {
       onChecked() {
            this.$emit('checked')
        }
    }

}
</script>


<style scoped>


</style>