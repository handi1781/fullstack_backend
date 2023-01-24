import  express from "express";
import {
    tampilkanData,
    buatData,
    updateData,
    hapusData
} from "../controllapp/kontrolaplikasi.js"

const router = express.Router();

router.get('/users', tampilkanData);
router.post('/users',buatData);
router.patch('/users/:id', updateData);
router.delete('/users/:id', hapusData);
export default router;