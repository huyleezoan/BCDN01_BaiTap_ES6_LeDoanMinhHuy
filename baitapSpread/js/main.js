const head = document.querySelector(".heading");
hover = (text => {
    return [...text].map(item => `<span>${item}</span>`).join("");

});

head.innerHTML = hover(head.innerText);