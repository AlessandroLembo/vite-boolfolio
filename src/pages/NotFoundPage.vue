<script>
export default {
    name: 'NotFoundPage',
};
</script>

<template>
    <div class="container vh-100 d-flex flex-column justify-content-center align-items-center">
        <h2>404 | Not Found</h2>
        <!-- bottone per tornare indietro -->
        <router-link :to="{ name: 'home' }" class="btn btn-sm btn-secondary mt-3">Toran alla Home</router-link>
    </div>
</template>