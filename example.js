import { Dom } from "./main.js";
let dom = new Dom();
dom.select("#add").on("click", () => {
    let val = dom.select("input").val();
    dom.select("input").val("\n");

    dom.create("div").addClass("todo").insert("#todo-wrapper");
    dom.create("p").text(val).insertLast(".todo");
    
    dom.create("button").addClass("delete").text("delete").insertLast(".todo");
    dom.create("button").addClass("update").text("update").insertLast(".todo");
   
    dom.select(".todo p").on("click", (el) => {
        el.css("text-decoration", "line-through");
    })

    dom.select("button.delete").on("click", (el) => {
        el.parent().empty();
    });

    dom.select("button.update").on("click", (el) => {
        let inpval = dom.select("input").val();
        el.parent().find("p").text(inpval);
        dom.select("input").val();
    });

})