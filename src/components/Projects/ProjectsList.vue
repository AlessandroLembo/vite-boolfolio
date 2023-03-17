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
        <div v-if="projects.length">
            <project-card v-for="project in projects" :key="project.id" :project="project" class="mt-4"></project-card>

        </div>
        <h2 v-else class="my-4">Non ci sono progetti</h2>

    </section>
</template>

<style scoped lang="scss"></style>