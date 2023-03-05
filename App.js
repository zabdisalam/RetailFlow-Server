import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routers/auth.js";
import userRoute from './routers/user.js';
import taskRoute from './routers/task.js';
import teamRoute from './routers/team.js';
import session from 'express-session';
import passport from 'passport';
import {Strategy as OAuth2Strategy} from 'passport-oauth2';
import axios from 'axios';
import User from "./models/User.js";



import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.use(cookieParser());
app.use(cors());
app.use(express.json());
////////////////////////////////////
app.use(session({secret: 'mysecretkey'}));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('provider', new OAuth2Strategy({
            authorizationURL: 'https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize',
            tokenURL: 'https://login.microsoftonline.com/consumers/oauth2/v2.0/token',
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.REDIRECT_URI,
            scope: ['openid', 'profile', 'email', 'User.Read'],
            state: true
        },
        async (accessToken, refreshToken, profile, cb) => {
            try {
                const response = await axios.get('https://graph.microsoft.com/v1.0/me', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const profileData = response.data;
                const updatedUser = await User.findOneAndUpdate(
                    { email: profileData.mail || profileData.userPrincipalName },
                    {
                        displayName: profileData.displayName,
                        email: profileData.mail || profileData.userPrincipalName,
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                        firstName: profileData.givenName,
                        lastName: profileData.surname,
                        microsoftId: profileData.id,
                    },
                    { upsert: true, new: true }
                );
                    cb(null, updatedUser);
            } catch (error) {
                console.log('Error:', error);
                // Handle the error
                cb(error || { statusCode: 400 });
            }
        }
    ));

    passport.serializeUser((user, cb) => {
        cb(null, user);
    });

    passport.deserializeUser((user, cb) => {
        cb(null, user);
    });

    app.get('/login', passport.authenticate('provider'));

    // An authentication callback is used in a typical OAuth flow to handle the response from the OAuth provider after
    // the user has authenticated and granted access to your application.
    app.get('/auth/provider/callback',
        passport.authenticate('provider', {failureRedirect: '/login'}),
        (req, res) => {
            res.redirect(process.env.FRONT_END);
        }
    );

    app.get('/current-user', (req, res) => {
      if (!req.user) {
        res.status(401).send('User not logged in');
        return;
      }
    
      res.send(req.user);
    });

    // handle logout
    app.get('/logout', (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
            }
            req.logout(() => {
                res.clearCookie('connect.sid');
                res.redirect(`https://login.microsoftonline.com/consumers/oauth2/v2.0/logout?post_logout_redirect_uri=${process.env.REDIRECT_URI}`);
            });
        });
    });

    app.get('/', (req, res) => {
        if (req.isAuthenticated()) {
            res.send(
                `Hello ${req.user.firstName} ${req.user.lastName}! Your email is ${req.user.email}.`
            );
        } else {
            res.send('Hello stranger! Please log in to continue.');
        }
    });










/////////////////////////////////////


app.use("/oauth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/task", taskRoute);
app.use('/api/team', teamRoute);


const port = 8000;

app.listen(port, () => {
  connect();
  console.log(`RetailFlow Backend connected to port ${port}`);
});
