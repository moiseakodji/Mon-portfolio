function calculerPret() {

    let montantPret = Number(document.getElementById("montantPret").value);
    let tauxAnnuel = Number(document.getElementById("tauxAnnuel").value);
    let duree = Number(document.getElementById("duree").value);

    let resultat = document.getElementById("resultat");

    // Vérification des champs vides
    if (
        document.getElementById("montantPret").value === "" ||
        document.getElementById("tauxAnnuel").value === "" ||
        document.getElementById("duree").value === ""
    ) {
        resultat.className = "erreur";
        resultat.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    // Vérification du montant
    if (montantPret <= 0) {
        resultat.className = "erreur";
        resultat.textContent = "Le montant du prêt doit être supérieur à 0.";
        return;
    }

    // Vérification du taux
    if (tauxAnnuel < 0) {
        resultat.className = "erreur";
        resultat.textContent = "Le taux annuel doit être supérieur ou égal à 0.";
        return;
    }

    // Vérification de la durée
    if (duree <= 0) {
        resultat.className = "erreur";
        resultat.textContent = "La durée doit être supérieure à 0.";
        return;
    }

    // Calcul du taux mensuel
    let tauxMensuel = tauxAnnuel / 12 / 100;

    // Nombre total de paiements
    let nombrePaiements = duree * 12;

    let paiementMensuel;

    // Cas d'un taux égal à zéro
    if (tauxMensuel === 0) {
        paiementMensuel = montantPret / nombrePaiements;
    } else {
        paiementMensuel =
            montantPret * tauxMensuel /
            (1 - Math.pow(1 + tauxMensuel, -nombrePaiements));
    }

    // Calcul du coût total
    let coutTotal = paiementMensuel * nombrePaiements;

    // Calcul des intérêts
    let interets = coutTotal - montantPret;

    // Affichage des résultats
    resultat.className = "succes";

    resultat.innerHTML =
        "<p><strong>Paiement mensuel :</strong> " +
        paiementMensuel.toFixed(2) + " FCFA</p>" +

        "<p><strong>Coût total :</strong> " +
        coutTotal.toFixed(2) + " FCFA</p>" +

        "<p><strong>Intérêts :</strong> " +
        interets.toFixed(2) + " FCFA</p>";
}