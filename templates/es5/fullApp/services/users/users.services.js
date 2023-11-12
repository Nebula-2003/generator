const { commonResponse } = require("../../helper");
const UsersModel = require("./users.model");


/*
*  Check Email Exist
*/
exports.is_exist = async (reqBody) => {
    return  await UsersModel.findOne({email: reqBody.email}).lean();
};

/*
*  Get By Id
*/
exports.get = async (id) => {
    return await UsersModel.findOne({ _id: id }).lean();
    
};

/*
*  Add New User
*/
exports.save = async (reqBody) => {
    return await new UsersModel(reqBody).save();
};

/*
*  Update User
*/
exports.update = async (id, reqBody) => {
    return await UsersModel.findOneAndUpdate({ _id: id }, {$set:reqBody}, {new: true,}).lean();
};


/*
*  Delete User
*/
exports.delete = async (id) => {
    return await UsersModel.removeOne({ _id: id },{new: true}).lean();
};
