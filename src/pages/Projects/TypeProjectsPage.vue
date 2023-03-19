<script>
import axios from 'axios';
import AppAlert from '../../components/AppAlert.vue';
// import AppPagination from '../components/Projects/AppPagination.vue';
import ProjectsList from '../../components/Projects/ProjectsList.vue';
// Salvo in una variabile la base APi (8000 è la porta del server su cui gira l'app del mio progetto)
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'TypeProjectPage',
    components: { ProjectsList, AppAlert },
    data: () => ({
        isLoading: false,
        hasError: false,
        projects: []
        // links: [],
    }),
    methods: {
        fetchProjects(endpoint = null) {
            this.isLoading = true
            if (!endpoint) endpoint = apiBaseUrl + `types/${this.$route.params.id}/projects`; // se non mi arriva un edpoint allora vado alla pagina di default
            axios.get(endpoint).then(res => {

                this.projects = res.data; // riassegno gli array dichiarati vuoti con ciò che mi arriva in data e links
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
        <!-- <app-pagination :links="projects.links" @change-page="fetchProjects"></app-pagination> -->
    </div>
</template>

<style scoped lang="scss"></style>