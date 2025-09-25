"use client"

import type React from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState, useRef, useEffect } from "react"

interface VideoDialogProps {
    children: React.ReactNode
    videoSrc: string
    title?: string
}

const VideoDialog = ({ children, videoSrc, title }: VideoDialogProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        if (isOpen) {
            // Try to play when dialog opens; catch promise rejection silently
            const p = videoRef.current?.play()
            if (p && typeof (p as Promise<void>).catch === "function") {
                ; (p as Promise<void>).catch(() => {
                    // ignore playback error (autoplay restrictions), user can press play
                })
            }
        } else {
            // Pause and reset when closed
            if (videoRef.current) {
                try {
                    videoRef.current.pause()
                } catch { }
                videoRef.current.currentTime = 0
            }
        }
    }, [isOpen])

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-w-4xl w-full p-0 bg-black border-0 rounded-none">
                <div className="relative aspect-video w-full">
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        controls
                        // muted helps autoplay work across browsers; user can unmute
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        onEnded={() => setIsOpen(false)}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                {title && (
                    <div className="p-4 bg-black text-white">
                        <h3 className="libreCaslonDisplay text-lg">{title}</h3>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default VideoDialog
