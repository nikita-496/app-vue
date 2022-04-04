<template>
  <main>
    <div class="container">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'main-content',
  };
</script>

<style lang="sass" scoped>
  @import '../styles/block.sass'
  @import '../styles/_media'
  @include responsive
</style>
