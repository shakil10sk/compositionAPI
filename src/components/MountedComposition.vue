<template>
    <div>
        <input type="text" name="" id="" ref="inputRefs">
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
    export default {
        name:'MountedComposition',
        // for composition api
        setup(){
            const inputRefs = ref(null);

            onMounted(()=>{
                inputRefs.value.focus();
            })
            
            return{
                inputRefs
            }
        },
//for options api
    //    mounted(){
    //        this.$refs.inputRefs.focus()
    //    }
       //mounted generally use for works when the page is load

    }
</script>

<style scoped>

</style>