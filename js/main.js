const app = new Vue({
    el: "#app",
    data: {
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        emailsList: [],
    },
    mounted() {

        for (i = 0; i < 10; i++) {
            axios.get(this.url).then((result) => {
                this.emailsList.push(result.data.response)
            });
        }
        console.log(this.emailsList);

    },

    methods: {},
});