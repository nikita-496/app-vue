<template>
  <div>
    <nav-bar />
    <main-content>
      <template v-slot:title>
        <h1 class="title profile__title">Привет, {{ user ? user : 'гость' }}!</h1>
        <div class="action">
          <button
            class="button button__action-group-profile button__action-group-profile_theme_logout"
            @click="changeViewOnIndex"
          >
            Выйти из аккаунта
          </button>

          <button
            class="button button__action-group-profile button__action-group-profile_theme_contacts"
            @click="changeViewOnContacts"
          >
            Перейти в контакты
          </button>
        </div>
      </template>
    </main-content>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import MainContent from '@/components/MainContent.vue';
  import AuthorizedUser from '@/services/AuthorizedUser';
  import StorageManager from '@/services/StorageManager';
  import ModalWindow from '@/components/ModalWindow.vue';
  export default {
    components: {
      NavBar,
      MainContent,
      ModalWindow,
    },
    data() {
      return {
        user: '',
      };
    },
    mounted() {
      const authorizedUser = new AuthorizedUser();
      this.user = authorizedUser.name;
    },
    methods: {
      changeViewOnContacts() {
        this.$router.push('/contacts');
      },
      changeViewOnIndex() {
        StorageManager.removeAuthorizedUser();
        this.$router.push('/');
      },
    },
  };
</script>

<style lang="sass" scoped>
  @import '../styles/_media'
  .profile__title
    font-size: 3.625rem
    font-family: var(--main-font)
    color: var(--primary-text-color)
    line-height: 1.3794em
    width: 12.534em
    padding-top: 2.43103em

  .button__action-group-profile
    font-size: 0.875rem
    font-family: var(--main-font)
    line-height: 1.571em
    border-radius: 5px
    padding: 1.071em 2.875em
    text-decoration: none

  .button__action-group-profile_theme_logout
    background-color: var(--button-color)
    color: var(--white-color)
    border-radius: 5px
    margin-right: 0.714e

  .button__action-group-profile_theme_logout
    background-color: var(--button-color)
    color: var(--white-color)
    border-radius: 5px
    margin-right: 0.714em

  .button__action-group-profile_theme_contacts
    color: var(--button-color)

  @include responsive
</style>
