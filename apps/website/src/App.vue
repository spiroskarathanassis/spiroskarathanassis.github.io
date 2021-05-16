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
    grid-template-rows: 0.5fr 4fr;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
  }

  @media screen and (max-width: 450px) {
    .main-container, .skills-container, .graph-preview {
      margin-top: 4rem !important;
    }
  }
</style>