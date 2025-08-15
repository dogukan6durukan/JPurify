JQuery like helper utility stuff but without leaving the Javascript syntax.


```js
import { Dom } from "./main.js"

const cls = new Dom();

cls.on(".btn","click",() => {
    cls.toggle(".foo", "hide");
});
 ```
