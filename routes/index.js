import express from "express";
import { getNotifs, getNotifID, saveNotif, updateNotif, deleteNotif } from "../controllers/notificationController.js";
const router = express.Router();
//get
router.get('/', getNotifs);
//create
router.post('/', saveNotif);
//get by ID
router.post('/:id', getNotifID);
//update
router.patch('/:id', updateNotif);
//delete
router.delete('/:id', deleteNotif);

export default router;