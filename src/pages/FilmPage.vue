<template>
    <template v-if="$q.screen.width > 820">
        <div class="video-container">
            <iframe
                id="video"
                v-show="needVideo"
                title="Плеер 1"
                allow="autoplay *"
                allowfullscreen=""
                width="50vw"
                height="100%"
                style="border:none;width:50vw;height:100%;"
            ></iframe>
        </div>
        <div class="bg-black-semi">
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
                    :class="{ active: film.name === activeFilm.name }"
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
    </template>
    <template v-else>
        <div>
            <template v-if="activeFilm === ''">
                <div class="grid">
                    <div
                        v-for="film in films"
                        :key="film.name"
                        class="q-ma-md filmCard"
                        @click="openVideo(film.name, film.id)"
                    >
                        <img
                            :src="`img/${film.name}-logo.jpg`"
                            class="filmCardLogo"
                            alt="film-logo"
                        />
                        <div class="film-label">
                            {{ film.label }}
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="mob-film-name">
                    {{ activeFilm.label }}
                </div>
                <iframe
                    id="video"
                    v-show="needVideo"
                    title="Плеер 1"
                    allow="autoplay *"
                    allowfullscreen=""
                    width="100%"
                    height="60vw"
                    style="border:none;width:100%;height:47vw;"
                />
                <div
                    v-if="(films.slice(activeFilmId + 1, activeFilmId + 3)).length > 0"
                    class="flex justify-center next-film"
                >Смотрите далее
                </div>
                <div class="grid">
                    <div
                        v-for="film in films.slice(activeFilmId + 1, activeFilmId + 3)"
                        :key="film.name"
                        class="q-ma-md filmCard"
                        @click="openVideo(film.name, film.id)"
                    >
                        <img
                            :src="`img/${film.name}-logo.jpg`"
                            class="filmCardLogo"
                            alt="film-logo"
                        />
                        <div class="film-label">
                            {{ film.label }}
                        </div>
                    </div>
                    <template v-if="(films.slice(activeFilmId + 1, activeFilmId + 3)).length < 2">
                        <div
                            @click="backToMain"
                            class="back-main"
                        >Вернуться на главную
                        </div>
                    </template>
                </div>
            </template>
        </div>
    </template>
</template>

<script>
export default {
    data() {
        return {
            needVideo:         false,
            defaultBackground: 'bg-Main',
            activeFilm:        '',
            activeFilmId:      0,
            films:             [
                {
                    name:     'HP1',
                    label:    'Гарри Поттер и Философский камень',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=c1e0e2f4b897656d8566e5da785eb1&token=5af6e7af5ffb19f2ddb300d28d90f8',
                    id:       0,
                },
                {
                    name:     'HP2',
                    label:    'Гарри Поттер и Тайная комната',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=bfb5dd5140762af90ad365f668ee00&token=5af6e7af5ffb19f2ddb300d28d90f8',
                    id:       1,
                },
                {
                    name:     'HP3',
                    label:    'Гарри Поттер и узник Азкабана',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=f2a636811a7351000250d5af7e3fce&token=5af6e7af5ffb19f2ddb300d28d90f8',
                    id:       2,
                },
                {
                    name:     'HP4',
                    label:    'Гарри Поттер и Кубок огня',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=90266f44c44ac4d45d326746e30dab&token=5af6e7af5ffb19f2ddb300d28d90f8',
                    id:       3,
                },
                {
                    name:     'HP5',
                    label:    'Гарри Поттер и Орден Феникса',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=226f526b5209ee41eccd97cf13cfe9&token=5af6e7af5ffb19f2ddb300d28d90f8',
                    id:       4,
                },
                {
                    name:     'HP6',
                    label:    'Гарри Поттер и Принц-полукровка',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=8fd76c16ddd26766ccca976e0a5f29&token=5af6e7af5ffb19f2ddb300d28d90f8',
                    id:       5,
                },
                {
                    name:     'HP7Part1',
                    label:    'Гарри Поттер и Дары смерти. Часть 1',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=766dcc609c1f465a0dac24adc6b1f1&token=5af6e7af5ffb19f2ddb300d28d90f8',
                    id:       6,
                },
                {
                    name:     'HP7Part2',
                    label:    'Гарри Поттер и Дары смерти. Часть 2',
                    filmLink: 'https://looking.as.newplayjj.com:9443/?token_movie=f58499b74b6ac6451dbdc15f2bb760&token=5af6e7af5ffb19f2ddb300d28d90f8',
                    id:       7,
                },
            ],
            bgClassList:       [ 'bg-Main', 'bg-HP1', 'bg-HP2', 'bg-HP3', 'bg-HP4', 'bg-HP5', 'bg-HP6', 'bg-HP7Part1', 'bg-HP7Part2' ],
        };
    },
    
    methods: {
        backgroundDefault() {
            if (this.$q.screen.width > 820) {
                const layout = document.getElementById('main-layout');
                for (const _class of this.bgClassList) {
                    layout.classList.remove(_class);
                }
                
                layout.classList.add(this.defaultBackground);
            }
        },
        
        changeBackground(element) {
            if (this.$q.screen.width > 820) {
                const layout = document.getElementById('main-layout');
                
                for (const _class of this.bgClassList) {
                    layout.classList.remove(_class);
                }
                
                layout.classList.add('bg-' + element.name);
            }
            else {
                const layout = document.getElementById('layout');
                
                for (const _class of this.bgClassList) {
                    layout.classList.remove(_class);
                }
                
                layout.classList.add('bg-' + element.name);
                layout.classList.add('active');
            }
        },
        
        async openVideo(name, ind = 0) {
            this.changeBackground({ name });
            const film = this.films.find(film => film.name === name);
            const filmLink = film.filmLink;
            this.activeFilm = film;
            this.activeFilmId = ind;
            this.needVideo = true;
            this.defaultBackground = `url('img/${ name }.jpg')`;
            await new Promise((resolve) => setTimeout(resolve, 500));
            const player = document.getElementById('video');
            player.src = filmLink;
        },
        
        backToMain() {
            const layout = document.getElementById('layout');
            for (const _class of this.bgClassList) {
                layout.classList.remove(_class);
            }
            
            this.activeFilm = '';
        },
    },
};
</script>
