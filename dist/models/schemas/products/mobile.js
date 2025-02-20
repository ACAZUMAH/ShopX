"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mobileproduct = new mongoose_1.Schema({
    user_id: {
        type: String
    },
    category_id: {
        type: String,
        required: [true, 'category name required']
    },
    location: {
        type: String,
        required: [true, 'location required']
    },
    pictures_ref: [{
            type: String
        }],
    brand_id: {
        type: String,
        required: [true, 'brand name required']
    },
    model: {
        type: String,
        required: [true, 'model name required']
    },
    condition: {
        type: String,
        required: [true, 'condition required']
    },
    secondCondition: {
        type: String
    },
    color: {
        type: String
    },
    exchange: {
        types: Boolean
    },
    description: {
        type: String
    },
    price: {
        type: String,
        required: [true, 'price required']
    },
    phone: {
        type: String
    },
    created_At: {
        type: Date,
        default: Date.now()
    }
});
const mobilePhone = (0, mongoose_1.model)('Mobile Phones products', mobileproduct);
exports.default = mobilePhone;
