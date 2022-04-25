var index = 0;

$("#next").click(function () {
    if (index >= $(".img").length - 1) return;

    index++;

    $("#images").animate(
        {
            marginLeft: "-=100%"
        },
        500
    );
});

$("#prev").click(function () {
    if (index == 0) return;

    index--;

    $("#images").animate(
        {
            marginLeft: "+=100%"
        },
        500
    );
});
