new Vue({
    el: "#app",
    data:{
        name: "José",
        lastName: "Gómez"
    },
    methods: {
        updateName(e){
            console.log(e.target.value)
            this.name = e.target.value
        }
    }
})