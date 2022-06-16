let modal = document.getElementById("myModal");
let modalBtn = document.getElementById("OpenModel");
let AddBtn = document.getElementById("AddBtn");
let span = document.getElementsByClassName("close")[0];
let table = document.getElementById("table");
let nom = document.getElementById("Nom");
let Prenom = document.getElementById("Prenom");
let Etat = document.getElementById("Etat");
let Username = document.getElementById("Username");
let CreationDate = document.getElementById("CreationDate");
let Matricule = document.getElementById("Matricule");

let users = [
  {
    id: "123456789",
    creationdate: "2021-01-06T00:00:00.000Z",
    etat: "pending",
    nom: "Mohamed",
    prenom: "Taha",
    username: "mtaha",
    matricule: "2584",
  },
  {
    id: "987654321",
    creationdate: "2021-07-25T00:00:00.000Z",
    etat: "valid",
    nom: "Hamid",
    prenom: "Orrich",
    username: "horrich",
    matricule: "1594",
  },
  {
    id: "852963741",
    creationdate: "2021-09-15T00:00:00.000Z",
    etat: "rejected",
    nom: "Rachid",
    prenom: "Mahidi",
    username: "rmahidi",
    matricule: "3576",
  },
];
users.forEach((user) => {
  renderUser(user);
});

modalBtn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
AddBtn.onclick = function () {
  renderUser({
    nom: nom.value,
    prenom: Prenom.value,
    etat: Etat.value,
    username: Username.value,
    creationdate: CreationDate.value,
    matricule: Matricule.value,
  });
  ResetInputs();
};

function ResetInputs() {
  nom.value = "";
  Prenom.value = "";
  Username.value = "";
  CreationDate.value = "";
  Matricule.value = "";
  modal.style.display = "none";
}

function renderUser(params) {
  let tr = document.createElement("tr");
  let td_id = document.createElement("td");
  let td_nom = document.createElement("td");
  let td_Prenom = document.createElement("td");
  let td_Etat = document.createElement("td");
  let td_Etat_div = document.createElement("div");
  let td_Etat_span = document.createElement("span");
  let td_Username = document.createElement("td");
  let td_CreationDate = document.createElement("td");
  let td_Matricule = document.createElement("td");
  let td_Action = document.createElement("td");
  //we can add validation for every field if it's needed
  const id = params?.id ? params?.id : new Date().getTime();
  td_id.innerHTML = id;
  td_nom.innerHTML = params?.nom;
  td_Prenom.innerHTML = params?.prenom;
  td_Etat_span.innerHTML =
    params?.etat === "pending"
      ? "En validation"
      : params?.etat === "rejected"
      ? "Reject"
      : params?.etat === "valid"
      ? "Valide"
      : "";
  td_Username.innerHTML = params?.username;
  td_CreationDate.innerHTML = params?.creationdate;
  td_Matricule.innerHTML = params?.matricule;
  td_Action.innerHTML = `<i class="fa-solid fa-trash-can" Onclick="deleteuser(${id})"></i>`;
  // td_Action.innerHTML = `<button class="btn btn-danger" onclick="deleteUser(${td_id.innerHTML})">Delete</button>`;
  td_Etat_div.className = `etat ${
    params?.etat === "pending"
      ? "etat-pending"
      : params?.etat === "rejected"
      ? "etat-rejected"
      : params?.etat === "valid"
      ? "etat-valide"
      : ""
  }`;
  td_Etat_div.appendChild(td_Etat_span);
  td_Etat.appendChild(td_Etat_div);
  tr.append(
    td_id,
    td_CreationDate,
    td_Etat,
    td_nom,
    td_Prenom,
    td_Username,
    td_Matricule,
    td_Action
  );
  tr.id = id;
  table.appendChild(tr);
}
function deleteuser(id) {
  let user = document.getElementById(id);
  user.remove();
}
