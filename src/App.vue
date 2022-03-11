<template>
  <!-- <Data /> -->
  <!-- <DemoOne /> -->
  <!-- <DemoTwo /> -->
  <!-- <Methods /> -->
  <!-- <VModel /> -->
  <!-- <ComputedReplace /> -->
  <!-- <WatchComposition /> -->
  <!-- <ProvideInject /> -->
  <OlifeCycleHooks />
  <ClifeCycleHooks />

</template>

<script>
// import Data from './components/Data.vue';
// import DemoOne from './components/DemoOne.vue';
// import DemoTwo from './components/DemoTwo.vue';
// import Methods from './components/Methods.vue'
// import VModel from './components/VModel.vue'
// import ComputedReplace from './components/ComputedReplace.vue'
// import WatchComposition from './components/WatchCompositionAPI.vue'
// import ProvideInject from './components/ProvideInject.vue'
import OlifeCycleHooks from './components/O_lifeCycleHooks.vue'
import ClifeCycleHooks from './components/C_lifeCycleHooks.vue'

export default {
  name: 'App',
  components: {
    // Data,
    // DemoOne,
    // DemoTwo,
    // Methods,
    // VModel,
    // ComputedReplace,
    // WatchComposition
    // ProvideInject
    OlifeCycleHooks,
    ClifeCycleHooks
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
