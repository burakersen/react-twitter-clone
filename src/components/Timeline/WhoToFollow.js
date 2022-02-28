import React from 'react'
import userIcon from '../../images/user.jfif'
import WhoToFollowItem from './WhoToFollowItem'
const users = [
    {
        name: "Burak Erşen",
        username: "@burakerssen",
        img: userIcon
    },
    {
        name: "Burak Erşen",
        username: "@burakerssen",
        img: userIcon
    },
    {
        name: "Burak Erşen",
        username: "@burakerssen",
        img: userIcon
    }
];


const WhoToFollow = () => {
  return (
    <div className="m-3 bg-gray-lightest rounded-xl">
        <h2 className="flex px-3 py-3 items-center justify-between font-bold text-xl mb-2">Who to follow</h2>
        <ul>
            {users.map(({ name, username, img}, index)=> (
                <WhoToFollowItem key={index} name={name} username={username} img={img} />
            ))

            }
        </ul>
            <div className="mt-1 py-3 px-3 hover:bg-gray-light2 text-primary-base font-normal rounded-b-xl">
                <a href="#" className="block ">Show more</a>
            </div>
    </div>
  )
}

export default WhoToFollow