export class Dom {
    constructor() {
        this.events = [
            "click",
            "change",
            "dblclick",
            "mousedown",
            "mouseup",
            "keyup",
            "keydown",
            "keypress",
            "mouseenter",
            "mouseleave",
            "mouseover"
        ];
        this.element = [];
    }

    on(ev, callback) {
        if(ev && callback) {
            if(this.element) {
                for(let event of this.events) {
                    if(event === ev) {
                        // Check for multiple elements
                        this.element[0].addEventListener(event, callback);
                    } 
                }
            } else {
                console.error("The element doesn't exist");
            }
        }

    }

    // Make a shortcut for both odd and even
    odd() {
        let elements = [];
        for(let i = 0; i < this.element.length; i++) {
            // console.log(this.element[i], i);
            elements.push( { el : this.element[i], order : i+1 } )
        }
        let oddElems = [];
        for(let el of elements) {
            if(el.order % 2 === 1) {
                oddElems.push(el.el);
            }
        }

        this.element = oddElems;
        return this;
    }

    // Make a shortcut for both odd and even
    even() {
        let elements = [];
        for(let i = 0; i < this.element.length; i++) {
            // console.log(this.element[i], i);
            elements.push( { el : this.element[i], order : i+1 } )
        }
        let oddElems = [];
        for(let el of elements) {
            if(el.order % 2 === 0) {
                oddElems.push(el.el);
            }
        }

        this.element = oddElems;
        return this;
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

    empty() {
        // Check for multiple elements
        this.element[0].replaceChildren();
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
// console.log(cls.create("li").addClass(".clicked"));
// cls.select("li").odd().css("background", "red");