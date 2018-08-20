const sql = require("mysql");
require('dotenv').config();
/////////CONNECTON///////////////////////////////////////
const con = sql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: "burgers_db",
});
con.connect(function(err) 
{
	if (err) {
		throw err;
		return;
	}
	console.log('Connected to MySQL!!!');

	con.query('select @@hostname', (err, result) => {
		if (err) throw err;
		console.log(result);
  });
  
  // con.query('USE burgers_db',(err,result)=>{
  //   if(err) throw err;
  //   console.log(result);
  // });

  con.query('SHOW TABLES',(err,result)=>{
    if(err) throw err;
    result = result.map(res=>{
      return res.Tables_in_burgers_db;
    })
    console.log("tables = ",result);
  });
  // con.end();
});

module.exports = con;