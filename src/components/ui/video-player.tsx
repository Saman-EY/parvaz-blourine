'use client'

import React, {useRef, useState, useEffect, useLayoutEffect, useId} from 'react'
import {cn} from "@/lib/utils";
import {IconSelect} from "@/components/ui/icon-select";

const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
}

type VideoPlayerProps = {
    className?: string
    text?: string
    videoSrc: string
}
export const VideoPlayer = (props: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [duration, setDuration] = useState<string>('0:00')
    const id =useId()
    useLayoutEffect(() => {
        const video = videoRef.current
        if (video) {
            const handleLoadedMetadata = () => {
                setDuration(formatTime(video.duration))
            }

            video.addEventListener('loadedmetadata', handleLoadedMetadata)
            return () => {
                video.removeEventListener('loadedmetadata', handleLoadedMetadata)
            }
        }
    }, [])

    const togglePlay = (): void => {
        const video = videoRef.current
        if (video) {
            if (video.paused) {
                video.play()
                setIsPlaying(true)
            } else {
                video.pause()
                setIsPlaying(false)
            }
        }
    }

    return (
        <div className={cn(['relative w-full rounded-15 overflow-hidden cursor-pointer', props.className])}>
            <video
                ref={videoRef}
                className="w-full "
                src={props.videoSrc}
                onClick={togglePlay}
                controls={false}
                id={id}
            />
            <div
                className={cn(['absolute inset-0 flex flex-col items-center justify-center bg-black/40 ', isPlaying && 'hidden'])}
                onClick={togglePlay}
            >
                {!isPlaying && (
                    <div className="w-full h-full flex-center flex-col text-bgLightGray gap-3 lg:pb-[10%] ">
                        <p className="font-semibold text-24 lg:text-36">{props.text}</p>
                        <p className={'flex-center gap-2'}>
                            <IconSelect classes={'text-3xl'} name={'clock'}/>
                            <span>{duration}</span>
                            <span> دقیقه </span>
                        </p>
                        <button className={'mt-[5%]'}>
                            <IconSelect classes={' text-7xl md:text-8xl lg:text-9xl'} name={'play'}/>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

