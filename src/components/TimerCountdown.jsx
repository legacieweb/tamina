import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TimerCountdown = ({ targetDate, size = 'normal' }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime()
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Sec', value: timeLeft.seconds }
  ]

  const textSize = size === 'large' 
    ? 'text-2xl sm:text-3xl md:text-5xl lg:text-6xl' 
    : 'text-base sm:text-lg md:text-xl lg:text-2xl'

  const boxSize = size === 'large' 
    ? 'px-3 py-2 sm:px-4 sm:py-3' 
    : 'px-2 py-1 sm:px-3 sm:py-2'

  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4">
      {timeUnits.map((unit, idx) => (
        <div key={unit.label} className="text-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: idx * 0.2 }}
            className={`bg-white ${boxSize} rounded ${textSize} font-black text-primary shadow-md`}
          >
            {unit.value.toString().padStart(2, '0')}
          </motion.div>
          <span className="text-[8px] sm:text-[9px] md:text-[10px] text-primary/60 uppercase tracking-widest mt-1 block">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TimerCountdown