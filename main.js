import { EVENTS } from "./events.js";
import { PlayGround } from "./playground.js";

export class Dom extends PlayGround{
    constructor() {
        super();
        this.events = EVENTS;
        this.element = [];
    }

on(ev, callback) {
    if (ev && callback) {
        if (this.element && this.element.length > 0) {
            for (let el of this.element) {
                el.addEventListener(ev, (e) => {
                    const self = new Dom();
                    self.element = [e.currentTarget];
                    callback(self);
                });
            }
        } else {
            console.error("The element doesn't exist for event:", ev);
        }
    }
}


    select(el) {
        let element = document.querySelectorAll(el);
        if(element.length > 0) {
            // Create new dom to avoid 'this' conflictions
            const self = new Dom();
            self.element = element;
            return self;
        } else {
            console.error("The element doesn't exist");
        }
    }

    // Take care here
    parent() {
        this.element = [this.element[0].parentElement];
        return this;
    }

    // ! Take care here
    prevSibling() {
        this.element = [this.element[0].previousElementSibling];
        return this;
    }


    find(el) {
        let elem = this.element[0].querySelector(el);
        this.element = [elem];
        return this;
    }

    
    empty() {
        // Check for multiple elements
        this.element[0].remove();
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

    create(el) {
    let element = document.createElement(el);
    const self = new Dom();
    self.element = [element];
    return self;
}

    insertLast(parent) {
        let parentEl = document.querySelectorAll(parent);
        if (parentEl.length === 0) return this; 
        let last = parentEl[parentEl.length - 1];
        for (let el of this.element) {
            last.appendChild(el);
        }
        return this;
    }


    text(text) {
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

    removeClass(className) {
        if(this.element !== "") {
            for(let el of this.element) {
                el.classList.remove(className);
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

    val(val) {
        if(typeof val !== "undefined") {
            this.element[0].value = val;
        } 
        
        return this.element[0].value

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
