<template>
<hr>
    <div>
        <h2>Component A</h2>
    </div>
    <ChildB />
</template>

<script>
import ChildB from './ChildB.vue'
    export default {
        name: 'ChildA',
        components:{
            ChildB
        }

    }
</script>

<style scoped>

</style>