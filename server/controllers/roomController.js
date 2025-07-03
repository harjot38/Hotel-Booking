import Hotel from '../models/Hotel.js';
import { v2 as cloudinary } from 'cloudinary';

// API to create a new room for a hotel
export const createRoom = async (req, res) => {
    try {
        const { roomType, pricePerNight, amenities } = req.body;
        const hotel = await Hotel.findOne({ owner: req.auth.userId });

        if (!hotel) {
            return
            res.json({ success: false, message: "Hotel not found" });
        }

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

// API to create all rooms
