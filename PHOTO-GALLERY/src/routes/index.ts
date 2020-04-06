import { Router } from 'express';
import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from '../controllers/photo.controller';

const router = Router();
import multer from '../libs/multer';
router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'), createPhoto);

router.route('/photos/:id')
    .get(getPhoto)
    .put(updatePhoto)
    .delete(deletePhoto);    

export default router;