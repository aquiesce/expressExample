import * as express from "express";
const app = express();

app.use(express.json());

const people = [
  { id: 1, name : "matt"},
  { id: 2, name : "ann"}
]

app.get("/", (req, res) => {
    res.send("Hello from express")
});

app.get("/person/:id", (req, res) => {  

  console.log(req.params);

  const person = people.find(p => p.id === parseInt(req.params.id));

  res.status(200).send(person);
});

app.get("/persons", (req, res) => {  
  res.status(200);
  res.send(people);
});

app.post("/persons", (req, res) => {
  
  const newPerson = {
    id : people.length +  1,
    name : req.body.name
  }

  people.push(newPerson);

  res.status(200).send(newPerson);

});

// start up
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`.Server is running in http://localhost:${PORT}`)
})