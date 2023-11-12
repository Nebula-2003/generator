import passport from "passport";
import { Strategy as CustomStrategy } from "passport-custom";
import usersModel from "../services/users/users.model.js";
import * as commonFunctions from "./functions.js";

// Passport Custom Strategy for 'user'
passport.use(
    "user",
    new CustomStrategy(async (req, done) => {
      try {
        req.body.email = req.body.email.toLowerCase();
        const user = await usersModel.findOne({ email: req.body.email });
        console.log("User Data : ", user);
        if (!user) {
          return done(new Error("INVALID_EMAIL"));
        }
        const isPasswordValid = await commonFunctions.matchPassword(req.body.password, user.password);
        console.log("isPasswordValid : ", isPasswordValid);
        if (isPasswordValid) {
          return done(null, user);
        } else {
          return done(new Error("INVALID_PASSWORD"));
        }
      } catch (error) {
        return done(error);
      }
    })
);

// Passport Custom Strategy for 'admin'
passport.use(
    "admin",
    new CustomStrategy(async (req, done) => {
      try {
        req.body.email = req.body.email.toLowerCase();
        const user = await usersModel.findOne({ email: req.body.email, role: 'admin' });
        console.log("User Data : ", user);
        if (!user) {
          return done(new Error("INVALID_EMAIL"));
        }
        const isPasswordValid = await commonFunctions.matchPassword(req.body.password, user.password);
        console.log("isPasswordValid : ", isPasswordValid);
        if (isPasswordValid) {
          return done(null, user);
        } else {
          return done(new Error("INVALID_PASSWORD"));
        }
      } catch (error) {
        return done(error);
      }
    })
);
