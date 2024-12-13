<template>
    <q-layout
        class="main-layout"
        id="main-layout"
    >
        <template v-if="!burgerActive || $q.screen.width > 820">
            <div class="layout-container">
                <div
                    class="row full-width items-center"
                    id="layout"
                >
                    <div
                        class="col-6 layoutLogo"
                        @click="redirect('film')"
                    >
                        <div>HP</div>
                    </div>
                    <div
                        class="col-6 burger-container"
                        @click="changeBurger"
                    >
                        <q-icon
                            class="burger"
                            name="menu"
                        />
                    </div>
                    <q-tabs
                        :model-value="route.name"
                        class="col-6 pageSwapper"
                        align="right"
                        active-class="layoutTabs-active"
                        @update:model-value="redirect"
                    >
                        <q-tab
                            v-for="(page, ind) in pages"
                            :key="ind"
                            v-bind="page"
                            class="q-ma-md layoutTabs"
                        >
                        </q-tab>
                    </q-tabs>
                </div>
            </div>
            <q-page-container class="full-height flex1 flex page-container">
                <router-view/>
            </q-page-container>
            <footer class="footer q-pa-lg">
                Все материалы расположенные на сайте не являются публичной офертой или призывом к действию. Все товарные знаки принадлежат их законным владельцам. Данный ресурс носит исключительно информационно-ознакомительный характер, и не
                является
                официальным продуктом компании. Обратная связь с проектом: <a class="underline">anthony.web.projects@gmail.com</a>
            </footer>
        </template>
        <template v-else>
            <div class="burger-menu">
                <div class="row full-width items-center">
                    <div
                        class="col-6 layoutLogo"
                        @click="redirect('film')"
                    >
                        <div>HP</div>
                    </div>
                    <div
                        class="col-6 burger-container"
                        @click="changeBurger"
                    >
                        <q-icon
                            class="burger"
                            name="close"
                        />
                    </div>
                </div>
                <q-tabs
                    :model-value="route.name"
                    vertical
                    active-class="layoutTabs-active"
                    @update:model-value="redirect"
                >
                    <q-tab
                        v-for="(page, ind) in pagesBurger"
                        :key="ind"
                        v-bind="page"
                        class="q-ma-md layoutTabs"
                    >
                    </q-tab>
                </q-tabs>
                <FooterDefault></FooterDefault>
            </div>
        </template>
    </q-layout>
</template>

<script>
import {
    useRoute,
    useRouter,
} from 'vue-router';

import { useQuasar } from 'quasar';
import FooterDefault from '../components/FooterDefault.vue';

export default {
    components: { FooterDefault },
    data() {
        return {
            pages:        [
                {
                    name:  'info',
                    label: 'О фильме',
                },
                {
                    name:  'actors',
                    label: 'Актёры',
                },
                {
                    name:  'music',
                    label: 'Музыка',
                },
            ],
            pagesBurger:  [
                {
                    name:  'info',
                    label: 'О фильме',
                },
                {
                    name:  'actors',
                    label: 'Актёры',
                },
                {
                    name:  'music',
                    label: 'Музыка',
                },
                {
                    name:  'film',
                    label: 'Фильмы',
                },
            ],
            burgerActive: false,
            route:        useRoute(),
            router:       useRouter(),
            $q:           useQuasar(),
        };
    },
    
    methods: {
        redirect(name) {
            this.router.push('/' + name);
            this.burgerActive = false;
        },
        
        changeBurger() {
            this.burgerActive = !this.burgerActive;
        },
    },
};
</script>
