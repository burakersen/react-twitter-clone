import React, { useState } from 'react'
import {
    HomeIcon,
    ExploreIcon,
    NotificationsIcon,
    MessagesIcon,
    BookmarksIcon,
    ListIcon,
    ProfileIcon,
    MoreIcon
} from '../../icons/Icon'
import twitterLogo from '../../images/twitter.svg'
import SideLink from './SideLink'
import UserBox from './UserBox'

const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon
    },
    {
        name: "Explore",
        icon: ExploreIcon
    },
    {
        name: "Notifications",
        icon: NotificationsIcon
    },
    {
        name: "Messages",
        icon: MessagesIcon
    },
    {
        name: "Bookmarks",
        icon: BookmarksIcon
    },
    {
        name: "Lists",
        icon: ListIcon
    },
    {
        name: "Profile",
        icon: ProfileIcon
    },
    {
        name: "More",
        icon: MoreIcon
    },
];

const Sidebar = () => {
    const [active, setActive] = useState("Home");

    const handleMenuItemClick = (name) => {
        setActive(name);
    }

    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between w-72 px-2 min-h-full">
            <div>
                <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest cursor-pointer transform transition-colors duration-100">
                    <img src={twitterLogo} alt="Twitter Logo" className="w-7 h-6" />
                </div>
                <nav className="mb-4">
                    <ul>
                        {sideLinks.map(({ name, icon }, index) => (
                            <SideLink key={index} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick} />
                        ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">Tweet</button>
            </div>
            <UserBox />
        </div>
    )
}

export default Sidebar