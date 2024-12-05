<template>
    <div class="back-button-container">
        <div
            class="back-button"
            @click="back"
        >
            Вернуться к просмотру
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'BackToMain',
    data() {
        return {
            router: useRouter(),
        };
    },
    methods: {
        back() {
            this.router.push('/film');
        },
    },
};
</script>