var of2 = "Mookie Betts";

var of2URL = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + of2 + "'"

$.ajax({
    url: of2URL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
    var of2ID = response.search_player_all.queryResults.row.player_id;
    localStorage.setItem("of2", of2ID);
});

var of2ID = localStorage.getItem("of2");
var of2queryURL =  "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='" + of2ID + "'"
    
$.ajax({
    url: of2queryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response.sport_hitting_tm.queryResults.row);
    var tb = parseInt(response.sport_hitting_tm.queryResults.row.tb);
    console.log(tb);
    var ibb = parseInt(response.sport_hitting_tm.queryResults.row.ibb);
    var bb = parseInt(response.sport_hitting_tm.queryResults.row.bb);
    var sb = parseInt(response.sport_hitting_tm.queryResults.row.sb);

    var of2Runs = (tb + ibb + bb + sb)/4;
    var displayOF2 = of2 + " " + of2Runs;

    var of2details = $("<h2>", {
        text: displayOF2,
    });
    $("#of2").append(of2details);
});