"use client"

import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [dots, setDots] = useState<any[]>([])

  useEffect(() => {
    const generatedDots = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }))

    setDots(generatedDots)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/20 animate-pulse-slow"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  )
}