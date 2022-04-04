<template>
  <div>
    <nav-bar />
    <modal-window />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import ModalWindow from '../components/ModalWindow.vue';
  export default {
    components: {
      NavBar,
      ModalWindow,
    },
  };
</script>
