<template>
    <div>
        <input type="text" placeholder="First name" v-model="firstName">
        <input type="text" placeholder="Last name" v-model="lastName">
    </div>
    <PersonGreeting :firstName="firstName" :lastName="lastName" @callHero="callHero" />
</template>

<script>
import { ref } from '@vue/reactivity'
import PersonGreeting from './Gratings.vue'
    export default {
        name: 'PersonProps',
        components:{
            PersonGreeting,
        },
        setup(){
            const firstName = ref('')
            const lastName = ref('')

            function callHero(hero){
                alert(`Calling Hero ${hero}`);
            }

            return{
                firstName,lastName,callHero
            }
        }
    }
</script>

<style scoped>

</style>