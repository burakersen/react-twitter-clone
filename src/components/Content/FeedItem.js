import React from 'react'
import { DotDotDothIcon, LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from '../../icons/Icon'

const FeedItem = ({ avatar, displayName, username, content, image, timestamp  }) => {
  return (
    <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
        <img src={avatar} alt="profile" className="w-11 h-11 rounded-full" />
        <div className="flex-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center text-sm space-x-1">
                    <h4 className="font-bold">{displayName}</h4>
                    <span className="text-gray-dark">@{username}</span>
                    <div className="mx-2 bg-gray-dark h-1- w-1 border rounded-full" />
                    <span>{timestamp?.toLocaleTimeString()}</span>
                </div>
                <div className="group flex items-center justify-center w-9 h-9 hover:bg-primary-light rounded-full">
                    <DotDotDothIcon className="w-5 h-5 group-hover:text-primary-base" />
                </div>
            </div>
            <p className="mt-2 text-gray-900 text-sm">{content}</p>
            {image && (
                <img src={image} alt="" className="my-2  rounded-xl max-h-96" />
            )
            }
            <ul className="-ml-1 mt-3 flex items-center justify-between max-w-md">
                <li className="group flex items-center space-x-1 text-gray-500">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full group group-hover:bg-primary-light ">
                        <ReplyIcon className="w-5 h-5  group-hover:text-primary-base" />
                    </div>
                    <span className="group-hover:text-primary-base text-sm">1</span>
                </li>
                <li className="group flex items-center space-x-1 text-gray-500">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full group group-hover:bg-green-100 ">
                        <ReTweetIcon className="w-5 h-5  group-hover:text-green-400" />
                    </div>
                    <span className="group-hover:text-green-400 text-sm">1</span>
                </li>
                <li className="group flex items-center space-x-1 text-gray-500">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full group group-hover:bg-pink-200 ">
                        <LikeIcon className="w-5 h-5  group-hover:text-pink-400" />
                    </div>
                    <span className="group-hover:text-pink-400 text-sm">1</span>
                </li>
                <li className="group flex items-center space-x-1 text-gray-500">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full group group-hover:bg-primary-light ">
                        <ShareIcon className="w-5 h-5  group-hover:text-primary-base" />
                    </div>
                    <span className="group-hover:text-primary-base text-sm">1</span>
                </li>
            </ul>
        </div>
    </article>
  )
}

export default FeedItem