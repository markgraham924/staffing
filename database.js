var mysql = require('mysql');


//function submitForm(){

var username = mysqli_real_escape_string("Mark Graham") //document.forms["loginForm"]["username"].value;
var password = 13.00 //document.forms["loginForm"]["password"].value;

var con = mysql.createConnection({
    host: "89.34.96.142",
    user: "mcgnnpe_adminsql",
    password: "mcgraham924",
    database: "mcgnnpe_bylat"
});

con.connect(function(err) {
    var username = "Mark Graham"
    var password = 13.00 
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO staff (name, hours) VALUES (username, '10')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});
//}
