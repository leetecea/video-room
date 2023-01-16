const express = require('express');
const app = express();
const cors = require('cors');
const port = 5171;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.get('/', async (req,res) => {
  res.send("olaaa mundooo")
})

app.listen(port, () =>{
    console.log("Servidor rodando na url http://localhost:5171");
});
