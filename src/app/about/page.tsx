"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, Eye, Heart, Phone, Calendar, Shield, TrendingUp } from "lucide-react"
import HeroPage from "@/components/HeroPage"
import HeadText from "@/components/Head-text"

export default function AboutPage() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
            },
        },
    }

    return (
        <main>
            <HeroPage
                heading={<><span>ABOUT US</span></>}
                subtitle={<span>Discover the legacy and vision behind Belvo Realty — where craft meets comfort.</span>}
                breadcrumb={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}
                background={{ type: 'video', src: '/aboutvideo.mp4' }}
            />

            <section className="py-16 bg-white text-black relative overflow-hidden">
                {/* Subtle decorative background */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-tr from-gray-100 to-transparent opacity-40 transform translate-x-32 -translate-y-24"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-bl from-gray-100 to-transparent opacity-30 transform -translate-x-32 translate-y-24"></div>
                </div>

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-120px" }}
                        className="max-w-7xl mx-auto"
                    >
                        <HeadText
                            heading="ABOUT BELVO"
                            subheadingfirstline="CRAFTED"
                            subheadingsecondline="FOR LIVING"
                            description="Belvo Realty blends modern architecture, sustainable practices and premium amenities to create homes and investments that stand the test of time."
                        />

                        {/* Introduction */}
                        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-16">
                            <p className="text-lg leading-relaxed text-gray-600 mb-8">
                                At <strong>Belvo Realty</strong>, we believe real estate is not just about transactions—it&apos;s about <strong>trust, insight, and creating long-term value</strong>. With a foundation built on years of developer-side expertise, we bring unmatched clarity and confidence to every property decision.
                            </p>
                            <p className="text-lg leading-relaxed text-gray-600">
                                Our strength lies in combining deep industry knowledge with a modern, transparent approach. Whether it&apos;s securing your dream home or identifying high-potential investments, Belvo Realty ensures a seamless journey backed by experience and integrity.
                            </p>
                        </motion.div>

                        {/* Founders Section */}
                        <motion.div variants={itemVariants} className="mb-16">
                            <div className="text-center mb-12">
                                <div className="inline-block px-4 py-2 bg-black text-white text-sm font-medium mb-6 uppercase tracking-wider">
                                    Meet the Founders
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#AA8453]">Leadership Excellence</h2>
                                <p className="text-gray-600 text-lg">Experience and expertise that drives our success</p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                                {/* Ravi Verma */}
                                <motion.div
                                    variants={itemVariants}
                                    className="p-8 border border-black bg-white hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="w-20 h-20 bg-[#AA8453] text-white flex items-center justify-center text-2xl font-bold">
                                            RV
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2 text-black">Ravi Verma</h3>
                                            <div className="flex items-center gap-2 text-black font-medium mb-4">
                                                <Award className="w-5 h-5" />
                                                Founder
                                            </div>
                                            <div className="px-4 py-2 bg-gray-100 border border-gray-300 inline-block">
                                                <span className="font-semibold text-sm">15+ Years Experience</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <p className="leading-relaxed">
                                            Ravi has worked with India&apos;s most prominent developers including <strong>DLF Limited, M3M India, Paras Buildtech, Experion Developers, and Signature Global</strong>. His career has been built on mastering sales strategy, market positioning, and client-centric solutions.
                                        </p>
                                        <p className="leading-relaxed">
                                            His insider understanding of how projects are planned, marketed, and delivered gives Belvo Realty clients a unique edge—helping them make smarter, future-ready decisions with confidence.
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Bhoomika Singh Verma */}
                                <motion.div
                                    variants={itemVariants}
                                    className="p-8 border border-black bg-white hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="w-20 h-20 bg-[#AA8453] text-white flex items-center justify-center text-xl font-bold">
                                            BSV
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2 text-black">Bhoomika Singh Verma</h3>
                                            <div className="flex items-center gap-2 text-black font-medium mb-4">
                                                <Heart className="w-5 h-5" />
                                                Co-Founder
                                            </div>
                                            <div className="px-4 py-2 bg-gray-100 border border-gray-300 inline-block">
                                                <span className="font-semibold text-sm">Multi-Industry Expert</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-gray-700">
                                        <p className="leading-relaxed">
                                            Bhoomika brings rich experience from <strong>DLF Limited, Omaxe Limited, Cushman & Wakefield, and Jet Airways</strong>. Her expertise spans client engagement, project advisory, and corporate relationship management.
                                        </p>
                                        <p className="leading-relaxed">
                                            With her focus on transparency and customer-first values, she ensures every Belvo Realty client enjoys a smooth, informed, and rewarding property journey.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Vision & Mission */}
                        <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8 mb-16">
                            {/* Vision */}
                            <div className="p-8 border border-black bg-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#AA8453] text-white flex items-center justify-center">
                                        <Eye className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-black">Our Vision</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    To be the most trusted and forward-looking real estate partner, where every client feels empowered, informed, and secure in their property decisions. We envision a future where real estate is not just about spaces, but about building confidence, opportunities, and lasting relationships.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="p-8 border border-black bg-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#AA8453] text-white flex items-center justify-center">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-black">Our Mission</h3>
                                </div>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#AA8453] mt-2 flex-shrink-0"></div>
                                        <span>Create a client experience rooted in clarity, professionalism, and care</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#AA8453] mt-2 flex-shrink-0"></div>
                                        <span>Guide every property journey with insight, foresight, and responsibility</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#AA8453] mt-2 flex-shrink-0"></div>
                                        <span>Shape real estate as a service industry that delivers value beyond transactions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-[#AA8453] mt-2 flex-shrink-0"></div>
                                        <span>Continually adapt and innovate, keeping our clients ahead in a changing market</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* The Belvo Advantage */}
                        <motion.div variants={itemVariants} className="mb-16">
                            <div className="text-center mb-12">
                                <div className="inline-block px-4 py-2 bg-black text-white text-sm font-medium mb-6 uppercase tracking-wider">
                                    Why Choose Us
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#AA8453]">The Belvo Advantage</h3>
                                <p className="text-gray-600 text-lg">Founded on real experience and driven by trust</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-8 border border-black bg-white hover:shadow-lg transition-all duration-300">
                                    <div className="w-16 h-16 bg-[#AA8453] text-white flex items-center justify-center mb-6">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">Insider Knowledge</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Insights shaped by years with top developers and advisors, giving you the competitive edge in every decision.
                                    </p>
                                </div>

                                <div className="p-8 border border-black bg-white hover:shadow-lg transition-all duration-300">
                                    <div className="w-16 h-16 bg-[#AA8453] text-white flex items-center justify-center mb-6">
                                        <TrendingUp className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">Smarter Evaluations</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Clearer guidance and data-driven insights for confident investment decisions that deliver results.
                                    </p>
                                </div>

                                <div className="p-8 border border-black bg-white hover:shadow-lg transition-all duration-300">
                                    <div className="w-16 h-16 bg-[#AA8453] text-white flex items-center justify-center mb-6">
                                        <Shield className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">Seamless Transactions</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Professional, transparent, and stress-free processes from initial consultation to final handover.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div variants={itemVariants} className="mb-16">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="p-6 border border-black bg-white text-center">
                                    <div className="text-3xl font-bold mb-2">15+</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-600">Years Experience</div>
                                </div>

                                <div className="p-6 border border-black bg-white text-center">
                                    <div className="text-3xl font-bold mb-2">500+</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-600">Happy Clients</div>
                                </div>

                                <div className="p-6 border border-black bg-white text-center">
                                    <div className="text-3xl font-bold mb-2">50+</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-600">Projects Completed</div>
                                </div>

                                <div className="p-6 border border-black bg-white text-center">
                                    <div className="text-3xl font-bold mb-2">₹1000Cr+</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-600">Value Delivered</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* What We Do */}
                        <motion.div variants={itemVariants} className="mb-16">
                            <h3 className="text-2xl font-bold mb-8 text-center">What We Do</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 border border-black bg-white hover:shadow transition">
                                    <div className="w-12 h-12 bg-[#AA8453] text-white flex items-center justify-center mb-4">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Market Analysis & Strategy</h4>
                                    <p className="text-sm text-gray-600">Comprehensive market research and strategic planning backed by years of developer-side insights.</p>
                                </div>

                                <div className="p-6 border border-black bg-white hover:shadow transition">
                                    <div className="w-12 h-12 bg-[#AA8453] text-white flex items-center justify-center mb-4">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Property Advisory</h4>
                                    <p className="text-sm text-gray-600">Expert guidance on residential and commercial properties with transparent communication throughout.</p>
                                </div>

                                <div className="p-6 border border-black bg-white hover:shadow transition">
                                    <div className="w-12 h-12 bg-[#AA8453] text-white flex items-center justify-center mb-4">
                                        <Heart className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Investment Solutions</h4>
                                    <p className="text-sm text-gray-600">Tailored investment strategies that maximize returns while minimizing risks in the real estate market.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={itemVariants} className="text-center bg-black text-white p-12">
                            <h3 className="text-3xl font-bold mb-4">Ready to Experience The Future?</h3>
                            <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
                                Let&apos;s discuss your property goals and discover how Belvo Realty can transform your real estate journey with expert guidance and insider knowledge.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 flex items-center gap-2">
                                    <Phone className="w-5 h-5" />
                                    Contact Us Today
                                </Button>
                                <Button variant="outline" size="lg" className="px-8 py-3 border-white bg-black text-white hover:bg-white hover:text-black flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    Schedule Consultation
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}