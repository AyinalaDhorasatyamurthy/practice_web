var express = require('express');

var app = express();

app.use(express.json());


let students = [
    {id:1, name:"A",mobile:1234567890,address:"Delhi",age:20},
    {id:2, name:"B",mobile:1234567890,address:"Mumbai",age:25},
    {id:3, name:"C",mobile:1234567890,address:"Chennai",age:30}
];

app.post('/students', (req, res) => {
    const { id, name, mobile, address, age } = req.body;
    const newStudent = { id, name, mobile, address, age };
    students.push(newStudent);
    res.json({ message: 'Student added', id, name, mobile, address, age });
});

app.get('/students', (req, res) => {
    res.json({ students: students });
});

app.get("/students/:id", (req,res) => {
    const id = Number(req.params.id);
    const student = students.find(student => student.id === id);
    if(!student){
        return res.status(404).send("Student not found");
    }       
    res.json(student);
});

app.put("/students/:id",(req,res) => {
    const student = students.find(student => student.id === Number(req.params.id));
    if(!student){
        return res.status(404).send("Student not found");
    }
    student.name = req.body.name;
    student.mobile = req.body.mobile;
    student.address = req.body.address;
    student.age = req.body.age;
    res.json(student);
});

app.delete("/students/:id",(req,res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(student => student.id === id);
    if(index === -1){
        return res.status(404).send("Student not found");
    }
    students.splice(index, 1);
    res.json({ message: "Student deleted" });
});

app.listen(9000,() => console.log("server is running"));