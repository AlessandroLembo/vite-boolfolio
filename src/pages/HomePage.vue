<script>
import axios from 'axios';
import AppAlert from '../components/AppAlert.vue';
import AppPagination from '../components/Projects/AppPagination.vue';
import ProjectsList from '../components/Projects/ProjectsList.vue';

// Salvo in una variabile la base APi (8000 è la porta del server su cui gira l'app del mio progetto)
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'Home page',
    components: { ProjectsList, AppAlert, AppPagination },
    data: () => ({
        isLoading: false,
        hasError: false,
        projects: {
            data: [],
            links: [],
        }
    }),
    methods: {
        fetchProjects(endpoint = null) {
            this.isLoading = true
            if (!endpoint) endpoint = apiBaseUrl + 'projects'; // se non mi arriva un edpoint allora vado alla pagina di default
            axios.get(endpoint).then(res => {
                // destructuring, mi prendo gli array data e links dall'oggetto che mi arriva
                const { data, links } = res.data;
                this.projects = { data, links }; // riassegno gli array dichiarati vuoti con ciò che mi arriva in data e links
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
        <projects-list v-else :projects="projects.data"></projects-list>
        <app-pagination :links="projects.links" @change-page="fetchProjects"></app-pagination>

    </div>
</template>