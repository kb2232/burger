const orms = require("../config/orms");
require('dotenv').config();

class BURGER extends orms
{
  constructor()
  {
    super(process.env.DB_TABLE1, process.env.DB_TABLE2);
  }
}
let newUser = new BURGER();
newUser.selectAll();
newUser.insertOneBurger('','sauscy cheese burger', 0); 
newUser.insertUser('','phil jackson', 2);
newUser.updateBurger('',"pepper burger","0");

module.exports = BURGER;