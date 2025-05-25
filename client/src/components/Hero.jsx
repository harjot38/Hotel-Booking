import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/seoul.png")] bg-no-repeat bg-cover bg-center h-screen'>
            <p className='bg-[#3F72AF]/80 px-4 py-2 rounded-full mt-5'>
                The Ultimate Holiday Experience
            </p>
            <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[60px] font-bold md:font-extracold max-w-xl mt-4'>
                Discover Your Perfect Gateway Destination
            </h1>
            <p>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>
        </div>
    )
}

export default Hero
