const mongoose = require("mongoose");
let softDelete = require('mongoosejs-soft-delete');

const Schema = mongoose.Schema;


const termsOfUseSchema = new Schema (
    {
        content:{
            type:String,
            default:"",
        }
},
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

termsOfUseSchema.plugin(softDelete);

const TermsOfUse = mongoose.model("terms_of_use", termsOfUseSchema);

module.exports = TermsOfUse;