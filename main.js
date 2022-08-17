let i = 0;
let lastI = document.querySelector(".choice-3").getAttribute("idx");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
next.addEventListener("click", function () {
    console.log(i);
    if (++i > lastI) {
        i = 0;
    }
    displayItem();
});
prev.addEventListener("click", ()=>{
    console.log(i);
    if (--i < 0) {
        console.log(lastI);
        i = lastI;
        console.log(i);
    }
    displayItem();
})

function displayItem() {
    document.querySelectorAll(".choice-item").forEach((item) => {
        item.style.display = "none";
    });
    document.querySelectorAll(".choice-item").forEach((item, index) => {
        if (index === i) {
            item.style.display = "block";
        }
    });
}
