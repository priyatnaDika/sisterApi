import Notification from "../models/Notification.js";
export const getNotifs = async(req, res) => {
    try {
        const notification = await Notification.find();
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
}
export const getNotifID = async(req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
}
export const saveNotif = async(req, res) => {
    const notification = new Notification(req.body);
    try {
        const ressave = await notification.save();
        res.status(201).json(ressave);
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
}
export const updateNotif = async(req, res) => {
    var notifID = await Notification.findById(req.params.id);
    if (!notifID) return res.status(404).json({ status: false, message: "Data not Found" });
    try {
        const ressave = await Notification.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(ressave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const deleteNotif = async(req, res) => {
    var notifID = await Notification.findById(req.params.id);
    if (!notifID) return res.status(404).json({ status: false, message: "Data not Found" });
    try {
        const resdel = await Notification.deleteOne({ _id: req.params.id });
        res.status(200).json(resdel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}