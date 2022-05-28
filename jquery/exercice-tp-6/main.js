const now = new Date;
$(document).ready(function() {
    $("#dateNaiss").attr("max", now.toISOString().slice(0, 10));
$("#dateNaiss").val(now.toISOString().slice(0, 10));
$("#dateNaiss").attr("min", now.toISOString().slice(0, 10).replace(now.getFullYear(), now.getFullYear() - 100));
$("#niveau").prev().find('span').text($("#niveau").val());

$("#niveau").on('input', () => {
    $("#niveau").prev().find('span').text($("#niveau").val());
});

$("#select, #firstname, #lastname").on(
    'input',
    () => {
        $("#fullname").val($("#select").val() + " " + $("#firstname").val() + " " + $("#lastname").val());
    }
)

$("#showpw").click(() => {
    if ($("#showpw").is(':checked')) {
        $(".pw").attr('type', 'text');
    } else {
        $(".pw").attr('type', 'password');
    }
});
$("input").on('input', () => {
    allFilled = true;
    $("input:not([type=range], [type=color]), textarea").each(function() {
        if ($(this).val() == "") {
            allFilled = false;
        }
    });
    if($("#password").val() !== $("#cfpassword").val()){
        $("#cfpassword").addClass('invalid', true);
        $("#cfpassword").next().text("Les mots de passe ne correspondent pas");
        allFilled = false;
    }
    else {
        $("#cfpassword").removeClass('invalid');
        $("#cfpassword").next().text("");
    }
    if(allFilled) {
        $("#submit").removeAttr('disabled');
    } else {
        $("#submit").attr('disabled', 'disabled');
    }
});
$("#submit").click(() => {
    const fullname = $("#fullname").val();
    const dateNaiss = $("#dateNaiss").val();
    const niveau = $("#niveau").val();
    const pw = $("#pw").val();
    const desc = $("#description").val();
    const colorPr = $("#color").val();
    // const msg = $("<p>", {class: "success", html: `Bonjour ${fullname}<br/>Vous ettez ne le ${dateNaiss} <br/>Votre niveau au JS est ${niveau}% <br/>Votre mot de pass est ${pw}<br/>Vous ette decrive comme ${desc}`, style: `color: ${colorPr}`});
    const frm = $('form');
    frm.empty();
    // frm.attr('style', `color: ${colorPr}`);
    frm.css('color', colorPr);
    frm.addClass( "success");
    frm.html(`Bonjour ${fullname}<br/>Vous ettez ne le ${dateNaiss} <br/>Votre niveau au JS est ${niveau}% <br/>Votre mot de pass est ${pw}<br/>Vous ette decrive comme ${desc}`);
});

});