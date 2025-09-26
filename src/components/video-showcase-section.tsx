"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import VideoDialog from "./video-dialog"
import { ShowcaseSection } from "@/assets/inedex"


const getSrc = (asset: unknown) => {
    if (asset && typeof asset === "object") {
        const obj = asset as Record<string, unknown>
        if (typeof obj.src === "string") return obj.src
    }
    return String(asset)
}
const bgUrl = getSrc(ShowcaseSection)

const VideoShowcaseSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    }

    const playButtonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.6,
            },
        },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
            },
        },
    }

    return (
        <section className="min-h-[60vh] md:min-h-[85vh] bg-background relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${bgUrl})`,
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 min-h-[60vh] md:min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
            >
                <div className="text-center space-y-8 max-w-4xl mx-auto">
                    <motion.p variants={itemVariants} className="text-white/90 text-sm font-medium tracking-[0.2em] uppercase">
                        A Decade of Success
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="libreCaslonDisplay text-4xl md:text-7xl lg:text-8xl font-light text-white tracking-wide"
                    >
                        BELVO REALTY
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/80 text-base md:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        Experience our journey of creating exceptional spaces that redefine luxury living and commercial excellence.
                    </motion.p>

                    {/* Play Button */}
                    <VideoDialog videoSrc="/desktop-banner.webm" title="Belvo Realty - A Decade of Success">
                        <motion.button variants={playButtonVariants} whileHover="hover" className="group relative">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-white/20">
                                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" />
                            </div>
                            <div className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-110 transition-transform duration-300" />
                        </motion.button>
                    </VideoDialog>
                </div>
            </motion.div>
        </section>
    )
}

export default VideoShowcaseSection
