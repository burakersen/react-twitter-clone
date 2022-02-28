import React from 'react'
import Search from './Search'
import Trends from './Trends'
import WhoToFollow from './WhoToFollow'
import TimelineFooter from './TimelineFooter'

const Timeline = () => {
  return (
    <aside className="w-80 h-fit min-h-screen sticky top-0">
      <Search />
      <Trends />
      <WhoToFollow />
      <TimelineFooter />
    </aside>
  )
}

export default Timeline