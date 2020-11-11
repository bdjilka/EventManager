import Vue from 'vue';
import Vuex from 'vuex';
import {mTypes} from './mutationTypes';
import rnd from '@/utils.js';
import axios from '../axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        events: [],
        startDate: null,
        endDate: null,
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Встреча', 'Путешествие', 'Конференция', 'Вебинар'],
        selectedEvent: null,
        isFormOpened: false,
        isEdit: false,
    },
    mutations: {
        [mTypes.ADD_EVENT](state, payload) {
            state.events.push(payload);
        },
        [mTypes.SET_BOUNDS](state, payload) {
            state.startDate = payload.start;
            state.endDate = payload.end;
        },
        [mTypes.SET_EVENT](state, payload) {
            state.selectedEvent = payload;
        },
        [mTypes.OPEN_FORM](state) {
            state.isFormOpened = true;
        },
        [mTypes.CLOSE_FORM](state) {
            state.isFormOpened = false;
        },
        [mTypes.SET_IS_EDIT](state, payload) {
            state.isEdit = payload;
        },
        [mTypes.REWRITE_EVENTS](state, payload) {
            state.events = payload;
        },
    },
    actions: {
        getEvents({commit}) {
            axios.get('events/')
                .then((data) => {
                    const events = data.data;
                    events.forEach((x) => {
                        x.start = new Date(x.start);
                        x.end = new Date(x.end);
                    });
                    commit(mTypes.REWRITE_EVENTS, events);
                })
        },
        addEvent({commit}, payload) {
            axios.post('events/', payload)
                .then((data) => {
                    commit(mTypes.ADD_EVENT, {
                        ...data.data,
                        start: new Date(data.data.start),
                        end: new Date(data.data.end),
                    });
                    commit(mTypes.CLOSE_FORM);
                })
                .catch((error) => {
                    alert(error);
                });
        },
        async changeEvent({commit, dispatch, state}, payload) {
            axios.put(`events/${payload.id}/`, payload)
                .then(async () => {
                    await dispatch('getEvents');
                    commit(mTypes.SET_EVENT, payload);
                    commit(mTypes.CLOSE_FORM);
                })
                .catch((error) => {
                    alert(error);
                });
        },
        async deleteEvent({commit, dispatch, state}, payload) {
            axios.delete(`events/${payload}/`)
                .then(async () => {
                    commit(mTypes.SET_EVENT, null);
                    commit(mTypes.SET_IS_EDIT, false);
                    await dispatch('getEvents');
                    commit(mTypes.CLOSE_FORM);
                })
                .catch((error) => {
                    alert(error);
                });
        },
        async generateEvent({state, dispatch}) {
            const min = new Date(`${state.startDate.date}T00:00:00`);
            const max = new Date(`${state.endDate.date}T23:59:59`);

            const firstTimestamp = rnd(min.getTime(), max.getTime());
            const first = new Date(firstTimestamp - (firstTimestamp % 900000));
            const secondTimestamp = rnd(2, 8) * 900000;
            const second = new Date(first.getTime() + secondTimestamp);

            const event = {
                title: state.names[rnd(0, state.names.length - 1)],
                start: first,
                end: second,
                color: state.colors[rnd(0, state.colors.length - 1)],
                information: [],
            };

            await dispatch('addEvent', event);
        },
        setDateBounds({commit}, payload) {
            commit(mTypes.SET_BOUNDS, payload);
        },
        setEvent({commit,}, payload) {
            commit(mTypes.SET_EVENT, payload);
        },
        openEditEvent({commit}) {
            commit(mTypes.SET_IS_EDIT, true);
            commit(mTypes.OPEN_FORM);
        },
        openCreateEvent({commit}) {
            commit(mTypes.SET_IS_EDIT, false);
            commit(mTypes.OPEN_FORM);
        },
        closeForm({commit}) {
            commit(mTypes.CLOSE_FORM);
        },
    },
    getters: {
        events: state => {
            return state.events;
        },
        colors: state => {
            return state.colors;
        },
        currentEvent: state => {
            return state.selectedEvent;
        },
        isForm: state => {
            return state.isFormOpened;
        },
        isEdit: state => {
            return state.isEdit;
        },
    }
});
