export class PlayGround {
    // constructor() {
    //     this.playground = "";
    // }

    toggle(state, callback) {
        if(state) {
            let element = this.element[0];
            if(element) {
                if(state === "display") {
                    element.style.display = "block";
                } else if(state === "hide") {
                    element.style.display = "none";
                } else if(state === "toggle") {
                    element.style.display === "none" ?
                    element.style.display = "block" : element.style.display = "none";
                }
                else {
                    console.error("State must be 'display', 'hide' or 'toggle'")
                }

                callback === undefined ? "" : callback();
                // this.playground = "toggle";
                
            } else {
                console.error("Element doesn't exist!");
            }
        }    
        else {
            console.error("Invalid element");
        }

        return this;
    }

    // fade() {
    //     if(this.element) {
    //         let opacity = 1;
    //         let timer = setInterval(() => {
    //             if(opacity < 0.1) {
    //                 clearInterval(timer);
    //             }
    //             this.element.opacity = opacity;
    //             opacity -= 0.1; 
    //         }, 50)   
    //     }
    //     return this;
    // }
}