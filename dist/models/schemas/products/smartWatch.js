"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const smartWatchProducts = new mongoose_1.Schema({
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
    title: {
        type: String,
        required: [true, 'title required']
    },
    brand_id: {
        type: String,
        required: [true, 'brand name required']
    },
    model: {
        type: String,
        required: [true, 'model name required']
    },
    type_id: {
        type: String,
        required: [true, 'type required']
    },
    bandColor: {
        type: String
    },
    bandMaterial: {
        type: String
    },
    condition: {
        type: String,
        required: [true, 'condition required']
    },
    description: {
        type: String,
        required: [true, 'description required']
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
const smartWatch = (0, mongoose_1.model)('smart watches products', smartWatchProducts);
exports.default = smartWatch;
