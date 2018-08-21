const express = require("express"),
      burger = require("../models/burger");
      router = express.Router();


router.get("/",(req,res)=>{
  res.render("index");
})

module.exports = router;