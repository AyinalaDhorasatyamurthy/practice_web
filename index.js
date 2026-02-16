var express = require('express');

var app = express();

app.use(express.json());


app.get('/', function (req, res) {
    res.send("hello world");
    
});

app.get('/time',function(req,res){
    var time = new Date().toLocaleTimeString();
    res.send(`Time is : ${time}`);
});

app.get('/date',function(req,res){
    var date = new Date().toLocaleDateString();
    res.send(`Date is : ${date}`);

});

app.get('/wishes/:name',function(req,res){
    var name = req.params.name;
    res.send(`Hello ${name}, have a nice day!`);
});

app.get('/addition/:a/:b',function(req,res){
    var a = Number(req.params.a);
    var b = Number(req.params.b);
    var c = a + b;
    res.send(`The sum of ${a} and ${b} is : ${c}`);
});


let users = [
    {id:1, name:"Alice", age:25},
    {id:2, name:"Bob", age:30},
    {id:3, name:"Charlie", age:35}
];

app.get('/users', (req, res) => {
    // Your code to fetch all members
    res.json({ members: users });
});
app.post('/users', (req, res) => {
    const { id, name, age } = req.body;
    // Add user to your database/array
    const newUser = { id, name, age };
    users.push(newUser);
    res.json({ message: 'User added', id, name, age });
});


app.get("/users/:id", (req,res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).send("User not found");
    }

    res.json(user);
});


app.put("/users/:id",(req,res) => {
    const user = users.find(user => user.id === Number(req.params.id));

    if(!user){
        return res.status(404).send("User not found");
    }   

    user.name = req.body.name;
    user.age = req.body.age;
    res.json(user);
});




app.listen(9000,() => console.log("server is running"));