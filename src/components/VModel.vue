<template>
<h1>Name {{fName}} {{lName}}</h1>
    <div>
        <input type="text" placeholder="First Name" v-model="fName">
        <input type="text" placeholder="Last Name" v-model="lName">
<br><br>
        <!-- composition API to V Model -->
        <input type="text" name="" id="" placeholder="Hero Name" v-model="heroName">
        <input type="text" name="" id="" placeholder="First Name" v-model="firstName">
        <input type="text" name="" id="" placeholder="Last Name" v-model="lastName">
    </div>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/reactivity'
    export default {
        name:'VModel',
        setup(){
            const heroName = ref('');
            const state = reactive({
                firstName: '',
                lastName: '',
            });

            return{
                heroName,
                ...toRefs(state)

                }
        },
        data(){
            return{
                fName: '',
                lName: '',
            }
        }
    }
</script>

<style scoped>

</style>