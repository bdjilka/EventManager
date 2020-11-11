<template>
    <v-card dark :color="currentEvent.color" v-if="!!currentEvent" class="pa-5">

        <v-card-title class="pa-0">
            <span>
                {{currentEvent.title}}
                <v-icon @click="openForm" class="pb-1" small>
                    mdi-pencil
                </v-icon>
                 <v-icon @click="deleteEvent" class="pb-1" small>
                    mdi-close
                </v-icon>
            </span>

            <v-spacer></v-spacer>
            <v-icon @click="closeEvent">
                mdi-close
            </v-icon>
        </v-card-title>
        <br/>

        <p>
            <span class="text-uppercase" style="font-size: 12px;">Начало: </span>
            <span class="font-weight-bold">{{new Date(currentEvent.start).toLocaleString()}}</span>
        </p>
        <p>
            <span class="text-uppercase" style="font-size: 12px">Окончание: </span>
            <span class="font-weight-bold">{{new Date(currentEvent.end).toLocaleString()}}</span>
        </p>
        <br/>

        <p>
            <span class="text-uppercase" style="font-size: 12px;">Информация о мероприятии:</span>
             <span v-if="!currentEvent.information || !currentEvent.information.length">
                 --отсутствует--
             </span>
        </p>
        <ul v-if="!!currentEvent.information && !!currentEvent.information.length">
            <li v-for="item in currentEvent.information" :key="item">
                {{item}}
            </li>
        </ul>

        <v-card-actions class="mt-10 pa-0" v-if="!!currentEvent.last_update">
            <v-spacer></v-spacer>
            <v-icon class="mr-1" x-small>mdi-restore</v-icon>
            <span style="font-size: 11px;">{{ new Date().toLocaleString() }}</span>
        </v-card-actions>

    </v-card>

    <v-card v-else color="warning lighten-3" class="pa-5">
        -- Мероприятие не выбрано --
    </v-card>
</template>

<script lang="ts" src="./script.ts">
</script>
