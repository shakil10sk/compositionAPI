<template>
    <div>
        <button @click="increementcount">Clicked {{count}} times</button>
    </div>
</template>

<script>
// import CounterMixin from '../mixins/counter'
import useCounter from '../composables/useCounter'
    export default {
        name: 'ClickCounter',
        setup(){
            const {count,increementcount} = useCounter(100,10);
            return{
                count,increementcount
            }
        }
        // mixins:[CounterMixin]
    }
</script>

<style scoped>

</style>