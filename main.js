export class Dom {
    constructor() {
        this.events = ["click"];
        this.element = "";
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

    insert(parent) {
        let parentEl = document.querySelector(parent);
        if(parentEl) {
            parentEl.appendChild(this.element);
            return this;
        }
    }

    addText(text) {
        if(this.element !== "") {
            this.element.textContent = text;
        }
        return this;
    }

    addClass(className) {
        if(this.element !== "") {
            this.element.classList.add(className);
            return this;
        }
    }

    add(parent, el) {
        let parentEl = document.querySelector(parent);
        if(parentEl) {
            let element = document.createElement(el);
            parentEl.insertAdjacentElement("afterend", element);
            this.element = element;
            return this;
        }
    }

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
// cls.add("p", "p").addClass("clicked").addText("hello, how low!").insert(".foo");

// cls.on(".btn","click",(e) => {
//     cls.toggle(".foo", "toggle", () => {
//         console.log("toggle finished");
//     });
//     cls.remove("#greet", () => {
//         console.log("removed");
//     })
// });