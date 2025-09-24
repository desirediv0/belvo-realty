"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Users, Building, Target, Eye, Heart } from "lucide-react"
import HeroPage from "@/components/HeroPage"
import HeadText from "@/components/Head-text"
import { luxuryvisiondesktop } from "@/assets/inedex"

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
            />

            <section className="py-16 bg-white text-black relative overflow-hidden">
                {/* subtle decorative background - non interactive */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-tr from-gray-100 to-transparent rounded-none opacity-40 transform translate-x-32 -translate-y-24"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-bl from-gray-100 to-transparent rounded-none opacity-30 transform -translate-x-32 translate-y-24"></div>
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

                        {/* Lead section: story + visual */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center my-12">
                            <motion.div variants={itemVariants} className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    From our first landmark development to our most recent luxury residences, Belvo Realty has focused on quality, transparency and imaginative design. We believe great homes are built on strong relationships — with communities, partners, and customers.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="p-6 border border-black rounded-none bg-white">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Award className="w-6 h-6 text-black" />
                                            <div className="text-sm uppercase tracking-wider text-gray-600">Experience</div>
                                        </div>
                                        <div className="text-2xl font-bold">15+ Years</div>
                                        <div className="text-sm text-gray-500">Delivering premium projects across NCR</div>
                                    </div>

                                    <div className="p-6 border border-black rounded-none bg-white">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Building className="w-6 h-6 text-black" />
                                            <div className="text-sm uppercase tracking-wider text-gray-600">Projects</div>
                                        </div>
                                        <div className="text-2xl font-bold">25+</div>
                                        <div className="text-sm text-gray-500">Residential & Commercial developments</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="overflow-hidden shadow-lg rounded-none">
                                <Image src={luxuryvisiondesktop} alt="Luxury property" width={1200} height={800} className="object-cover w-full h-64 sm:h-96" />
                            </motion.div>
                        </div>

                        {/* What we do */}
                        <motion.div variants={itemVariants} className="mb-12">
                            <h3 className="text-2xl font-bold mb-6">What we do</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 border border-black rounded-none hover:shadow transition">
                                    <div className="w-12 h-12 rounded-none bg-white flex items-center justify-center mb-4">
                                        <Target className="w-6 h-6 text-black" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Planning & Design</h4>
                                    <p className="text-sm text-gray-600">Architectural vision backed by research-driven planning and premium finishes.</p>
                                </div>

                                <div className="p-6 border border-black rounded-none hover:shadow transition">
                                    <div className="w-12 h-12 rounded-none bg-white flex items-center justify-center mb-4">
                                        <Users className="w-6 h-6 text-black" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Project Delivery</h4>
                                    <p className="text-sm text-gray-600">On-time, high quality construction with transparent communication at every step.</p>
                                </div>

                                <div className="p-6 border border-black rounded-none hover:shadow transition">
                                    <div className="w-12 h-12 rounded-none bg-white flex items-center justify-center mb-4">
                                        <Heart className="w-6 h-6 text-black" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Customer Care</h4>
                                    <p className="text-sm text-gray-600">Long-term aftercare and services that keep residents happy and properties maintained.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Core Values */}
                        <motion.div variants={itemVariants} className="mb-12">
                            <h3 className="text-2xl font-bold mb-6">Core Values</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[{
                                    icon: <Award className="w-8 h-8 text-black" />,
                                    title: 'Design Excellence',
                                    desc: 'Collaborating with world-class designers to create lasting architecture.'
                                }, {
                                    icon: <Users className="w-8 h-8 text-black" />,
                                    title: 'Quality Craftsmanship',
                                    desc: 'Premium materials and thorough execution across the build lifecycle.'
                                }, {
                                    icon: <Eye className="w-8 h-8 text-black" />,
                                    title: 'Sustainability',
                                    desc: 'Responsible construction and green features for future-proof living.'
                                }].map((v, i) => (
                                    <div key={i} className="p-6 border border-black rounded-none flex gap-4 items-start">
                                        <div className="mt-1">{v.icon}</div>
                                        <div>
                                            <h4 className="font-semibold">{v.title}</h4>
                                            <p className="text-sm text-gray-600">{v.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Team */}
                        <motion.div variants={itemVariants} className="mb-16">
                            <h3 className="text-2xl font-bold mb-6">Meet the Team</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { name: 'Rajesh Kumar', role: 'Founder & CEO' },
                                    { name: 'Priya Singh', role: 'Head of Design' },
                                    { name: 'Arjun Mehta', role: 'Head of Construction' }
                                ].map((p, idx) => (
                                    <div key={idx} className="p-6 border border-black rounded-none text-center">
                                        <div className="mx-auto w-24 h-24 rounded-none bg-gray-100 flex items-center justify-center text-xl font-semibold mb-4">{p.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
                                        <div className="font-semibold">{p.name}</div>
                                        <div className="text-sm text-gray-500">{p.role}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={itemVariants} className="text-center bg-black text-white p-12 rounded-none">
                            <h3 className="text-2xl font-bold mb-4">Ready to explore our projects?</h3>
                            <p className="mb-6 text-sm opacity-90">Speak to our sales team for a personalised consultation and site visits.</p>
                            <div className="flex items-center justify-center gap-4">
                                <Button size="lg" className="bg-white text-black px-6 py-3 font-bold hover:bg-gray-100">Contact Sales</Button>
                                <Button variant="outline" size="lg" className="px-6 py-3 border-white bg-black text-white/90">Schedule Visit</Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}