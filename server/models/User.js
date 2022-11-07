import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    // },
    password: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: String,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
