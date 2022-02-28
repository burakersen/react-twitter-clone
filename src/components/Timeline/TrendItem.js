import React from 'react'
import { DotDotDothIcon } from '../../icons/Icon'

const TrendItem = ({ title, hashtag, count }) => {
  return (
    <li className="px-3 py-1 mb-1 hover:bg-gray-light2 transform transition-colors duration-100">
        <a className="block cursor-pointer">
            <div className="flex justify-between">
                <div>
                    <div className="text-sm text-gray-light3">{title}</div>
                    <div className="font-bold text-md text-black">{hashtag}</div>
                    <div className="text-sm text-gray-light3">{count} Tweets</div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer group hover:bg-primary-light transform transition-colors duration-300">
                    <DotDotDothIcon className="w-5 h-5 group-hover:text-primary-base transform transition-colors duration-300" />
                </div>
            </div>
        </a>
    </li>
  )
}

export default TrendItem