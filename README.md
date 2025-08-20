JQuery like helper utility stuff but without leaving the Javascript syntax.


```js
import { Dom } from "./main.js"

const cls = new Dom();

// Add a paragraph to div
cls.create("p").addClass("clicked").addText("hellloo").insert(".foo");

// Toggle div when typing on input
cls.select("input".)on("change", (e) => {
    cls.toggle(".foo", "toggle")
});

// When clicked on the button add new li element to ul
cls.select(".btn").on("click", () => {
    cls.create("li").addClass("clicked").addText("hello!").insert(".foo ul");    
});
 ```
