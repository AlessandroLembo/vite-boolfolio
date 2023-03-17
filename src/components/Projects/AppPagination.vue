<script>
export default {
    name: 'AppPagination',
    props: { links: Array },
    emits: ['change-page']
};
</script>

<template>
    <nav class="my-3">
        <ul class="pagination">
            <!-- metto la classe disabled al link che non ha un url -->
            <li v-for="link in links" :key="link.label" class="page-item"
                :class="[{ 'active': link.active }, { 'disabled': !link.url }]">
                <button type="button" :disabled="!link.url" class="page-link" href="#" v-html="link.label"
                    @click="$emit('change-page', link.url)"></button>
            </li>
        </ul>
    </nav>
</template>