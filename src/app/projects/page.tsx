"use client"

import { useMemo, useState, useEffect, useRef } from "react"
import Image, { StaticImageData } from "next/image"
import { motion, type Variants } from "framer-motion"
import { X, MapPin, ArrowRight } from "lucide-react"
import HeroPage from "@/components/HeroPage"
import HeadText from "@/components/Head-text"
import { dlf, Elan, experion, godrej, hero, max, omaxechandnichowk, omaxedwarka, ShowcaseSection } from "@/assets/inedex"

type Project = {
    id: number
    order: number
    title: string
    location: string
    type: "Residential" | "Commercial" | "Mixed Use" | "Luxury Apartments"
    status: "Under Construction" | "Ready to Move"
    // Keep images as-is (placeholders here). You can replace src per project later.
    src: string | StaticImageData | undefined
    // Ordered details exactly as in the images
    details: string[]
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
}

// Project data mapped 1–9 in the exact order from the images
const projects: Project[] = [
    {
        id: 1,
        order: 1,
        title: "Hero Homes — The Palatial",
        location: "Sector 104, Dwarka Expressway",
        type: "Residential",
        status: "Under Construction",
        src: hero,
        details: [
            "Underconstruction",
            "11 Acres",
            "5 Towers | 688 Units",
            "3.5 BHK & 4.5 BHK",
            "2833 sqft & 3457 sqft",
            "5 Cr onwards",
        ],
    },
    {
        id: 2,
        order: 2,
        title: "DLF Independent Floors",
        location: "DLF Phase 2 & Phase 3",
        type: "Residential",
        status: "Ready to Move",
        src: dlf,
        details: ["Ready to move in", "5 to 8 Cr", "Stilt + 4 Floors"],
    },
    {
        id: 3,
        order: 3,
        title: "Omaxe Chandni Chowk",
        location: "Chandni Chowk, Delhi",
        type: "Commercial",
        status: "Ready to Move",
        src: omaxechandnichowk,
        details: [
            "Ready to move (operational)",
            "4.5 Acres",
            "GF (Retail) | 1F (Retail) | 2F (Food Court) | Lower GF (Retail)",
            "7% ROI Assured for 7 years",
            "50 Lk onwards",
            "50:50 payment plan",
        ],
    },
    {
        id: 4,
        order: 4,
        title: "Elan",
        location: "Sector 49, Sohna Road",
        type: "Residential",
        status: "Under Construction",
        src: Elan,
        details: ["Underconstruction", "6.5 Acres", "5 Towers | 350 units", "4BHK", "4200 sqft", "9 Cr onwards"],
    },
    {
        id: 5,
        order: 5,
        title: "Max Estate 361",
        location: "Sector 36A, Dwarka Expressway",
        type: "Residential",
        status: "Under Construction",
        src: max,
        details: [
            "Underconstruction",
            "18.23 Acres",
            "6 Towers | 1080 Units",
            "3BHK & 4BHK",
            "3200 sqft & 4000 sqft",
            "7 Cr Onwards",
        ],
    },
    {
        id: 6,
        order: 6,
        title: "Omaxe Dwarka",
        location: "Sector 19B, Dwarka",
        type: "Commercial",
        status: "Under Construction",
        src: omaxedwarka,
        details: [
            "Under construction",
            "50.4",
            "GF (Retail) | 1F (Food Court) | SCO",
            "7% ROI Assured for 3 years",
            "50 Lk onwards",
            "25:75 payment plan",
        ],
    },
    {
        id: 7,
        order: 7,
        title: "Experion — The Trillium",
        location: "Sector 48, Sohna Road",
        type: "Residential",
        status: "Under Construction",
        src: experion,
        details: [
            "Underconstruction",
            "5.5 Acres",
            "3 Towers | 540 units",
            "3BHK & 4BHK",
            "2850 sqft & 3600 sqft",
            "6 Cr onwards",
        ],
    },
    {
        id: 8,
        order: 8,
        title: "Godrej Sora",
        location: "Sector 53, Golf Course Road",
        type: "Residential",
        status: "Under Construction",
        src: godrej,
        details: [
            "Underconstruction",
            "3.7 Acres",
            "4 Towers | 240 units",
            "3BHK | 4BHK L | 4BHK XL",
            "2771 sqft | 3519 sqft | 3947 sqft",
            "8 Cr onwards",
        ],
    },
    {
        id: 9,
        order: 9,
        title: "Adani",
        location: "Sector 102",
        type: "Residential",
        status: "Under Construction",
        src: ShowcaseSection,
        details: [
            "Under construction",
            "5 Acres",
            "2 Towers | 300 units",
            "3BHK - 4BHK",
            "2000 sqft - 3200 sqft",
            "3.7 Cr Onwards",
        ],
    },
]

export default function ProjectsPage() {
    const [selected, setSelected] = useState<number | null>(null)
    const sorted = useMemo(() => [...projects].sort((a, b) => a.order - b.order), [])
    const modalRef = useRef<HTMLDivElement | null>(null)
    const detailsRef = useRef<HTMLDivElement | null>(null)

    // When modal opens, reset internal scrolls and lock body scroll
    useEffect(() => {
        if (selected !== null) {
            // small timeout to ensure element exists after render
            setTimeout(() => {
                try {
                    modalRef.current?.scrollTo({ top: 0, behavior: "auto" })
                } catch { }
                try {
                    detailsRef.current?.scrollTo({ top: 0, behavior: "auto" })
                } catch { }
            }, 0)
            // prevent background scroll
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [selected])

    return (
        <main className="bg-white">
            <HeroPage
                heading={<span>PROJECTS</span>}
                subtitle={<span>Explore our curated portfolio of luxury residential and commercial developments that redefine modern living standards.</span>}
                breadcrumb={[{ label: "Home", href: "/" }, { label: "Projects", href: "/projects" }]}
            />


            <section className="py-8 bg-white relative overflow-hidden">
                {/* subtle bg shapes */}


                <HeadText
                    heading="PORTFOLIO SHOWCASE"
                    subheadingfirstline="FEATURED"
                    subheadingsecondline="DEVELOPMENTS"
                    description="Discover our latest architectural masterpieces and investment opportunities"
                />




                <div className="container mx-auto px-4 relative">
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {sorted.map((p) => (
                            <motion.div
                                key={p.id}
                                variants={itemVariants}
                                className="group cursor-pointer"
                                onClick={() => setSelected(p.id)}
                            >
                                <div className="relative overflow-hidden bg-black">
                                    {/* Image */}
                                    <div className="relative aspect-[4/6] overflow-hidden">
                                        <Image
                                            src={p.src || "/placeholder.svg"}
                                            alt={p.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-all duration-700 group-hover:scale-110"
                                        />
                                        {/* overlays */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* content overlay */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                        {/* type badge */}
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-sky-500/80 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                                {p.type}
                                            </span>
                                        </div>

                                        {/* status pill top-right */}
                                        <div className="absolute top-6 right-6 hidden md:block">
                                            <span
                                                className={[
                                                    "px-3 py-1 text-xs font-bold rounded-full",
                                                    p.status === "Under Construction"
                                                        ? "bg-amber-100 text-amber-800"
                                                        : "bg-green-100 text-green-800",
                                                ].join(" ")}
                                            >
                                                {p.status}
                                            </span>
                                        </div>

                                        <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                                            <h3 className="text-lg md:text-2xl font-bold mb-2 leading-tight">{p.title}</h3>
                                            <div className="flex items-center mb-3 text-sm md:text-base opacity-90">
                                                <MapPin className="w-4 h-4 mr-2 opacity-80" />
                                                <span>{p.location}</span>
                                            </div>

                                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 md:block hidden">
                                                <div className="flex items-center text-sm font-medium">
                                                    <span className="mr-2">View Details</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* corner accent */}
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-white opacity-0 group-hover:opacity-20 rotate-45 translate-x-6 -translate-y-6 transition-opacity duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            {selected !== null &&
                (() => {
                    const proj = projects.find((p) => p.id === selected)!
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-auto"
                            onClick={() => setSelected(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                                transition={{ duration: 0.25 }}
                                className="max-w-5xl w-full mx-auto bg-white overflow-hidden flex flex-col md:flex-row relative max-h-[90vh]"
                                ref={modalRef}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* persistent close button (always visible) */}
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-3 right-3 z-50 bg-white/80 text-gray-800 p-2 rounded shadow-sm hover:bg-white"
                                    aria-label="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                {/* Left: image (2/3) - prevent cropping by using object-contain and a limited max height */}
                                <div className="w-full md:w-2/3 flex-shrink-0 bg-white flex items-center justify-center overflow-hidden h-[40vh] md:h-auto md:max-h-[80vh]">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Image
                                            src={proj.src || "/placeholder.svg"}
                                            alt={proj.title}
                                            width={1200}
                                            height={800}
                                            className="object-contain max-h-full w-auto md:w-full"
                                        />
                                    </div>
                                </div>

                                {/* Right: details (1/3) - scrollable if content is tall */}
                                <div className="p-6 md:p-8 bg-white w-full md:w-1/3 overflow-auto max-h-[50vh] md:max-h-[80vh]" ref={detailsRef}>
                                    <div className="grid gap-8">
                                        <div>
                                            <span className="text-xs tracking-[0.2em] uppercase font-bold text-gray-500 mb-2 block">
                                                {proj.type}
                                            </span>
                                            <h3 className="text-3xl md:text-4xl font-black mb-3 text-black">{proj.title}</h3>
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <MapPin className="w-5 h-5 text-gray-600" />
                                                <span className="text-base">{proj.location}</span>
                                            </div>
                                            <div className="mt-4">
                                                <span
                                                    className={[
                                                        "px-3 py-1 text-sm font-bold rounded-full",
                                                        proj.status === "Under Construction"
                                                            ? "bg-amber-100 text-amber-800"
                                                            : "bg-green-100 text-green-800",
                                                    ].join(" ")}
                                                >
                                                    {proj.status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Details list in exact order as images */}
                                        <div>
                                            <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                                {proj.details.map((line, idx) => (
                                                    <li key={idx} className="px-4 py-3 text-sm md:text-base">
                                                        {line}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="mt-3 text-xs text-gray-500">Note: Details shown exactly in the order provided.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                })()}
        </main>
    )
}
