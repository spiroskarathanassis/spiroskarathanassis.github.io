<template>
  <div class="wrapper" :style="styles.background ?? null">
    <ul class="chart-preview">
      <li v-for="(col, index) of columns" :key="col.label"
        :style="styles.preview[index]"></li>
    </ul>
    <div class="base-line" :style="styles.baseline ?? null"></div>
    <ul class="chart-description">
      <li v-for="(col, index) of columns" :key="col.label"
        :style="styles.description[index]">{{ col.label }}</li>
    </ul>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import setGraphDetails from './ValidateGraphData.js'

export default {
  name: 'GraphChart',
  props: ['projectData'],
  setup (props) {
    const columns = ref(props.projectData.columns ?? []);
    const styles = ref('');

    onBeforeMount(() => setColumnData());
    const setColumnData = () => {
      styles.value = setGraphDetails(props.projectData.custom, columns.value);
    }

    return { columns, styles }
  }
}
</script>

<style lang="scss" scoped>
  @mixin graphTemplate {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
    li {
      list-style: none;
      display: inline-block;
      border-radius: 4px 4px 0 0;

      margin: 0 20px; // graph.column.gap
      width: 25px; // columns[].size[0]
    }
  }

  .wrapper {
    padding-top: 2rem;
    border: 1px solid grey;
    border-radius: 8px;
    contain: content;
    
    background: linear-gradient(#868630, #4f4f4a); // graph.background
  }
  .base-line {
    width: inherit;
    border-radius: 12px;
    z-index: 10;

    border: 4px solid rgb(0, 0, 0); // graph.baseline.color
    background: rgb(0, 0, 0); // graph.baseline.color
  }

  .chart-preview {
    @include graphTemplate();
    margin-bottom: 0;

    li {
      background: salmon; // graph.column.color
      height: 100px; // columns[].size[0]
    }
  }
  .chart-description {
    @include graphTemplate();

    li {
      font-weight: bold;
      text-align: center;
      color: rgb(14 19 32); // graph.labelColor
    } 
  }
</style>