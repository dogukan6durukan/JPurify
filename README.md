JQuery like helper utility stuff but without leaving the Javascript syntax.

To do app example using my library
```js
import { Dom } from "./main.js";

let dom = new Dom();

dom.select("#add").on("click", () => {
    let val = dom.select("input").val();
    dom.select("input").val(""); 

    dom.create("div").addClass("todo").insert("#todo-wrapper");

    let p = dom.create("p").text(val).insertLast(".todo");

    let deleteBtn = dom.create("button")
    .addClass("delete")
    .text("delete")
    .insertLast(".todo");

    let updateBtn = dom.create("button")
        .addClass("update")
        .text("update")
        .insertLast(".todo");

    p.on("click", (el) => {
        el.css("text-decoration", "line-through");
    });

    deleteBtn.on("click", (el) => {
        el.parent().empty();
    });

    updateBtn.on("click", (el) => {
        let inpval = dom.select("input").val();
        
        let parentDiv = el.parent();       
        parentDiv.find("p").text(inpval);  
        
        dom.select("p").css("color", "red");
        dom.select("input").val(""); 
    });
});


 ```
