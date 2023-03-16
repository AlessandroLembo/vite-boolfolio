<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean }
};
</script>

<template>
    <div class="project-card text-center">
        <div class="ps-card d-flex flex-column justify-content-between align-items-center">
            <div>
                <h3>{{ project.name }}</h3>
                <p v-if="project.description">{{ project.description }}</p>
                <p><i>Progetto per: </i>{{ project.project_for }}</p>
                <p v-if="project.web_platform"><i>Piattaforme: </i>{{ project.web_platform }}</p>
                <!-- <p><i>Ultima modifica: </i>{{ projectDate }}</p>S -->
            </div>

            <!-- bindo il to, metto il nome della rotta e passo il paramentro che mi serve, l'id -->

            <router-link v-if="!isDetail" :to="{ name: 'project-detail', params: { id: project.id } }"
                class="btn btn-sm btn-success">Vedi</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ps-card {
    min-height: 350px;
    padding: 1.5rem;
    border: 1px solid lightgray;
}
</style>

