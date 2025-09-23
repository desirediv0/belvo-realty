"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Building, Target, Eye, Heart } from "lucide-react"
import HeroPage from "@/components/HeroPage"
import HeadText from "@/components/Head-text"

export default function AboutPage() {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    }
    return (
        <main>
            <HeroPage
                heading={<><span>ABOUT US</span></>}
                subtitle={<span>Discover the legacy and vision behind Belvo Realty, India&apos;s premier luxury real estate developer.</span>}
                breadcrumb={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}

            />

            {/* About Section */}
            <section className="py-16 bg-white text-black relative overflow-hidden">
                {/* Background geometric elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 opacity-3 transform rotate-45 translate-x-48 -translate-y-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 opacity-3 transform rotate-12 -translate-x-48 translate-y-48"></div>
                </div>

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-7xl mx-auto"
                    >
                        <HeadText
                            heading="ABOUT US"
                            subheadingfirstline="REDEFINING "
                            subheadingsecondline="LUXURY LIVING"
                            description="Belvo Realty stands at the forefront of premium real estate development, creating architectural masterpieces that combine world-class design with sustainable innovation across India&apos;s most coveted locations."
                        />

                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-16 mb-24">
                            {/* Left Content */}
                            <motion.div variants={itemVariants} className="space-y-12">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Our Story</h2>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                        Founded on the principles of excellence and innovation, Belvo Realty has emerged as a distinguished
                                        name in luxury real estate development. With over a decade of expertise in creating landmark projects,
                                        we specialize in premium residential and commercial developments that set new standards for quality and design.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Our portfolio spans across prime locations including Dwarka Expressway, Golf Course Extension Road,
                                        and other high-growth corridors, delivering investment-grade properties that appreciate in value while
                                        providing unmatched living experiences.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="text-center p-6 bg-black text-white">
                                        <Award className="w-8 h-8 mx-auto mb-4" />
                                        <div className="text-2xl font-bold mb-2">15+</div>
                                        <div className="text-sm uppercase tracking-wider opacity-80">Years Experience</div>
                                    </div>
                                    <div className="text-center p-6 bg-black text-white">
                                        <Building className="w-8 h-8 mx-auto mb-4" />
                                        <div className="text-2xl font-bold mb-2">25+</div>
                                        <div className="text-sm uppercase tracking-wider opacity-80">Projects Delivered</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Content */}
                            <motion.div variants={itemVariants} className="space-y-8">
                                <div className="bg-black text-white p-8">
                                    <Target className="w-12 h-12 mb-6" />
                                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                    <p className="leading-relaxed opacity-90">
                                        To craft enduring, elegant living spaces that seamlessly integrate world-class design,
                                        sustainable construction practices, and exceptional amenities — delivering an unmatched
                                        lifestyle proposition and superior investment returns for our discerning clientele.
                                    </p>
                                </div>

                                <div className="bg-gray-100 p-8">
                                    <Eye className="w-12 h-12 mb-6 text-black" />
                                    <h3 className="text-2xl font-bold mb-4 text-black">Our Vision</h3>
                                    <p className="leading-relaxed text-gray-700">
                                        To be recognized as India&apos;s premier luxury real estate developer, consistently delivering
                                        landmark projects that redefine urban living standards and create lasting value for communities,
                                        investors, and stakeholders alike.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Core Values */}
                        <motion.div variants={itemVariants} className="mb-20">
                            <h3 className="text-3xl font-bold mb-12 text-center text-black">Core Values</h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: <Award className="w-10 h-10" />,
                                        title: "Design Excellence",
                                        description: "Collaborating with world-renowned architects and designers to create timeless masterpieces that stand the test of time."
                                    },
                                    {
                                        icon: <Users className="w-10 h-10" />,
                                        title: "Quality Craftsmanship",
                                        description: "Employing premium materials, advanced construction techniques, and meticulous attention to detail in every project."
                                    },
                                    {
                                        icon: <Heart className="w-10 h-10" />,
                                        title: "Sustainable Practices",
                                        description: "Integrating eco-friendly technologies and green building practices to create environmentally responsible developments."
                                    }
                                ].map((value, index) => (
                                    <div key={index} className="bg-white border-2 border-black p-8 text-center group hover:bg-black hover:text-white transition-all duration-300">
                                        <div className="mb-6 flex justify-center text-black group-hover:text-white">
                                            {value.icon}
                                        </div>
                                        <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                                        <p className="leading-relaxed text-gray-600 group-hover:text-gray-200">
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA Section */}
                        <motion.div variants={itemVariants} className="text-center bg-black text-white p-12">
                            <h3 className="text-3xl font-bold mb-6">Ready to Discover Your Dream Property?</h3>
                            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                Join thousands of satisfied homeowners and investors who chose Belvo Realty for their premium real estate needs.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button size="lg" className="bg-white text-black px-8 py-4 font-bold hover:bg-gray-100">
                                    Contact Sales Team
                                    <ArrowRight className="ml-2" />
                                </Button>
                                <Button variant="outline" size="lg" className="px-8 py-4 border-white bg-black border-2 text-white hover:bg-white hover:text-black">
                                    Schedule Site Visit
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}