<template>
<hr>
    <div>
        <h2>Child C</h2>
    </div>
    <h2>Child Component C User Name {{userName}}</h2>
    <h2> child component user name by compostition api - {{childuserName}}</h2>
    <br>
    <!-- composition api ref and reactive -->
    <h2> child component by compostition api count - {{childCount}}</h2>
    <h2> child component hero name by compostition api - {{firstName}} {{lastName}}</h2>
    <button @click="increementCount">Increement count from child  </button>
</template>

<script>
import {inject, toRefs} from 'vue'
    export default {
        name: 'ChildC',
        setup(){
            const childuserName = inject('c_userName','Default User Name')
            const childCount = inject('c_count',0);
            const childHero = inject('c_hero',{});
            const increementCount = inject('increementCount');

            return{
                childuserName,
                childCount,
                ...toRefs(childHero),
                increementCount
            }
        },
        inject:['userName']
    }
</script>

<style scoped>

</style>