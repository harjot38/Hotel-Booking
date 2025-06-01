import React from 'react'
import { assets } from '../assets/assets'


const NewsLetter = () => {
    return (
            <div class="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl mt-15 mb-20">
                <img src={assets.subscribe}
                    alt="newsletter" class="hidden md:block w-full max-w-lg rounded-xl" />
                <div class="relative flex items-center justify-center">
                    <div class="max-md:py-20 px-6 md:px-10 text-center">
                        <h1 class="text-3xl font-bold">
                            Subscribe to our newsletter
                        </h1>
                        <p class="mt-4 text-gray-500">
                            Be the first to get the latest news about trends, promotions, and much more!
                        </p>
                        <form class="mt-8 flex">
                            <input type="email" placeholder="Your email address"
                                class="w-full outline-none rounded-l-md border border-r-0 border-gray-300 p-4 text-gray-900" />
                            <button type="submit" class="rounded-r-md bg-black px-7 py-2 text-white">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default NewsLetter