<template>
    <h2>Options - {{ o_firstName }}</h2>
    <h2>Options - {{ o_firstName }} {{o_lastName}} a.k.a  {{o_heroName}}</h2>

<br>
<br>


    <h2>Composition firstName  - {{ c_firstName }}</h2>
    <h2>Composition last name - {{ c_lastName }}</h2>
    <h2>Composition hero name - {{ c_heroName }}</h2>
    <h2>Composition greet - {{ greet }}</h2>
    <h2>Composition greet full name - {{ c_firstName }} {{c_lastName}} a.k.a  {{c_heroName}}</h2>
    <br>

    <h2>Composition greet reactive - {{ state.firstName }} {{state.lastName}} a.k.a  {{state.heroName}}</h2>
    <h2>Compostion Reactive greet message - {{reactiveGreet}}</h2>

</template>

<script>
import { ref,reactive } from '@vue/reactivity'
    export default {
        name : 'DataVue',
        setup(){
            const c_firstName = ref('Clark');
            const c_lastName = ref('Kent');
            const c_heroName = ref('Superman');

            // c_firstName.value = 'Diana';
            const greet = `Hello ${c_firstName.value}`;
            const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`;

            const state =  reactive(
                {
                firstName: "princes",
                lastName: "Diana",
                heroName: "wonder woman",
            });
            const reactiveGreet = `Hello ${state.firstName} ${state.lastName} a.k.s ${state.heroName}`;

            return {
                c_firstName,
                c_lastName,
                c_heroName,
                greet,
                greetHero,
                state,
                reactiveGreet
            }
        },
        data(){
            return {
                o_firstName: 'Bruce',
                o_lastName: 'Wayne',
                o_heroName: 'Batman',

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>