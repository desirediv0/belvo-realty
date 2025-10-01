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
        title: "Hero Homes - The Palatial",
        location: "Sector 104, Dwarka Expressway",
        src: ShowcaseSection,
        year: "Under Construction",
        type: "Luxury Apartments",
        units: "688 Units",
        area: "11 Acres",
        towers: "5 Towers",
        bhk: "3.5 BHK & 4.5 BHK",
        size: "2833 sqft & 3457 sqft",
        roi: "5 Cr Onwards"
    },
    {
        id: 2,
        title: "DLF Independent Floors",
        location: "DLF Phase 2 & Phase 3",
        src: ShowcaseSection,
        year: "Ready to Move In",
        type: "Independent Floors",
        units: "5 to 8 Cr",
        area: "290 sqyds to 524 sqyds",
        towers: "Stilt + 4 Floors",
        bhk: "Multiple Options",
        size: "Spacious Layout",
        roi: "Premium Location"
    },
    {
        id: 3,
        title: "Omaxe Chandni Chowk",
        location: "Chandni Chowk, Delhi",
        src: ShowcaseSection,
        year: "Ready to Move",
        type: "Retail",
        units: "4.5 Acres",
        area: "Ground Floor (Retail), First F (Retail), Second F (Food Court), Lower GF (Retail)",
        towers: "Commercial Complex",
        bhk: "7% ROI Assured for 7 years",
        size: "50 Lk onwards",
        roi: "50:50 payment plan"
    },
    {
        id: 4,
        title: "Elan",
        location: "Sector 49, Sohna Road",
        src: ShowcaseSection,
        year: "Under Construction",
        type: "Commercial",
        units: "350 Units",
        area: "6.5 Acres",
        towers: "5 Towers",
        bhk: "4 BHK",
        size: "4200 sqft",
        roi: "9 Cr Onwards"
    },
    {
        id: 5,
        title: "Max Estate 361",
        location: "Sector 36A, Dwarka Expressway",
        src: ShowcaseSection,
        year: "Under Construction",
        type: "Luxury High-Rise",
        units: "1050 Units",
        area: "18.23 Acres",
        towers: "16 Towers",
        bhk: "3 BHK & 4 BHK",
        size: "3200 sqft & 4100 sqft",
        roi: "7 Cr Onwards"
    },
    {
        id: 6,
        title: "Omaxe Dwarka",
        location: "Sector 19 B, Dwarka",
        src: ShowcaseSection,
        year: "Under Construction",
        type: "Commercial",
        units: "50:4",
        area: "Ground F (Retail), First F (Food Court), SCO",
        towers: "Mixed Use",
        bhk: "7% ROI Assured for 3 years",
        size: "50 Lk onwards",
        roi: "25:75 payment plan"
    },
    {
        id: 7,
        title: "Experion The Trillion",
        location: "Sector 48, Sohna Road",
        src: ShowcaseSection,
        year: "Under Construction",
        type: "Luxury Apartments",
        units: "540 Units",
        area: "5.5 Acres",
        towers: "3 Towers",
        bhk: "3 BHK & 4 BHK",
        size: "2850 sqft & 3600 sqft",
        roi: "6 Cr Onwards"
    },
    {
        id: 8,
        title: "Godrej Sora",
        location: "Sector 53, Golf Course Road",
        src: ShowcaseSection,
        year: "Under Construction",
        type: "Premium Apartments",
        units: "240 Units",
        area: "3.7 Acres",
        towers: "4 Towers",
        bhk: "3 BHK | 4BHK L | 4 BHK XL",
        size: "2771 sqft | 3519 sqft | 3977 sqft",
        roi: "8 Cr Onwards"
    },
    {
        id: 9,
        title: "Adani",
        location: "Sector 102",
        src: ShowcaseSection,
        year: "Under Construction",
        type: "Residential",
        units: "300 Units",
        area: "5 Acres",
        towers: "2 Towers",
        bhk: "3 BHK - 4 BHK",
        size: "2000 sqft - 3200 sqft",
        roi: "3.7 Cr Onwards"
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