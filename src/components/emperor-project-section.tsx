"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Building2, Users, TrendingUp } from "lucide-react"
import { luxury } from "@/assets/inedex"
import Image from "next/image"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
}

const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
        },
    },
}

export default function EmperorProjectSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const features = [
        {
            icon: Building2,
            title: "Architectural Excellence",
            description: "World-class design by internationally acclaimed architects",
        },
        {
            icon: Users,
            title: "Premium Lifestyle",
            description: "Exclusive amenities and services for discerning residents",
        },
        {
            icon: TrendingUp,
            title: "Investment Potential",
            description: "Prime location ensuring exceptional returns and appreciation",
        },
    ]

    return (
        <section
            ref={ref}
            className="py-20 bg-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-7xl mx-auto"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="space-y-6">
                                <motion.div variants={itemVariants} className="inline-block">
                                    <span className="px-4 py-2 bg-black text-[#bf9b30] text-sm font-medium ">
                                        Flagship Project
                                    </span>
                                </motion.div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl libreCaslonDisplay text-neutral-800 leading-tight text-balance">
                                    Belvo The Emperor
                                </h2>
                                <p className="text-xl text-neutral-600 leading-relaxed">
                                    The Only Project of Dwarka Expressway on the Global Map
                                </p>
                            </div>

                            <motion.div variants={itemVariants} className="space-y-6">
                                <p className="text-lg text-neutral-600 leading-relaxed">
                                    Belvo The Emperor is the Most Sought-After Residential Address Right in Gurugram&apos;s Epicentre - Dwarka
                                    Expressway, Located in Sector 106. Globally-Recognized Consultants are Creating this Marvel.
                                </p>

                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            variants={featureVariants}
                                            className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <feature.icon className="w-6 h-6 text-[#bf9b30]" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-neutral-800 mb-1">{feature.title}</h4>
                                                <p className="text-neutral-600 text-sm">{feature.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center space-x-2 bg-neutral-900 text-[#bf9b30] px-8 py-4 hover:bg-neutral-800 transition-colors duration-300 group"
                                >
                                    <span className="font-medium">Explore The Emperor</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="relative">
                            <div className="aspect-[4/5] rounded-none overflow-hidden shadow-2xl">
                                <Image
                                    src={luxury}
                                    alt="Belvo The Emperor project visualization"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    width={800}
                                    height={1000}
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-gray-950 to-black rounded-full opacity-20 blur-2xl" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
