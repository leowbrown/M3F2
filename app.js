const express  =  require('express');
const app = express();
const mongoose =  require("mongoose");
const passport =  require("passport");
const bodyParser =  require("body-parser");
// we're calling in the mongoose schema user
const User = require("./models/user");
const Post = require("./models/post");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'));
//we're setting up the strategy to provide security
const LocalStrategy =  require("passport-local");

const passportLocalMongoose =  require("passport-local-mongoose"); ////simplifies the integration between Mongoose and Passport for local authentication
const twig = require('twig');
const { post } = require('jquery');

// views
app.set('view engine', 'html');
app.engine('html', twig.__express);
app.set('views','views');

const mongourl = 'mongodb+srv://leoAdmin:Placeholder12_@cluster0.t6qcs.mongodb.net/classPort?retryWrites=true&w=majority';


mongoose.connect(mongourl, { useUnifiedTopology: true });


app.use(require("express-session")({
    secret:"any normal word", //decode or encode session, this is used to compute the hash.
    resave: false,              //What this does is tell the session store that a particular session is still active, in the browser
    saveUninitialized:false    //the session cookie will not be set on the browser unless the session is modified
}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 
passport.use(new LocalStrategy(User.authenticate()));

// add the bodyParser so we can return our information to the database
app.use(bodyParser.urlencoded({ extended:true }))
app.use(passport.initialize());
app.use(passport.session());


// start our server
const port = 3000;

app.listen(port ,function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("Server Started At Port " + port);
    } 
})


app.get('/', (req, res) => {
    res.render('index', { user: req.user });
})




// work post function

app.post('/share', (req, res) => {
    new Post({
        image_link:req.body.image_link,
        author_name:req.body.author,
        content:req.body.content,       
        portfolio:req.body.portfolio,
        contact:req.body.contact
    })
    .save()
    .then(result => {
        
        res.redirect('/share');
    })
    .catch(err => {
        if (err) throw err;
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) 
                return next();
            res.redirect('/');     
}


app.get('/share', isLoggedIn, (req, res) => {
        // FETCH ALL POSTS FROM DATABASE
    Post.find()
    // sort by most recent
    .sort({createdAt: 'descending'})
    .then(result => {
        if(result){
            // RENDERING HOME VIEW WITH ALL POSTS
            res.render('share',{
                
                allpost:result
                
            });
        }
    })
    .catch(err => {
        if (err) throw err;
    }); 
});



app.get('/delete/:id', (req, res) => {
    
    Post.findByIdAndDelete(req.params.id)
    
    .then(result => {
        res.redirect('/share');
    })

    .catch(err => {
        console.log(err);
        res.redirect('/share');
    })
});

// register function
app.post("/",(req,res)=>{ 
    User.register(new User({            //passport-local-mongoose function to register a new user
    	username: req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
    	}),
    	req.body.password,function(err,user){
        if(err){
            console.log(err);
        }
        passport.authenticate("local")(req,res,function(){ // authenticate the local session and redirect to login page
            console.log(req);
            res.redirect("/");
        })    
    })

});


// login function

app.post("/login", passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/"
}));

app.get("/logout",(req,res)=>{  // logout function
    req.logout();
    res.redirect("/");
});



// EDIT POST
app.get('/edit/:id', (req, res) => {

    Post.findById(req.params.id)
    .then(result => {
        if(result){
            res.render('edit',{
                post:result
            });
        }
        else{
            res.redirect('/');
        }
    })
    .catch(err => {
        res.redirect('/');
    });
});

// UPDATE POST
app.post('/edit/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(result => {
        if(result){
            result.image_link = req.body.image_link;
            result.author_name = req.body.author;
            result.portfolio = req.body.portfolio;
            result.contact = req.body.contact;
            result.content = req.body.content;
            return result.save();
        }
        else{
            console.log(err);
            res.redirect('/');
        }
    })
    .then(update => {
        res.redirect('/share');
    })
    .catch(err => {
        res.redirect('/');
    });
});