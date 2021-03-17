
const express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

var mongo_uri = "mongodb+srv://astute1208:pearw0810@cluster0.clut9.mongodb.net/test?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

mongoose
  .connect(mongo_uri, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("[success] task 2 : connected to the database ");
    },
    (error) => {
      console.log("[failed] task 2 " + error);
      process.exit();
    }
  );

  mongoose.connection.on('error', err => {
    console.error('MongoDB error', err)
  })
  

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

var port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log('Application listening on port '+ port);
})

app.get('/', (req, res)=>{
    res.status(200).send('Application Start Homepage');
});

var Animation = require("./animationRouter");
app.use('/api/goosemations/', Animation);

app.use((req, res, next)=>{
    var err = new Error('Page not found');
    err.status = 404;
    next(err);
});
