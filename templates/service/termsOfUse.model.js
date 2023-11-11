import mongoose from "mongoose";
import softDelete from "mongoosejs-soft-delete";

const Schema = mongoose.Schema;

const termsOfUseSchema = new Schema(
    {
        content: {
            type: String,
            default: "",
        },
    },
    { timestamps: true, collection: "terms_of_use" }
);

termsOfUseSchema.plugin(softDelete);

const TermsOfUse = mongoose.model("terms_of_use", termsOfUseSchema);

module.exports = TermsOfUse;
