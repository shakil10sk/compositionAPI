<template>
    <div>
        <!-- <h2>{{fname}}</h2>
        <input type="text" v-model="fname">
        <br><br> -->
        <input type="text" v-model="firstName"><br>
        <input type="text" v-model="lastName">
        <br><br>
        <input type="text" v-model="fName">
        <input type="text" v-model="lName">
        <br>
        <input type="text" v-model="options.heroName">
    </div>

</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
import _ from 'lodash'
    export default {
        name: 'WatchCompositionAPI',
        setup(){
            const firstName = ref('');
            const lastName = ref('');

            const state = reactive({
                fName: '',
                lName: '',
                options:{
                    heroName: '',
                },
            });
// if we print like this. it will give us the new value and the old value are the same
            // watch(state,(newValue,oldValue)=>{
            //     console.log("Reactive Old First Name Value ",oldValue.fName);
            //     console.log("Reactive New First Name Value ",newValue.fName);
            //     console.log("Reactive Old Last Name Value ",oldValue.lName);
            //     console.log("Reactive New Last Name Value ",newValue.lName);
            // })

            // if we use this way it give us the new value which we type and before type we get the old value
            // watch(()=>{
            //     return{
            //         ...state
            //         // declare as spread operator
            //     }
            // },(newValue,oldValue)=>{
            //     console.log("Reactive Old First Name Value ",oldValue.fName);
            //     console.log("Reactive New First Name Value ",newValue.fName);

            //     console.log("Reactive Old Last Name Value ",oldValue.lName);
            //     console.log("Reactive New Last Name Value ",newValue.lName);
            // })

            // For Only We Can use the fName propertis watcher as like this

            // watch(
            //     ()=>state.fName,
            // (newValue,oldValue)=>{
            //     console.log("Reactive Old First Name Value ",oldValue);
            //     console.log("Reactive New First Name Value ",newValue);

            // for the option heroname properties which is in state as a object. thats call a wathc deep
            watch(
                () => _.cloneDeep(state.options),
                // _.cloneDeep() is used for clone deeply the state options object to watch
            function(newValue,oldValue){
                console.log("Deep Watchers Old First Name Value ",oldValue);
                console.log("Deep Watchers New First Name Value ",newValue);

                // console.log("Reactive Old Last Name Value ",oldValue.lName);
                // console.log("Reactive New Last Name Value ",newValue.lName);
            },
               {
                    deep:true,
               }
                // here the use of deep it gives us the old and the new values are the same value so we can use the npm comment is npm add lodash
            )



            watch([firstName,lastName],
                (newValues,oldValues) => {
                    console.log("Ref First Name New value ",newValues[0]);
                    console.log("Ref  First Name Old value ",oldValues[0]);

                    console.log("Ref Last Name New value ",newValues[1]);
                    console.log("Ref  Last Name Old value ",oldValues[1]);
                },
                {
                    imediate: true,
                }
                // for this paremeter imediate can tall the watuch function to react imediate as the page load. before the paream it only load when the value stored
            )

            return{
                firstName,
                lastName,
                ...toRefs(state),
            }
        },
        data(){
            return{ 
                // fname:'',
            }
        },
        watch:{
            // fname(newValue,oldValue){
            //     console.log("New Values: ",newValue);
            //     console.log("New Values: ",oldValue);
            // }
        }
    }
</script>

<style scoped>

</style>