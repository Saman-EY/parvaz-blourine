"use client"

import React, { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export interface ArrowConnectorProps {
  startId: string
  endId: string
  strokeColor?: string
  strokeWidth?: number
  startLine?: boolean
  className?: string
}

export function ArrowConnector({
  startId,
  endId,
  strokeColor = '#000',
  strokeWidth = 2,
  startLine = false,
  className
}: ArrowConnectorProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [path, setPath] = useState<string>('')

  useEffect(() => {
    const updatePath = () => {
      const startElement = document.getElementById(startId)
      const endElement = document.getElementById(endId)
      const svg = svgRef.current

      if (!startElement || !endElement || !svg) return

      const svgRect = svg.getBoundingClientRect()
      const startRect = startElement.getBoundingClientRect()
      const endRect = endElement.getBoundingClientRect()

      const startX = startRect.left + startRect.width / 2 - svgRect.left
      const startY = startRect.top + startRect.height / 2 - svgRect.top
      const endX = endRect.left + endRect.width / 2 - svgRect.left
      const endY = endRect.top + endRect.height / 2 - svgRect.top

      // Create a simple straight line with arrow
      const angle = Math.atan2(endY - startY, endX - startX)
      const arrowLength = 10
      const arrowAngle = Math.PI / 6

      const arrowX1 = endX - arrowLength * Math.cos(angle - arrowAngle)
      const arrowY1 = endY - arrowLength * Math.sin(angle - arrowAngle)
      const arrowX2 = endX - arrowLength * Math.cos(angle + arrowAngle)
      const arrowY2 = endY - arrowLength * Math.sin(angle + arrowAngle)

      const pathData = `M ${startX} ${startY} L ${endX} ${endY} M ${arrowX1} ${arrowY1} L ${endX} ${endY} L ${arrowX2} ${arrowY2}`

      setPath(pathData)
    }

    updatePath()

    // Update on scroll and resize
    const handleUpdate = () => {
      requestAnimationFrame(updatePath)
    }

    window.addEventListener('scroll', handleUpdate, true)
    window.addEventListener('resize', handleUpdate)

    return () => {
      window.removeEventListener('scroll', handleUpdate, true)
      window.removeEventListener('resize', handleUpdate)
    }
  }, [startId, endId])

  if (!path) return null

  return (
    <svg
      ref={svgRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ zIndex: 1 }}
    >
      <path
        d={path}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  )
}
