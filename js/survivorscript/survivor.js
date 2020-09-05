var week = localStorage.getItem("week");
console.log(week);

var selection = "week" + week;
console.log(selection);

$(window).on("load", function() {

    updateWeek();
    
    $("#weekNo").text(selection);

    if (localStorage.getItem(selection) != null) {
        selectedTeams();
        var pickedTeam = localStorage.getItem(selection);
        console.log(pickedTeam);
        $("#gmBUF").addClass("orange");
    }

    else {
        queryAPI();
    }

});

$(".message a").click(function() {
    $("form").animate({height: "toggle", opacity: "toggle"},)
});

$(".selectWeek").on("click", function() {

    $(".card").remove();

    var entry = this.id;
    console.log(entry);

    if (entry[4] === "0") {
        var week = entry[5];
    }

    else {
        var week = entry[4]+entry[5];
    }

    localStorage.setItem("week", week);
    $("#weekNo").text("Week " + week);

    if (localStorage.getItem(selection) != null) {
        selectedTeams();
        var pickedTeam = localStorage.getItem(selection);
        $("#gm" + pickedTeam).addClass("orange");
    }

    else {
        queryAPI();
    }

});

