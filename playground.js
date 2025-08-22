export class PlayGround {
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

            } else {
                console.error("Element doesn't exist!");
            }
        }    
        else {
            console.error("Invalid element");
        }

        return this;
    }
}