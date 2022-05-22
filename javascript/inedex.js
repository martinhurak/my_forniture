// vytvarenie local stroage 
let pole = JSON.parse(localStorage.getItem("shopping_card_object"));
if (pole == null) { pole = [] }

//--shopping-card--//
var itemID = "000"
var litle_shop_card = document.getElementById("litle_shop_card")
shopping_card_count()

//---add_card---//
function add_card_func() {
    itemID = "001"
    storage()
    shopping_card_count()
}

function add_card_func1() {
    itemID = "002"
    storage()
    shopping_card_count()
}

function storage() {
    pole.push({ itemID: itemID })
    localStorage.setItem("shopping_card_object", JSON.stringify(pole))
}

function shopping_card_count() {
    if (pole.length > 5) { document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + 5 + "+" } else if (pole.length == 0) { document.getElementById("litle_shop_card").innerHTML = "" } else
        document.getElementById("litle_shop_card").innerHTML = "&nbsp;" + pole.length
}
//show menu//
let click = 0;
let open_menu = document.querySelector("#open-menu")
let close_menu = document.querySelector("#close-menu")
let burger_menu = document.querySelector(".burger-menu")
let burger_menu_items = document.querySelector(".burger-menu-items")
let width_contol = window.matchMedia("(min-width: 1000px)")




function toggleMenu() { // je tu chibička 
    click = click + 1
    if (click % 2 == 0) {
        burger_menu_items.style.display = "none";
        close_menu.style.display = "none";
        open_menu.style.display = "initial";
    } else {
        open_menu.style.display = "none";
        close_menu.style.display = "initial";
        burger_menu_items.style.display = "flex";
    }

}
let item = document.querySelector(".item:nth-of-type(6)")
let item1 = document.querySelector(".item:nth-of-type(7)")
let item2 = document.querySelector(".item:nth-of-type(8)")
let item3 = document.querySelector(".item:nth-of-type(9)")
let item4 = document.querySelector(".item:nth-of-type(10)")
let item5 = document.querySelector(".item:nth-of-type(11)")
let item6 = document.querySelector(".item:nth-of-type(12)")

function show_more() {
    item.style.display = "initial";
    item1.style.display = "initial";
    item2.style.display = "initial";
    item3.style.display = "initial";
    item4.style.display = "initial";
    item5.style.display = "initial";
    item6.style.display = "initial";
}