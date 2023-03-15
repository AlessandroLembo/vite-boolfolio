<script>
export default {
    name: 'AppCard',
    props: { projects: Array },

};
</script>

<template>
    <section id="projects-list">
        <div v-if="projects.length" class="row-projects">
            <div v-for="project in projects" :key="project.id" class="col-projects">
                <div class="card text-center">
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                    <p><i>Progetto per: </i>{{ project.project_for }}</p>
                    <p><i>Piattaforme: </i>{{ project.web_platform }}</p>
                    <p><i>Ultima modifica: </i>{{ project.updated_at }}</p>

                </div>
            </div>

        </div>
        <h2 v-else class="my-4">Non ci sono progetti</h2>

    </section>
</template>

<style scoped lang="scss">
.row-projects {
    display: flex;
    flex-wrap: wrap;
}

.col-projects {
    flex-basis: calc(100% / 3);
    min-height: 300px;
    padding: 1rem;

    .card {
        height: 100%;
        padding: 10px;
    }
}
</style>