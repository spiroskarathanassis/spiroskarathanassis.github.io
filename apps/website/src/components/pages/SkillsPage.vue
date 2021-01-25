<template>
  <section>
    <navigation-buttons isPage="skills" />
    <div class="skills-container">
      <div v-for="list in skillList" :key="list">
        <h2>{{ list.title }}</h2>
        <ul>
          <li v-for="skill in list.lis" :key="skill">{{ skill }}</li>
        </ul>
      </div>

    </div>
    <div class="extra-infos">
      <p>I am still in progress learning, reading and searching about new technologies and better methods of doing things.
      That's why I love programming.</p>
      <ul>
        <li>I have worked on <b>docker</b> environment and I am still learning to build containers</li>
        <li>I have working and debugging experince on <b>React</b> and <b>Vue</b> js frameworks</li>
        <li>I am currently learning <b>AI</b></li>
        <li>I have personal experience building <b>CMS</b> websites</li>
      </ul>
    </div>
  </section>
</template>

<script>
import NavigationButtons from '../NavigationButtons.vue';
import { skills } from '../../store/constants';

export default {
  name: 'BioPage',
  components: { NavigationButtons },
  data () {
    return { skillList: skills }
  }
}
</script>

<style lang="scss" scoped>
  section {
    grid-template-rows: 1fr 2fr 2fr;
  }

  .skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 16px;
    margin: auto 0;

    h2 {
      text-align: center;
      color: rgb(212 255 239);
      font-weight: bold;
    }
    ul {
      background: rgb(213 224 186);
      border-radius: 12px;
      display: grid;
      justify-content: center;
      padding: 8px;

      li {
        font-family: 'Noto Sans JP';
        font-size: 0.9em;
      }
    }
  }

  .extra-infos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0.5rem;
    padding: 1rem;
    color: rgb(193 188 193);
    p {
      margin: 8px 0;  
    }
    li {
      padding: 0 12px;
      list-style-type: none;
      font-size: 0.9em;
    }
  }
</style>