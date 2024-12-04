<template>
    <div class="absolute-bottom">
        <div>
            <q-tabs
                class="full-width"
            >
                <q-tab
                    v-for="(film, ind) in films"
                    :key="ind"
                    v-bind="film"
                    class="q-ma-md filmTabs"
                >
                </q-tab>
            </q-tabs>
        </div>
        <footer class="q-ma-lg">
            Все материалы расположенные на сайте не являются публичной офертой или призывом к действию. Все товарные знаки принадлежат их законным владельцам. Данный ресурс носит исключительно информационно-ознакомительный характер, и не является
            официальным продуктом компании. Обратная связь с проектом: anthony.web.projects@gmail.com
        </footer>
    </div>
</template>

<script>

export default {
    data() {
        return {
            films: [
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
        };
    },
    
    methods: {
        redirect(name) {
            this.router.push('/' + name);
        },
    },
};
</script>