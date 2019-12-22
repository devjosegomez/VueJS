new Vue({
    el: "#app",
    data:{
        name: "José"
    },
    methods: {
        updateName(e){
            console.log(e.target.value)
            this.name = e.target.value
        }
    }
})