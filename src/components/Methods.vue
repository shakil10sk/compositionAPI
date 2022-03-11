<template>
    <div>
        <h2>Methods Vue Component as Option APi</h2>
        <h2>{{name}}</h2>
        <button @click="setName">Change Name</button>
    </div>
    <div>
        <h1>Composotion API to use function as replcae as methods object from options api</h1>
        <h1>{{count}}</h1>
        <button @click="setCount()">increement Number</button>
        <h3>firstName: {{first}} lastName: {{last}}</h3>
        <button @click="changeName">change Name</button>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity';
    export default {
        name : 'MethodesVue',
        /*
            it is used for composotion api to use methods in setup function
         */
        setup(){
            const count = ref(0);

            function setCount(){
                count.value += 1;
            }

            const state = reactive({
                first:'Shakil',
                last:'Hossain'
            });

            function changeName(){
                state.first = "Hasan";
                state.last = "zaman";
            }
            

            return{count,setCount,...toRefs(state),changeName}
            // here ...toRefs() use for speread operator to print all object property
        },
        // it is manually Option api to use data and methods
        data(){
            return{
                name: 'Vishwas',
            }
        },
        methods:{
            setName(){
                this.name = 'Codevolution';
            }
        },
    }
</script>

<style scoped>

</style>