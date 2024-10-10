import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {type:String, unique:[true, 'Email already exists'], required: [true, 'Email required']},
    username: {type:String, required:[true, 'Username required']},
    image: {type:String}
})

const User = models.User || model("User",userSchema)  //  first check if models exists, if not (or) create a new model

export default User