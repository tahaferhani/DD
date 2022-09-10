$("ul").hide();

$("button").click(function () {
    var button = $(this);

    $("ul").slideToggle(2000, function () {
        var text = button.text();
        button.text(text == "Afficher" ? "Masquer" : "Afficher");
    });
});
