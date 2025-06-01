import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer class="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 bg-[#F6F9FC]">
            <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div class="md:max-w-96">
                    <img className="h-9 invert opacity-70" src={assets.logo} alt="logo" />
                    <p class="mt-6 text-sm">
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        <img src={assets.instagramIcon} alt="instagram-icon" className='w-6'/>

                        <img src={assets.facebookIcon} alt="facebook-icon" className='w-6'/>

                        <img src={assets.twitterIcon} alt="twitter-icon" className='w-6'/>

                        <img src={assets.linkendinIcon} alt="linkendin-icon" className='w-6'/>
                    </div>
                </div>
                <div class="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 class="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul class="text-sm space-y-2">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="font-semibold mb-5 text-gray-800">Get in touch</h2>
                        <div class="text-sm space-y-2">
                            <p>+1-212-456-7890</p>
                            <p>quickstay@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2025 © QuickStay - Harjot Singh. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer