import tejusModel from './tejus.model.js';

/**
 * add
 */
export const add = async (reqBody) => {
    return await tejusModel(reqBody).save();
}

/**
 * Get
 */
export const get = async (id) => {
    return await tejusModel.findOne({ _id: id }).sort({ created_at: -1 }).lean();
}

/**
 * List
 */
export const list = async (query) => {
    return await tejusModel.find(query).lean();
}

/**
 * update
 */
export const update = async (id, reqBody) => {
    return await tejusModel.findByIdAndUpdate({ _id: id }, { $set: reqBody }, { new: true }).lean();
}

/**
 * Delete
 */
export const remove = async (id) => {
    return await tejusModel.findByIdAndDelete({ _id: id }).lean();
}
