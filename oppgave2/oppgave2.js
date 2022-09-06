const users = [
    { id: 0, name: "Britt", age: 54 },
    { id: 1, name: "Markus", age: 23 },
    { id: 2, name: "Petter", age: 103 },
    { id: 3, name: "Py", age: 34 },
    { id: 4, name: "Vetle", age: 87 },
    { id: 5, name: "Torstein", age: 12 },
    { id: 6, name: "Hans", age: 44 },
    { id: 7, name: "Charlotte", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Ingvild", age: 31 },
    { id: 10, name: "Ida", age: 87 }
];
  
const userUl = document.getElementById("users");
  
const createTableUI = (users) => {
    userUl.innerHTML = null;
    userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
    for (const user of users) {
      userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
};
  
// TODO: Hent HTML #id med getElementById
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

//BEGGE

let usersFiltered = users;

//SØK (den er case sensitiv)
const inputSearch = document.getElementById("name");

inputSearch.addEventListener("keyup", handleSearch);

function handleSearch() {
    usersFiltered = users.filter(users => users.name.includes(inputSearch.value) && users.age > minimumAge.value);
    createTableUI(usersFiltered);
}

//FILTER
const filterBtn = document.getElementById("filter");
const minimumAge = document.getElementById("age");

filterBtn.addEventListener("click", handleFilter);

function handleFilter() {
    usersFiltered = users.filter(users => users.age > minimumAge.value && users.name.includes(inputSearch.value));
    createTableUI(usersFiltered);
}

const main = () => {
    createTableUI(users);
};
  
main();
  