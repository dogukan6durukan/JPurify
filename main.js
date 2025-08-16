export class Dom {
    constructor() {
        this.events = ["click"]
        this.state = 0;
    }

    on(el, ev, callback) {
        if(el && ev && callback) {
            let element = document.querySelector(el);
            if(element) {

                for(let event of this.events) {
                    if(event === ev) {
                        element.addEventListener(event, callback);
                    } 
                }

            } else {
                console.error("The element doesn't exist")
            }
        }

    }

    add(el) {}

    remove(el, callback) {
        let element = document.querySelector(el);
        if(element) {
            element.remove();
            callback();
        }   
    }

    toggle(el, state, callback) {
        if(el && state) {
            let element = document.querySelector(el);
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

                callback();

            } else {
                console.error("Element doesn't exist!");
            }
        }    
        else {
            console.error("Invalid element");
        }
    }
}

const cls = new Dom();

cls.on(".btn","click",(e) => {
    cls.toggle(".foo", "toggle", () => {
        console.log("toggle finished");
    });
    cls.remove("#greet", () => {
        console.log("removed");
    })
});