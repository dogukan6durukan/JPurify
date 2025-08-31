import { Dom } from "./main.js";

let dom = new Dom();

dom.select("#add").on("click", () => {
    let val = dom.select("input").val();
    dom.select("input").val(""); // inputu sıfırla

    // todo div
    let todoDiv = dom.create("div").addClass("todo").insert("#todo-wrapper");

    // p etiketi
    let p = dom.create("p").text(val).insertLast(".todo");

    // delete butonu
    let deleteBtn = dom.create("button")
    .addClass("delete")
    .text("delete")
    .insertLast(".todo");

    // update butonu
    let updateBtn = dom.create("button")
        .addClass("update")
        .text("update")
        .insertLast(".todo");

    // p'ye tıklama → üstünü çiz
    p.on("click", (el) => {
        el.css("text-decoration", "line-through");
    });

    // delete → sadece kendi parent'ını sil
    deleteBtn.on("click", (el) => {
        el.parent().empty(); // artık sadece parent silinecek
    });

    // update → input değerini al, parent içindeki p'yi güncelle
    updateBtn.on("click", (el) => {
        let inpval = dom.select("input").val();
        console.log(">>> Inputtan gelen değer:", inpval);

        // Burada parent içindeki P'yi buluyoruz
        let parentDiv = el.parent();       // <div class="todo">
        parentDiv.find("p").text(inpval);  // sadece o div'in p'sini değiştir

        dom.select("input").val(""); // input sıfırla
    });
});
