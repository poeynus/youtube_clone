import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avataUrl: String,
    facebookId: Number,
    githubId: Number
});

const model = mongoose.Model("User", UserSchema);

UserSchema.plugin(passportLocalMongoose, {usernameField: "email"});

export default model;