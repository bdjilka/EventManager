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
        if (val && this.isEdit) {
            this.eventData = {
                ...this.currentEvent
            };
        }

        if (val == false) {
            this.eventData = {
                title: '',
                color: '',
                start: '',
                end: '',
            };
            this.information = null;
        }
    }

    async addEvent() {
        await this.$store.dispatch('addEvent', {
          amount: 10
        });
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

        await this.$store.dispatch(this.isEdit ? 'changeEvent': 'addEvent', this.eventData);
    }

    mounted() {
        if (this.isEdit && !!this.currentEvent) {
            this.eventData = {
                ...this.currentEvent
            };
        }
    }
}
