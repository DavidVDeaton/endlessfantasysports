var of3 = "david peralta";

var of3URL = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + of3 + "'"

$.ajax({
    url: of3URL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
    var of3ID = response.search_player_all.queryResults.row.player_id;
    localStorage.setItem("of3", of3ID);
});

var of3ID = localStorage.getItem("of3");
var of3queryURL =  "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='" + of3ID + "'"
    
$.ajax({
    url: of3queryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response.sport_hitting_tm.queryResults.row);
    var tb = parseInt(response.sport_hitting_tm.queryResults.row.tb);
    console.log(tb);
    var ibb = parseInt(response.sport_hitting_tm.queryResults.row.ibb);
    var bb = parseInt(response.sport_hitting_tm.queryResults.row.bb);
    var sb = parseInt(response.sport_hitting_tm.queryResults.row.sb);

    var of3Runs = (tb + ibb + bb + sb)/4;
    var displayOF3 = of3 + " " + of3Runs;

    var of3details = $("<h2>", {
        text: displayOF3,
    });
    $("#of3").append(of3details);
});