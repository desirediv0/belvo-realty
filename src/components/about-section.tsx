"use client"

import { modernluxuryrealestateofficeinteriorwithmar } from "@/assets/inedex"
import { motion } from "framer-motion"
import { FaHome, FaBuilding, FaHotel } from "react-icons/fa"
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
        {
            icon: FaHotel,
            title: "Hospitality",
            description: "Hotels and resorts",
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
                        <div className="aspect-[3/4] md:aspect-[2/3] overflow-hidden bg-muted max-w-md mx-auto max-h-[760px]">
                            <Image
                                src={modernluxuryrealestateofficeinteriorwithmar}
                                alt="Belvo Realty Modern Office Interior"
                                className="w-full h-full object-cover"
                                loading="lazy"
                                width={800}
                                height={1200}
                            />
                            {/* Overlay Logo */}
                            <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                                <motion.div
                                    variants={logoVariants}
                                    className="text-white font-serif text-5xl md:text-6xl font-light tracking-widest uppercase opacity-95"
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
                                className="text-muted-foreground text-sm font-medium tracking-wider uppercase"
                            >
                                About Belvo Realty
                            </motion.p>

                            <motion.h2
                                variants={itemVariants}
                                className="font-serif text-4xl   leading-tight text-balance"
                            >
                                Belvo Realty Redefines Luxury In The World Of Real Estate With The Most Exclusive Residential,
                                Commercial & Hospitality Projects.
                            </motion.h2>

                            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                                Featuring Flawless Designs, A High Level Of Detailing, And Elegant Architecture. Each Project Is A
                                Marvel In Itself - The Most Luxurious Experiences Await You When You Choose Belvo Properties.
                            </motion.p>
                        </div>

                        {/* Services Grid */}
                        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 items-start">
                            {services.map((service) => (
                                <motion.div
                                    key={service.title}
                                    variants={serviceVariants}
                                    whileHover="hover"
                                    className="text-center space-y-4 group cursor-pointer p-6 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-transform duration-300"
                                >
                                    <div className="flex justify-center">
                                        <motion.div
                                            variants={iconVariants}
                                            className="w-20 h-20 bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                                        >
                                            <service.icon className="w-10 h-10 text-gray-800" />
                                        </motion.div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-medium text-gray-900 text-lg">{service.title}</h3>
                                        <p className="text-sm text-gray-600">{service.description}</p>
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
