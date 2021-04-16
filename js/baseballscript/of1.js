var of1 = "mike trout";

var of1URL = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + of1 + "'"

$.ajax({
    url: of1URL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
    var of1ID = response.search_player_all.queryResults.row.player_id;
    localStorage.setItem("of1", of1ID);
});

var of1ID = localStorage.getItem("of1");
var of1queryURL =  "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='" + of1ID + "'"
    
$.ajax({
    url: of1queryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response.sport_hitting_tm.queryResults.row);
    var tb = parseInt(response.sport_hitting_tm.queryResults.row.tb);
    console.log(tb);
    var ibb = parseInt(response.sport_hitting_tm.queryResults.row.ibb);
    var bb = parseInt(response.sport_hitting_tm.queryResults.row.bb);
    var sb = parseInt(response.sport_hitting_tm.queryResults.row.sb);

    var of1Runs = (tb + ibb + bb + sb)/4;
    var displayOF1 = of1 + " " + of1Runs;

    var of1details = $("<h2>", {
        text: displayOF1,
    });
    $("#of1").append(of1details);
});