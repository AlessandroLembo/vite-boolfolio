<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
    computed: {
        projectDate() {
            const date = new Date(this.project.updated_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

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
            <!-- Oltre al v-if (più corretto in questo caso) potrei verificare l'esistenza del tipo con il punto interrogativo dopo type -->
            <div class="badge" v-if="project.type" :style="{ backgroundColor: project.type.color }">{{ project.type.label }}
            </div>
        </div>
        <div class="card-body d-flex justify-content-between align-items-start ps-card">
            <div>
                <h5><i>Progetto per: </i>{{ project.project_for }}</h5>
                <p v-if="project.description">{{ abstract }}</p>
                <p v-if="project.web_platform"><i>Piattaforme: </i>{{ project.web_platform }}</p>
                <p><i>Ultima modifica: </i>{{ projectDate }}</p>
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

