const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
const mariadb = require('mariadb');
const pool = mariadb.createPool({host: 'mariadb', port: 3306, user: 'root', password: 'pass', connectionLimit: 5});

app.use(cors())

app.get('/', (req, res) => {
  pool.getConnection()
    .then(conn => {
      conn.query("SELECT * from articles")
        .then((res) => {
          console.log(res);
          conn.end();
          res.json({data: res, success: true});
        })
        .catch(err => {
          console.log(err);
          conn.end();
          res.json({error: err, success: false});
        })

    }).catch(err => {
      console.log(err);
      res.json({error: err, success: false});
    });

})

app.post('/', (req, res) => {
  console.log(req.body);
  var author = '';
  var status = '';
  var section = '';
  var date = '';
  var title = '';
  pool.getConnection()
      .then(conn => {
        conn.query("INSERT INTO articles value (?, ?, ?, ?, ?)", [author, status, section, date, title])
          .then((res) => {
            console.log(res);
            conn.end();
            res.json({data: res, success: true});
          })
          .catch(err => {
            console.log(err);
            conn.end();
            res.json({error: err, success: false});
          })
      }).catch(err => {
        console.log(err);
        res.json({error: err, success: false});
      });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
