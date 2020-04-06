"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photo_controller_1 = require("../controllers/photo.controller");
const router = express_1.Router();
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/photos')
    .get(photo_controller_1.getPhotos)
    .post(multer_1.default.single('image'), photo_controller_1.createPhoto);
router.route('/photos/:id')
    .get(photo_controller_1.getPhoto)
    .put(photo_controller_1.updatePhoto)
    .delete(photo_controller_1.deletePhoto);
exports.default = router;
