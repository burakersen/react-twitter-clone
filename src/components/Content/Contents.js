import React, { useState } from 'react'
import { PopularIcon } from '../../icons/Icon'
import userIcon from '../../images/user.jfif'
import Divider from './Divider'
import TweetBox from './TweetBox'
import FeedList from './FeedList'
import { tweets } from '../../tweets'

const Contents = () => {
  const [feedTweets, setTweets] = useState(tweets);
  console.log(feedTweets);

  const addTweet = (tweet) => {
    setTweets([tweet, ...feedTweets]);
  }

  return (
    <main className="flex-1 flex flex-col border-x border-gray-200">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopularIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3 ">
        <img
            src={userIcon} 
            alt="profile"
            className="w-11 h-11 rounded-full" />
          <TweetBox addTweet={addTweet} />
      </div>
      <Divider />
      <FeedList tweets={feedTweets}  />
    </main>
  )
}

export default Contents