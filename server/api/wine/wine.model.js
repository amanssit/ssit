var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cellar'
});



var GetAllWines = function(callback){
  var error = null;
  connection.connect();
  sqlQuery = 'SELECT * FROM wine'
  connection.query(sqlQuery, function(err, rows, fields) {
    if (err) throw err;

    var Wines = [];
    for (var i = 0; i < rows.length; i++) {
      //console.log(rows[i])
      Wines.push({
        WineID:  rows[i].id,
        Name: rows[i].name,
        Year:rows[i].year,
        Grapes:rows[i].grapes,
        Country:rows[i].country,
        Region:rows[i].region,
        Description:rows[i].description,
        Picture:rows[i].picture
      });
    }


    return callback(err,Wines)
  });

  connection.end();

}

module.exports = GetAllWines;
