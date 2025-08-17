export class Dom {
    constructor() {
        this.events = ["click", "change"];
        this.element = [];
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
                console.error("The element doesn't exist");
            }
        }

    }

    select(el) {
        let element = document.querySelectorAll(el);
        if(element) {
            this.element = [...element];
            return this;
        } else {
            console.error("The element doesn't exist");
        }
    }

    create(el) {
        let element = document.createElement(el);
        this.element = element;
        return this;
    }

    css(prop, val) {
        if(prop && val)  {
            for(let el of this.element) {
                console.log(el.style[prop] = val);
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
            for(let el of this.element) {
                el.textContent = text;
            }
        }
        return this;
    }

    addClass(className) {
        if(this.element !== "") {
            for(let el of this.element) {
                el.classList.add(className);
            }
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

                callback === undefined ? "" : callback();

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
cls.select("#greet").addText("hi").addClass("clicked").css("color", "green");