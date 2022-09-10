$(".title").on("click", function () {
    $(".description").slideUp(500);
    $(this).next().slideToggle(500);
});
