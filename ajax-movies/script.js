var currentPage = 1;

$("#search").click(function () {
    var query = $(this).prev().val();
    var apiUrl = "https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=" + query + "&page=" + currentPage;

    $.get(apiUrl, function (data) {
        $("#list").empty();
        $("#pagination").empty();

        data.results.forEach(function (movie) {
            var item = $("<div>", { class: "item" });

            var image = $("<img>", { class: "poster", src: movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : "no-image.jpg" });
            image.on("load", function () {
                item.addClass("image-ok");
            });

            var title = $("<h2>", { class: "title" });
            title.text(movie.original_name);

            var overview = $("<div>", { class: "overview" });
            overview.text(movie.overview);

            var flag = $("<img>", { class: "flag", src: "https://countryflagsapi.com/svg/" + movie.origin_country[0] });

            var loader = $("<div>", { class: "loader" });

            item.append(image);
            item.append(title);
            item.append(overview);
            item.append(loader);

            if (movie.origin_country[0]) {
                item.append(flag);
            }

            $("#list").append(item);
        });

        for (var i = 1; i <= data.total_pages; i++) {
            var page = $("<span>", { class: "page" + (i == data.page ? " active" : "") });
            page.text(i);
            $("#pagination").append(page);
        }
    });
});

$("#pagination").on("click", ".page", function () {
    var page = $(this).text();
    currentPage = page;
    $("#search").click();

    $("html, body").animate(
        {
            scrollTop: 0
        },
        1000
    );
});
