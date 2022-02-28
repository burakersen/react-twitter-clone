import React from 'react'
import { DotDotDothIcon } from '../../icons/Icon'
import userIcon from '../../images/user.jfif'
const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200" >
        <img 
            src={userIcon} 
            alt="profile"
            className="w-11 h-11 rounded-full" />
        <div className="flex flex-col flex-1 px-2">
            <span className="font-bold text-md text-black">Burak Erşen</span>
            <span className="text-sm text-gray-dark">@burakerssen</span>
        </div>
        <div>
            <DotDotDothIcon className="w-5 h-5" />
        </div>
    </div>
  )
}

export default UserBox