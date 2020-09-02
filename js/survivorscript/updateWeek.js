function updateWeek() {

    var now = moment().format("MM-DD-YY");
    //var now = "09-20-20";
    console.log(now);

    if (now < "09-15-20") {
        var week = 1;
        localStorage.setItem("week", week);
    }
    else if (now > "09-14-20" && now < "09-22-20") {
        var week = 2;
        localStorage.setItem("week", week);
    }
    else if (now > "09-21-20" && now < "09-29-20") {
        var week = 3;
        localStorage.setItem("week", week);
    }
    else if (now > "09-28-20" && now < "10-06-20") {
        var week = 4;
        localStorage.setItem("week", week);
    }
    else if (now > "10-05-20" && now < "10-13-20") {
        var week = 5;
        localStorage.setItem("week", week);
    }
    else if (now > "10-12-20" && now < "10-20-20") {
        var week = 6;
        localStorage.setItem("week", week);
    }
    else if (now > "10-19-20" && now < "10-27-20") {
        var week = 7;
        localStorage.setItem("week", week);
    }
    else if (now > "10-26-20" && now < "11-03-20") {
        var week = 8;
        localStorage.setItem("week", week);
    }
    else if (now > "11-02-20" && now < "11-10-20") {
        var week = 9;
        localStorage.setItem("week", week);
    }
    else if (now > "11-09-20" && now < "11-17-20") {
        var week = 10;
        localStorage.setItem("week", week);
    }
    else if (now > "11-16-20" && now < "11-24-20") {
        var week = 11;
        localStorage.setItem("week", week);
    }
    else if (now > "11-23-20" && now < "12-01-20") {
        var week = 12;
        localStorage.setItem("week", week);
    }
    else if (now > "11-30-20" && now < "12-08-20") {
        var week = 13;
        localStorage.setItem("week", week);
    }
    else if (now > "12-07-20" && now < "12-15-20") {
        var week = 14;
        localStorage.setItem("week", week);
    }
    else if (now > "12-14-20" && now < "12-22-20") {
        var week = 15;
        localStorage.setItem("week", week);
    }
    else if (now > "12-21-20" && now < "12-29-20") {
        var week = 16;
        localStorage.setItem("week", week);
    }
    else {
        var week = 17;
        localStorage.setItem("week", week);
    }

}