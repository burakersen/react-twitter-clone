import React from 'react'
import { SettingsIcon } from '../../icons/Icon'
import TrendItem from './TrendItem'

const trends = [
    {
        title: "Politics · Trending",
        hashtag: "#Ukrainian",
        count: "92K"
    },
    {
        title: "Politics · Trending",
        hashtag: "#Ukrayna",
        count: "100K"
    },
    {
        title: "Trending in Turkey",
        hashtag: "#Çernobil",
        count: "11.8K"
    },
    {
        title: "Politics · Trending",
        hashtag: "#ReisDünyayıGüncelliyor",
        count: "16k"
    },
    {
        title: "Politics · Trending",
        hashtag: "#Putin",
        count: "500k"
    },
];

const Trends = () => {
  return (
    <div className="mt-5 mx-3 rounded-xl bg-gray-lightest">
        <div className="flex px-3 pt-2 items-center justify-between font-bold text-xl my-3" >
            <h2>Trends for you</h2>
            <div className="flex items-center justify-center w-9 h-9 hover:bg-gray-extraLight rounded-full cursor-pointer tranform transition-colors duration-200">
                <SettingsIcon className="w-5 h-5" />
            </div>
        </div>
        <div className="flex flex-col">
            <ul>
                {trends.map(({ title, hashtag, count }, index) => (
                    <TrendItem key={index} title={title} hashtag={hashtag} count={count} />
                ))  
                    
                }
            </ul>
            <div className="mt-1 py-3 px-3 hover:bg-gray-light2 text-primary-base font-normal rounded-b-xl">
                <a href="#" className="block ">Show more</a>
            </div>
        </div>
    </div>
  )
}

export default Trends