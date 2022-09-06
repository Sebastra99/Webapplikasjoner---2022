// Oppgave 1

const removeTextBtn = document.getElementById("remove-btn");
const textToBeRemoved = document.getElementById("remove");
removeTextBtn.addEventListener("click", function (event) {
    textToBeRemoved.innerHTML = "";
});

// Oppgave 2

const changeTextBtn = document.getElementById("change-btn");
const textToBeChanged = document.getElementById("change");
changeTextBtn.addEventListener("click", function (event) {
    textToBeChanged.innerHTML = "Når knappen nedenfor ble trykket så endret teksten her seg helt automatisk! :)";
});

// Oppgave 3

const inputField = document.getElementById("input");
const textToBeReplacedByInput = document.getElementById("input-text");
inputField.addEventListener("keyup", function (event) {
    textToBeReplacedByInput.innerHTML = inputField.value;
});

// Oppgave 4
const writeListBtn = document.getElementById("write-list");
const writeListToUl = document.getElementById("ul");
const myList = ["item one", "item two", "item three"];
writeListBtn.addEventListener("click", function (event) {
    console.log("o");
    for (let i = 0; i < myList.length; i++) {
        let item = myList[i];
        writeListToUl.innerHTML += `<li>${item}</li`;
    };
});

// Oppgave 5

const createBtn = document.getElementById("create");
const createDiv = document.getElementById("placeholder");
const selectDropDown = document.getElementById("select");
const createInputBox = document.getElementById("text");
createBtn.addEventListener("click", function (event) {
    let input = createInputBox.value;
    if (selectDropDown.value === "h2") {

        createDiv.innerHTML = `<h2>${input}</h2>`;

    } else if (selectDropDown.value === "h3") {

        createDiv.innerHTML = `<h3>${input}</h3>`;

    } else if (selectDropDown.value === "span") {

        createDiv.innerHTML = `<span>${input}</span>`;

    } else if (selectDropDown.value === "p") {

        createDiv.innerHTML = `<p>${input}</p>`;

    }
});

// Oppgave 6

const listToBeRemoved = document.getElementById("list");
const listToBeRemovedBtn = document.getElementById("remove-li");
listToBeRemovedBtn.addEventListener("click", function (event) {
    listToBeRemoved.removeChild(listToBeRemoved.lastElementChild);
});

// Oppgave 7

const inputBoxMaxFour = document.getElementById("name");
const inputBoxMaxFourBtn = document.getElementById("order");
inputBoxMaxFour.addEventListener("keyup", function (event) {
    if (inputBoxMaxFour.value.length > 4) {
        inputBoxMaxFourBtn.disabled = true;
        //inputBoxMaxFourBtn.style.border = "solid red";
    } else {
        inputBoxMaxFourBtn.disabled = false;
    }

});


// Oppgave 8

const listOfChildren = document.querySelectorAll(".children li");
const colorBtn = document.getElementById("color");
colorBtn.addEventListener("click", function (event) {
    let amountOfChildren = listOfChildren.length;
    for (let i = 0; i < amountOfChildren; i++) {
        if ( (i % 2) === 0) {
            listOfChildren[i].style.border = "solid green";
        } else {
            listOfChildren[i].style.border = "solid pink";
        }
    }
});