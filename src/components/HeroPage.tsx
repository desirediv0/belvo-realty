"use client"
import { motion } from "framer-motion"
import React from "react"
import Link from "next/link"

interface HeroPageProps {
    heading?: React.ReactNode
    subtitle?: React.ReactNode
    minHeight?: string
    background?: { type: 'video' | 'image'; src?: string }
    breadcrumb?: { label: string; href: string }[]
}

function HeroPage({
    heading,
    subtitle,

    minHeight = "80vh",
    background = { type: 'video', src: '/desktop-banner.mp4' },
    breadcrumb = [{ label: 'Home', href: '/' }],
}: HeroPageProps) {
    const defaultHeading = (
        <>
            BELVO<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">REALTY</span>
        </>
    )

    const defaultSubtitle = (
        <>
            Crafting exceptional living spaces where architectural innovation meets timeless elegance.
            <span className="block mt-2 font-medium">Discover your next luxury investment opportunity.</span>
        </>
    )



    return (
        <section className="relative bg-black text-white">
            <div className="relative" style={{ minHeight }}>
                {/* Background */}
                {background.type === 'video' ? (
                    <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                        <source src={background.src ?? '/desktop-banner.webm'} type="video/webm" />
                    </video>
                ) : (
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{ backgroundImage: `url(${background.src ?? '/luxury-vision-desktop.jpg'})` }}
                    />
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />

                <div className="relative z-20 flex flex-col items-center justify-center px-6 lg:px-8 py-20 min-h-[80vh]">
                    <div className="max-w-7xl mx-auto text-center">
                        {/* breadcrumb will render centered under subtitle */}

                        <motion.h1
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.9 }}
                            className="font-black text-white leading-[0.9] mb-6 tracking-tight libreCaslonDisplay"
                            style={{ fontSize: 'clamp(2rem, 6.5vw, 5rem)' }}
                        >
                            {heading ?? defaultHeading}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-light"
                        >
                            {subtitle ?? defaultSubtitle}
                        </motion.p>
                        {breadcrumb && breadcrumb.length > 0 && (
                            <div className="max-w-3xl mx-auto text-lg text-white/80 mb-6">
                                <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2">
                                    {breadcrumb.map((b, idx) => (
                                        <span key={idx} className="flex items-center">
                                            <Link href={b.href} className="hover:underline">{b.label}</Link>
                                            {idx < breadcrumb.length - 1 && <span className="mx-2">/</span>}
                                        </span>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPage