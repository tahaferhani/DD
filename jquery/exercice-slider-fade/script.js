$("#next").click(function () {
    var $activeImage = $(".img.active");
    var $nextImage = $activeImage.next();

    if (!$nextImage.length) return;

    $activeImage.fadeOut(500);
    $nextImage.fadeIn(500);

    $activeImage.removeClass("active");
    $nextImage.addClass("active");
});

$("#prev").click(function () {
    var $activeImage = $(".img.active");
    var $prevImage = $activeImage.prev();

    if (!$prevImage.length) return;

    $activeImage.fadeOut(500);
    $prevImage.fadeIn(500);

    $activeImage.removeClass("active");
    $prevImage.addClass("active");
});
