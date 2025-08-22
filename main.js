import { EVENTS } from "./events.js";
import { PlayGround } from "./playground.js";

export class Dom extends PlayGround{
    constructor() {
        super();
        this.events = EVENTS;
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
        this.element = [element];
        return this;
    }

    oddEvenFilter(isOdd) {
        this.element =  [...this.element].filter((el, i) => (i + 1) % 2 === (isOdd ? 1 : 0));
        return this;
    }

    odd() {
        return this.oddEvenFilter(true);
    }

    even() {
        return this.oddEvenFilter(false);
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
            for(let el of this.element) {
                parentEl.appendChild(el);
            }
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
                // console.log(el);
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

    val() {
        if(this.element[0].value) {
            return this.element[0].value;
        }
    }

    attr(name, setVal) {
        if(name) {
            for(let el of this.element) {
                let val = el.getAttribute(name);
                if(setVal) {
                    el.setAttribute(name, setVal);
                } else {
                    return val ? true : false;
                }

            }
        } 
    }

}
