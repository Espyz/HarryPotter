<template>
    <template v-if="$q.screen.width > 820">
        <div class="bg-black-semi relative-position">
            <div
                v-for="(actor, ind) in actors"
                :key="ind"
                class="row q-pa-md"
            >
                <div class="col-3 photo-container">
                    <img
                        :src="actor.photo"
                        :alt="actor.name"
                        class="actor-photo"
                    >
                </div>
                <div class="col-8 info-actor">
                    {{ actor.info }}
                </div>
            </div>
            <BackToMain class="absolute-bottom"/>
        </div>
    </template>
    <template v-else>
        <div>
            <div
                v-for="(actor, ind) in actors"
                :key="ind"
                class="q-pa-md"
            >
                <div class="photo-container">
                    <img
                        :src="actor.photo"
                        :alt="actor.name"
                        class="actor-photo"
                    >
                </div>
                <div class="info-actor">
                    {{ actor.info }}
                </div>
            </div>
        </div>
        <FooterDefault/>
    </template>
</template>
<script>
import FooterDefault from '../components/FooterDefault.vue';
import BackToMain from '../components/BackToMain.vue';

export default {
    components: {
        BackToMain,
        FooterDefault,
    },
    
    data() {
        return {
            actors: [
                {
                    name:  'harry',
                    photo: 'img/harry.png',
                    info:  'Актеру в серии фильмов была предложена роль Гарри Портера, в ней он запомнился зрителям больше всего. Дэниелю сегодня 34 года, он родом из Лондона. В актерской профессии замечен с 5 лет – сыграл обезьяну в школьной постановке. Первое появление на экране состоялось в 1999 году в телефильме «Дэвид Копперфилд». Рэдклифф находится в Книге рекордов Гиннесса за самый большой гонорар в последнем 10-летии.',
                },
                {
                    name:  'hermion',
                    photo: 'img/hermion.png',
                    info:  'В детском возрасте Эмме удачно проходит кастинг на одну из главных ролей в фильмах о Поттере – Гермионы Джин Грейнджер. Сыграв с успехом вундеркинда, талантливую молодую волшебницу, близкого друга Гарри, девочка продолжила актерскую карьеру. Сегодня Уотсон – 35-летняя британская модель, актриса.',
                },
                {
                    name:  'ron',
                    photo: 'img/ron.png',
                    info:  'В фильмах о Поттере, Руперт был приглашен на роль Рональда Билиуса Уизли – лучшего друга главных героев. Попал в проект в 11-летнем возрасте, пройдя прослушивание. Участие в нем принесло парню первый актерский успех. Сейчас британскому актеру 35 лет, он снимается в кино и для телевидения; занимается озвучиванием.',
                },
                {
                    name:  'volan',
                    photo: 'img/volan.png',
                    info:  'Рожденный в Манчестере английский актер сыграл в некоторых сериалах о Поттере, в которых главный герой был молодым – главного антогониста Тома Реддла – иначе Лорда Волан-де-Морта. Это самая известная работы Кристиана, принесшая мужчине узнаваемость, славу, деньги.',
                },
            ],
        };
    },
};
</script>
