const con = require('./connection');
require('dotenv').config();

class METHODS {
	constructor(table1, table2) {
		this.table1 = table1;
		this.table2 = table2;
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	selectAll(connection = con) {
		let sql = `SELECT * FROM ${this.table1}`;
		connection.query(sql, (err, result) => {
			if (err) throw err;
			else {
				result = result.map(res => {
					return [res.id, res.burger_name, res.devoured];
				});
				console.log(result);
			}
		});
		let sql2 = `SELECT * FROM ${this.table2}`;
		connection.query(sql2, (err, result) => {
			if (err) throw err;
			else {
				result = result.map(res => {
					return [res.fullName, res.burger_id];
				});
				console.log(result);
			}
		});
	}
	////////////////////////////////////////////////////////////////////////////////////////////////
	insertOneBurger(connection = con, burgerName, devoured=0) {
		//Insert burgers;

		var sqlB = `INSERT INTO ${this.table1}(burger_name,devoured) VALUES?`;
		var values = [[burgerName.toString(), devoured]];
		connection.query(sqlB, [values], (err, result) => {
      if(err) throw err;
      else console.log(result);
  
    });  
  }
	////////////////////////////////////////////////////////////////////////////////////////////////
	insertUser(connection = con, fullName, burgerID = 1) {
		// insert users
		var sqlU = `INSERT INTO ${this.table2}(fullName,burger_id) VALUES?`;
		var values2 = [[fullName.toString(), burgerID]];
		connection.query(sqlU, [values2], (err, result) => {
			if (err) {
				throw err;
			} else console.log('\nNumber of records inserted:' + result.affectedRows);
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////
  updateBurger(connection=con,newBurgerName,oldBurgerName)
  {
    var sqlUB = `UPDATE ${this.table1} SET burger_name = "${newBurgerName}" WHERE burger_name = "${oldBurgerName}";`;
    connection.query(sqlUB,(err,result)=>{
      if (err) {
				throw err;
			} else console.log('\nNumber of records inserted:' + result.affectedRows);
    })
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////
}

newUser = new METHODS(process.env.DB_TABLE1, process.env.DB_TABLE2);
//newUser.selectAll();
//newUser.insertOneBurger(con, 'dark meat burger', 1) 
//newUser.insertUser(con,'kunle babatunde', 8);
newUser.updateBurger(con,"garlic with bacon burger","meetload22");

module.exports = METHODS;