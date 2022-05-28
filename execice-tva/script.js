// Obtenir la valeur initiale du prix
$("#prixHT").val($("#produit").val());
// Changer la valeur du prix a chaque changement du produit
$("#produit").on("change", function () {
    $("#prixHT").val($(this).val());
});

$("#calculer").on("click", function () {
    var tva = $("input[name=tva]:checked").val();
    var qte = $("#qte").val();
    var prixHT = $("#prixHT").val();
    var montantHT = prixHT * qte;
    $("#montantHT").val(montantHT);
    $("#totalTTC").val((montantHT * tva).toFixed(2));
});
