<template>
    <q-layout class="main-layout">
        <div class="layout-container">
            <div class="row full-width">
                <div
                    class="col-6 layoutLogo"
                    @click="redirect('film')"
                >
                    HP
                </div>
                <q-tabs
                    :model-value="route.name"
                    class="col-6"
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
        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
import {
    useRoute,
    useRouter,
} from 'vue-router';

export default {
    data() {
        return {
            pages:  [
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
            route:  useRoute(),
            router: useRouter(),
        };
    },
    
    methods: {
        redirect(name) {
            this.router.push('/' + name);
        },
    },
};
</script>