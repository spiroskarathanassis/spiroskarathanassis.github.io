<template>
  <router-view />
</template>

<script>
// import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  // components: { HomePage }
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP|Amatic+SC");

  *, body, html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-family: 'Noto Sans JP', sans-serif;
  }
  section {
    display: grid;
    grid-auto-columns: auto;
    background-color: rgba(29, 18, 18, 0.96);
    width: 100vw;
    height: 100vh;
  }
</style>