const recordUrl = "http://localhost:5292/api/Record";

Vue.createApp({
    data() {
        return {
            records: [],
            message: null
        }
    },
    mounted() {
        this.getRecord();
    },

    methods: {
        getRecord() {
            axios.get(recordUrl) 
            .then(response => {
                this.records = response.data;
                this.message = "Fetched players succesfully";
            })
            .catch(ex => {
                this.message = "Failed to fetch records - " + ex.message;
            });
        }
    }
}).mount("#app")