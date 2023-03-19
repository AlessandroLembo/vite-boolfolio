// importo le funzioni di Vue Router
import {createRouter, createWebHistory} from 'vue-router';

// Importo le pagine che voglio usare
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/Projects/ProjectDetailPage.vue';



// Creiamo il router e definiamo le rotte
const router = createRouter({

    // simulo la navigazione come se fossimo sul web
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/contact', name: 'contact', component: ContactPage },

        // rotta per il singolo progetto
        { path: '/projects/:id', name: 'project-detail', component: ProjectDetailPage },


        // rotta per gestire pagine non esistenti
        {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage}
    ]
});

export {router}