import React,{ useState,useEffect } from 'react'


const ClockCard = () => {
  const [dateAndTime, setDateAndTime]=useState(new Date())

  useEffect(()=>{
    const interval=setInterval(()=>{
        setDateAndTime(new Date())
    },1000)
    return(()=>{
        clearInterval(interval)
    })
  })

  return (
    <div className='clock-time'>
      <h1 > {dateAndTime.toLocaleDateString()} </h1>
      <h1 > {dateAndTime.toLocaleTimeString()} </h1>
    </div>
  )
}

export default ClockCard
