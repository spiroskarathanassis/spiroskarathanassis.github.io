<template>
  <section>
    <navigation-buttons isPage="contact" />
    <div class="main-container">
      <div class="contact-boxes" ref="contactBoxes">
        <div v-for="(box, index) in offerBoxes" :key="box.id" :id="box.id"
          class="offer-box"
          @touchstart="startTouch"
          @touchmove="moveTouch"
          @touchend="endTOuch"
          @click="toggleBox(index)">
          <div><h2>{{ box.title }}</h2></div>
          <p>{{ box.text }}</p>
        </div>
      </div>

      <contact-form :boxName="boxContact"></contact-form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import ContactForm from '../ContactForm.vue';
import NavigationButtons from '../NavigationButtons.vue';
import { boxes } from '../../store/constants';
import detectMobile from '../../utils/detectMobile.js';

export default {
  name: 'ContactPage',
  components: { NavigationButtons, ContactForm },
  setup () {
    const offerBoxes = ref(boxes);
    const contactBoxes = ref(null);
    const isTouchable = ref(false);
    const boxContact = ref(null);
    let startTouchX, startTouchY;

    // Touch events for carousel mobile version
    const startTouch = (e) => {
      const elementBoxes = contactBoxes.value.children;
      if (e.currentTarget === elementBoxes[0] || e.currentTarget === elementBoxes[2]) return;

      startTouchX = Math.floor(e.targetTouches[0].clientX);
      startTouchY = Math.floor(e.targetTouches[0].clientY);
    }

    const moveTouch = (e) => {
      const elementBoxes = contactBoxes.value.children;
      if (e.currentTarget === elementBoxes[0] || e.currentTarget === elementBoxes[2]) return;

      e.preventDefault();
      const halfWidthBox = Math.abs(Math.floor(10 * e.target.clientWidth / 2) / 10);
      const movingPointX = Math.floor(e.changedTouches[0].clientX);
      const movingPointY = Math.floor(e.changedTouches[0].clientY);
      const movementX = Math.floor(movingPointX - startTouchX);
      const movementY = Math.floor(movingPointY - startTouchY);

      if (Math.abs(movementX - halfWidthBox) > 0) {
        isTouchable.value = true;

        // assign box new coordinates based on the touch.
        e.currentTarget.style.opacity = 0.85;
        e.currentTarget.style.left = movementX + 'px';
        e.currentTarget.style.top = movementY + 'px';
      }
    }

    const endTOuch = (e) => {
      if (!isTouchable.value) return;

      const lastPointX = Math.floor(e.changedTouches[0].clientX);
      shiftBoxes(Math.floor(lastPointX - startTouchX) > 0);
      resetBoxStyles();
      setBoxContact();
      isTouchable.value = false;
    }

    // left or right move
    const shiftBoxes = (isLeftMove = false) => {
      let removedElement;

      if (isLeftMove) {
        removedElement = offerBoxes.value.pop();
        offerBoxes.value.unshift(removedElement);
      } else {
        removedElement = offerBoxes.value.shift(removedElement);
        offerBoxes.value.push(removedElement);
      }
    }

    const resetBoxStyles = () => {
      const boxes = contactBoxes.value.children;
      for (const box of boxes) 
        box.style = "";
    }

    const toggleBox = (boxIndex) => {
      // if mobile keep touch event instead of click
      if (boxIndex === 1 || detectMobile()) return;
      shiftBoxes(boxIndex < 1);
      setBoxContact();
    }

    const setBoxContact = () => {
      console.log(offerBoxes.value[1].id);
      boxContact.value = offerBoxes.value[1].id;
    }

    return {
      offerBoxes,
      contactBoxes,
      toggleBox,
      boxContact,
      startTouch, moveTouch, endTOuch
    }
  }
}
</script>

<style lang="scss" scoped>
  // section {
  //   grid-template-rows: 10% 4fr;
  // }

  .main-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .contact-boxes {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }

  .offer-box {
    position: relative;
    display: grid;
    grid-template-rows: 60px 70%;
    border-radius: 24px;
    contain: content;
    width: 140px;
    height: 200px;
    margin: 0.5rem;
    cursor: pointer;
    box-shadow: 0 0 12px 2px rgba(29, 18, 18, 0.96);
    opacity: 0.6;

    &:nth-child(2) {
      bottom: 2rem;
      opacity: 1;
    }

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: inherit;
      background: rgb(134 134 105);
      padding: 0.8rem;

      & h2 {
        color: rgb(200 244 90);
        font-size: 15px;
        font-weight: bold;
        text-align: center;
      }
    }

    & p {
      background: rgb(185 185 185 / 32%);
      color: rgb(212 255 239);
      font-size: 15px;
      padding: 0.8rem;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 500px) {
    .contact-boxes {
      width: 280px;
    }
    
    .offer-box {
      &:nth-child(1) {
        left: 80px;
      }
      &:nth-child(2) {
        bottom: 1rem;
        background: rgb(134 134 105);
        z-index: 10;
      }
      &:nth-child(3) {
        left: -80px;
      }
    }
  }
</style>