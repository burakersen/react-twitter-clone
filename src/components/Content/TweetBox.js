import React, { useState } from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon, } from '../../icons/Icon'
import userIcon from '../../images/user.jfif';

const TweetBox = ({ addTweet }) => {
    const [content, setContent] = useState("");

    const sendTweet = () => {
        if(content !== ""){
            addTweet({
                id: Date.now(),
                avatar: userIcon,
                displayName: "Burak Erşen",
                username: "burakerssen",
                content: content,
                timestamp: new Date()
            });
            setContent("");
        }
    }

    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
            <textarea 
                className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" 
                placeholder="What's happening?"
                value={content}
                onChange={(e) => setContent(e.target.value)} 
            />
            <div className="flex items-center justify-between -ml-3 border-t border-gray-100 pt-3">
                <div className="flex items-center justify-start space-x-1">
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-lightest rounded-full transform transition-colors duration-200">
                        <ImageIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-lightest rounded-full transform transition-colors duration-200">
                        <GIFIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-lightest rounded-full transform transition-colors duration-200">
                        <PollIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-lightest rounded-full transform transition-colors duration-200">
                        <EmojiIcon className="w-5 h-5 text-primary-base" />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-lightest rounded-full transform transition-colors duration-200">
                        <ScheduleIcon className="w-5 h-5 text-primary-base" />
                    </div>
                </div>
                <button 
                    className="bg-primary-base text-white rounded-full px-4 py-2 font-medium disabled:opacity-50 hover:bg-primary-dark transform transition-colors duration-200"
                    disabled={content === "" ? true : false}
                    onClick={sendTweet}>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox