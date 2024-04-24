const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = 3000; 

app.use(express.urlencoded({extended : true}));
app.use(express.json());



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'frontend','index.html'))
})

app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname,'user_files','user.html'));
});

app.post('/', (req, res) => {

    // console.log(typeof(req.body.code));
    fs.writeFile(path.join(__dirname,'user_files','user.html'),`${req.body.code}`,(err)=>{
        if(err) throw err;
    })
    res.redirect('/view');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
