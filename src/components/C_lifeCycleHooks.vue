<template>
    <div>
        <h2>Compostition Hooks</h2>
    </div>
</template>

<script>
import {
    onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnMounted
} from 'vue'

    export default {
        name: 'LifeCycleC',

        setup(){
            onBeforeMount(()=>{console.log('Compostition Hooks Lifecycle before Mount')})
            
        onMounted(()=>{console.log('Compostition Hooks Lifecycle mounted')})
        
        onBeforeUpdate(()=>{console.log('Compostition Hooks Lifecycle beforeUpdate')})

        onUpdated(()=>{console.log('Compostition Hooks Lifecycle updated')})

        onBeforeUnmount(()=>{console.log('Compostition Hooks Lifecycle before Un mount')})

        onUnMounted(()=>{console.log('Compostition Hooks Lifecycle on Un Mounted')})
        }
    }
</script>

<style scoped>

</style>