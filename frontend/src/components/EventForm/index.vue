<template>
    <v-card class="pa-5">
        <v-card-title class="pa-0">
            <span v-if="isEdit">Редактирование мероприятия</span>
            <span v-else>Создание мероприятия</span>

            <v-spacer></v-spacer>
            <v-icon @click="closeForm">mdi-close</v-icon>
        </v-card-title>
        <br/>

        <v-form ref="form" v-model="valid">
            <v-text-field :rules="rule"
                          label="Название"
                          dense
                          outlined
                          color="primary"
                          v-model="eventData.title">
            </v-text-field>


            <!--<v-menu v-model="menu1"-->
                    <!--:close-on-content-click="false"-->
                    <!--:nudge-right="40"-->
                    <!--transition="scale-transition"-->
                    <!--offset-y-->
                    <!--min-width="290px">-->
                <!--<template v-slot:activator="{ on, attrs }">-->
                    <!--<v-text-field :rules="rule"-->
                                  <!--label="Название"-->
                                  <!--dense-->
                                  <!--outlined-->
                                  <!--color="primary"-->
                                  <!--v-model="eventData.title"-->
                                  <!--prepend-icon="mdi-calendar"-->
                                  <!--readonly-->
                                  <!--v-bind="attrs"-->
                                  <!--v-on="on">-->
                    <!--</v-text-field>-->
                <!--</template>-->
                <!--<v-date-picker v-model="eventData.title" @input="menu1 = false"></v-date-picker>-->
            <!--</v-menu>-->


            <v-text-field :rules="rule"
                          label="Начало"
                          dense
                          outlined
                          v-model="eventData.start">
            </v-text-field>

            <v-text-field :rules="rule"
                          label="Окончание"
                          dense
                          outlined
                          v-model="eventData.end">
            </v-text-field>

            <v-text-field label="Добавить информацию"
                          dense
                          outlined
                          v-model="information">
            </v-text-field>

            <v-select label="Цвет"
                      dense
                      :items="colors"
                      outlined
                      v-model="eventData.color">
            </v-select>
        </v-form>

        <v-card-actions class="pl-0 pr-0">
            <v-btn block color="primary" large @click="submit">
                Сохранить
            </v-btn>
        </v-card-actions>

    </v-card>
</template>

<script lang="ts" src="./script.ts">
</script>
