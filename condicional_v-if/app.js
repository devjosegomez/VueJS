new Vue({
    el: "#app",
    data:{
        name: "José",
        age: 27,
        showName: false,
        showAge: true
    },
    methods: {
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        },
    }
})