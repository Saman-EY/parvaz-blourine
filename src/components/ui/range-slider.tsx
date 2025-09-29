"use client"

import React, { useRef, useCallback, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export interface RangeSliderProps {
  min: number
  max: number
  step?: number
  value: [number, number]
  onChange: (value: [number, number]) => void
  className?: string
  trackClassName?: string
  thumbClassName?: string
  withTracks?: boolean
  renderTrack?: (props: any, state: { index: number }) => React.ReactNode
}

export function RangeSlider({
  min,
  max,
  step = 1,
  value,
  onChange,
  className,
  trackClassName = "slider-track bg-gray-300 h-2",
  thumbClassName = "slider-thumb w-4 h-4 bg-white border border-gray-400 rounded-full",
  withTracks = false,
  renderTrack,
}: RangeSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState<number | null>(null)
  const [trackRect, setTrackRect] = useState<DOMRect | null>(null)

  const updateTrackRect = useCallback(() => {
    if (trackRef.current) {
      setTrackRect(trackRef.current.getBoundingClientRect())
    }
  }, [])

  useEffect(() => {
    updateTrackRect()
    window.addEventListener('resize', updateTrackRect)
    return () => window.removeEventListener('resize', updateTrackRect)
  }, [updateTrackRect])

  const getValueFromPosition = useCallback((clientX: number) => {
    if (!trackRect) return min
    
    const percentage = Math.max(0, Math.min(1, (clientX - trackRect.left) / trackRect.width))
    const rawValue = min + percentage * (max - min)
    const steppedValue = Math.round(rawValue / step) * step
    return Math.max(min, Math.min(max, steppedValue))
  }, [min, max, step, trackRect])

  const handleMouseDown = useCallback((e: React.MouseEvent, thumbIndex: number) => {
    e.preventDefault()
    setIsDragging(thumbIndex)
    updateTrackRect()
  }, [updateTrackRect])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging === null || !trackRect) return

    const newValue = getValueFromPosition(e.clientX)
    const newValues: [number, number] = [...value]
    newValues[isDragging] = newValue

    // Ensure min thumb doesn't exceed max thumb and vice versa
    if (isDragging === 0) {
      newValues[0] = Math.min(newValue, value[1])
    } else {
      newValues[1] = Math.max(newValue, value[0])
    }

    onChange(newValues)
  }, [isDragging, trackRect, getValueFromPosition, value, onChange])

  const handleMouseUp = useCallback(() => {
    setIsDragging(null)
  }, [])

  useEffect(() => {
    if (isDragging !== null) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const getThumbPosition = (thumbIndex: number) => {
    const percentage = ((value[thumbIndex] - min) / (max - min)) * 100
    return `${percentage}%`
  }

  const getTrackPosition = () => {
    const startPercentage = ((value[0] - min) / (max - min)) * 100
    const endPercentage = ((value[1] - min) / (max - min)) * 100
    return {
      left: `${startPercentage}%`,
      width: `${endPercentage - startPercentage}%`
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div
        ref={trackRef}
        className={cn("relative h-2 w-full cursor-pointer", trackClassName)}
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) {
            const newValue = getValueFromPosition(e.clientX)
            const distanceToMin = Math.abs(newValue - value[0])
            const distanceToMax = Math.abs(newValue - value[1])
            const thumbIndex = distanceToMin < distanceToMax ? 0 : 1
            handleMouseDown(e, thumbIndex)
          }
        }}
      >
        {/* Background track */}
        <div className="absolute inset-0 bg-gray-300 rounded-full" />
        
        {/* Active track */}
        <div
          className="absolute top-0 h-full bg-green-500 rounded-full"
          style={getTrackPosition()}
        />
        
        {/* Thumbs */}
        <div
          className={cn("absolute top-1/2 -translate-y-1/2 cursor-pointer", thumbClassName)}
          style={{ left: getThumbPosition(0) }}
          onMouseDown={(e) => handleMouseDown(e, 0)}
        />
        <div
          className={cn("absolute top-1/2 -translate-y-1/2 cursor-pointer", thumbClassName)}
          style={{ left: getThumbPosition(1) }}
          onMouseDown={(e) => handleMouseDown(e, 1)}
        />
      </div>
    </div>
  )
}
