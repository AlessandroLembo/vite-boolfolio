<script>
export default {
    name: 'AppAlert',
    props: { isOpen: Boolean },
    emits: ['close'],
};
</script>

<template>
    <div v-if="isOpen" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error: </strong>Errore nel recupero dei progetti.

        <!-- emit per chiamare il parent e avvisarlo dell'evento -->
        <button type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>