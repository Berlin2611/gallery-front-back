"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function startConnection() {
    await mongoose_1.connect('mongodb://localhost/photo-gallery', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('Data base is connected');
}
exports.startConnection = startConnection;
