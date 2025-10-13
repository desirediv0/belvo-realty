"use client"

import { modernluxuryrealestateofficeinteriorwithmar } from "@/assets/inedex"
import { motion } from "framer-motion"
import { FaHome, FaBuilding } from "react-icons/fa"
import Image from "next/image"

const AboutSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
                when: "beforeChildren",
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
            },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
            },
        },
    }

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.5,
                duration: 0.8,
            },
        },
    }

    const serviceVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
            },
        },
    }

    const iconVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
            },
        },
    }

    const services = [
        {
            icon: FaHome,
            title: "Residential",
            description: "Luxury homes and apartments",
        },
        {
            icon: FaBuilding,
            title: "Commercial",
            description: "Office spaces and retail",
        },
    ]

    return (
        <section className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Image Section */}
                    <motion.div variants={imageVariants} className="relative flex items-center justify-center">
                        <div className="overflow-hidden  max-w-2xl mx-auto max-h-[760px]">
                            <Image
                                src={modernluxuryrealestateofficeinteriorwithmar}
                                alt="Belvo Realty Modern Office Interior"
                                className="w-full h-full object-cover"
                                loading="lazy"
                                width={800}
                                height={1200}
                            />
                            {/* Overlay Logo */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/25 flex items-center justify-center">
                                <motion.div
                                    variants={logoVariants}
                                    className="text-[#D3B88F] libreCaslonDisplay text-5xl md:text-6xl font-medium tracking-widest uppercase opacity-95"
                                >
                                    belvo
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div variants={containerVariants} className="space-y-8">
                        <div className="space-y-6">
                            <motion.p
                                variants={itemVariants}
                                className="text-[#D3B88F] text-sm font-medium tracking-wider uppercase"
                            >
                                About Belvo Realty
                            </motion.p>

                            <motion.h2
                                variants={itemVariants}
                                className="libreCaslonDisplay text-2xl md:text-3xl   leading-tight text-balance"
                            >
                                Belvo Realty Redefines Excellence In The World Of Real Estate Brokerage With The Most Curated Residential & Commercial Opportunities.
                            </motion.h2>

                            <motion.p variants={itemVariants} className="text-muted-foreground md:text-lg leading-relaxed max-w-2xl">
                                Delivering bespoke property solutions, unmatched market insights, and premium advisory services — every deal is crafted with precision and trust. The most seamless and rewarding real estate experiences await you when you partner with Belvo Realty.
                            </motion.p>
                        </div>

                        {/* Services Grid */}
                        <motion.div variants={containerVariants} className="grid grid-cols-2 gap-2 md:gap-8 pt-8 items-start">
                            {services.map((service) => (
                                <motion.div
                                    key={service.title}
                                    variants={serviceVariants}
                                    whileHover="hover"
                                    className="text-center space-y-4 group cursor-pointer p-2 md:p-6 border min-h-44 border-gray-100 bg-white shadow-sm hover:shadow-md transition-transform duration-300"
                                >
                                    <div className="flex justify-center">
                                        <motion.div
                                            variants={iconVariants}
                                            className="md:w-20 w-12 h-12 md:h-20 bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                                        >
                                            <service.icon className="w-8 md:w-10 h-8 md:h-10  text-[#D3B88F]" />
                                        </motion.div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-medium text-gray-900 text-sm md:text-lg">{service.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-600">{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection
