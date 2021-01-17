<template>
  <div class="control-buttons">
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="route.to">{{ route.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { onBeforeMount, reactive } from 'vue';

const menuElements = {
  home      : 'Home',
  bio       : 'Bio',
  contact   : 'Contact me',
  portfolio : 'Portfolio',
  skills    : 'Skills'
}

export default {
  name: 'NavigationButtons',
  props: [ 'isPage' ],
  setup (props) {
    const routes = reactive([]);
    
    const setRoutes = () => {
      for (const el in menuElements) {
        if ((props.isPage === 'home' && el === 'home')) continue;

        let path = `/${el}`;
        if (el === 'home') path = '/';
        if (el === props.isPage) path = ''; // not necessary if is current page

        routes.push({
          to: path, 
          text: menuElements[el]
        })
      }
    }

    onBeforeMount(() => setRoutes());
    return { routes };
  }
}
</script>

<style lang="sass" scoped>
  $media-mobile: 400px

  .control-buttons 
    display: flex
    justify-content: center

    ul
      margin-top: 1.5rem
      display: flex
      justify-content: center
      flex-wrap: wrap

      li
        list-style-type: none
        margin: 2px
        cursor: pointer
        
        a
          display: block
          background: rgb(60, 56, 56)
          width: 5.5rem
          border-radius: 4px
          padding: 0.5rem
          text-align: center
          font-size: 0.8em
          color: whitesmoke
          text-decoration: none

          &:hover
            background: rgba(49, 46, 46, 0.88)
          
          &.router-link-active
            background: rgb(151, 147, 147)

</style>