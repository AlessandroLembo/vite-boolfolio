<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader },
};
</script>

<template>
  <app-header></app-header>
  <!-- <div class="container"> -->
  <router-view></router-view>
  <!-- </div> -->
</template>