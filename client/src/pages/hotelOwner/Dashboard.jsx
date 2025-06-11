import React from 'react'
import Title from '../../components/Title'
import { useState } from 'react'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (
    <div>
      <Title align='left' font='outfit'
        title='Dashboard'
        subTitle='Monitor your room listings, track bookings and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations.'
      />
      <div className='flex gap-6 my-8'>
        {/* Total Bookings */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-10'>
          <img src={assets.totalBookingIcon} alt="total-booking" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-6 font-medium'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-500'>{dashboardData.totalBookings}</p>
          </div>
        </div>
        {/* Total Revenue */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-10'>
          <img src={assets.totalRevenueIcon} alt="total-revenue" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-6 font-medium'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-neutral-500'>$ {dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-6'>Recent Bookings</h2>

      <div className='w-full max-w-3xl text-left border border-gray-500 rounded-lg max-h-80 overflow-y-scroll'>

        <table className='w-full text-center'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-4 px-5 text-gray-800 font-medium'>User Name</th>
              <th className='py-4 px-5 text-gray-800 font-medium'>Room Name</th>
              <th className='py-4 px-5 text-gray-800 font-medium'>Total Amount</th>
              <th className='py-4 px-5 text-gray-800 font-medium'>Payment Status</th>
            </tr>
          </thead>

          <tbody className='text-sm'>
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className='py-4 px-5 text-gray-800 border-t border-gray-400'>
                  {item.user.username}
                </td>

                <td className='py-4 px-5 text-gray-800 border-t border-gray-400 max-sm:hidden'>
                  {item.room.roomType}
                </td>

                <td className='py-4 px-5 text-gray-800 border-t border-gray-400'>
                  $ {item.totalPrice}
                </td>

                <td className='py-4 px-5 text-gray-800 border-t border-gray-400'>
                  <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                    {item.isPaid ? 'Completed' : 'Pending'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Dashboard