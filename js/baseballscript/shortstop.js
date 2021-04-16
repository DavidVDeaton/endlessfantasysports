var ss = "corey seager";

var ssURL = "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" + ss + "'"

$.ajax({
    url: ssURL,
    method: "GET"
})

.then(function (response) {
    console.log(response);
    var ssID = response.search_player_all.queryResults.row.player_id;
    localStorage.setItem("ss", ssID);
});

var ssID = localStorage.getItem("ss");
var ssqueryURL =  "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2021'&player_id='" + ssID + "'"
    
$.ajax({
    url: ssqueryURL,
    method: "GET"
})

.then(function (response) {
    console.log(response.sport_hitting_tm.queryResults.row);
    var tb = parseInt(response.sport_hitting_tm.queryResults.row.tb);
    console.log(tb);
    var ibb = parseInt(response.sport_hitting_tm.queryResults.row.ibb);
    var bb = parseInt(response.sport_hitting_tm.queryResults.row.bb);
    var sb = parseInt(response.sport_hitting_tm.queryResults.row.sb);

    var ssRuns = (tb + ibb + bb + sb)/4;
    var displayss = ss + " " + ssRuns;

    var ssdetails = $("<h2>", {
        text: displayss,
    });
    $("#ss").append(ssdetails);
});