<template>
  <section>
    <navigation-buttons isPage="bio" />
    <div class="main-container">
      <div class="notes-container">
        <div class="bio-header">
          <div class="header-title">
            <h2>Mini Bio</h2>
            <p>Spiros Karathanassis</p>
          </div>
          <ul>
            <li class="red"></li>
            <li class="yellow"></li>
            <li class="green"></li>
          </ul>
        </div>	
        <div class="bio-text">
          <p>
            I was born on a sunny spring day in May '95 in Patras, Greece 
            and I still live here. I have two awesome siblings George and 
            Marilyda and also 2 great parents. I am a self-motivated person 
            who likes to set targets and get things done, regardless of 
            difficulties and obstacles.
          </p>
          <p>
            I am a full-time software engineer, motivated by my love for learning 
            and succeeding and I strive to become an outstanding and 
            successful human in today’s society. Through my passion for 
            fitness, I got involved with many different (individual and team) 
            sports, one of which was triathlon. Through very rigorous daily 
            commitment and preparation, I was able to win lots of medals 
            through the years which only made my passion even bigger.
          </p>
          <p>
            Another passion of mine is configuring and developing new 
            software technologies. As a University of Patras graduate 
            with a MSc in Computer Engineering and Informatics, I now 
            possess several skills that can allow me to evolve into a 
            brilliant software engineer and be involved in great projects.
          </p>
          <p>
            The ideal environment for me to work would be creative, dynamic
            and with high standards. Feel free to download my resume below 
            and do not hesitate to get in touch with me.
          </p>
        </div>
        <div class="bio-footer">
          <div class="resume"><a href="dist/website/Spiros_Karathanassis_CV.pdf" target="_blank">Resume</a></div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavigationButtons from '../NavigationButtons.vue';

export default {
  name: 'BioPage',
  components: { NavigationButtons }
}
</script>

<style lang="scss" scoped>
  $bioColor: rgb(53 54 54);
  $resumeColor: rgb(212 255 239);

  .main-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 2rem auto;
  }

  .notes-container {
    max-width: 800px;
    max-height: 55vh;
    min-height: 300px;
    margin: 0 2rem;

    display: flex;
    flex-direction: column;
    background: rgb(83 83 88 / 92%);
    color: rgb(255 242 242 / 84%);
    border: 1px solid rgb(150 149 162);
    box-shadow: -3px 3px 5px 1px rgb(147 141 141 / 21%);
    border-radius: 8px;
    contain: content;

    & > .bio-header {
      width: 100%;
      background: $bioColor;
      padding: 0.5rem;
      text-align: center;
      display: grid;

      .header-title {
        display: flex;
        justify-content: center;
        flex-direction: column;

        h2 {
          font-size: 1.2em;
        }
      }

     & > ul {
        position: absolute;
        top: 4px;
        width: 39px;
        display: flex;
        justify-content: space-between;
        list-style-type: none;

        & > li {
          width: 10px;
          height: 10px;
          border-radius: 50%;

          &.red {
            background: rgb(255 0 0 / 80%);
          }
          &.yellow {
            background: rgb(255 255 0 / 80%);
          }
          &.green {
            background: rgb(0 128 0 / 80%);
          }
        }
      }
    }

    & > .bio-text {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      padding: 1rem;
      overflow: auto;

      p {
        margin: 6px 0;
        font-size: 15px;
        font-family: 'Noto Sans JP', sans-serif;
      }
    }

    & > .bio-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      background: $bioColor;
      padding: 6px 18px;

      & > .resume {
        background: $bioColor;
        border: 1px solid $resumeColor;
        border-radius: 2px;
        text-align: center;
        padding: 4px 12px;

        & > a {
          color: $resumeColor;
          text-decoration: none;
          font-weight: bold;
        }

        &:hover {
          cursor: pointer;
          background: $resumeColor;
          
          & > a {
            color: $bioColor;
          }
        }
      }
    }
  }
</style>