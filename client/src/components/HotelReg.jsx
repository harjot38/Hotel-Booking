import React from 'react'
import { assets, cities } from '../assets/assets'

const HotelReg = () => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
            <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
                <img src={assets.jeju} alt="reg-image"
                    className='w-1/2 rounded-xl hidden md:block'
                />

                <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10'>
                    <img src={assets.closeIcon} alt="close-icon"
                        className='absolute top-4 right-4 h-4 w-4 cursor-pointer'
                    />
                    <p className='text-2xl font-semibold mt-7'>
                        Register Your Hotel
                    </p>

                    {/* Hotel Name */}
                    <div className='w-full mt-4'>
                        <label htmlFor="name" className='font-medium text-gray-600'>
                            Hotel Name
                        </label>
                        <input type="text"
                            id='name'
                            placeholder='Type Here'
                            className='border border-gray-300 rounded w-full px-4 py-3 mt-2 outline-indigo-600 font-light' required
                        />
                    </div>

                    {/* Contact */}
                    <div className='w-full mt-4'>
                        <label htmlFor="contact" className='font-medium text-gray-600'>
                            Phone
                        </label>
                        <input type="number"
                            id='contact'
                            placeholder='Type Here'
                            className='border border-gray-300 rounded w-full px-4 py-3 mt-2 outline-indigo-600 font-light' required
                        />
                    </div>

                    {/* Address */}
                    <div className='w-full mt-4'>
                        <label htmlFor="address" className='font-medium text-gray-600'>
                            Address
                        </label>
                        <input type="text"
                            id='address'
                            placeholder='Type Here'
                            className='border border-gray-300 rounded w-full px-4 py-3 mt-2 outline-indigo-600 font-light' required
                        />
                    </div>

                    {/* City Dropdown */}
                    <div className='w-full mt-4 max-w-60 mr-auto'>
                        <label htmlFor="city" className='font-medium text-gray-600'>City</label>
                        <select id="city" className="border border-gray-300 rounded w-full px-4 py-3 mt-2 outline-indigo-600 font-light" required>
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    <button className='bg-indigo-400 hover:bg-indigo-600 text-white mr-auto mt-8 px-6 py-2 rounded transition-all ease-in-out cursor-pointer'>
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default HotelReg