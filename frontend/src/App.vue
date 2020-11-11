<template>
    <v-app>
        <app-bar></app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import EventManagerBar from './components/EMBar/index.vue';



    export default Vue.extend({
        name: 'App',
        components: {
            'app-bar': EventManagerBar
        }
    });
</script>
