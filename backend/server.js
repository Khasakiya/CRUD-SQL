const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'crud'
})

app.get('/',(req,res)=>{
    const sql ="SELECT * FROM books ";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message:"ERROR inside server"});
        return res.json(result);
    })
})

app.post('/books',(req,res)=>{
    const sql = "INSERT INTO books (`title`,`author`,`price`) VALUES (?)";
    console.log(req.body);
    
    const values = [
        req.body.title,
        req.body.author,
        req.body.price
    ]
    db.query(sql,[values],(err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get('/read/:id',(req,res)=>{
    const sql = "SELECT * FROM books WHERE ID = ?";
    const id = req.params.id;

    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({Message:"ERROR inside server"});
        return res.json(result);
    })
})

app.put('/edit/:id', (req, res) => {
    const sql = "UPDATE books SET title=?, author=?, price=? WHERE ID=?";
    const id = req.params.id;
    const { title, author, price } = req.body;

    db.query(sql, [title, author, price, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.json({ message: "ERROR", error: err });
        }
        return res.json(result);
    });
});

app.delete('/delete/:id',(req,res)=>{
    const sql = "DELETE FROM books WHERE ID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result)=>{
        if(err) return res.json({ message: "ERROR", error: err });
        return res.json(result);
    })

})

app.listen(8081,()=>{
    console.log("server is Started");  
})