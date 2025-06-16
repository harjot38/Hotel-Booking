import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets';
import Title from '../../components/Title';

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);
  return (
    <div>
      <Title align='left' font='outfit'
        title='Room Listings'
        subTitle='View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.' />
      <p className='text-gray-500 mt-8'>All Rooms</p>


      <div className='w-full max-w-3xl text-left border border-gray-500 rounded-lg max-h-80 overflow-y-scroll mt-5'>
        <table className='w-full text-center'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-4 px-5 text-gray-800 font-medium'>Name</th>
              <th className='py-4 px-5 text-gray-800 font-medium'>Facility</th>
              <th className='py-4 px-5 text-gray-800 font-medium'>Price / night</th>
              <th className='py-4 px-5 text-gray-800 font-medium'>Actions</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {
              rooms.map((item, index) => (
                <tr key={index}>
                  <td className='py-4 px-5 text-gray-700 border-t border-gray-300'>
                    {item.roomType}
                  </td>
                  <td className='py-4 px-5 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                    {item.amenities.join(', ')}
                  </td>
                  <td className='py-4 px-5 text-gray-700 border-t border-gray-300'>
                    {item.pricePerNight}
                  </td>
                  <td className='py-4 px-5 text-sm text-red-700 border-t border-gray-300'>
                    <label className='relative inline-flex items-center cursor-pointer text-gray-800 gap-4'>
                      <input type="checkbox" className='sr-only peer' checked={item.isAvailable} />
                      <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-green-500 transition-colors duration-300'></div>
                      <span className='dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5'></span>
                    </label>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRoom