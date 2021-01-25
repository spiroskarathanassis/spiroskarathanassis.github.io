<template>
  <section>
    <navigation-buttons isPage="portfolio" />
    <div class="graph-preview">
      <graph-chart v-show="hasGraph" :projectData="graph" :key="componentKey"></graph-chart>
    </div>
    <div class="project-container">
      <details v-for="(project, index) of projects" :key="project.title" @click="updateGraph(index)">
        <summary>{{ project.title }}</summary>
        <p>
          <span v-for="(p, index) in project.description" :key="index">{{p}}<br/></span>
          <span v-if="project.github">Github repo: 
            <a style="color: #53e853" :href="project.github.link">{{ project.github.name }}</a>
          </span>
        </p>
      </details>
    </div>
  </section>
</template>

<script>
import NavigationButtons from '../NavigationButtons';
import GraphChart from '../../graph/GraphChart';
import { graphData, projects } from '../../store/constants';
import { computed, ref, onBeforeMount } from 'vue';

export default {
  name: 'BioPage',
  components: { NavigationButtons, GraphChart },
  setup () {
    const hasGraph = ref(false);
    const graph = ref('');
    const componentKey = ref(null);

    onBeforeMount(() => graph.value = graphData);
    const isGraph = computed(() => hasGraph.value = true);
    const initGraph = computed(() => graph.value = graphData);

    const updateGraph = (index) => {
      isGraph.value;
      initGraph.value;
      // let columns = {'columns': projects[index].graph};
      componentKey.value = index;
      graph.value.columns = projects[index].graph;
      // console.log(graph);
    }

    return {
      hasGraph,
      graph,
      projects: projects,
      updateGraph,
      componentKey,
    }
  }
}
</script>

<style lang="sass" scoped>
  $salmon-color: salmon

  section 
    grid-template-rows: 1fr 2fr 4fr

  .graph-preview
    height: fit-content
    margin: 0 2rem

  .project-container
    margin: 0 1rem
    padding: 0 1rem

    details
      margin-top: 1px
      display: flex
      justify-content: center
      align-items: center
      color: rgb(247 246 246 / 65%)
      box-shadow: 0px 2px 2px 1px rgba(175, 68, 68, 0.9)
      
      :focus
        outline: none

      summary
        padding: 0.4rem
        border-radius: 2px
        cursor: pointer
        font-weight: bold
        text-align: center
        color: inherit

        &::-webkit-details-marker
          display: none
       
        &:hover
          background-color: rgb(94 96 96)
          color: $salmon-color
      
      p
        padding: 4px 12px
        color: inherit
        border-top: 1px solid rgba(224, 218, 218, 0.24)
        
        span, a
          font-size: 0.9em
</style>