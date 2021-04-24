var first = "paul goldschmidt";

var firstURL = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + first + "'"

$.ajax({
    url: firstURL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
    var firstID = response.search_player_all.queryResults.row.player_id;
    localStorage.setItem("First", firstID);
});

var firstID = localStorage.getItem("First");
var firstqueryURL =  "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='" + firstID + "'"
    
$.ajax({
    url: firstqueryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response.sport_hitting_tm.queryResults.row);
    var tb = parseInt(response.sport_hitting_tm.queryResults.row.tb);
    console.log(tb);
    var ibb = parseInt(response.sport_hitting_tm.queryResults.row.ibb);
    var bb = parseInt(response.sport_hitting_tm.queryResults.row.bb);
    var sb = parseInt(response.sport_hitting_tm.queryResults.row.sb);

    var firstRuns = (tb + ibb + bb + sb);
    localStorage.setItem("1B", firstRuns);
    var runsScored = firstRuns/4;
    $("#firstname").text(first);
    $("#firstRuns").text(runsScored);
});