const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const port = 50000;

const app = express();

app.use(cors());
app.use(express.json());
let categories = [
  {
    id: uuid(),
    name: "Politics",
  },
  {
    id: uuid(),
    name: "Sport",
  },
];
app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  const one = categories.find((category) => category.id === id);
  if (one) {
    res.json(one);
  } else {
    res.sendStatus(404);
  }
});

app.post("/categories", (req, res) => {
  const { name } = req.body;
  const newCategory = { id: uuid(), name: name };
  categories.push(newCategory);
  res.sendStatus(201);
});

app.put("/categories/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const index = categories.findIndex((category) => category.id === id);
  if (index > -1) {
    categories[index].name = name;
    res.json({ updatedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  const one = categories.find((category) => category.id === id);
  if (one) {
    const newList = categories.filter((category) => category.id !== id);
    categories = newList;
    res.json({ deletedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log("App is listering at port", port);
});
