"use client"

import { motion, Variants, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { luxury2 } from "@/assets/inedex"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, rotateX: 15 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
}

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1, rotateY: 5 },
    visible: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut",
        },
    },
}

const textRevealVariants: Variants = {
    hidden: {
        opacity: 0,
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
    },
    visible: {
        opacity: 1,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        transition: {
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3
        },
    },
}

export default function LuxuryVisionSection() {
    const ref = useRef<HTMLElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section ref={ref} className="py-12 md:py-32 bg-white relative overflow-hidden">
            {/* Abstract geometric background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-64 -right-64 w-96 h-96 bg-black opacity-5 transform rotate-12"></div>
                <div className="absolute -bottom-64 -left-64 w-96 h-96 bg-black opacity-5 transform rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-black opacity-10"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-7xl mx-auto"
                >
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <motion.div variants={itemVariants} className="mb-8">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-12 h-px bg-[#AA8453]"></div>
                                <div className="mx-4 w-1 h-1 bg-[#AA8453] transform rotate-45"></div>
                                <div className="w-12 h-px bg-[#AA8453]"></div>
                            </div>
                            <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#AA8453]">LUXURY REDEFINED</span>
                        </motion.div>

                        <motion.h2
                            variants={textRevealVariants}
                            className="font-black text-black leading-[0.9] mb-8"
                            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
                        >
                            BELVO REALTY<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
                                EPITOMIZES
                            </span><br />
                            UNRIVALED LUXURY
                        </motion.h2>

                        <motion.div variants={itemVariants} className="flex items-center justify-center space-x-8 mb-12">
                            <div className="text-center">
                                <div className="w-px h-16 bg-black mx-auto mb-2"></div>
                                <span className="text-xs uppercase tracking-widest font-bold">TIMELESS</span>
                            </div>
                            <div className="text-center">
                                <div className="w-px h-16 bg-black mx-auto mb-2"></div>
                                <span className="text-xs uppercase tracking-widest font-bold">ELEGANCE</span>
                            </div>
                            <div className="text-center">
                                <div className="w-px h-16 bg-black mx-auto mb-2"></div>
                                <span className="text-xs uppercase tracking-widest font-bold">INNOVATION</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <motion.div
                        variants={imageVariants}
                        className="relative group mb-20"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[16/8] md:aspect-[21/8] overflow-hidden bg-black">
                            <Image
                                src={luxury2}
                                alt="Luxury architectural vision"
                                fill
                                className="object-cover object-top transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                                priority={false}
                            />

                            {/* Overlay gradients */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

                            {/* Corner frames */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-white opacity-60"></div>
                            <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-white opacity-60"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-white opacity-60"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-white opacity-60"></div>
                        </div>

                        {/* Image overlay text */}
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="w-12 h-px bg-white mb-4"></div>
                                    <p className="text-white font-bold text-lg tracking-wider uppercase">ARCHITECTURAL MASTERY</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-white opacity-80 text-sm">DEFINING THE FUTURE</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Content */}
                    <motion.div variants={itemVariants} className="text-center">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-12 mb-16">
                                <div>
                                    <div className="w-8 h-8 bg-[#AA8453] mx-auto mb-4 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white"></div>
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-[#AA8453]">INFINITE POSSIBILITIES</h3>
                                    <p className="text-gray-600 leading-relaxed">Creating landmarks that transcend conventional boundaries</p>
                                </div>
                                <div>
                                    <div className="w-8 h-8 bg-[#AA8453] mx-auto mb-4 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white"></div>
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-[#AA8453]">LUXURY LIVING</h3>
                                    <p className="text-gray-600 leading-relaxed">Redefining standards of premium residential excellence</p>
                                </div>
                                <div>
                                    <div className="w-8 h-8 bg-[#AA8453] mx-auto mb-4 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white"></div>
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-[#AA8453]">COMMERCIAL EXCELLENCE</h3>
                                    <p className="text-gray-600 leading-relaxed">Setting new benchmarks in business infrastructure</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center space-x-8">
                                <div className="w-24 h-px bg-[#AA8453]"></div>
                                <span className="text-[#AA8453] font-bold text-sm tracking-[0.2em] uppercase">MODERN REAL ESTATE</span>
                                <div className="w-24 h-px bg-[#AA8453]"></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}