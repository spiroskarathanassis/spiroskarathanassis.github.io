<template>
  <home-page>
    <header>
      <h2>Relax, It's time to code</h2>
    </header>
    <main-page>
      <h1>Hi, I am Spiros Karathanassis</h1>
      <h1>If you search for great developers I am your choice</h1>
      <h2>Front-End Developer / Software Engineer</h2>
      <div class="location-container">
        <img src="./assets/worldwide.png" alt="location" />
        <a href="https://www.google.com/maps/place/Patras">Patras, Greece</a>
      </div>
    </main-page>
  </home-page>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="sass">
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP|Amatic+SC")

  *, body, html
    box-sizing: border-box
    padding: 0
    margin: 0
    font-size: 14px
    font-family: 'Noto Sans JP', sans-serif
  
  header
    position: absolute
    background: linear-gradient(to top, rgba(69, 58, 12, 0.6) 20%, transparent), url('./assets/background.jpeg') left 10% bottom 30%/cover border-box
    top: 0
    width: 100vw
    height: 35%
  
    h2
      display: flex
      justify-content: flex-end
      align-items: flex-end
      height: 100%
      padding: 20px
      font-family: 'Noto Sans JP'
      font-size: 1.4em
      font-weight: bold
    
  main-page
    background-color: rgba(29, 18, 18, 0.96)
    color: rgb(241, 215, 219)
    position: absolute
    bottom: 0
    width: 100vw
    height: 65%
    padding: 2rem 0
    display: flex
    justify-content: flex-start
    align-items: center
    flex-direction: column
  
    h1
      font-family: 'Amatic SC'
      font-size: 20px
      letter-spacing: 2px
  
    h2
      padding: 2rem 0 0.5rem 0
  
    .location-container
      background-color: rgba(74, 44, 44, 0.9)
      border-radius: 30px
      width: 10rem
      height: 2rem
    
      img
        width: 2rem
        border-radius: 50%
    
      a
        color: rgba(243, 120, 174, 95)
        margin-left: 10px
        margin-top: 10px
        font-family: cursive
        vertical-align: top
        line-height: 2rem
</style>
