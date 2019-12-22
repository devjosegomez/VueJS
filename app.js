new Vue({
    el: "#app",
    data:{
        title: "become a Vue ninja!",
        name: "José"
    },
    methods: {
        greet(){
            return `Hello ${this.name}, ${this.title}`
        }
    }
})