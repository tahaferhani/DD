$("#search").on("input", function () {
    var value = $(this).val();
    if (value.length < 3) return;

    $.ajax({
        url: `https://v3.football.api-sports.io/leagues?search=${value}`,
        type: "GET",
        headers: {
            "x-rapidapi-key": "9f28f62ddb246ae5f8f1f5b390862947"
        },
        success: function (data) {
            var html = "";
            data.response.forEach(item => {
                html += `
                <div class="league" data-id="${item.league.id}">
                    <img class="logo" src="${item.league.logo}" />
                    <div class="infos">
                        <h2 class="name">${item.league.name}</h2>
                        <span class="country">
                            <img src="${item.country.flag}" />
                            ${item.country.name}</span
                        >
                    </div>
                </div>
                `;
            });
            document.querySelector(".leagues").innerHTML = html;
        }
    });
});

$("#search").on("input", function () {
    var value = $(this).val();
    if (value.length < 3) return;

    $.ajax({
        url: `https://v3.football.api-sports.io/leagues?search=${value}`,
        type: "GET",
        headers: {
            "x-rapidapi-key": "9f28f62ddb246ae5f8f1f5b390862947"
        },
        success: function (data) {
            var html = "";
            data.response.forEach(item => {
                html += `
                <div class="league" data-id="${item.league.id}">
                    <img class="logo" src="${item.league.logo}" />
                    <div class="infos">
                        <h2 class="name">${item.league.name}</h2>
                        <span class="country">
                            <img src="${item.country.flag}" />
                            ${item.country.name}</span
                        >
                    </div>
                </div>
                `;
            });
            document.querySelector(".leagues").innerHTML = html;
        }
    });
});

var teams = [];
$(".leagues").on("click", ".league", function () {
    var leagueId = $(this).attr("data-id");

    $.ajax({
        url: `https://v3.football.api-sports.io/teams?season=2021&league=${leagueId}`,
        type: "GET",
        headers: {
            "x-rapidapi-key": "9f28f62ddb246ae5f8f1f5b390862947"
        },
        success: function (data) {
            var html = "";
            teams = data.response;
            data.response.forEach(item => {
                html += `
                <div class="team" data-id=${item.team.id}>
                    <img class="logo" src="${item.team.logo}" />
                    <span class="name">${item.team.name}</span>
                </div>
                `;
            });
            document.querySelector(".teams").innerHTML = html;
        }
    });
});

$(".teams").on("click", ".team", function () {
    var teamId = $(this).attr("data-id");
    var infos = teams.find(item => item.team.id == teamId);
    console.log(infos.venue);
    $(".team-infos .city .value").text(infos.venue.city);
    $(".team-infos .founded .value").text(infos.team.founded);
    $(".team-infos .stadium .value").text(infos.venue.name);
    $(".team-infos .capacity .value").text(infos.venue.capacity);
    $(".team-infos .logo").attr("src", infos.venue.image);
});
