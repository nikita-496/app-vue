<template>
  <div class="snackbar" id="snackbar">
    <span class="snackbar__message"></span>
  </div>
</template>

<script>
  export default {
    name: 'snack-bar',
  };
</script>

<style lang="sass" scoped>
  .snackbar
    display: block
    width: 70%
    background-color: #FF5252
    box-shadow: 0px 13px 25px 0px rgba(0, 0, 0, 0.3)
    position: absolute
    top: 10px

  .snackbar__message
    display: block
    font-size: 0.975rem
    font-family: var(--medium-font)
    line-height: 1.429em
    color: var(--white-color)
    margin: 1.428em 2.143em
</style>
