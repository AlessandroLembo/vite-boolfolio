<script>
import axios from 'axios';
import ProjectsList from '../components/Projects/ProjectsList.vue';

// Salvo in una variabile la base APi (8000 è la porta del server su cui gira l'app del mio progetto)
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'Home page',
    components: { ProjectsList },
    data: () => ({
        isLoading: false,
        projects: []
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data;
            }).catch((err) => {
                console.error(err);
            }).then(() => {
                this.isLoading = false;
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
        <app-loader v-if="isLoading"></app-loader>
        <projects-list v-else :projects="projects"></projects-list>


    </div>
</template>