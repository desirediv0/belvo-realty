"use client"

import { motion, Variants, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.28,
            delayChildren: 0.18,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
}

const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.1,
        },
    },
}

export default function LuxuryVisionSection() {
    const ref = useRef<HTMLElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-20 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="font-serif text-center mb-12 text-neutral-800 leading-tight"
                        style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
                    >
                        Belvo Realty epitomizes unrivaled luxury, timeless elegance and trailblazing innovation — redefining the realm
                        of modern real estate.
                    </motion.h2>

                    <motion.div
                        variants={imageVariants}
                        className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-xl"
                    >
                        <Image
                            src="/luxury-vision-desktop.jpg"
                            alt="Luxury architectural vision in desert landscape"
                            fill
                            className="object-cover"
                            priority={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-10 text-center">
                        <p className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
                            Where architectural mastery meets infinite possibilities, creating landmarks that define the future of
                            luxury living and commercial excellence.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
