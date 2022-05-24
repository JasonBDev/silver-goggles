const express = require('express');
const router = express.Router();
const Accordion = require('../models/accordion');
const User = require('../models/user');
const passport = require('passport');
const { isLoggedIn } = require('../middleware');

router.get('/login', (req, res) => {
    const pageTitle = 'Login';
    res.render('users/login', { pageTitle });
});

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), async (req, res) => {
    req.flash('success', 'Welcome Back!');
    res.redirect('/admin');
});

router.get('/register', (req, res) => {
    const pageTitle = 'Register';
    res.render('users/register', { pageTitle });
});

router.post('/register', async (req, res, next) => {
    try {
        if (req.body.TandC === '') {
            req.body.TandC = Boolean(true);
        }
        const { email, username, password, TandC } = req.body;
        const user = await new User({ email, username, TandC });
        const registeredUser = await User.register(user, password);
        const accordion = new Accordion({
            tabs:
                [
                    {
                        title: 'WELCOME',
                        sections:
                            [
                                {
                                    image:

                                    {
                                        source: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474',
                                        filename: 'aklsd;jfklasdf',
                                        url: 'https://google.com',
                                    },

                                    heading: 'New?',
                                    subheading: 'Well Glad You Are Here',
                                    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla expedita nisi optio dolor fugit minus enim ad? Recusandae saepe veniam odit sapiente dolore quaerat eum numquam, quod alias id? Sit neque nihil repellendus adipisci ullam est! Minus, minima! Hic, voluptatum eos laborum aliquam quas praesentium! Error itaque velit, libero, sint laborum eius odit similique laudantium deleniti voluptas ex ullam! Cum, nostrum totam rerum ipsa aliquid nisi autem dolorum. Earum quod excepturi possimus nam. Beatae exercitationem consectetur quas reprehenderit fugit perspiciatis odit laudantium tempore molestias sunt, deserunt iure dignissimos accusamus? Iure voluptates possimus illum dicta vitae, culpa quisquam reprehenderit?',
                                    buttons:
                                        [
                                            {
                                                text: 'Learn More',
                                                url: 'https://google.com',
                                            },
                                            {
                                                text: 'Join',
                                                url: 'https://google.com',
                                            },
                                        ],
                                },
                                {
                                    image:

                                    {
                                        source: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474',
                                        filename: 'asdfasdf',
                                        url: 'https://google.com',
                                    },

                                    heading: 'Not New?',
                                    subheading: 'Stoked You Are Back',
                                    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla expedita nisi optio dolor fugit minus enim ad? Recusandae saepe veniam odit sapiente dolore quaerat eum numquam, quod alias id? Sit neque nihil repellendus adipisci ullam est! Minus, minima! Hic, voluptatum eos laborum aliquam quas praesentium! Error itaque velit, libero, sint laborum eius odit similique laudantium deleniti voluptas ex ullam! Cum, nostrum totam rerum ipsa aliquid nisi autem dolorum. Earum quod excepturi possimus nam. Beatae exercitationem consectetur quas reprehenderit fugit perspiciatis odit laudantium tempore molestias sunt, deserunt iure dignissimos accusamus? Iure voluptates possimus illum dicta vitae, culpa quisquam reprehenderit?',
                                    buttons:
                                        [
                                            {
                                                text: 'Register',
                                                url: 'https://google.com',
                                            },
                                            {
                                                text: 'Google',
                                                url: 'https://google.com',
                                            },
                                            {
                                                text: 'Learn',
                                                url: 'https://google.com',
                                            },
                                            {
                                                text: 'Join',
                                                url: 'https://google.com',
                                            },
                                        ],
                                },
                            ],
                    },
                    {
                        title: 'WELCOME AGAIN',
                        sections:
                            [
                                {
                                    image:

                                    {
                                        source: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474',
                                        filename: 'aklsd;jfklasdf',
                                        url: 'https://google.com',
                                    },

                                    heading: 'New?',
                                    subheading: 'Well Glad You Are Here',
                                    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla expedita nisi optio dolor fugit minus enim ad? Recusandae saepe veniam odit sapiente dolore quaerat eum numquam, quod alias id? Sit neque nihil repellendus adipisci ullam est! Minus, minima! Hic, voluptatum eos laborum aliquam quas praesentium! Error itaque velit, libero, sint laborum eius odit similique laudantium deleniti voluptas ex ullam! Cum, nostrum totam rerum ipsa aliquid nisi autem dolorum. Earum quod excepturi possimus nam. Beatae exercitationem consectetur quas reprehenderit fugit perspiciatis odit laudantium tempore molestias sunt, deserunt iure dignissimos accusamus? Iure voluptates possimus illum dicta vitae, culpa quisquam reprehenderit?',
                                    buttons:
                                        [
                                            {
                                                text: 'Learn More',
                                                url: 'https://google.com',
                                            },
                                            {
                                                text: 'Join',
                                                url: 'https://google.com',
                                            },
                                        ],
                                },
                                {
                                    image:

                                    {
                                        source: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474',
                                        filename: 'asdfasdf',
                                        url: 'https://google.com',
                                    },

                                    heading: 'Not New?',
                                    subheading: 'Stoked You Are Back',
                                    information: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nulla expedita nisi optio dolor fugit minus enim ad? Recusandae saepe veniam odit sapiente dolore quaerat eum numquam, quod alias id? Sit neque nihil repellendus adipisci ullam est! Minus, minima! Hic, voluptatum eos laborum aliquam quas praesentium! Error itaque velit, libero, sint laborum eius odit similique laudantium deleniti voluptas ex ullam! Cum, nostrum totam rerum ipsa aliquid nisi autem dolorum. Earum quod excepturi possimus nam. Beatae exercitationem consectetur quas reprehenderit fugit perspiciatis odit laudantium tempore molestias sunt, deserunt iure dignissimos accusamus? Iure voluptates possimus illum dicta vitae, culpa quisquam reprehenderit?',
                                    buttons:
                                        [
                                            {
                                                text: 'Register',
                                                url: 'https://google.com',
                                            },
                                            {
                                                text: 'Google',
                                                url: 'https://google.com',
                                            },
                                            {
                                                text: 'Learn',
                                                url: 'https://google.com',
                                            },
                                            {
                                                text: 'Join',
                                                url: 'https://google.com',
                                            },
                                        ],
                                },
                            ],
                    },

                ]
        });
        accordion.user = user._id;
        await accordion.save();
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome!');
            res.redirect('/admin');
        });
    } catch (e) {
        if (e.code === 11000) {
            const { keyValue } = e;
            req.flash('error', `A user with the given email, ${keyValue.email}, is already registered`);
            res.redirect('/register');
        } else {
            req.flash('error', e.message);
            console.log('friend');
            res.redirect('/register');
        }
    }
});


router.get('/admin', isLoggedIn, async (req, res) => {
    //sets currentUser to the username of the person who just logged in
    const accordion = await Accordion.findOne({ "user": req.user._id });
    const pageTitle = 'Admin';
    res.render('users/loggedin', { accordion, pageTitle });
});

router.put('/admin', isLoggedIn, async (req, res) => {
    const currentUser = req.user._id;
    const accordion = await Accordion.findOneAndUpdate({ "user": currentUser }, { ...req.body }, { runValidators: true, new: true });
    await accordion.save();
    res.redirect('/admin');
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Successfully logged out.');
    res.redirect('/');
})

module.exports = router;
