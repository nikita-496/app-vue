<template>
  <transition name="fade" appear>
    <div class="modal-window">
      <div class="modal-window__body">
        <snack-bar />
        <form class="modal-window__form" @click.prevent="">
          <a class="modal-window__form-close" @click="changeStatus">x</a>
          <h2 class="modal-window__title">Авторизация</h2>
          <div class="form__item">
            <label class="label label__login" for="login">Логни</label>
            <input type="text" class="input input__name" v-model="login" />
          </div>
          <div class="form__item">
            <label class="label label__password" for="name">Пароль</label>
            <input type="password" class="input input__password" v-model="password" />
            <img class="password__type" src="../assets/open.png" alt="Показать пароль" />
          </div>

          <div class="form__action">
            <button
              class="button button__action-group button__action-group_theme_continue"
              @click="logIn"
            >
              Продолжить
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
  import SnackBar from './SnackBar.vue';
  export default {
    components: { SnackBar },
    name: 'modal-window',
    data() {
      return {
        login: '',
        password: '',
      };
    },
    methods: {
      changeStatus() {
        this.$emit('close');
      },
      logIn() {
        this.$router.push('/profile');
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import '../styles/_media'

  .modal-window
    position: fixed
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.3)
    top: 0
    left: 0
    opacity: 1
    visibility: visible
    transition: all 0.5s ease 0s

  .modal-window__body
    min-height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    padding-top: 1em

  .modal-window__form
    display: flex
    flex-direction: column
    background-color: var(--white-color)
    color: var(--black-color)
    width: 40em
    padding: 1.875em
    position: relative

  .modal-window__title
    font-size: 2.375rem
    font-family: var(--main-font)
    color: var(--primary-text-color)
    line-height: 1.3794em
    align-self: center
    margin-bottom: 1em

  .modal-window__form-close
    font-size: 1.25em
    font-family: var(--main-font)
    position: absolute
    top: 10px
    right: 10px
    text-decoration: none
    color: var(--primary-text-color)
    cursor: pointer

  .modal-window__form-close:hover
    color: var(--danger-color)

  .form__item
    margin-bottom: 1.2em
    align-self: center

  .label
    font-size: 1.1rem
    font-family: var(--medium-font)

  .label__password
    margin-right: 1.2em

  .input
    border: 1px solid var(--danger-color)
    border-radius: 5px
    width: 20em
    height: 2em
    outline: none

  .input__name
    margin-left: 2.5em

  .input__password
    margin-left: 0.2em
    position: relative

  .form__action
    margin-top: 1em
    align-self: center

  .password__type
    position: absolute
    right: 7.5em
    cursor: pointer

  .button__action-group
    font-size: 0.875rem
    font-family: var(--main-font)
    line-height: 1.571em
    border-radius: 5px
    padding: 1.071em 2.875em
    cursor: pointer

  .button__action-group_theme_continue
    background-color: var(--button-color)
    color: var(--white-color)
    border-radius: 5px
    margin-right: 0.714em
    width: 12.5em
    height: 3.5em
    padding: 0.8em 0.5em
    border: none

  .fade-enter-active,
  .fade-leave-active
    transition: opacity .5s

  .fade-enter,
  .fade-leave-to
    opacity: 0

  @include responsive
</style>
