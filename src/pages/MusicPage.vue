<template>
    <template v-if="$q.screen.width > 820">
        <FooterDefault class="info-container">
            <div class="info-content">
                Проект потребовал привлечения к написанию музыкальных тем к нему нескольких композиторов – Джона Уильямса, Патрика Дойла, Николаса Хупера, Александра Депла – и музыкантов. Среди последних – Джарвис Кокер, Ник Кейв.
                Помимо восьми саундтреков, сопровождающих каждую из серий фильмов, в проекте нашли достойное место песни
                <ul>
                    <li>«Дом призраков Хогвартса» в первом фильме «поттерианы».</li>
                    <li>«O'Children» в исполнении Ника Кейва, с сопровождением «the Bad Seeds». Под нее танцуют Гарри и Гермиона.</li>
                    <li>«Boys Will Be Boys», которую исполняет «The Ordinary Boys».</li>
                    <li>«Big Beat Repeat» – является маггловской песней Джоша Пауэлла.</li>
                    <li>«Weird Sisters – ночная рок-мелодия, под которую танцевали на Святочном балу.</li>
                </ul>
            </div>
            <BackToMain/>
        </FooterDefault>
    </template>
    <template v-else>
        <div class="info-container else">
            <div class="info-content">
                Проект потребовал привлечения к написанию музыкальных тем к нему нескольких композиторов – Джона Уильямса, Патрика Дойла, Николаса Хупера, Александра Депла – и музыкантов. Среди последних – Джарвис Кокер, Ник Кейв.
                Помимо восьми саундтреков, сопровождающих каждую из серий фильмов, в проекте нашли достойное место песни
                <ul>
                    <li>«Дом призраков Хогвартса» в первом фильме «поттерианы».</li>
                    <li>«O'Children» в исполнении Ника Кейва, с сопровождением «the Bad Seeds». Под нее танцуют Гарри и Гермиона.</li>
                    <li>«Boys Will Be Boys», которую исполняет «The Ordinary Boys».</li>
                    <li>«Big Beat Repeat» – является маггловской песней Джоша Пауэлла.</li>
                    <li>«Weird Sisters – ночная рок-мелодия, под которую танцевали на Святочном балу.</li>
                </ul>
            </div>
            <BackToMain/>
        </div>
        <FooterDefault></FooterDefault>
    </template>
</template>

<script>

import FooterDefault from '../components/FooterDefault.vue';
import BackToMain from '../components/BackToMain.vue';

export default {
    components: { BackToMain, FooterDefault },
};
</script>
