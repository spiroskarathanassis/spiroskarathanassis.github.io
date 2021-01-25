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
  #website {
    background-color: rgba(29, 18, 18, 0.96);
  }
  section {
    justify-content: center;
    max-width: 800px;
    display: grid;
    grid-template-rows: 1fr 3fr;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
  }
  
  @media screen and (max-height: 700px) {
    section {
      height: 200vh;
    }
  }
</style>