<template>
    <div>
        <h1>Hello {{firstName}} {{lastName}}</h1>
        <br>
        <h2>FullName is {{fullName}}</h2>
        <button @click="sendEvent">Call Heros </button>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
    export default {
        name: 'GreetingsPerson',
        setup(props,context){
            console.log(context);
            const fullName = computed(()=>{
                return `${props.firstName} ${props.lastName}`
            })
// if we need to use props then we need to pass a setup function paremeter is props

                function sendEvent(){
                    context.emit('callHero',fullName.value)
                }
            return{
                fullName,
                sendEvent
            }
        },
        props:['firstName','lastName'],
        // computed:{
        //     fullName(){
        //         return `${this.firstName} ${this.lastName}`
        //     }
        // }
        emits:['callHero']
    }
</script>

<style scoped>

</style>