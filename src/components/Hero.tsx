"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                <source src="/desktop-banner.webm" type="video/webm" />
            </video>

            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-sm lg:text-base font-medium text-white/80 mb-6 tracking-wider uppercase"
                    >
                        15 Years of Excellence in Luxury Development
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="font-serif font-normal text-white mb-8 leading-tight text-balance text-center"
                        style={{ fontSize: 'clamp(2.25rem, 8vw, 6.5rem)' }}
                    >
                        BELVO REALTY
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty text-center"
                        style={{ fontSize: 'clamp(1rem, 2.7vw, 1.25rem)' }}
                    >
                        Crafting exceptional living spaces where architectural innovation meets timeless elegance. Discover your
                        next luxury investment opportunity.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
                        >
                            Explore Properties
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-6 text-base font-medium bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                        >
                            <Play className="mr-2 h-5 w-5" />
                            Watch Showcase
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 left-0 transform -translate-x-1/2 z-20 w-full px-4"
            >
                <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-8 text-center gap-4">
                    <div>
                        <div className="font-serif text-2xl font-normal text-white">50+</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-white/30" />
                    <div>
                        <div className="font-serif text-2xl font-normal text-white">₹16,600 Cr+</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider">Portfolio Value</div>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-white/30" />
                    <div>
                        <div className="font-serif text-2xl font-normal text-white">15</div>
                        <div className="text-xs text-white/70 uppercase tracking-wider">Years</div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
