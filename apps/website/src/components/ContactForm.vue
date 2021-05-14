// <template>
  <div class="contact-container">
    <div class="contact-title">Contact</div>
    <form action="" method="post" ref="form">
      <div class="row">
        <input type="text" placeholder="First Name">
        <input type="text" placeholder="Last Name">
      </div>
      <input v-show="isSubject" type="text" placeholder="Subject" ref="subject">
      <input type="email" id="email" placeholder="Email">
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { onBeforeUpdate, ref } from 'vue';

export default {
  name: 'ContactForm',
  props: ['boxName'],
  setup (props) {
    const form = ref(null);
    const isSubject = ref(false);
    const subject = ref('');
    
    onBeforeUpdate(() => {
      isSubject.value = setSubject();
    })

    const setSubject = () => {
      const hasSubject = ['job', 'project'].includes(props.boxName);
      form.value.style.gridTemplateRows = hasSubject ? '1fr 1fr 1fr 2fr 1fr' : '';
      subject.value['value'] = hasSubject ? props.boxName + ' request' : '';

      return hasSubject;
    }

    return {
      form,
      isSubject,
      subject
    };
  }
}
</script>

<style lang="scss" scoped>
  .contact-container {
    grid-row-start: 3;
    grid-column-start: 3;
    padding: 0.6rem;
    margin: 0 1rem;
    min-width: 300px;

    & > .contact-title {
      padding: 3px 0px;
      border-radius: 3px;
      text-align: center;
      font-size: 13px;
      color: rgb(246 253 248);
      background: rgb(150 149 162);
      margin-bottom: 1rem;
    }
    & form {
      display: grid;
      grid-template-rows: 1fr 1fr 2fr 1fr;

      & .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px;
      }

      @media screen and (max-width: 400px) {
        .row {
          grid-template-columns: unset;
          grid-template-rows: 1fr 1fr;
        }
      }

      & input, textarea {
        padding: 4px;
        background: none;
        border: none;
        border-bottom: 1px solid;
        border-color: #929292;
        color: rgb(252 166 166);
        height: 50%;
        
        // &:hover,
        &:focus {
          outline: none;
          border-color: rgba(255, 255, 0, 0.8);
        }
      }

      & textarea {
        height: 100%;
        border: 1px solid rgb(146 146 146);
        border-radius: 5px;
      }

      & button {
        background: rgb(150 149 162 / 46%);
        border: none;
        border-radius: 3px;
        color: #929292;
        font-size: 13px;
        outline: none;
        padding: 0.6rem 1.4rem;
        margin-top: 1rem;
        cursor: pointer;
        
        &:hover {
          background: rgb(150 149 162 / 80%);
          color: rgb(255 255 255);
        }
      }
    }
  }
</style>