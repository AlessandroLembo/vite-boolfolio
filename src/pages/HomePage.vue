<script>
import axios from 'axios';
import AppAlert from '../components/AppAlert.vue';
import ProjectsList from '../components/Projects/ProjectsList.vue';

// Salvo in una variabile la base APi (8000 è la porta del server su cui gira l'app del mio progetto)
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'Home page',
    components: { ProjectsList, AppAlert },
    data: () => ({
        isLoading: false,
        hasError: false,
        projects: []
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data;
            }).catch(() => {
                this.hasError = true;
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
        <app-alert :is-open="hasError" @close="hasError = false" class="my-3"></app-alert>
        <app-loader v-if="isLoading"></app-loader>
        <projects-list v-else :projects="projects"></projects-list>


    </div>
</template>