import {Component, Vue, Watch} from 'vue-property-decorator';


@Component
export default class EventForm extends Vue {
    eventData = {
        title: '',
        color: 'blue',
        start: '',
        end: '',
        information: [],
    };
    startTime = null;
    startDate = null;
    endTime = null;
    endDate = null;

    information = null;

    menu1 = false;
    menu2 = false;

    rule = [v => !!v || 'Обязательное поле',];
    valid = false;

    get isForm() {
        return this.$store.getters.isForm;
    }

    get colors() {
        return this.$store.getters.colors;
    }

    get isEdit() {
        return this.$store.getters.isEdit;
    }

    get currentEvent() {
        return this.$store.getters.currentEvent;
    }

    @Watch('isForm')
    isFormChanged(val) {
        this.$refs.form.resetValidation();

        if (val && this.isEdit) {
            this.setEventData();
        }

        if (val == false) {
            this.eventData = {
                title: '',
                color: 'blue',
                start: '',
                end: '',
            };
            this.information = null;
        }
    }

    setEventData() {
        this.eventData = {
            ...this.currentEvent
        };
        this.startDate = this.currentEvent.start.toISOString().substr(0, 10);
        this.startTime = this.currentEvent.start.toISOString().substr(11, 5);
        this.endDate = this.currentEvent.end.toISOString().substr(0, 10);
        this.endTime = this.currentEvent.end.toISOString().substr(11, 5);
    }

    async closeForm() {
        await this.$store.dispatch('closeForm');
    }

    async submit() {
        if (!this.$refs.form.validate()) {
            return;
        }
        if (this.information) {
            this.eventData.information.push(this.information);
        }

        this.eventData.start = `${this.startDate}T${this.startTime}`;
        this.eventData.end = `${this.endDate}T${this.endTime}`;

        await this.$store.dispatch(this.isEdit ? 'changeEvent' : 'addEvent', this.eventData);
    }

    mounted() {
        if (this.isEdit && !!this.currentEvent) {
            this.setEventData();
        }
    }
}
