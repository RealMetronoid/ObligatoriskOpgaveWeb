const recordUrl = "http://localhost:5292/api/Record";

Vue.createApp({
    data() {
        return {
            records: [],
            message: null,
            filters: {
                title: null,
                artist: null,
                sortBy: null
            }
        }
    },
    mounted() {
        this.getRecords();
        this.getRecords();
    },
    methods: {
        getRecords() {
            // Build a clean params object, stripping out empty string filters
            const params = {};
            if (this.filters.title) params.title = this.filters.title;
            if (this.filters.artist) params.artist = this.filters.artist;
            if (this.filters.sortBy) params.sortBy = this.filters.sortBy;

            // Axios automatically appends these as query strings (?title=...&sortBy=...)
            axios.get(recordUrl, { params })
                .then(response => {
                    this.records = response.data;
                    this.message = "Fetched records successfully";
                })
                .catch(ex => {
                    this.message = "Failed to fetch records - " + ex.message;
                });
        }
    }
}).mount("#app");