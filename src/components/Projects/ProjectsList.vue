<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectList',
    components: { ProjectCard },
    props: { projects: Array }
};
</script>

<template>
    <section id="projects-list">
        <div v-if="projects.length" class="row-projects">
            <project-card v-for="project in projects" :key="project.id" :project="project"
                class="col-projects"></project-card>

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
    min-height: 350px;
    padding: 1.5rem;

}
</style>