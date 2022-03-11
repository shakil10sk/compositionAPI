<template>
    <div>
        <hr>
        <h2>Child B</h2>
        <h2>From Child B inject method to use count- {{childBCount}}</h2>
        <button @click="Increement">child B count</button>
    </div>
    <ChildC />
</template>

<script>
import ChildC from './ChildC.vue'
import {inject} from 'vue'
    export default {
        name: 'ChildB',
        setup(){
            const childBCount = inject('c_count',0);
            const Increement = inject('increementCount');

            return{
                Increement,childBCount
            }
        },
        components:{
            ChildC
        }
    }
</script>

<style scoped>

</style>