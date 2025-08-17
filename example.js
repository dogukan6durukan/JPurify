import { Dom } from "./main.js"

const cls = new Dom();

cls.on(".btn","click",() => {
    cls.toggle(".foo", "toggle");
    cls.add("p", "p").addClass("clicked").addText("hello, how low!").insert(".foo");
});