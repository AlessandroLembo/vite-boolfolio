<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
    computed: {
        projectDate() {
            const date = new Date(this.project.updated_at);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();

            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;

            return `${day}/${month}/${year} - ${hours}:${minutes}`;

        },

        abstract() {
            const abstract = this.project.description.slice(0, 50)
            return abstract + '...';
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h3>{{ project.name }}</h3>
            <router-link v-if="project.type" :to="{ name: 'type-projects', params: { id: project.type.id } }">
                <!-- Oltre al v-if (più corretto in questo caso) potrei verificare l'esistenza del tipo con il punto interrogativo dopo type -->
                <div class="badge" :style="{ backgroundColor: project.type.color }">{{
                    project.type.label }}
                </div>
            </router-link>

        </div>
        <div class="card-body d-flex justify-content-between align-items-start ps-card">
            <div class="d-flex flex-column justify-content-between">
                <div>
                    <h5><i>Progetto per: </i>{{ project.project_for }}</h5>
                    <p v-if="project.description">{{ abstract }}</p>
                    <p v-if="project.web_platform"><i>Piattaforme: </i>{{ project.web_platform }}</p>
                    <div v-if="project.technologies?.length">
                        <span v-for="technology in project.technologies" :key="technology.id"
                            :class="`text-bg-${technology.color}`" class="badge me-2">{{ technology.label }}</span>
                    </div>
                </div>

                <p class="pt-3"><i>Ultima modifica: </i>{{ projectDate }}</p>
            </div>



            <!-- bindo il to, metto il nome della rotta e passo il paramentro che mi serve, l'id -->
            <router-link v-if="!isDetail" :to="{ name: 'project-detail', params: { id: project.id } }"
                class="btn btn-success align-self-end">Vedi</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ps-card {
    min-height: 200px;
}
</style>

