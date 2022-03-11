<template>
    <div>
        Options API Life Cycle Hooks
    </div>
</template>

<script>
    export default {
        name: 'LifeCyckeO',
        beforeCreate(){
            console.log('Options Lifecycle Before Create');
        },
        created(){
            console.log('Options Lifecycle created');
        },
        beforeMount(){
            console.log('Options Lifecycle before Mount');
        },
        mounted(){
            console.log('Options Lifecycle mounted');
        },
        beforeUpdate(){
            console.log('Options Lifecycle beforeUpdate');
        },
        updated(){
            console.log('Options Lifecycle updated');
        },
        beforeUnmount(){
            console.log('Options Lifecycle before Unmount');
        },
        unmounted(){
            console.log('Options Lifecycle unmounted');
        }
    }
</script>

<style scoped>

</style>