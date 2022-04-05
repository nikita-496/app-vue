<template>
  <div>
    <nav-bar />
    <modal-window
      v-if="isModalWindowOpen"
      :statusModalWindow="isModalWindowOpen"
      @close="changeStatusModalWindow"
    />
    <main-content>
      <template v-slot:title>
        <h1 class="title index__title">Место для получения <br />медицинской помощи</h1>
        <div class="action">
          <button
            class="button button__action-group button__action-group_theme_login button-login"
            @click="changeStatusModalWindow"
          >
            Войти
          </button>
          <button
            class="button button__action-group button__action-group_theme_contacts"
            @click="changeView"
          >
            Контакты
          </button>
        </div>
      </template>
      <template v-slot:content>
        <ul class="cards">
          <li
            v-for="card in cards"
            :key="card.id"
            :class="
              card.id === '1'
                ? 'card__item card__item_name_reception'
                : card.id === '2'
                ? 'card__item card__item_name_extra'
                : 'card__item card__item_name_treatment'
            "
          >
            <div class="card index__card index__card_first">
              <div class="content-wrapper">
                <img class="card__img" :src="card.src" :alt="card.alt" />
                <h5 class="card__title">{{ card.name }}</h5>
                <hr class="spacer" />
                <p class="card__text">Рыба текст</p>
              </div>
            </div>
          </li>
        </ul>
      </template>
    </main-content>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import MainContent from '@/components/MainContent.vue';
  import ModalWindow from '@/components/ModalWindow.vue';

  export default {
    components: {
      NavBar,
      MainContent,
      ModalWindow,
    },
    data() {
      return {
        isModalWindowOpen: false,
        cards: [
          {
            id: '1',
            name: 'Онлайн-прием',
            src: require('../assets/heart.png'),
            alt: 'Кардиограмма сердца',
          },
          {
            id: '2',
            name: 'Экстренный Случай',
            src: require('../assets/stethoscope.png'),
            alt: 'Стетоскоп',
          },
          {
            id: '3',
            name: 'Лечение рака',
            src: require('../assets/form.png'),
            alt: 'Бланк',
          },
        ],
      };
    },
    methods: {
      changeView() {
        this.$router.push('/contacts');
      },
      changeStatusModalWindow() {
        return this.isModalWindowOpen
          ? (this.isModalWindowOpen = false)
          : (this.isModalWindowOpen = true);
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import '../styles/_media'
  @import '../styles/block.sass'

  .index__title
    font-size: 3.625rem
    font-family: var(--main-font)
    color: var(--primary-text-color)
    line-height: 1.3794em

    padding-top: 1.664em

  .button__action-group
    font-size: 0.875rem
    font-family: var(--main-font)
    line-height: 1.571em
    border-radius: 5px
    padding: 1.071em 2.875em
    cursor: pointer

  .button__action-group_theme_login,
  .button__action-group_theme_continue
    background-color: var(--button-color)
    color: var(--white-color)
    border-radius: 5px
    margin-right: 0.72em

  .button__action-group_theme_contacts
    color: var(--button-color)

  .index__card
    width: 20.5em

  .index__card_first
    margin-right: 1.875em

  .index__card_second
    margin-right: 1.9375em

  .card__title
    font-size: 1rem
    font-family: var(--main-font)
    line-height: 1.5em
    color: var(--primary-text-color)
    padding: 1.25em 0em

  .spacer
    width: 50px
    height: 2px
    background-color: var(--danger-color)
    margin: 0em
    border: none

  .card__text
    font-size: 0.875rem
    font-family: var(--secondary-font)
    line-height: 1.429em
    color: var(--secondary-text-color)
    margin-top: 1.4286em

  .button__action-group_theme_continue
    width: 12.5em
    height: 3.5em
    padding: 0.8em 0.5em

  @include responsive
</style>
