import React from 'react'

const WhoToFollowItem = ({ name, username, img}) => {
  return (
    <li>
        <div className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-light2">
            <img src={img} alt="who to follow profile" className="w-12 h-12 rounded-full" />
            <div className="flex-1 px-2 h-12">
                <div className="inline-flex flex-col group">
                    <span className="font-medium text-base group-hover:underline">{name}</span>
                    <span className="text-sm leading-4 text-gray-light3">{username}</span>
                </div>
            </div>
            <button className="bg-black text-white font-medium text-sm px-4 py-1 rounded-full">Follow</button>
        </div>
    </li>
  )
}

export default WhoToFollowItem