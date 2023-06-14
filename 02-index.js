const array = ["pain", "orange", "Eau"];

let listHtml =document.getElementById("liste");

for (let i = 0; i < array.length; i++) {
    let element = document.createElement("li");
    element.innerHTML = array[i];
    listHtml.appendChild(element);
}

function addText() {
    // array.push(inputText.value);
    //const element = document.createElement("li");
    //element.textContent = inputText.value;
    //listHtml.appendChild(element);
    
    if (inputText.value !== "") {
        element = document.createElement("li");
        element.textContent = inputText.value;
        listHtml.appendChild(element);
    }
    
}

const buttonAdd = document.querySelector(".button");
buttonAdd.addEventListener('click', addText)

const inputText = document.getElementById("text");
console.log(inputText.value);


