import ax from 'axios';

const axios = ax.create();

axios.defaults.baseURL = process.env.VUE_APP_BACKEND + '/api';

export default axios;
