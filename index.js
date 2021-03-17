const express = require("express");

const app = express();

app.use(express.json());

var animations = [
  {
    id: 0,
    name: "Shokugeki no Soma",
    type: "Food",
    isPublished: false,
  },
  {
    id: 1,
    name: "Yakitate!! Japan",
    type: "Food",
    isPublished: false,
  },
  {
    id: 2,
    name: "Chūka Ichiban!",
    type: "Food",
    isPublished: false,
  },
  {
    id: 3,
    name: "My Neighbor Totoro",
    type: "Family",
    isPublished: true,
  },
  {
    id: 4,
    name: "Spirited Away",
    type: "Life",
    isPublished: true,
  },
  {
    id: 5,
    name: "Only Yesterday",
    type: "Children's story",
    isPublished: false,
  },
];

app.get("/api/animations/:id", (req, res) => {
  const animation = animations.find((m) => m.id === parseInt(req.params.id));

  res.send(animation);
});

app.get("/api/animations/", (req, res) => {
  res.send(animations);
});

app.post("/api/animations/", (req, res) => {
  const animation = {
    id: animations.length + 1,
    name: req.body.name,
    type: req.body.type,
    isPublished: req.body.isPublished,
  };
  animations.push(animation);
  res.send(animation);
});

app.put("/api/animations/:id", (req, res) => {
  const animation = animations.find((m) => m.id === parseInt(req.params.id));

  if (!animation) {
    res.status(404).send("The animation with the given ID was not found");
  } else {
    animation.name = req.body.name;
    animation.type = req.body.type;
    animation.isPublished = req.body.isPublished;

    res.send(animation);
  }
});

app.delete("/api/animations/:id", (req, res) => {
  const animation = animations.find((m) => m.id === parseInt(req.params.id));

  if (!animation) {
    res.status(404).send("The animation with the given ID was not found");
  } else {
    const index = animations.indexOf(animation);
    animations.splice(index, 1);

    res.send(animation);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application is runnning on port ${port}...`);
});
