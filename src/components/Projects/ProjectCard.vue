<script>
export default {
    name: 'AppCard',
    props: { projects: Array },
    // computed: {
    //     projectDate() {
    //         const date = new Date(this.project.updated_at);
    //         let day = date.getDay();
    //         let month = date.getMonth();
    //         const year = date.getFullYear();

    //         if (day < 10) day = '0' + day;
    //         if (month < 10) month = '0' + month;

    //         return `${day}/${month}/${year}`;
    //     }
    // }
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
                    <!-- <p><i>Ultima modifica: </i>{{ projectDate }}</p> -->

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