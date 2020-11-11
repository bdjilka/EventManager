import {Component, Vue} from 'vue-property-decorator';


@Component
export default class EventCard extends Vue {
    get currentEvent() {
        return this.$store.getters.currentEvent;
    }

    async closeEvent() {
        await this.$store.dispatch('setEvent', null);
    }

    async openForm() {
        await this.$store.dispatch('openEditEvent');
    }

    async deleteEvent() {
        await this.$store.dispatch('deleteEvent', this.currentEvent.id);
    }
}
