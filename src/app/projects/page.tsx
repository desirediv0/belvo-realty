"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { X, MapPin, Calendar, Home, ArrowRight } from "lucide-react"
import HeroPage from "@/components/HeroPage"
import { ShowcaseSection } from "@/assets/inedex"
import HeadText from "@/components/Head-text"


const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    },
}

const images = [
    {
        id: 1,
        title: "The Regency",
        location: "Sector 106",
        src: ShowcaseSection,
        year: "2024",
        type: "Residential",
        units: "450 Units"
    },
    {
        id: 2,
        title: "Skyline Residences",
        location: "Golf Course",
        src: ShowcaseSection,
        year: "2023",
        type: "Luxury Apartments",
        units: "320 Units"
    },
    {
        id: 3,
        title: "Urban Vista",
        location: "Dwarka Expressway",
        src: ShowcaseSection,
        year: "2024",
        type: "Commercial",
        units: "200 Offices"
    },
    {
        id: 4,
        title: "The Crest",
        location: "Sector 85",
        src: ShowcaseSection,
        year: "2023",
        type: "Premium Villas",
        units: "85 Villas"
    },
    {
        id: 5,
        title: "Atria Towers",
        location: "Golf Course",
        src: ShowcaseSection,
        year: "2024",
        type: "High-Rise",
        units: "650 Units"
    },
    {
        id: 6,
        title: "Belvo Heights",
        location: "Sector 106",
        src: ShowcaseSection,
        year: "2023",
        type: "Luxury Apartments",
        units: "380 Units"
    },
    {
        id: 7,
        title: "Serene Park",
        location: "Sector 102",
        src: ShowcaseSection,
        year: "2024",
        type: "Integrated Township",
        units: "1200 Units"
    },
    {
        id: 8,
        title: "The Atrium",
        location: "Central Avenue",
        src: ShowcaseSection,
        year: "2023",
        type: "Mixed Use",
        units: "500 Units"
    },
    {
        id: 9,
        title: "Eminence",
        location: "Dwarka Expressway",
        src: ShowcaseSection,
        year: "2024",
        type: "Luxury Residences",
        units: "420 Units"
    },
]

export default function ProjectsPage() {
    const [selected, setSelected] = useState<number | null>(null)
    const [, setHoveredId] = useState<number | null>(null)

    return (
        <main className="bg-white">
            <HeroPage
                heading={<span>PROJECTS</span>}
                subtitle={<span>Explore our curated portfolio of luxury residential and commercial developments that redefine modern living standards.</span>}
                breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }]}
            />

            <section className="py-16 bg-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-black transform rotate-45 translate-x-48 -translate-y-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black transform rotate-12 -translate-x-48 translate-y-48"></div>
                </div>

                <div className="container mx-auto px-4 relative">


                    <HeadText
                        heading="PORTFOLIO SHOWCASE"
                        subheadingfirstline="FEATURED"
                        subheadingsecondline="DEVELOPMENTS"
                        description="Discover our latest architectural masterpieces and investment opportunities"
                    />


                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {images.map((img) => (
                            <motion.div
                                key={img.id}
                                variants={itemVariants}
                                className="group cursor-pointer"
                                onMouseEnter={() => setHoveredId(img.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => setSelected(img.id)}
                            >
                                <div className="relative overflow-hidden bg-black">
                                    {/* Image container */}
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src={img.src}
                                            alt={img.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-all duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Content overlay */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                        {/* Top badge */}
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                                {img.type}
                                            </span>
                                        </div>

                                        {/* Main content */}
                                        <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                                            <h3 className="text-lg md:text-2xl font-bold mb-2 leading-tight">{img.title}</h3>

                                            <div className="flex items-center mb-3">
                                                <MapPin className="w-4 h-4 mr-2 opacity-80" />
                                                <span className="text-xs md:text-sm opacity-90">{img.location}</span>
                                            </div>

                                            {/* Additional info that appears on hover */}
                                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 md:block hidden ">
                                                <div className="flex items-center justify-between text-xs mb-4">
                                                    <div className="flex items-center">
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        <span>{img.year}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Home className="w-3 h-3 mr-1" />
                                                        <span>{img.units}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center text-sm font-medium">
                                                    <span className="mr-2">View Details</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner accent */}
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-white opacity-0 group-hover:opacity-20 transform rotate-45 translate-x-6 -translate-y-6 transition-opacity duration-300"></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Enhanced Lightbox Modal */}
            {selected !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setSelected(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-4xl w-full mx-auto  bg-white overflow-hidden "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image section */}
                        <div className="relative aspect-[16/9] w-full bg-black">
                            <Image
                                src={images.find((i) => i.id === selected)!.src}
                                alt={images.find((i) => i.id === selected)!.title}
                                fill
                                className="object-cover"
                            />

                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-6 right-6 bg-black/20 backdrop-blur-sm text-white p-3 hover:bg-black/40 transition-colors"
                                aria-label="Close gallery"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content section */}
                        <div className="p-8 bg-white">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <span className="text-xs tracking-[0.2em] uppercase font-bold text-gray-500 mb-2 block">
                                        {images.find((i) => i.id === selected)!.type}
                                    </span>
                                    <h3 className="text-4xl font-black mb-4 text-black">
                                        {images.find((i) => i.id === selected)!.title}
                                    </h3>
                                    <div className="flex items-center mb-6">
                                        <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                                        <span className="text-lg text-gray-700">
                                            {images.find((i) => i.id === selected)!.location}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                        <span className="font-medium text-gray-600">Year</span>
                                        <span className="font-bold">{images.find((i) => i.id === selected)!.year}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                        <span className="font-medium text-gray-600">Total Units</span>
                                        <span className="font-bold">{images.find((i) => i.id === selected)!.units}</span>
                                    </div>
                                    <div className="flex items-center justify-between py-3">
                                        <span className="font-medium text-gray-600">Status</span>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 text-sm font-bold">Completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </main>
    )
}