const express = require('express')
const path = require('path');
const session = require('express-session');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ExpressError = require('./utilities/expressError');
const flash = require('connect-flash');
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');

const userRoutes = require('./routes/user');
const siteRoutes = require('./routes/site');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log("MONGO-DB CONNECTION OPEN");
    })
    .catch(err => {
        console.log("MONGO-DB ERROR");
        console.log(err);
    });

const app = express();    

app.locals.Sortable = require('sortablejs');

//0363Kf2pIQmbMVNw

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');                              //ejs is the main viewing engine since we will be templating with ejs
app.set('views', path.join(__dirname, 'views'));            //views folder is available from anywhere

app.use(express.static(path.join(__dirname, 'public')));    //ability to use static documents like style sheets from the main directory
app.use(express.urlencoded({ extended: true }));            //allows the app to take in form responses form client side
app.use(methodOverride('_method'));     
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())                    //use the sting "?_method" at the end of the "action" part of a form HTML attribute


const sessionConfig = {
    secret: 'thishouldbeabettersecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));                            //allows for a session to be initalized when a user visits the site. Access to cookies and allows for staying logged in
app.use(flash());

app.use(passport.initialize());                             //passport initzialation for authentication (MUST COME AFTER 'app.use(session());'
app.use(passport.session());                                //starts passports session
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//middleware for the flash waring that is displayed when certaain crud operations are done
app.use((req, res, next) => {
    if (!['/login', '/'].includes(req.originalUrl)) {
        req.session.returnTo = req.originalUrl;
    }
    res.locals.currentUser = req.user;

    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});

app.use('/', userRoutes);
app.use('/', siteRoutes);

//the main page, ie: the sites page for example yelp-camp.com
app.get('/', (req, res) => {
    const pageTitle = "Welcome";
    res.render('index', { pageTitle });
});


//this error handler will be used anytime a 404 error status code is send. Most common reason for a 404 is a specific path
//defined in the web address doesnt exist.
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

//this is the default error handler for all other errors outside of 404 errors
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Something Went Wrong!';
    const pageTitle = `${statusCode} Error`;
    res.status(statusCode).render('errors', { pageTitle, err });
});

const port = 3000;
app.listen(port, () => {
    console.log(`SITE IS LISTENING ON PORT ${port}`);
});
