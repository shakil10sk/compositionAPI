<template>
  <div>
      <input type="text" name="" id="" v-model="fName">
      <input type="text" name="" id="" v-model="lName">
      <h2>Options Full Name is {{ fullName }} </h2>
  </div>
  <br><br>
  <div>
      <input type="text" name="" id="" v-model="refFirstName">
      <input type="text" name="" id="" v-model="refLastName">
      <h2>Composition API Full Name is {{ refFullName }} </h2>
  </div>
  <br><br>
  <div>
      <input type="text" name="" id="" v-model="reactiveFirstName">
      <input type="text" name="" id="" v-model="reactiveLastName">
      <h2>Reactive Composition API Full Name is {{ reactiveFullName }} </h2>
  </div>
</template>

<script>
import { ref,computed, reactive, toRefs } from '@vue/reactivity';
export default {
  name: "ComputedReplace",
  setup(){
    const refFirstName = ref('');
    const refLastName = ref('');

    const refFullName = computed(function(){
      return `${refFirstName.value} ${refLastName.value}`;
    });

    const state = reactive({
      reactiveFirstName:'',
      reactiveLastName:'',
    })

    const reactiveFullName = computed(function(){
      return `${state.reactiveFirstName} ${state.reactiveLastName}`
    })

    return{
      refFirstName,refLastName,refFullName,...toRefs(state),reactiveFullName
    }
  },
  data() {
    return {
        fName: '',
        lName: ''
    };
  },
  computed: {
      fullName(){
          return `${this.fName} ${this.lName}`
      }
  },
};
</script>

<style scoped>
</style>