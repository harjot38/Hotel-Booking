import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomsDummyData } from '../assets/assets';
import StarRating from './StarRating';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [])

    return room && (
        <div className='py-30 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* Room Details */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}
                    <span className='font-inter text-sm'>({room.roomType})</span>
                </h1>
                <p className='text-xs font-inter py-2 px-3 text-white bg-orange-400 rounded-2xl'>
                    20% OFF
                </p>
            </div>
            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ Reviews</p>
            </div>

            <div className='flex items-center gap-1 text-gray-600 mt-2'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
            </div>

            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                {/* Main Image */}
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="Room image"
                        className='w-full rounded-2xl shadow-lg object-cover' />
                </div>

                <div className='grid grid-cols-2 gap-5 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={()=> setMainImage(image)} 
                        key={index} src={image} alt="Room image" 
                        className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-600'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RoomDetails