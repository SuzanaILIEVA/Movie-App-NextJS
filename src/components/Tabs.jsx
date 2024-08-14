"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {
    const searchParams = useSearchParams() 
    const genre = searchParams.get('genre')
  // console.log(genre);
  
    
  const tabs =[
    {
        name:"Popular",
        url: "popular",
    },
    {
        name:"Top Rated",
        url: "top_rated",
    },
    {
        name:"Upcoming",
        url: "upcoming",
    }



    ]
  return (
    <div className='p-5 my-3 bg-gray-400 dark:bg-gray-900 flex items-centers justify-center gap-7 font-bold tabs'>
     {
        tabs.map((tab,i) =>  (
            <Link key={i} href={`/?genre=${tab.url}`} className={`cursor-pointer  hover:opacity-75 transition-opacity ${tab.url === genre ? "underline text-orange-600 underline-offset-8 " : ""}`}>{tab.name}</Link>
        ))
     }
    </div>
  )
}

export default Tabs
