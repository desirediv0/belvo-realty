"use client"

import type React from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

interface VideoDialogProps {
    children: React.ReactNode
    videoSrc: string
    title?: string
}

const VideoDialog = ({ children, videoSrc, title }: VideoDialogProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="max-w-4xl w-full p-0 bg-black border-0 rounded-none">
                <div className="relative aspect-video w-full">
                    <video
                        src={videoSrc}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setIsOpen(false)}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                {title && (
                    <div className="p-4 bg-black text-white">
                        <h3 className="font-serif text-lg">{title}</h3>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default VideoDialog
