<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';

export default {
  name: 'App',
  components: { AppHeader, HomePage },
};
</script>

<template>
  <div class="container">
    <app-header></app-header>
    <home-page></home-page>
  </div>
</template>