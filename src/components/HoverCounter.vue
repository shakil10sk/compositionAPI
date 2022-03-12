<template>
    <div>
        <h2 @mouseover="increementcount"> Hover {{count}} times</h2>
    </div>
</template>

<script>
// import counterMixins from '../mixins/counter'
import useCounter from '../composables/useCounter'

    export default {
        name: 'HoverCounter',
        setup(){
            const {count,increementcount} = useCounter();
            return{
                count,increementcount
            }
        }
        // mixins: [counterMixins],
    }
</script>

<style scoped>

</style>