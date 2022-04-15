$("form button").on("click", function () {
    // s'il y a plusieur forms
    // var nom = $(this).parent().find(".nom").val();
    // La meme chose que la ligne en dessus
    // var form = $(this).parent();
    // var input = form.find(".nom");
    // var nom = input.val();

    var nom = $("input.nom").val();
    var note = $("input.note").val();

    var recherche = $(".ligne").filter(function (i, ligne) {
        var text = $(ligne).find(".nom").text();
        return text == nom;
    });

    if (recherche.length > 0) {
        alert("Déja existant!!!");
        return;
    }

    var elemNom = $("<b>");
    elemNom.addClass("nom");
    elemNom.text(nom);

    var elemInput = $("<input>");
    elemInput.val(note);

    var elemStatut = $("<span>");
    elemStatut.addClass("statut");
    elemStatut.css("background", note >= 10 ? "green" : "red");

    var elemButton = $("<button>");
    elemButton.text("Supprimer");

    var ligne = $("<div>");
    ligne.addClass("ligne");
    ligne.append(elemNom);
    ligne.append(elemInput);
    ligne.append(elemStatut);
    ligne.append(elemButton);

    $(".lignes").append(ligne);

    $("input.nom").val("");
    $("input.note").val("");
});

$(".lignes").on("click", "button", function () {
    $(this).parent().remove();
});

$(".lignes").on("input", "input", function () {
    var note = $(this).val();
    $(this)
        .next()
        .css("background", note >= 10 ? "green" : "red");
});
