<template>
  <div>
    <!-- <h2>{{ state.firstName }} {{ state.lastName }}</h2> -->
    <!-- we can only use the firstName and lastName by using in the setup return object -->
    <h2>{{ firstName }} {{ lastName }}</h2>
    <h2>{{ fname }} {{ lname }}</h2>

  </div>
</template>

<script>
import { reactive,toRefs } from '@vue/reactivity';

/*
    we can use setup function for data rendering like data function. data function is in vue 2 and vue 3 composition api add as new feture in vue 3.
    in that composotion api has a function name is setup() like data. it has two methode name is ref() and reactive()
    the ref() function parameter accept string,number,bollean,float etc. 
    the reactive() function perameter only accept object as perameter
*/
export default {
  name: "DemoTwo",
  setup() {
    const state = reactive({
      firstName: "Bruce",
      lastName: "Wayne",
    });

    setTimeout(() => {
        state.firstName = 'clark';
        state.lastName = 'kent';
        console.log(state);
    }, 2000);

    // return {
    //   firstName: state.firstName,
    //   lastName: state.lastName,
    // };

    /* 
        if we only use compositions reactivity to change a variable value in set timeout
        or another way we need to return it by toRefs(object or values name) like this.
        otherwize it change in console but not in page. beacuse setup return object 
        and take values from object not in value. so it need to send by object
    */
    return toRefs(state);

  },
  data(){
      return{
          fname:'shakil',
          lname:'hossain',
      }
  }
};
</script>

<style scoped>
</style>