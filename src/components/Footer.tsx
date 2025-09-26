"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react"

interface FooterLink {
    label: string
    href: string
}

interface FooterSection {
    title: string
    links: FooterLink[]
}



const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
}



const Footer: React.FC = () => {
    const footerSections: FooterSection[] = [
        {
            title: "ABOUT US",
            links: [
                { label: "About The Company", href: "/about" },
                { label: "Belvo Foundation", href: "/foundation" },
                { label: "Belvo Core", href: "/core" },
                { label: "News & Events", href: "/news" },
                { label: "Careers", href: "/careers" },
            ],
        },
        {
            title: "PROJECTS",
            links: [
                { label: "Residential Projects", href: "/projects/residential" },
                { label: "Commercial Projects", href: "/projects/commercial" },
                { label: "Hospitality Projects", href: "/projects/hospitality" },
                { label: "Upcoming Projects", href: "/projects/upcoming" },
                { label: "Completed Projects", href: "/projects/completed" },
            ],
        },
        {
            title: "NEWS & EVENTS",
            links: [
                { label: "Awards & Accolades", href: "/awards" },
                { label: "News & Events", href: "/news" },
                { label: "Media & PR", href: "/media" },
                { label: "Press Releases", href: "/press" },
                { label: "Gallery", href: "/gallery" },
            ],
        },
        {
            title: "CONTACT US",
            links: [
                { label: "Get In Touch", href: "/contact" },
                { label: "Schedule Visit", href: "/schedule" },
                { label: "Customer Support", href: "/support" },
                { label: "Investor Relations", href: "/investors" },
                { label: "Partnership", href: "/partnership" },
            ],
        },
    ]

    const socialLinks = [
        { icon: Facebook, href: "https://facebook.com/belvorealty", label: "Facebook" },
        { icon: Instagram, href: "https://instagram.com/belvorealty", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com/company/belvorealty", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/belvorealty", label: "Twitter" },
        { icon: Youtube, href: "https://youtube.com/belvorealty", label: "YouTube" },
    ]

    return (
        <footer className="relative bg-black text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-gradient-to-br from-black via-black to-black" />
                <div className="absolute inset-0 bg-[url('/modern-architectural-glass-structure-geometric-pat.jpg')] bg-cover bg-center opacity-40" />
            </div>

            <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10"
            >


                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {footerSections.map((section) => (
                                <motion.div key={section.title} variants={itemVariants}>
                                    <h3 className="text-lg font-semibold mb-6 text-[#bf9b30] relative">
                                        {section.title}
                                        <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#bf9b30] to-black" />
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <a
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm leading-relaxed"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-black/50">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <h3 className="text-xl font-semibold mb-6 text-[#bf9b30]">Get In Touch</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm text-gray-400 leading-relaxed">
                                                    649, Satya The Hive, Sector 102, Gurugram, Haryana- 122505
                                                </p>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                                                <span className="text-sm text-gray-400">+91 9090 939193</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                                                <span className="text-sm text-gray-400"> hello@belvorealty.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-6 text-[#bf9b30]">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        {socialLinks.map((social) => (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20  flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300 group"
                                                aria-label={social.label}
                                            >
                                                <social.icon className="w-4 h-4 text-white group-hover:text-gray-400 transition-colors" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div variants={itemVariants} className="border-t border-black/50 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-2">
                                <p className="text-sm text-gray-400">
                                    Copyright © 2025 <span className="text-[#bf9b30]">Belvo Realty</span> All Rights Reserved
                                </p>
                            </div>
                            <div className="flex space-x-6 text-sm text-gray-400">
                                <a href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                                <a href="/terms" className="hover:text-white transition-colors">
                                    Terms & Conditions
                                </a>
                                <a href="/disclaimer" className="hover:text-white transition-colors">
                                    Disclaimer
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}

export default Footer
