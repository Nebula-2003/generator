const TermsOfUseModel = require('./termsOfUse.model');

/** 
 * add
*/

exports.add = async (reqBody) => {
    return await TermsOfUseModel(reqBody).save();
}

/** 
 *Get
*/

exports.get = async (id) => {
    return await TermsOfUseModel.findOne({ _id: id }).sort({ created_at: -1 }).lean();
}

/** 
 *List
*/

exports.list = async (query) => {
    return await TermsOfUseModel.find(query).lean();
}

/** 
 *update
*/

exports.update = async (id, reqBody) => {
    return await TermsOfUseModel.findByIdAndUpdate({ _id: id }, { $set: reqBody }, { new: true }).lean();
}

/** 
 *Delete
*/

exports.delete = async (id) => {
    return await TermsOfUseModel.findByIdAndDelete({ _id: id }).lean();
}