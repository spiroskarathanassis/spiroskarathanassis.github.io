<template>
  <section>
    <navigation-buttons isPage="skills" />
    <div class="skills-container">
      <div v-for="list in skillList" :key="list" class="skill-tab">
        <h2>{{ list.title }}</h2>
        <ul>
          <li v-for="skill in list.lis" :key="skill">{{ skill }}</li>
        </ul>
      </div>

    </div>
    <div class="extra-infos">
      <p>Also, I am still in progress learning, reading and searching about new technologies and better methods of doing things.
      That's why I love programming. <br/>
        I have worked on <span>docker</span> environment and I am still learning to spanuild containers.
        I have working and despanugging experince on <span>React</span> and <span>Vue</span> js frameworks.
        I am currently learning <span>AI</span>.
        I have personal experience spanuilding <span>CMS</span> websites.
      </p>
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
    grid-template-rows: 1fr 2fr 3fr;
  }

  .skills-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 16px;
    margin: auto 2rem;

    .skill-tab {
      display: grid;
    }

    h2 {
      text-align: center;
      color: rgb(212 255 239);
      font-weight: bold;
    }
    ul {
      background: rgb(213 224 186);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 8px;
      height: 6.5rem;

      li {
        font-family: 'Noto Sans JP';
        font-size: 0.9em;
        list-style-type: none;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .skills-container {
      grid-template-columns: 1fr;
      margin: 0 2rem;
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
      box-shadow: 0px 0px 12px 6px rgb(0 0 0 / 35%);
      padding: 12px; 
    }

    span {
      color: rgb(138 236 138);
    }
  }
</style>