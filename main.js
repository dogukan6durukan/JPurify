export class Dom {
    constructor() {
        this.events = ["click"]
    }

    on(el, ev, callback) {
        if(el && ev && callback) {
            let element = document.querySelector(el);
            if(element) {

                for(let event of this.events) {
                    if(event === ev) {
                        document.addEventListener(event, () => callback());
                    } 
                }

            } else {
                console.error("The element doesn't exist")
            }
        }

    }

    toggle(el, state) {

        if(el && state) {
            let element = document.querySelector(el)
            if(element) {

                if(state === "display") {
                    element.style.display = "visible";
                } else if(state === "hide") {
                    element.style.display = "none";
                } 
                else {
                    console.error("State must be 'display' either 'hide'")
                }

            } else {
                console.error("Element doesn't exist!");
            }
        }    
        else {
            console.error("Invalid element");
        }
    }
}

