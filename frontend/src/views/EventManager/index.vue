<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="12" md="7">
                <calendar></calendar>
            </v-col>

            <v-col cols="12" sm="12" md="5">
                <v-row>
                    <v-col cols="12" sm="12" md="6" class="pt-0">
                        <v-btn @click="createEvent"
                               color="info"
                               class="mb-4"
                               large
                               style="width: 100%">
                            Создать мероприятие
                        </v-btn>
                    </v-col>

                    <v-col cols="12" sm="12" md="6" class="pt-0">
                        <v-btn @click="randEvent"
                               color="info"
                               class="mb-4"
                               large
                               style="width: 100%">
                            Сгенерировать мероприятие
                        </v-btn>
                    </v-col>
                </v-row>

                <event-card></event-card>
            </v-col>
        </v-row>

        <v-dialog persistent v-model="isForm" width="40vw">
            <event-form></event-form>
        </v-dialog>
    </v-container>
</template>

<script lang="ts" src="./script.ts">
</script>
