<template>
  <div id="navbar" :class="{'nav-container': !isHomePage && isMenuOpened, 'nav-opened': isNavbarActive && isMenuOpened}"
    @click="handleFocus">
    <div class="control-buttons" :class="{buttonsArea: !isHomePage && isMobile}">
      <h2 v-if="!isHomePage" @click="isMenuOpened = !isMenuOpened; startMenuClosed;">Menu</h2>
      <ul v-show="isMenuOpened || isHomePage" :class="{mobileDrop: !isHomePage && !isNavbarActive}">
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.to">{{ route.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount, reactive, ref } from 'vue';
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
    const isNavbarActive = ref(false)
    const isMenuOpened = ref(true);
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

    const handleFocus = e => {
      if (isNavbarActive.value && isMenuOpened.value && e.target.id == 'navbar') {
        isMenuOpened.value = false
      }
    }
    const detectWidth = () => {
      isMobile.value = (window.innerWidth < 450) || detectMobile();
    }
    const startMenuClosed = computed(() => {
      console.log('hi');
      isMenuOpened.value = true;
      isNavbarActive.value = true;
    });

    onBeforeMount(() => {
      setRoutes();
      detectWidth();
    });

    return {
      routes,
      isHomePage,
      isMenuOpened,
      isNavbarActive,
      isMobile,
      detectWidth,
      startMenuClosed,
      handleFocus
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

    h2
      display: none

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
          width: 5.5rem
          border-radius: 4px
          padding: 0.5rem
          text-align: center
          font-size: 0.8em
          color: rgb(242 239 255)
          text-decoration: none

          &:hover
            background: rgba(49, 46, 46, 0.88)
          
          &.router-link-active
            color: #c8f45a
            
  @media screen and (max-width: 450px)
    .nav-container
      width: 100vw
      position: absolute
      z-index: 100

    .nav-opened
      height: 100%
      background: rgb(0 0 0 / 79%)

    .buttonsArea
      width: 100%

    .control-buttons
      display: block
      background: rgba(94, 96, 96, 0.9)

      h2
        display: block
        padding: 12px 0
        text-align: center
        color: rgba(177, 255, 157, 0.85)
        cursor: pointer

      .mobileDrop
        display: none
        
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