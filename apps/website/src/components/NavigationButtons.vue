<template>
  <div class="control-buttons">
    <h2 v-if="!isHomePage && isMobile" @click="isMenuOpened = !isMenuOpened">Menu</h2>
    <ul v-show="isMenuOpened || !isMobile || isHomePage" :class="{mobileDrop: !isHomePage}">
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="route.to">{{ route.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { onBeforeMount, reactive, ref } from 'vue';
import detectMobile from '../utils/detectMobile';

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
    const isHomePage = ref(false);
    const isMenuOpened = ref(false);
    const isMobile = ref(false)
    
    const setRoutes = () => {
      for (const el in menuElements) {
        if ((props.isPage === 'home' && el === 'home')) {
          isHomePage.value = true;
          continue;
        }

        let path = `/${el}`;
        if (el === 'home') path = '/';
        if (el === props.isPage) path = '#';

        routes.push({
          to: path, 
          text: menuElements[el]
        })
      }
    }

    window.addEventListener('resize', () => detectWidth());

    const detectWidth = () => {
      isMobile.value = (window.innerWidth < 450) || detectMobile();
    }

    onBeforeMount(() => {
      setRoutes();
      detectWidth();
    });

    return {
      routes,
      isHomePage,
      isMenuOpened,
      isMobile,
      detectWidth
    };
  }
}
</script>

<style lang="sass" scoped>
  $media-mobile: 400px

  .control-buttons 
    display: flex
    justify-content: center
    z-index: 10

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
            
  @media screen and (max-width: 450px)
    .control-buttons
      display: block
      z-index: 100

      h2
        padding: 12px 0
        text-align: center
        color: rgba(177, 255, 157, 0.85)
        cursor: pointer

        &:hover
          color: rgba(81, 157, 61, 0.85)

      .mobileDrop
        position: absolute
        
      ul
        flex-direction: column
        width: 100%
        align-items: center
        margin: 0px auto
      
        li
          width: -webkit-fill-available
          margin: 0
          
          a
            width: 100%

</style>