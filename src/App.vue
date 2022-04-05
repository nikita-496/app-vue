<template>
  <router-view></router-view>
</template>

<script>
  import StorageManager from './services/StorageManager';
  import users from './data/users.json';
  export default {
    mounted() {
      StorageManager.getAllUsers('users', users);
    },
  };
</script>
