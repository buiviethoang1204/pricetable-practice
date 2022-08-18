let i = 0;
let lastI = document.querySelector(".choice-3").getAttribute("idx");
let lastIndex = + lastI;
const items = document.querySelectorAll(".choice-item");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
next.addEventListener("click", ()=> {
    if (++i > lastIndex) {
        i = 0;
    }
    items.forEach((item)=> {
        item.style.animation = "slideRight 1s ease-in-out forwards";
    })
    displayItem();
});
prev.addEventListener("click", ()=> {
    if (--i < 0) {
        i = lastIndex;
    }
    items.forEach((item)=> {
        item.style.animation = "slideLeft 1s ease-in-out forwards";
    })
    displayItem();
})
function displayItem() {
    items.forEach((item, index) => {
        item.style.display = "none";
        if (index === i) {
            item.style.display = "block";            
        }
    });
}
