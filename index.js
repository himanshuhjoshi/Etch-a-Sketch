const container = document.querySelector(".container");

const div = document.createElement("div");
div.classList.add("divGrid");

for(let j=0; j<16; j++){
    for(let i=0; i<16; i++){
        // div.setAttribute("id",i);
        container.appendChild(div.cloneNode(true));
    }
}

const divs = document.querySelectorAll(".divGrid");

divs.forEach((div) => {
    div.addEventListener("mouseover",(event) => {
        event.target.style.backgroundColor="red";
    });
});