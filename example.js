import { Dom } from "./main.js";
let dom = new Dom();
dom.select("#add").on("click", () => {
    let val = dom.select("input").val();
    dom.select("input").val("\n");

    dom.create("div").addClass("todo").insert("#todo-wrapper");
    dom.create("p").addText(val).insertLast(".todo");
    
    dom.create("button").addClass("delete").addText("delete").insertLast(".todo");
    dom.create("button").addClass("update").addText("update").insertLast(".todo");
   
    dom.select("button.delete").on("click", (el) => {
        el.parent().empty();
    });

    dom.select("button.update").on("click", (el) => {
        let newVal = dom.select("input").val();
        el.prevSibling().prevSibling().addText(newVal); 
    });
})
