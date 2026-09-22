function traiterDate() {

    let saisie = document.getElementById("date").value;
    let dateAffichee = document.getElementById("dateAffichee");
    let difference = document.getElementById("difference");

    if (saisie.trim() === "") {
        dateAffichee.textContent = "Veuillez entrer une date.";
        difference.textContent = "";
        return;
    }

    let parties = saisie.split("-");

    if (parties.length !== 3) {
        dateAffichee.textContent =
            "Format invalide. Utilisez JJ-MM-AAAA.";
        difference.textContent = "";
        return;
    }

    let jour = Number(parties[0]);
    let mois = Number(parties[1]);
    let annee = Number(parties[2]);

    let dateSaisie = new Date(annee, mois - 1, jour);

    if (isNaN(dateSaisie.getTime())) {
        dateAffichee.textContent = "Date invalide.";
        difference.textContent = "";
        return;
    }

    dateAffichee.textContent =
        "Date saisie : " + jour + "/" + mois + "/" + annee;

    let aujourdHui = new Date();

    let differenceMs = Math.abs(aujourdHui - dateSaisie);

    let differenceJours =
        Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    difference.textContent =
        "Différence : " + differenceJours + " jour(s).";
}


// Horloge en temps réel

function afficherHeure() {

    let maintenant = new Date();

    let heures = String(maintenant.getHours()).padStart(2, "0");
    let minutes = String(maintenant.getMinutes()).padStart(2, "0");
    let secondes = String(maintenant.getSeconds()).padStart(2, "0");

    let horloge = document.getElementById("horloge");

    if (horloge) {
        horloge.textContent =
            heures + ":" + minutes + ":" + secondes;
    }
}

setInterval(afficherHeure, 1000);

afficherHeure();