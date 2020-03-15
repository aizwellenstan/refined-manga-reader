import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

export const schema = new Schema({
    alias: String,
    categories: [String],
    hits: Number,
    image: String,
    lastUpdated: Number,
    status: Number,
    title: String
});

const Manga = mongoose.model("Manga", schema);

export default Manga;
