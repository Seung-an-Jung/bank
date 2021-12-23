const express = require('express')
const app = express()
const port = 3001 // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dlqudcks1!',
    database: 'project',
})

connection.connect()
// connection.query(
//   'SELECT * FROM csv_환전',
//   function (error, results, fields) {
//       if (err) {
//           console.log('실패')
//           // console.log(err);
//       } else {
//           console.log(results)
//           // console.log(rows);
//       }
//   }
// )
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/get_fee', (req, res) => {
    console.log(req.body)
    connection.query(
        'SELECT * FROM csv_수수료',
        function (err, results, fields) {
            if (err) {
                console.log('실패')
                // console.log(err);
            } else {
                console.log(results)
                res.send(results)
                // console.log(rows);
            }
        }
    )
})

app.post('/get_kindness', (req, res) => {
    console.log(req.body)
    connection.query(
        'SELECT * FROM csv_은행친절도',
        function (err, results, fields) {
            if (err) {
                console.log('실패')
                // console.log(err);
            } else {
                console.log(results)
                res.send(results)
                // console.log(rows);
            }
        }
    )
})

app.post('/get_Realexchange', (req, res) => {
    console.log(req.body)
    connection.query(
        'SELECT * FROM csv_환전통화',
        function (err, results, fields) {
            if (err) {
                console.log('실패')
                // console.log(err);
            } else {
                console.log(results)
                res.send(results)
                // console.log(rows);
            }
        }
    )
})

app.post('/get_retirement', (req, res) => {
    console.log(req.body)
    connection.query(
        'SELECT * FROM csv_연금저축',
        function (err, results, fields) {
            if (err) {
                console.log('실패')
                // console.log(err);
            } else {
                console.log(results)
                res.send(results)
                // console.log(rows);
            }
        }
    )
})

app.post('/get_Brandimage', (req, res) => {
    //console.log(req.body)
    console.log('1')
    connection.query(
        'SELECT * FROM csv_브랜드이미지',
        function (err, results, fields) {
            if (err) {
                console.log('실패')
                // console.log(err);
            } else {
                console.log(results)
                res.send(results)
                // console.log(rows);
            }
        }
    )
})

app.post('/get_mobile', (req, res) => {
    console.log('1')
    connection.query(
        'SELECT * FROM csv_모바일어플',
        function (err, results, fields) {
            if (err) {
                console.log('실패')
                // console.log(err);
            } else {
                //console.log(results)
                res.send(results)
                // console.log(rows);
            }
        }
    )
})

app.post('/get_total', (req, res) => {
    connection.query(
        'SELECT * FROM csv_은행총자산',
        function (err, results, fields) {
            if (err) {
                console.log('실패')
                // console.log(err);
            } else {
                //console.log(results)
                res.send(results)
                // console.log(rows);
            }
        }
    )
})

app.post('/get_fee', (req, res) => {
    connection.query(
        'SELECT * FROM csv_수수료',
        function (err, results, fields) {
            if (err) {
                console.log('실패')
                // console.log(err);
            } else {
                //console.log(results)
                res.send(results)
                // console.log(rows);
            }
        }
    )
})
// connection.query('SELECT * FROM csv_환전', function (error, results, fields) {
//     if (error) {
//         console.log(error)
//     }
// })

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`)
})
