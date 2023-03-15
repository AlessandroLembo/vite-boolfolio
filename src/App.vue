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

  method: {
    fetchProjects() {
      axios.get(apiBaseUrl + 'projects').then(res => {
        console.log(res.data);
      });
    },

    created() {
      this.fetchProjects();
    }
  }
};
</script>

<template>
  <div class="container">
    <app-header>
      <main>
        <ul>
          <li></li>
        </ul>
      </main>
    </app-header>
  </div>
</template>