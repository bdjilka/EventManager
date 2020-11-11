import {Component, Vue} from 'vue-property-decorator';
import Calendar from '@/components/Calendar/index.vue';
import EventCard from '@/components/EventCard/index.vue';
import EventForm from '@/components/EventForm/index.vue';


@Component({
    components: {
        Calendar,
        EventCard,
        EventForm
    }
})
export default class EventManager extends Vue {
    get isForm() {
        return this.$store.getters.isForm;
    }

    async createEvent() {
        await this.$store.dispatch('openCreateEvent');
    }
    async randEvent() {
        await this.$store.dispatch('generateEvent');
    }

    async mounted() {
        await this.$store.dispatch('getEvents');
    }
}
