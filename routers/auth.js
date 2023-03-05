import express from "express";
import User from "../models/User.js";
import session from 'express-session';
import passport from 'passport';
import {Strategy as OAuth2Strategy} from 'passport-oauth2';
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router();

// router.use(session({secret: 'mysecretkey'}));
//     router.use(passport.initialize());
//     router.use(passport.session());

//     passport.use('provider', new OAuth2Strategy({
//             authorizationURL: 'https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize',
//             tokenURL: 'https://login.microsoftonline.com/consumers/oauth2/v2.0/token',
//             clientID: process.env.CLIENT_ID,
//             clientSecret: process.env.CLIENT_SECRET,
//             callbackURL: 'http://localhost:3000/auth/provider/callback',
//             scope: ['openid', 'profile', 'email', 'User.Read'],
//             state: true
//         },
//         async (accessToken, refreshToken, profile, cb) => {
//             try {
//                 const response = await axios.get('https://graph.microsoft.com/v1.0/me', {
//                     headers: {
//                         Authorization: `Bearer ${accessToken}`
//                     }
//                 });
//                 const profileData = response.data;
//                 const updatedUser = await User.findOneAndUpdate(
//                     { email: profileData.mail || profileData.userPrincipalName },
//                     {
//                         displayName: profileData.displayName,
//                         email: profileData.mail || profileData.userPrincipalName,
//                         accessToken: accessToken,
//                         refreshToken: refreshToken,
//                         firstName: profileData.givenName,
//                         lastName: profileData.surname,
//                         microsoftId: profileData.id,
//                     },
//                     { upsert: true, new: true }
//                 );
//                     cb(null, updatedUser);
//             } catch (error) {
//                 console.log('Error:', error);
//                 // Handle the error
//                 cb(error || { statusCode: 400 });
//             }
//         }
//     ));

//     passport.serializeUser((user, cb) => {
//         cb(null, user);
//     });

//     passport.deserializeUser((user, cb) => {
//         cb(null, user);
//     });

//     router.get('/login', passport.authenticate('provider'));

//     // An authentication callback is used in a typical OAuth flow to handle the response from the OAuth provider after
//     // the user has authenticated and granted access to your application.
//     router.get('/auth/provider/callback',
//         passport.authenticate('provider', {failureRedirect: '/login'}),
//         (req, res) => {
//             res.redirect('/');
//         }
//     );

//     // handle logout
//     router.get('/logout', (req, res) => {
//         req.session.destroy((err) => {
//             if (err) {
//                 console.log(err);
//             }
//             req.logout(() => {
//                 res.clearCookie('connect.sid');
//                 res.redirect(`https://login.microsoftonline.com/consumers/oauth2/v2.0/logout?post_logout_redirect_uri=${process.env.REDIRECT_URI}`);
//             });
//         });
//     });

//     router.get('/', (req, res) => {
//         if (req.isAuthenticated()) {
//             res.send(
//                 `Hello ${req.user.firstName} ${req.user.lastName}! Your email is ${req.user.email}.`
//             );
//         } else {
//             res.send('Hello stranger! Please log in to continue.');
//         }
//     });

export default router;
