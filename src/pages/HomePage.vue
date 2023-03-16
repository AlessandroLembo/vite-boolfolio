<script>
import axios from 'axios';
import ProjectCard from '../components/Projects/ProjectCard.vue';

// Salvo in una variabile la base APi (8000 è la porta del server su cui gira l'app del mio progetto)
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'Home page',
    components: { ProjectCard },
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
        <project-card :projects="projects"></project-card>

    </div>
</template>