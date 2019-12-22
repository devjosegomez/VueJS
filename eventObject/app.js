new Vue({
    el: "#app",
    data:{
        pos:{
            x: 0,
            y: 0
        }
    },
    methods: {
        logEvent(event){
            console.log(event)
        },
        
        getPos(event){
            this.pos.x = event.offsetX
            this.pos.y = event.offsetY
        }
    }
})