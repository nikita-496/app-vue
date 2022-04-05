<template>
  <div>
    <modal-window
      v-if="isModalWindowOpen"
      :statusModalWindow="isModalWindowOpen"
      @close="changeStatusModalWindow"
    />
    <header class="header">
      <div class="container header__container">
        <nav class="header__nav">
          <ul class="list header__list">
            <li class="list__item">
              <router-link class="index" :to="{ name: 'index' }">
                <img
                  class="logo-img heder__logo-img"
                  src="../assets/logo.png"
                  alt="Логотип сайта"
                />
              </router-link>
            </li>
            <li class="list__item">
              <router-link class="link header__link" :to="{ name: 'contacts' }">
                Контакты
              </router-link>
              <button class="button header__button button-login" @click="changeStatusModalWindow">
                Войти
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
  import ModalWindow from '@/components/ModalWindow.vue';
  export default {
    components: {
      ModalWindow,
    },
    name: 'nav-bar',

    data() {
      return {
        isModalWindowOpen: false,
      };
    },
    methods: {
      changeStatusModalWindow() {
        return this.isModalWindowOpen
          ? (this.isModalWindowOpen = false)
          : (this.isModalWindowOpen = true);
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import '../styles/block.sass'
  @import '../styles/_media'
  .header
    background-color: var(--white-color)
    height: 4.9375em
    border-bottom: 1px solid var(--black-color)


  .header__container
    max-width: 1298.27px

  .header__list
    display: flex
    justify-content: space-between
    margin: 0em
    padding-top: 1.25em

  .list__item
    display: flex
    align-items: center

  .heder__logo-img
    align-self: center

  .header__link
    font-size: 0.9375rem
    font-family: var(--semiBold-font)
    font-weight: 600
    margin-right: 3.933em
    color: var(--secondary-text-color)
    text-decoration: none

  .header__button
    font-size: 1.25rem
    font-family: var(--medium-font)
    padding: 0.4em 3em
    color: var(--button-color)
    cursor: pointer
    border-radius: 7px
    text-decoration: none

  @include responsive
</style>
