"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FaGem, FaCity, FaLeaf } from "react-icons/fa"
import { modernluxuryrealestateofficeinteriorwithmar } from "@/assets/inedex"

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.12,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function LuxuryVisionSection() {
    return (
        <section className="py-20 bg-white text-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* Text side */}
                    <motion.div variants={item} className="space-y-6">
                        <motion.p variants={item} className="text-sm lg:text-base font-medium text-slate-500 uppercase tracking-wider">
                            Our Vision
                        </motion.p>

                        <motion.h2
                            variants={item}
                            className="libreCaslonDisplay text-3xl md:text-4xl lg:text-5xl leading-tight text-slate-900"
                            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}
                        >
                            Crafting Enduring Value Through Thoughtful Luxury
                        </motion.h2>

                        <motion.p variants={item} className="text-slate-700 max-w-2xl leading-relaxed">
                            At Belvo Realty we design spaces that stand the test of time — blending refined architecture, modern
                            amenities and sustainable practices. Our projects are built to elevate lifestyles and create long-term
                            investment value.
                        </motion.p>

                        <motion.div variants={item} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            <Button size="lg" className="bg-slate-900 text-white px-6 py-4 hover:bg-slate-800">
                                View Masterplans
                            </Button>
                            <Button variant="outline" size="lg" className="px-6 py-4">
                                Contact Sales
                            </Button>
                        </motion.div>

                        {/* Pillars */}
                        <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg bg-white shadow-sm">
                                <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-800">
                                    <FaGem className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-900">Design Excellence</h4>
                                    <p className="text-xs text-slate-600">Curated spaces with premium finishes.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg bg-white shadow-sm">
                                <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-800">
                                    <FaCity className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-900">Prime Locations</h4>
                                    <p className="text-xs text-slate-600">Connectivity and neighbourhood value.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg bg-white shadow-sm">
                                <div className="w-12 h-12 rounded-md bg-slate-50 flex items-center justify-center text-slate-800">
                                    <FaLeaf className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-slate-900">Sustainable Living</h4>
                                    <p className="text-xs text-slate-600">Efficient design and green technologies.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image side */}
                    <motion.div variants={item} className="relative w-full">
                        <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src={modernluxuryrealestateofficeinteriorwithmar}
                                alt="Luxury interior"
                                className="w-full h-full object-cover"
                                width={1200}
                                height={1600}
                                priority={false}
                            />
                        </div>
                        <div className="mt-4 text-sm text-slate-600">Experience designs inspired by global best practices.</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
