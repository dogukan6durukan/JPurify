import { Dom } from "./main.js"

const cls = new Dom();

cls.select(".btn").on("click", () => {
    cls.create("li").addClass("clicked").addText("hello!").insert(".foo ul");    
});