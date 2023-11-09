import mongoose from "mongoose";

const shortenUrlSchema = mongoose.Schema(
  {
    shortCode: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamps: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

// Create and export the model
const ShortenUrl = mongoose.model("ShortenUrl", shortenUrlSchema);

export default ShortenUrl;
