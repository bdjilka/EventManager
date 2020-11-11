<template>
    <div style="border: 2px solid #1a76d2; border-radius: 5px">
        <v-sheet tile height="54" class="d-flex">
            <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-select v-model="weekType"
                      return-object
                      :items="types"
                      color="primary"
                      dense
                      outlined
                      hide-details
                      class="ma-2"
                      label="Период">
            </v-select>

            <v-spacer></v-spacer>
            <v-btn icon class="ma-2" @click="$refs.calendar.next()">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-sheet>

        <v-sheet height="500">
            <v-calendar ref="calendar"
                        v-model="value"
                        locale="ru"
                        :weekdays="weekday"
                        :type="weekType.key"
                        :events="events"
                        event-name="title"
                        event-overlap-mode="column"
                        :event-overlap-threshold="30"
                        :event-color="getEventColor"
                        @click:event="showEvent"
                        @click:more="viewDay"
                        @click:date="viewDay"
                        @change="getEvents">
            </v-calendar>
        </v-sheet>
    </div>
</template>

<script lang="ts" src="./script.ts">
</script>
