import { Dom } from "./main.js"

const cls = new Dom();

cls.on(".btn","click",() => {
    cls.toggle(".foo", "hide");
});