import React from 'react'
import Countdown from 'react-countdown'


const endingDate = new Date("2023-08-09")

const Count = () => {
  return (
    <Countdown className=' font-bold text-3xl text-black' date={endingDate} />
  )
}

export default Count