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
      <details>
        <summary>Menu</summary>
        <ul>
          <li>Bio</li>
          <li>Contact Me</li>
          <li>Portfolio</li>
          <li>Skills</li>
        </ul>
      </details>
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

  $media-mobile: 400px
  // $media-tablet: 600px

  $salmon-color: salmon  
  $toggle-color: rgba(74, 44, 44, 0.9)

  *, body, html
    box-sizing: border-box
    padding: 0
    margin: 0
    font-size: 14px
    font-family: 'Noto Sans JP', sans-serif
  
  header
    position: absolute
    background: linear-gradient(to top, rgba(69, 58, 12, 0.7) 20%, transparent), url('./assets/background.jpeg') left 10% bottom 30%/cover border-box
    top: 0
    width: 100vw
    height: 35%
  
    h2
      display: flex
      justify-content: flex-end
      align-items: flex-end
      height: 100%
      padding: 0rem 1rem
      font-family: fantasy
      color: rgba(4, 1, 1, 0.88)
      font-size: 1.4em
      font-weight: bold
    
  main-page
    background-color: rgba(29, 18, 18, 0.96)
    color: rgb(241, 215, 219)
    position: absolute
    bottom: 0
    width: 100vw
    height: 65%
    padding: 2rem
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
      background-color: $toggle-color
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

    details
      margin-top: 5rem
      display: flex
      justify-content: center
      align-items: center
      
      :focus
        outline: none

      summary
        background-color: $salmon-color
        border: 2px solid $salmon-color
        color: $toggle-color
        padding: 0.2rem 10rem
        border-radius: 20px
        cursor: pointer
        box-shadow: 0px 0px 10px 1px rgb(175 68 68 / 90%)
        font-weight: bold

        &::-webkit-details-marker
          display: none
       
        &:hover
          background-color: $toggle-color
          border-color: $toggle-color
          color: $salmon-color
      
      ul
        margin-top: 1.5rem
        display: flex
        justify-content: space-between

      li
        background: rgb(60, 56, 56)
        width: 5.5rem
        text-align: center
        list-style-type: none
        border-radius: 4px
        font-size: 0.8em
        padding: 0.5rem
        margin: 2px
        cursor: pointer

        &:hover
          background: rgba(49, 46, 46, 0.88)
        
      @media screen and (max-width: $media-mobile)
        summary
          padding: 0.2rem 6rem

        ul
          margin-top: 1rem
          flex-direction: column
          justify-content: center
          align-items: center
    
</style>
