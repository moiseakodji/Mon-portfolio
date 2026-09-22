// 1. Demander l'âge et afficher si l'utilisateur est mineur ou majeur

let saisieAge = prompt("Quel est votre âge ?");

if (saisieAge === null || saisieAge.trim() === "") {

    document.getElementById("ageResultat").textContent =
        "Âge invalide.";

} else {

    let age = Number(saisieAge);

    if (isNaN(age) || age < 0) {

        document.getElementById("ageResultat").textContent =
            "Âge invalide.";

    } else if (age < 18) {

        document.getElementById("ageResultat").textContent =
            "Vous êtes mineur.";

    } else {

        document.getElementById("ageResultat").textContent =
            "Vous êtes majeur.";
    }
}


// 2. Demander un nombre et afficher s'il est pair ou impair

let saisieNombre = prompt("Entrez un nombre :");

if (saisieNombre === null || saisieNombre.trim() === "") {

    document.getElementById("nombreResultat").textContent =
        "Nombre invalide.";

} else {

    let nombre = Number(saisieNombre);

    if (isNaN(nombre)) {

        document.getElementById("nombreResultat").textContent =
            "Nombre invalide.";

    } else if (nombre % 2 === 0) {

        document.getElementById("nombreResultat").textContent =
            "Le nombre est pair.";

    } else {

        document.getElementById("nombreResultat").textContent =
            "Le nombre est impair.";
    }
}


// 3. Demander un numéro de mois et afficher son nom

let saisieMois = prompt("Entrez un numéro de mois (1 à 12) :");

if (saisieMois === null || saisieMois.trim() === "") {

    document.getElementById("moisResultat").textContent =
        "Numéro de mois invalide.";

} else {

    let mois = Number(saisieMois);

    if (
        isNaN(mois) ||
        !Number.isInteger(mois) ||
        mois < 1 ||
        mois > 12
    ) {

        document.getElementById("moisResultat").textContent =
            "Numéro de mois invalide.";

    } else {

        let nomsMois = [
            "Janvier",
            "Février",
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre",
            "Novembre",
            "Décembre"
        ];

        document.getElementById("moisResultat").textContent =
            "Le mois correspondant est : " + nomsMois[mois - 1];
    }
}