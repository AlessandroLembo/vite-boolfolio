<script>
import axios from 'axios';
import ProjectCard from '../../components/Projects/ProjectCard.vue';

// Salvo in una variabile la base APi (8000 è la porta del server su cui gira l'app del mio progetto)
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        isLoading: false
    }),
    methods: {
        getProject() {
            this.isLoading = true;

            // Posso costruire l'endpoint esternamente (prendo la rotta, prendimi il parametro id, come l'ho chiamato nella definizione della rotta)
            const endpoint = apiBaseUrl + 'projects/' + this.$route.params.id
            axios.get(endpoint).then(res => {
                this.project = res.data;
            }).catch(() => {
                // In caso di pagina non trovata, faccio un redirect forzato alla pagina not-found (componente NotFoundPage)
                this.$router.push({ name: 'not-found' });
            }).then(() => {
                this.isLoading = false;
            });


        }
    },
    created() {
        this.getProject();
    }
};
</script>

<template>
    <div class="container">
        <app-loader v-if="isLoading"></app-loader>

        <project-card v-else :project="project" :isDetail="true" class="detail-card"></project-card>
        <div class="d-flex justify-content-end me-4">
            <router-link :to="{ name: 'home' }" class="btn btn-secondary">Torna alla Home</router-link>

        </div>
    </div>
</template>

<style scoped lang="scss">
.detail-card {
    border: 1px solid lightgray;
    margin: 2rem;
}
</style>

