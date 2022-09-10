$("#produit").on("change", function () {
    $("#prixHT").val($(this).val());
});

// Executer l'evenement
$("#produit").trigger("change");
// ou de changer la valeur directement
$("#prixHT").val($("#produit").val());

$("#calculer").on("click", function () {
    var qte = $("#qte").val();
    var prixHT = $("#prixHT").val();
    var tva = $(".tva:checked").val();
    var montantHT = prixHT * qte;

    $("#montantHT").val(montantHT);
    $("#totalTTC").val((montantHT * tva).toFixed(2));
});
