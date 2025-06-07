import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
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
                        <img onClick={() => setMainImage(image)}
                            key={index} src={image} alt="Room image"
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-600'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Room Highlights */}
            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
                    <div className='flex flex-wrap gap-4 items-center mt-3 mb-6'>
                        {room.amenities.map((item, index) => (
                            <div key={index} className='flex items-center gap-3 px-3 py-3 rounded-lg bg-gray-200'>
                                <img src={facilityIcons[item]} alt={item}
                                    className='w-5 h-5'
                                />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Room Price */}
                <p className='text-2xl font-semibold'>
                    ${room.pricePerNight}/night
                </p>
            </div>

            {/* CheckIn & Checkout Form */}
            <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-800'>
                    {/* Check-In */}
                    <div className='flex flex-col'>
                        <label htmlFor="checkInDate" className='font-medium'>
                            Check-In
                        </label>
                        <input type="date" id='checkInDate' placeholder='Check-In'
                            className='w-full rounded border border-gray-300 px-4 py-3 mt-2 outline-none'
                            required
                        />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-wd:hidden'></div>
                    {/* Check-Out */}
                    <div className='flex flex-col'>
                        <label htmlFor="checkOutDate" className='font-medium'>
                            Check-Out
                        </label>
                        <input type="date" id='checkOutDate' placeholder='Check-Out'
                            className='w-full rounded border border-gray-300 px-4 py-3 mt-2 outline-none'
                            required
                        />
                    </div>
                    <div className='w-px h-15 bg-gray-300/70 max-wd:hidden'></div>
                    {/* Guests */}
                    <div className='flex flex-col'>
                        <label htmlFor="guests" className='font-medium'>
                            Guests
                        </label>
                        <input type="number" id='guests' placeholder='0'
                            className='max-w-20 rounded border border-gray-300 px-4 py-3 mt-2 outline-none'
                            required
                        />
                    </div>
                </div>
                <button type='submit'
                    className="bg-gray-600 hover:bg-black text-white rounded-md 
                max-md:w-full max-md:mt-6 md:px-20 md:py-5 text-base cursor-pointer 
                transition-colors ease-in-out duration-300 active:scale-95">
                    Check Availability
                </button>
            </form>

            {/* Common Specifications */}
            <div className='mt-25 space-y-5'>
                {roomCommonData.map((spec, index) => (
                    <div key={index} className='flex items-start gap-2'>
                        <img src={spec.icon} alt={`${spec.title}-icon`}
                            className='w-7'
                        />
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-600'>{spec.description}</p>
                        </div>

                    </div>

                ))}
            </div>

            <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-600'>
                <p>
                    Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a truc city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
                </p>
            </div>

            {/* Hosted By */}
            <div className='flex flex-col items-start gap-5'>
                <div className='flex gap-5'>
                    <img src={room.hotel.owner.image} alt="Host"
                        className='h-15 w-15 md:h-20 rounded-full'
                    />
                    <div>
                        <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
                        <div className='flex items-center mt-2'>
                            <StarRating />
                            <p className='ml-2'>200+ reviews</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RoomDetails