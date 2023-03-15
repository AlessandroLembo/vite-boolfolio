<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

// Salvo in una variabile la base APi (8000 è la porta del server su cui gira l'app del mio progetto)
const apiBaseUrl = 'http://localhost:8000/api/';


export default {
  name: 'App',
  components: { AppHeader },
  data: () => ({
    projects: []
  }),

  methods: {
    fetchProjects() {
      axios.get(apiBaseUrl + 'projects').then(res => {
        this.projects = res.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  }
};
</script>

<template>
  <div class="container">
    <app-header></app-header>
    <main>
      <ul v-if="projects.length">
        <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
      </ul>
      <h2 v-else class="my-4">Non ci sono progetti</h2>
    </main>
  </div>
</template>