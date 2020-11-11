import {Component, Vue} from 'vue-property-decorator';
import rnd from '@/utils';


@Component
export default class Calendar extends Vue {

    weekType = {key: 'month', text: 'Месяц'};
    types = [
        {key: 'month', text: 'Месяц'},
        {key: 'week', text: 'Неделя'},
        {key: 'day', text: 'День'}];

    weekday = [1, 2, 3, 4, 5, 6, 0];

    value = '';

    get events() {
        return this.$store.getters.events;
    }

    async getEvents({start, end}) {

        await this.$store.dispatch('setDateBounds', {start, end});
    }

    getEventColor(event) {
        return event.color;
    }

    async showEvent({event}) {
        await this.$store.dispatch('setEvent', event);
    }

    viewDay({ date }) {
        this.value = date;
        this.weekType = {key: 'day', text: 'День'};
    }
}
