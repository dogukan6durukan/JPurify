JQuery like helper utility stuff but without leaving the Javascript syntax.


```js
import { Dom } from "./main.js"

const cls = new Dom();

cls.create("p").addClass("clicked").addText("hellloo").insert(".foo");

cls.on("input", "change", (e) => {
    cls.toggle(".foo", "toggle")
})

 ```
