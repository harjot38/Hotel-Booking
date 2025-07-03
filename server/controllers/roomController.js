import { populate } from 'dotenv';
import Hotel from '../models/Hotel.js';
import { v2 as cloudinary } from 'cloudinary';

// API to create a new room for a hotel
export const createRoom = async (req, res) => {
    try {
        const { roomType, pricePerNight, amenities } = req.body;
        const hotel = await Hotel.findOne({ owner: req.auth.userId });

        if (!hotel) return res.json({ success: false, message: "Hotel not found" });

        // upload image to cloudinary
        const uploadImages = req.files.map(async (file) => {
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url
        })

        // Wait for all image uploads to complete
        const images = await Promise.all(uploadImages)

        await Room.create({
            hotel: hotel._id,
            roomType,
            pricePerNight: +pricePerNight, // since we want the price in number format, and when we add the '+' sign it will convert the string to number
            amenities: JSON.parse(amenities),
            images
        })
        res.json({ success: true, message: "Room created successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// API to get all rooms
export const getRooms = async (req, res) => {
    try {
        const roomsData = await Room.find({ isAvailable: true }).populate({
            path: 'hotel',
            populate: {
                path: 'owner',
                select: 'image'
            }
        }).sort({ createdAt: -1 })
        res.json({ success: true, roomsData })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// API to get all rooms for a specific hotel
export const getOwnerRooms = async (req, res) => {
    try {
        const hotelData = await Hotel({ owner: req.auth.userId })
        const roomsData = await Room.find({ hotel: hotelData._id.toString() }).populate("hotel");

        res.json({ success: true, roomsData })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// API to toggle availability of a room
export const toggleRoomAvailability = async (req, res) => {
    try {
        const { roomId } = req.body;
        const roomsData = await Room.findById(roomId);
        roomsData.isAvailable = !roomsData.isAvailable;
        await roomsData.save();
        res.json({ success: true, message: "Room Availability Updated" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}