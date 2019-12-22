new Vue({
    el: "#app",
    data:{
        title: "become a Vue ninja!",
        name: "José",
        url: "https://github.com/devjosegomez",
        classes: ["one", "two"],
        age: 27
    },
    methods: {
        greet(){
            return `Hello ${this.name}, ${this.title}`
        }
    }
})