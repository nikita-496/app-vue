<template>
  <div>
    <nav-bar />
    <main-content>
      <template v-slot:title>
        <h1 class="title contacts__title">Контакты</h1>
      </template>
    </main-content>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import MainContent from '@/components/MainContent.vue';
  export default {
    components: {
      NavBar,
      MainContent,
    },
  };
</script>

<style lang="sass" scoped>
  @import '../styles/_media'
  .contacts__title
    font-size: 3.625rem
    font-family: var(--main-font)
    color: var(--primary-text-color)
    line-height: 1.3794em
    width: 12.534em
    padding-top: 3.18103em
  @include responsive
</style>
