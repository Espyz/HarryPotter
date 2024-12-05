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
    <FooterDefault>
        <div>
            <q-tabs
                class="full-width q-ma-lg"
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
                        :src="`/src/assets/img/${film.name}.jpg`"
                        class="filmLogo"
                        alt="film-logo"
                    />
                    <q-tab
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
            defaultBackground: `url('/src/assets/img/MainBackground.jpg')`,
            activeFilm:        '',
            films:             [
                {
                    name:     'HP1',
                    label:    'Гарри Поттер и Философский камень',
                    filmLink: 'https://api.embr.ws/embed/movie/383',
                },
                {
                    name:     'HP2',
                    label:    'Гарри Поттер и Тайная комната',
                    filmLink: 'https://api.embr.ws/embed/movie/384',
                },
                {
                    name:     'HP3',
                    label:    'Гарри Поттер и узник Азкабана',
                    filmLink: 'https://api.embr.ws/embed/movie/385',
                },
                {
                    name:     'HP4',
                    label:    'Гарри Поттер и Кубок огня',
                    filmLink: 'https://api.embr.ws/embed/movie/386',
                },
                {
                    name:     'HP5',
                    label:    'Гарри Поттер и Орден Феникса',
                    filmLink: 'https://api.embr.ws/embed/movie/387',
                },
                {
                    name:     'HP6',
                    label:    'Гарри Поттер и Принц-полукровка',
                    filmLink: 'https://api.embr.ws/embed/movie/388',
                },
                {
                    name:     'HP7Part1',
                    label:    'Гарри Поттер и Дары смерти. Часть 1',
                    filmLink: 'https://api.embr.ws/embed/movie/389',
                },
                {
                    name:     'HP7Part2',
                    label:    'Гарри Поттер и Дары смерти. Часть 2',
                    filmLink: 'https://api.embr.ws/embed/movie/390',
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
            layout.style.backgroundImage = `url('/src/assets/img/${ element.name }.jpg')`;
        },
        
        openVideo(name) {
            this.activeFilm = name;
            this.changeBackground({ name });
            const { filmLink } = this.films.find(film => film.name === name);
            this.needVideo = true;
            this.defaultBackground = `url('/src/assets/img/${ name }.jpg')`;
            const player = document.getElementById('video');
            player.src = filmLink;
        },
    },
};
</script>
