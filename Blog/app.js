const    express    =    require("express"),
         bodyParser =    require("body-parser"),
         mongoose   =    require("mongoose"),
         mongoosePaginate = require('mongoose-paginate'),
         Post       =    require("./models/post");
         
       

        //  Users       =    require("./models/user");
const    app        =    express();


mongoose.connect("mongodb://localhost/myblog");

app.locals.moment = require("moment");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));




// FIND ALL POST
    app.get("/", (req, res) => {
        Post.find({}).sort({datecreated: -1}).skip(2).limit(5).exec ((err, allPost) => {
        
            if(err){
                console.log(err);
            }
            else {
                res.render("index", {post: allPost});
            }
        });
    });



// CREATE NEW POST ROUTE
    app.get("/new", (req, res)=>{
        res.render("new");
    });





// CREATE A NEW POST
    app.post("/", (req, res) =>{
        let title = req.body.title,
            image = req.body.image,
            description = req.body.description;
        let newPost = {title: title, image: image, description: description};

        Post.create(newPost, (err, createdPost) => {
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/");
                
            }
        });


    });


// SHOW ONE USER POST
    app.get("/:id", (req, res) =>{
      Post.findById(req.params.id, (err, foundPost)=>{
          if(err){
              console.log(err);
          }
            else {
                res.render("show", {post: foundPost});
            }

      });
    });


     app.listen(3000, (req,res) => {
        console.log("Server Started....");
     });