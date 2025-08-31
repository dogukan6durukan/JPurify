JQuery like helper utility stuff but without leaving the Javascript syntax.

To do app example using my library
```js
import { Dom } from "./main.js";
// Import dom
let dom = new Dom();

// When clicked to add new to do item on button
dom.select("#add").on("click", () => {
    // Taking input value and making input value empty
    let val = dom.select("input").val();
    dom.select("input").val("\n");

    // Adding input item and it's value from input
    dom.create("div").addClass("todo").insert("#todo-wrapper");
    dom.create("p").addText(val).insertLast(".todo");
    
    // Adding update and delete buttons 
    dom.create("button").addClass("delete").addText("delete").insertLast(".todo");
    dom.create("button").addClass("update").addText("update").insertLast(".todo");
   
   // When clicked on the delete button remove the current parent to do  
    dom.select("button.delete").on("click", (el) => {
        el.parent().empty();
    });

    // When clicked on update button update the to do item value from input
    dom.select("button.update").on("click", (el) => {
        let newVal = dom.select("input").val();
        el.prevSibling().prevSibling().addText(newVal); 
    });
})

 ```
