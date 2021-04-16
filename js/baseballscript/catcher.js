var catcher = "j.t. realmuto";

var cURL = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + catcher + "'"

$.ajax({
    url: cURL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
    var catcherID = response.search_player_all.queryResults.row.player_id;
    localStorage.setItem("Catcher", catcherID);
});

var catcherID = localStorage.getItem("Catcher");
var cqueryURL =  "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='" + catcherID + "'"
    
$.ajax({
    url: cqueryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response.sport_hitting_tm.queryResults.row);
    var tb = parseInt(response.sport_hitting_tm.queryResults.row.tb);
    console.log(tb);
    var ibb = parseInt(response.sport_hitting_tm.queryResults.row.ibb);
    var bb = parseInt(response.sport_hitting_tm.queryResults.row.bb);
    var sb = parseInt(response.sport_hitting_tm.queryResults.row.sb);

    var catcherRuns = (tb + ibb + bb + sb)/4;
    
    $("#cname").text(catcher);
    $("#cRuns").text(catcherRuns);
});