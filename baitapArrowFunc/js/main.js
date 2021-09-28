const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];
let idColorContainer = document.querySelector("#colorContainer");
let duaMauLen = () => {
    for (let i = 0; i < colorList.length; i++) {
        if (i == 0) {
            idColorContainer.innerHTML += "<button class='color-button " + colorList[0] + " active'></button>"
        } else {
            idColorContainer.innerHTML += "<button class='color-button " + colorList[i] + "'></button>"
        }
    }
}
duaMauLen();
let chonMau = document.querySelectorAll(".color-button");
let nha = document.querySelector("#home");
console.log(chonMau.length);


for (let i = 0; i < chonMau.length; i++)
    chonMau[i].addEventListener("click", function() {
        thayDoiMau(colorList[i], i)
    });
let thayDoiMau = (color, index) => {
    for (let i = 0; i < chonMau.length; i++) {
        chonMau[i].classList.remove("active");
    }
    chonMau[index].classList.add("active");
    house.className = "house " + color;
}