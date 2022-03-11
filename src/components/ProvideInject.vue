<template>
    <div>
        <h2>Parent Component {{name}}</h2>
        <h2>Parent Component count {{count}}</h2>
        <h2>Parent Component hero {{firstName}} {{lastName}}</h2>

        <button @click="increementCount">Increment Count</button>
        <ChilldA />
    </div>
</template>

<script>
import ChilldA from './ChildA.vue'
import { provide, reactive, ref, toRefs } from 'vue'
    export default {
        name: 'ProvideInject',
        components:{
            ChilldA
        },
        setup(){
            provide('c_userName','Shakil');
            //import from vue is provide and pass first is username and last is values

            const count = ref(0);
            function increementCount(){
                count.value ++
            }
            const state = reactive({
                firstName: 'Bruce',
                lastName: 'Wayne',
            })

            provide('c_count',count);
            provide('c_hero',state);
            provide('increementCount',increementCount);

            return {
                count,...toRefs(state),increementCount
            }
        },
        data(){
            return{
                name: 'Vishwas',
            }
        },
        provide(){
            return{
                userName: this.name,
            }
        }

    }
</script>

<style scoped>

</style>