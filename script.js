/* 
   1) Menu mobile
  */

const boutonMenu = document.getElementById("boutonMenu");
const menu = document.getElementById("menuPrincipal");

boutonMenu.addEventListener("click", function () {
  menu.classList.toggle("ouvert");
});

/* Ferme le menu automatiquement quand on clique sur un lien */
const liensMenu = menu.querySelectorAll("a");
liensMenu.forEach(function (lien) {
  lien.addEventListener("click", function () {
    menu.classList.remove("ouvert");
  });
});

/*
   2) Validation du formulaire de contact
  */

const formulaire = document.getElementById("formulaireContact");
const retour = document.getElementById("retourFormulaire");

const champNom = document.getElementById("nom");
const champEmail = document.getElementById("email");
const champMessage = document.getElementById("message");

const erreurNom = document.getElementById("erreur-nom");
const erreurEmail = document.getElementById("erreur-email");
const erreurMessage = document.getElementById("erreur-message");

formulaire.addEventListener("submit", function (evenement) {
  evenement.preventDefault();

  let estValide = true;

  if (champNom.value.trim() === "") {
    erreurNom.textContent = "Ce champ est obligatoire.";
    estValide = false;
  } else {
    erreurNom.textContent = "";
  }

  if (champEmail.value.trim() === "") {
    erreurEmail.textContent = "Ce champ est obligatoire.";
    estValide = false;
  } else if (!champEmail.value.includes("@")) {
    erreurEmail.textContent = "Merci d'indiquer une adresse email valide.";
    estValide = false;
  } else {
    erreurEmail.textContent = "";
  }

  if (champMessage.value.trim().length < 10) {
    erreurMessage.textContent = "Votre message doit contenir au moins 10 caractères.";
    estValide = false;
  } else {
    erreurMessage.textContent = "";
  }

  if (estValide) {
    retour.textContent = "Message envoyé, merci ! Je vous répondrai rapidement.";
    retour.style.color = "var(--couleur-accent-2)";
    formulaire.reset();
  } else {
    retour.textContent = "Merci de corriger les champs en rouge avant d'envoyer.";
    retour.style.color = "#e06666";
  }

})