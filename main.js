export class Dom {
    constructor() {
        this.events = ["click", "change"];
        this.element = [];
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

    // !!!
    select(el) {
        let element = document.querySelectorAll(el);
        if(element) {
            this.element = element
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
        if(prop && val) {
            for(let el of this.element) {
                el.style[prop] = val;
            }
            return this;
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

    add(elem, position) {
        const POSITIONS = {
            before : "beforebegin",
            first : "afterbegin",
            last : "beforeend",
            after : "afterend"
        }

        if(elem && position) {

            switch (position) {
                case "before":
                    position = POSITIONS.before;
                break;
                case "first":
                    position = POSITIONS.first;
                break;
                case "last":
                    position = POSITIONS.last;
                break;
                case "after":
                    position = POSITIONS.after;
                break;
            }

            for(let el of this.element) {
                let element = document.createElement(elem);
                el.insertAdjacentElement(position, element);
            }
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
cls.select(".my-box").add("p", "first");
// cls.select("#greet").addText("hi").addClass("clicked").css("color", "green");
cls.select("#greet").addText("hi").css("background", "red").css("color", "yellow").css("padding", "16px");