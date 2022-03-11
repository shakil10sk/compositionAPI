<template>
    <div>
        <h1>{{name}}</h1>
    </div>
</template>

<script>
import {ref} from 'vue'
    export default {
        name: 'DemoOne',
        setup(){
            // let name = 'Vishwas'
            const name = ref('Vishwas');



            setTimeout(()=>{
                // name = 'Codevoulution'
                // console.log(name);
                // if we use only reactive setup function and not use ref it only can print the first value not print the again declare value. for that we can use ref function to use whole applciation variable value change
                name.value = 'Codevoulution'
                console.log(name);


            },2000)

            return{
                name
            }
        }
    }
</script>

<style scoped>

</style>