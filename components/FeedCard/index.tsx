import React from 'react'
import Image from 'next/image'
import { FaRegBookmark, FaRegComment, FaRegHeart } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa6'
import { RiBarChartGroupedFill } from 'react-icons/ri'
import { GoShare } from 'react-icons/go'



export const FeedCard: React.FC = () => {
    return <div className='border border-gray-600 border-r-0 border-l-0 border-t-0  p-5 transition-all' >
        <div className='grid grid-cols-12'>

            <div className='col-span-1 ' >
                <Image src="https://avatars.githubusercontent.com/u/87410858?s=96&v=4" alt='' height={40} width={40} className='rounded-full'></Image>
            </div>
            <div className='col-span-11 ps-4'  >
                <div >
                    <div className='flex gap-1 items-center' >
                        <h1 className='font-medium text-lg'>
                            Harsh Prasad
                        </h1>
                        <div className='flex text-sm gap-1 items-center text-center justify-center text-[#6A6F74] ' >
                            <p>@malikobansa </p>
                            <p>.</p>
                            <p> 13h</p>
                        </div>
                    </div>
                    <div className='text-[#ffffffe3]' >
                        <p className='font-normal text-base' >
                            How can I make my technical posts more interesting to get more engagement? I rarely see any support in those. Honestly, speaking it takes around 30-40 mins to write a post on daily basis.

                            If they're not helpful, I might need to change what I'm posting 😥
                        </p>
                    </div>
                </div>

                <div className='text-normal font-semibold text-gray-500 flex justify-between mt-4' >
                    <div className='hover:text-[#1d9bf0] hover:bg-[#1d9cf01a] p-2 rounded-full' ><FaRegComment /></div>
                    <div className='hover:text-[#00BA7C] hover:bg-[#00ba7c29] p-2 rounded-full'  ><FaRetweet /></div>
                    <div className='hover:text-[#F91880] hover:bg-[#f918811f] p-2 rounded-full'  ><FaRegHeart /></div>
                    <div className='hover:text-[#1d9bf0] hover:bg-[#1d9cf01a] p-2 rounded-full'  ><RiBarChartGroupedFill /></div>
                    <div className='flex gap-2' >
                        <div className='hover:text-[#1d9bf0] hover:bg-[#1d9cf01a] p-2 rounded-full'  ><FaRegBookmark /></div>
                        <div className='hover:text-[#1d9bf0] hover:bg-[#1d9cf01a] p-2 rounded-full'  ><GoShare /></div>
                    </div>
                </div>
            </div>


        </div>
    </div>
}