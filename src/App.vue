<template>
  <div id="app" class="page">
    <nav-p></nav-p>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
  </div>
</template>

<script>

export default {
  name: 'App'


};
</script>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}
</style>
