"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
        },
    },
}

const CountUpNumber = ({ end, duration = 2500, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef<HTMLSpanElement | null>(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView && !hasStarted) {
            setHasStarted(true)
            let startTime: number | null = null
            const animate = (currentTime: number) => {
                if (startTime === null) startTime = currentTime
                const progress = Math.min((currentTime - (startTime as number)) / duration, 1)
                const easeOutProgress = 1 - Math.pow(1 - progress, 3)
                setCount(Math.floor(easeOutProgress * end))
                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView, end, duration, hasStarted])

    return (
        <span ref={ref} >
            {count.toLocaleString()}
            {suffix}
        </span>
    )
}

export default function StatisticsSection() {
    const ref = useRef<HTMLElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section ref={ref} className="py-8 md:py-16 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-black transform rotate-45 -translate-x-48 -translate-y-48"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black transform rotate-45 translate-x-48 translate-y-48"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-7xl mx-auto"

                >
                    {/* Statistics Cards */}
                    <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 md:gap-8 mb-10 ">
                        {[
                            { display: 100, suffix: '%', label: 'CLIENT CENTRIC APPROACH' },
                            { display: 'EXCLUSIVE DEVELOPER', suffix: '', label: 'PARTNERSHIPS' },
                            { display: 'End to End', suffix: '', label: 'PROPERTY JOLUTION' },
                        ].map((s: { display: number | string; suffix?: string; label: string }, i: number) => (
                            <motion.div
                                key={i}
                                className="group bg-transparent text-black py-4 md:py-2 md:p-8 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                whileHover={{ y: -5 }}
                            >
                                {/* subtle overlay kept transparent */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-300"></div>

                                {/* Corner accent (subtle) */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-black opacity-5 transform rotate-45 translate-x-8 -translate-y-8"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-3 md:mb-6 ">
                                        <div className="w-12 h-1 bg-black mx-auto md:mx-0"></div>

                                    </div>

                                    <div className="text-lg md:text-4xl  text-center md:text-left  font-medium text-[#AA8453] mb-4  tracking-wider">
                                        {typeof s.display === 'number' ? (
                                            <CountUpNumber end={s.display as number} suffix={s.suffix || ''} />
                                        ) : (
                                            <span className="uppercase text-base md:text-lg">{s.display}</span>
                                        )}
                                    </div>

                                    <p className="text-[#AA8453] opacity-90 font-medium text-xs md:text-lg tracking-wide uppercase text-center md:text-left ">{s.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Main Content */}
                    <motion.div variants={itemVariants} className="text-center">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex items-center justify-center mb-8">
                                <div className="w-24 h-px bg-black"></div>
                                <div className="mx-6 w-2 h-2 bg-black transform rotate-45"></div>
                                <div className="w-24 h-px bg-black"></div>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-none tracking-tight">
                                BELVO REALTY
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 uppercase">
                                    Advantage
                                </span>
                            </h2>

                            <div className="w-2 h-12 bg-black mx-auto mb-8"></div>

                            <p className="text-xl md:text-2xl text-black font-medium mb-6 leading-relaxed">

                                Your Gateway to Exceptional   <span className="font-bold">Real Estate</span> {" "}Opportunities
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 md:gap-12 mt-8 md:mt-14">
                                <div className="text-left">
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                                        Belvo Realty is a boutique
                                        real estate advisory firm
                                        with the most exclusive
                                        residential, commercial &
                                        investment properties.
                                    </p>
                                </div>
                                <div className="text-left">
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                                        with a client-first approach, deep market expersise, and access to top developers, we deliver transparent transaction, export guidance, premium opportunitie.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}