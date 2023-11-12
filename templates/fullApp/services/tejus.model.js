import mongoose from "mongoose";
import softDelete from "mongoosejs-soft-delete";

const Schema = mongoose.Schema;

const tejusSchema = new Schema(
    {
        content: {
            type: String,
            default: "",
        },
    },
    { timestamps: true, collection: "tejus" }
);

tejusSchema.plugin(softDelete);

const tejus = mongoose.model("tejus", tejusSchema);

export default tejus;
