<template>
  <section>
    <navigation-buttons isPage="portfolio" />
    <div class="graph-preview">
      <graph-chart :projectData="graphData" ></graph-chart>
    </div>
  </section>
</template>

<script>
import NavigationButtons from '../NavigationButtons';
import GraphChart from '../../graph/GraphChart';
// import projects from '../../store/constants';

const graphData = {
  custom : {
    background: 'linear-gradient(#868630, #4f4f4a)',
    baseline: {
      color: 'rgb(0, 0, 0)',
      height: 4 //px
    },
    column: {
      color: 'salmon',
      gap: 20 //px
    },
    labelsColor: ''
  },
  columns: [
    {
      label: 'Code lines',
      size: [25, 100] //[ wdith x height ] in px
    },
    {
      label: 'Days used',
      size: [25, 60]
    },
    {
      label: 'Extra Packages',
      size: [25, 20]
    }
  ],
};

export default {
  name: 'BioPage',
  components: { NavigationButtons, GraphChart },
  data () {
    return {graphData: graphData}
  }
}
</script>

<style scoped>
  section {
    grid-template-rows: 1fr 2fr 3fr;
  }
  .graph-preview {
    height: fit-content;
    margin: 0 2rem;
  }

</style>