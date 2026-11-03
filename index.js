recordUrl = "http://localhost:5292/api/Record";

Vue.createApp({
    data() {
        return {
            records: [],
            message: null
        }
    },
    methods: {
        getRecord() {
            axios.get(recordUrl).then(response =>{
                this.records = response.data;
                this.message = "Fetched players succesfully";
            })
            .catch(ex => {
                this.message = "Failde to fetch players - " + ex.message;
            })
        }
    }
}).mount("#app")