import Hotel from "../models/Hotel.js";

export const registerHotel = async (req, res) => {
    try {
        const { name, address, contact, city } = req.body;
        const owner = req.user._id

        // Check if User Already Registered
        const hotel = await Hotel.findOne({ owner })

        if (hotel) {
            return res.json({ success: false, message: 'Hotel Already Registerd' })
        }

        await Hotel.create({ name, address, contact, city, owner });

        await User.findByIdAndUpdate(owner, { role: "hotelOwner" })

        res.json({ success: true, message: 'Hotel Registerd Successfully' })

    } catch (error) {
        res.json({ success: true, message: error.message })
    }
} 