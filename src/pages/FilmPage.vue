<template>
    <iframe
        id="video"
        v-show="needVideo"
        title="Плеер 1"
        allow="autoplay *"
        allowfullscreen=""
        width="100%"
        height="100%"
        style="border:none;width:100%;height:100%;"
    ></iframe>
    <FooterDefault class="z-min">
        <div>
            <q-tabs
                class="filmTabsContainer"
                @update:model-value="openVideo"
                outside-arrows
                mobile-arrows
            >
                <div
                    v-for="film in films"
                    :key="film.name"
                    class="q-ma-md filmTabs"
                    :class="{ active: film.name === activeFilm }"
                    @mouseover="changeBackground(film)"
                    @mouseleave="backgroundDefault"
                    @click="openVideo(film.name)"
                >
                    <img
                        :src="`img/${film.name}.jpg`"
                        class="filmLogo"
                        alt="film-logo"
                    />
                    <q-tab
                        class="film-label"
                        v-bind="film"
                    />
                </div>
            </q-tabs>
        </div>
    </FooterDefault>
</template>

<script>

import FooterDefault from '../components/FooterDefault.vue';

export default {
    components: { FooterDefault },
    data() {
        return {
            needVideo:         false,
            defaultBackground: `url('img/MainBackground.jpg')`,
            activeFilm:        '',
            films:             [
                {
                    name:     'HP1',
                    label:    'Гарри Поттер и Философский камень',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=c1e0e2f4b897656d8566e5da785eb1&token=5af6e7af5ffb19f2ddb300d28d90f8',
                },
                {
                    name:     'HP2',
                    label:    'Гарри Поттер и Тайная комната',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=bfb5dd5140762af90ad365f668ee00&token=5af6e7af5ffb19f2ddb300d28d90f8',
                },
                {
                    name:     'HP3',
                    label:    'Гарри Поттер и узник Азкабана',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=f2a636811a7351000250d5af7e3fce&token=5af6e7af5ffb19f2ddb300d28d90f8',
                },
                {
                    name:     'HP4',
                    label:    'Гарри Поттер и Кубок огня',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=90266f44c44ac4d45d326746e30dab&token=5af6e7af5ffb19f2ddb300d28d90f8',
                },
                {
                    name:     'HP5',
                    label:    'Гарри Поттер и Орден Феникса',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=226f526b5209ee41eccd97cf13cfe9&token=5af6e7af5ffb19f2ddb300d28d90f8',
                },
                {
                    name:     'HP6',
                    label:    'Гарри Поттер и Принц-полукровка',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=8fd76c16ddd26766ccca976e0a5f29&token=5af6e7af5ffb19f2ddb300d28d90f8',
                },
                {
                    name:     'HP7Part1',
                    label:    'Гарри Поттер и Дары смерти. Часть 1',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=766dcc609c1f465a0dac24adc6b1f1&token=5af6e7af5ffb19f2ddb300d28d90f8',
                },
                {
                    name:     'HP7Part2',
                    label:    'Гарри Поттер и Дары смерти. Часть 2',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=f58499b74b6ac6451dbdc15f2bb760&token=5af6e7af5ffb19f2ddb300d28d90f8',
                },
            ],
        };
    },
    
    methods: {
        backgroundDefault() {
            const layout = document.getElementById('main-layout');
            layout.style.backgroundImage = this.defaultBackground;
        },
        
        changeBackground(element) {
            const layout = document.getElementById('main-layout');
            layout.style.backgroundImage = `url('img/${ element.name }.jpg')`;
        },
        
        openVideo(name) {
            this.activeFilm = name;
            this.changeBackground({ name });
            const { filmLink } = this.films.find(film => film.name === name);
            this.needVideo = true;
            this.defaultBackground = `url('img/${ name }.jpg')`;
            const player = document.getElementById('video');
            player.src = filmLink;
        },
    },
};
</script>
