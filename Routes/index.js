const express = require('express');
const router  = express.Router();
const mysql = require('mysql');



//Add Report Stuff

  router.get("/allreports", (req, res) => {
    let con = mysql.createConnection({
      host: "pdb2.awardspace.com",
      user: "aegeankent_knt",
      password: "455Kent!",
      database: "aegeankent_knt",
      connectTimeout: 30000
    });
    con.connect();
    con.query('SELECT * from properties', function(err, rows, fields) {
      if(err) console.log(err);
      console.log('The solution is: ', rows);
      con.end();
  });
  });

module.exports = router;