/* ****************************************************************************************** */
/* Forms */
/* ****************************************************************************************** */

// Fjern popup //
const form = document.querySelector("form");

function cancelPopup(event) {
  console.log("cancelPopup");
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
form.addEventListener("invalid", cancelPopup, true);

// Events og summary ved submitknap //
const hvorOutput = document.querySelector("#hvor_output");
const situationOutput = document.querySelector("#situation_output");
const maengdeOutput = document.querySelector("#maengde_output");
const foraeldreOutput = document.querySelector("#foraeldre_output");
const usernameOutput = document.querySelector("#username_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");

function handleSubmit(event) {
  console.log("handleSubmit");
  // 1. undgå refresh
  event.preventDefault();
  // 2. samle data op
  const formData = new FormData(form);
  const hvor = formData.get("hvor");
  const situation = formData.get("situation");
  const maengde = formData.get("maengde");
  const foraeldre = formData.get("foraeldre");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  // 3. vise data
  hvorOutput.textContent = hvor;
  situationOutput.textContent = situation;
  maengdeOutput.textContent = maengde;
  foraeldreOutput.textContent = foraeldre;
  usernameOutput.textContent = username;
  emailOutput.textContent = email;
  passwordOutput.textContent = password;
  // 4. nustil formular
  form.reset();
}

form.addEventListener("submit", handleSubmit);
